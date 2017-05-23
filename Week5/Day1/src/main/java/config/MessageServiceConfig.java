package config;

//import java.util.Arrays;
//import java.util.List;

//import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

//import Service.CompositeMessageFormatter;
//import Service.HtmlMessageFormatter;
//import Service.MessageFormatter;
//import Service.MessageService;
//import Service.TrimmingMessageFormatter;
//import Service.UpperCaseMessageFormatter;


// creates spring configuration class
@Configuration
@ComponentScan("Service") // Service Package
@Profile("dev")
public class MessageServiceConfig {
	
//	@Bean // the name of the bean if the one before the ()
//	public MessageService messageServiceBean() {
//		List<MessageFormatter> formatters = Arrays.asList(trimmingMessageBean(), upperCaseMessageBean(), htmlMessageBean());
//		CompositeMessageFormatter composite1 = new CompositeMessageFormatter(formatters);
//		return new MessageService(composite1);
//	}
//	
//	@Bean ("message")
//	@Profile("aProfileJustForThisBean")
//	public TrimmingMessageFormatter trimmingMessageBean() {
//		return new TrimmingMessageFormatter();
//	}
//	
//	@Bean ("message")
//	@Profile({"name1", "name2"})
//	public UpperCaseMessageFormatter upperCaseMessageBean() {
//		return new UpperCaseMessageFormatter();
//	}
//
//	@Bean 
//	public HtmlMessageFormatter htmlMessageBean() {
//		return new HtmlMessageFormatter();
//	}

}
