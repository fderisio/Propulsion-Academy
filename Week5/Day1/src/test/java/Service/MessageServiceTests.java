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

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import config.MessageServiceConfig;
import Service.MessageService;

public class MessageServiceTests {
	
	@Test
	public void compositeFormatter() {
		
		// creates context for all beans
		@SuppressWarnings("resource")
		ApplicationContext context = new AnnotationConfigApplicationContext(MessageServiceConfig.class);
		
		// getting by type
		MessageService messageService1 = context.getBean(MessageService.class);
		System.out.println(messageService1.generateMessage());

		assertThat(messageService1.generateMessage()).isEqualTo("<strong>HELLO, WORLD</strong>");
		
		
//		// @formatter:off
//				List<MessageFormatter> formatters = Arrays.asList(
//					new TrimmingMessageFormatter(),
//					new UpperCaseMessageFormatter(),
//					new HtmlMessageFormatter()
//				);
//				// @formatter:on
//		MessageFormatter formatter = new CompositeMessageFormatter(formatters);
//
//		MessageService service = new MessageService(formatter);

		
	}
	
	@Test
	public void consoleFormatter() {
		ConsoleMessageFormatter formatter = new ConsoleMessageFormatter();

		MessageService service = new MessageService(formatter);

		assertThat(service.generateMessage()).isEqualTo("Hello, World!");
	}

	@Test
	public void htmlFormatter() {
		MessageService service = new MessageService(new HtmlMessageFormatter());

		assertThat(service.generateMessage()).isEqualTo("<strong>Hello, World</strong>");
	}

	@Test
	public void markdownFormatter() {
		MessageFormatter formatter = new MarkdownMessageFormatter();

		MessageService service = new MessageService(formatter);

		assertThat(service.generateMessage()).isEqualTo("**Hello, World**");
	}	

}
