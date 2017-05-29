/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package Service;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Profile;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service // @Service("messageServiceBean") --> ("explicit bean name")
//@Profile("dev")
public class MessageService {

	private final MessageFormatter formatter;
	private final JavaMailSender javaMailSender;
	
	@Autowired
	public MessageService(List<MessageFormatter> formatters, JavaMailSender javaMailSender) {
		this.formatter = new CompositeMessageFormatter(formatters);
		this.javaMailSender = javaMailSender;
	}

	public String generateMessage() {
		String formattedMessage = formatter.format("Hello, World");
		sendNotificationEmail(formattedMessage);
		return formattedMessage;
	}
	
	public void sendNotificationEmail(String message){
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);
		try{
			helper.setFrom("system@example.com");
			helper.setTo("test@example.com");
			helper.setSubject("Test E-Mail");
			helper.setText(message);
			javaMailSender.send(mimeMessage);
		} catch (MessagingException ex) {
			ex.printStackTrace(System.err);
		}	
	}

}
