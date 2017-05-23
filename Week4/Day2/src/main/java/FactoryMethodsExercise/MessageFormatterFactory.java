package FactoryMethodsExercise;

public class MessageFormatterFactory {
	
	//Singleton
	//private static final String EXCLAMATION = "!"; // en mayusculas es variable constante
	//public static final MessageFormatter INSTANCE = ConsoleMessageFormatter.INSTANCE;
	
	// SINGLETON
	private static final MessageFormatter SINGLETON_CONSOLEMESSAGE = new ConsoleMessageFormatter();
	private static final MessageFormatter SINGLETON_HTMLMESSAGE = new HtmlMessageFormatter();
	private static final MessageFormatter SINGLETON_DEFAULTMESSAGE = new DefaultMessageFormatter();
	
	public static MessageFormatter createConsoleFormatter() {
		// returns always a new instance
		// return new ConsoleMessageFormatter();
		// return only ONE and always the SAME instance
		 return SINGLETON_CONSOLEMESSAGE;
	}
	
	public static MessageFormatter createHtmlFormatter() {
		//return new HtmlMessageFormatter();
		return SINGLETON_HTMLMESSAGE;
	}
	
	public static MessageFormatter createDefaultFormatter() {
		return SINGLETON_DEFAULTMESSAGE;
	}
	
	static class DefaultMessageFormatter implements MessageFormatter { // sin el public ya es private

		@Override
		public String format(String str) {
			return str + "!";
		} 

	}

	
//	// Lazily initialized singleton
//		private static MessageFormatter CONSOLE_FORMATTER;
//
//		private static final Object monitor = new Object();
//
//		public static MessageFormatter createConsoleFormatter() {
//			synchronized (monitor) {
//				if (CONSOLE_FORMATTER == null) {
//					CONSOLE_FORMATTER = new ConsoleMessageFormatter();
//				}
//				// always returns the same Singleton instance.
//				return CONSOLE_FORMATTER;
//			}
//		}
}
