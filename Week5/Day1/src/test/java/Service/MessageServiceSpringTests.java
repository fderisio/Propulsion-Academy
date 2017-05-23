package Service;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import config.MessageServiceConfig;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = MessageServiceConfig.class)
public class MessageServiceSpringTests {
	
	// selects the bean
	@Autowired
	MessageService messageSrvice;
	
	// to access to the context
	@Autowired
	ApplicationContext applicationContext;
	
	@Test
	public void test() {
		assertThat(MessageService.generateMessage()). isEqualTo("bar");
	}

}
