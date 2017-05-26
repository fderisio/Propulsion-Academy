package Service;
import static org.assertj.core.api.Assertions.assertThat;

import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.ContextConfiguration;
import org.subethamail.wiser.Wiser;

import config.MessageServiceConfig;
import config.TestMailConfig;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = { MessageServiceConfig.class, TestMailConfig.class })
@ActiveProfiles("dev")
public class MessageServiceSpringTests {
	
	// selects the bean
	@Autowired
	MessageService messageService;
	
	@Autowired
	Wiser wiser;
	
	// access (injects) the context
	@Autowired
	String smtpHost;
	
	@Autowired
	int smtpPort;

	// deletes all e-mails on the list
	@Before
	public void deleteTestEmailMessages() {
		wiser.getMessages().clear();
	}

	public void compositeFormatterTest() {
		
	}
	
	@Test
	public void MailConfigTests() throws Exception {
		
		assertThat(wiser.getMessages()).hasSize(0);

		MimeMessage mimeMessage = wiser.getMessages().get(0).getMimeMessage();
		String from = mimeMessage.getFrom()[0].toString();
		String to = mimeMessage.getRecipients(RecipientType.TO)[0].toString();
		String subject = mimeMessage.getSubject();
		String body = mimeMessage.getContent().toString().trim();

		assertThat(from).isEqualTo("system@example.com");
		assertThat(to).isEqualTo("test@example.com");
		assertThat(subject).isEqualTo("Generated Message");
		assertThat(body).isEqualTo("Hello, World");
	}
}
