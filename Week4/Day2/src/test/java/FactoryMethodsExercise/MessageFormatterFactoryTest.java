package FactoryMethodsExercise;

import static org.junit.Assert.*;

import org.junit.Test;

public class MessageFormatterFactoryTest {
	
	MessageFormatter message1 = MessageFormatterFactory.createConsoleFormatter();
	MessageFormatter message2 = MessageFormatterFactory.createConsoleFormatter();
	
	@Test
	public void createConsoleFormatterTest() {
		assertSame(message1, message2); // objeto message1 es el mismo que message2
		String str1 = message1.format("Hola");
		String str2 = message2.format("Hola");
		assertSame(str1, str2);
	}

	MessageFormatter message3 = MessageFormatterFactory.createHtmlFormatter();
	MessageFormatter message4 = MessageFormatterFactory.createHtmlFormatter();
	
	@Test
	public void createHtmlFormatterTest() {
		assertSame(message1, message2); // objeto message1 es el mismo que message2
		String str1 = message1.format("Hola");
		String str2 = message2.format("Hola");
		assertSame(str1, str2);
	}
}

