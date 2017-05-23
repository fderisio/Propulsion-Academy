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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // @Service("messageServiceBean") --> ("explicit bean name")
public class MessageService {

	private final MessageFormatter formatter;

	public MessageService(MessageFormatter formatter) {
		this.formatter = formatter;
	}
	
	@Autowired
	public MessageService (List<MessageFormatter> messageFormatters){
		this(new CompositeMessageFormatter(messageFormatters));
	}
	
	public String generateMessage() {
		return formatter.format("Hello, World");
	}

	// @Autowired (creates a constructor)
	// @Qualifier (chooses which bean to use)
	/*public MessageService(@Qualifier("Hello") MessageFormatter formatter) {
		this.formatter = formatter;
	}*/
	// if autowired = expects a parameter that it is called like the bean, it will be found without using the qualifier
}
