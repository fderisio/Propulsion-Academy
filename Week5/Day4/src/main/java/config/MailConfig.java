package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

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
	
	@Bean // configures Spring´s JavaMailSender
	public JavaMailSender mailSender(){
		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
		javaMailSender.setHost(smtpHost());
		javaMailSender.setPort(smtpPort());
		return javaMailSender;
	}
}
