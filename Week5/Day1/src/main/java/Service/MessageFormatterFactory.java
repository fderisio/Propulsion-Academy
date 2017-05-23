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

public class MessageFormatterFactory {

	// Singletons: only one instance in the application.
	private static final MessageFormatter CONSOLE_FORMATTER = new ConsoleMessageFormatter();
	private static final MessageFormatter HTML_FORMATTER = new HtmlMessageFormatter();

	// private static final MessageFormatter DEFAULT_FORMATTER = new DefaultMessageFormatter();
	private static final MessageFormatter DEFAULT_FORMATTER = new MessageFormatter() {

		@Override
		public String format(String message) {
			return message + ".";
		}
	};

	public static MessageFormatter createDefaultFormatter() {
		//		return new MessageFormatter() {
		//			@Override
		//			public String format(String message) {
		//				return message + ".";
		//			}
		//		};

		// always returns the same Singleton instance.
		return DEFAULT_FORMATTER;
	}

	public static MessageFormatter createConsoleFormatter() {
		// always returns a new instance
		// return new ConsoleMessageFormatter();

		// always returns the same Singleton instance.
		return CONSOLE_FORMATTER;
	}

	public static MessageFormatter createHtmlFormatter() {
		// always returns a new instance
		// return new HtmlMessageFormatter();

		// always returns the same Singleton instance.
		return HTML_FORMATTER;
	}

	//	private static class DefaultMessageFormatter implements MessageFormatter {
	//		@Override
	//		public String format(String message) {
	//			return message + ".";
	//		}
	//	}

}
