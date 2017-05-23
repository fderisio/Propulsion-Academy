package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MailConfig {

	@Bean
	public String smtpHost(){
		return "localhost";
	}
	
	@Bean
	public int smtpPort(){
		return 25;
	}
	
	@Bean
	public JavaMailSender mailSender(){
		JavaMailSenderImpl javaMailSender =
			    new JavaMailSenderImpl();
			javaMailSender.setHost(smtpHost());
			javaMailSender.setPort(smtpPort());
			return javaMailSender;
	}
}
