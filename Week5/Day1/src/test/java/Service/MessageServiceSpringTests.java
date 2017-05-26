package Service;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import config.MessageServiceConfig;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = MessageServiceConfig.class)
@ActiveProfiles("dev")

public class MessageServiceSpringTests {
	
	// selects the bean
	@Autowired
	MessageService messageService;
	
	// access (injects) the context
	@Autowired
	ApplicationContext applicationContext;
	
	// selects bean that has only "@Component"
	@Autowired
	HtmlMessageFormatter htmlFormatter;
	
	@Test
	public void MessageServiceTest() {
		//test messageService
		assertThat(messageService.generateMessage()).isEqualTo("<strong>HELLO, WORLD</strong>!");
		// test context
		MessageService messageService1 = applicationContext.getBean(MessageService.class);
		assertThat(messageService1.generateMessage()).isEqualTo("<strong>HELLO, WORLD</strong>!");
	}
	
//	@Test
//	public void ConsoleFormatterTest() {
//		assertThat(messageService.generateMessage()).isEqualTo("<strong>HELLO, WORLD</strong>!");
//	}	
	
	@Test
	public void HtmlFormatterTest() {
		assertThat(htmlFormatter.format("hola")).isEqualTo("<strong>hola</strong>");
	}	
	

}
