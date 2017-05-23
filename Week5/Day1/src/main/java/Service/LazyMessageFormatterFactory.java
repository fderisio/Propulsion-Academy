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

public class LazyMessageFormatterFactory {

	// Lazily initialized singleton
	private static MessageFormatter CONSOLE_FORMATTER;

	private static final Object monitor = new Object();

	public static MessageFormatter createConsoleFormatter() {
		// Synchronize access for thread safety.
		synchronized (monitor) {
			// Lazily create the instance?
			if (CONSOLE_FORMATTER == null) {
				CONSOLE_FORMATTER = new ConsoleMessageFormatter();
			}
			// always returns the same Singleton instance.
			return CONSOLE_FORMATTER;
		}
	}
}
