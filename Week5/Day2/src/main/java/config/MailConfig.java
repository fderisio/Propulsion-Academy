package config;

import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
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
	
//	@Bean
//	@Profile("prod")
//	JavaMailSender javaMailSender() {
//		JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
//		
//		Properties prop = javaMailSender.getJavaMailProperties();
//		prop.put("mail.transport.protocol", "smtp");
//		prop.put("mail.smtp.auth", "true");
//		prop.put("mail.smtp.starttls.enable", "true");
//		prop.put("mail.debug", "true");
//		
//		javaMailSender.setHost("smtp.gmail.com");
//		javaMailSender.setPort(587);
//		//Set gmail email id
//		javaMailSender.setUsername("yourEMail@gmail.com");
//		//Set gmail email password
//		javaMailSender.setPassword(password);
//		javaMailSender.setJavaMailProperties(prop);
//		return javaMailSender;
//	}
}
