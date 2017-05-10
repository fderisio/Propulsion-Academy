package service;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Test;

public class MessageServiceTest {

	@Test
	public void englishIntegrationTest() {
		MessageService messageService = new EnglishMessageService();
		GreetingClient client = new GreetingClient(messageService);

		assertEquals("HELLO, YODA", client.greetUser("Yoda"));
	}

	@Test
	public void stubUnitTest() {
		MessageService messageService = new StubMessageService();
		GreetingClient client = new GreetingClient(messageService);

		assertEquals("HEY!", client.greetUser("Yoda"));
	}

	@Test
	public void mockUnitTest() {
		MessageService messageService = mock(MessageService.class);
		// when(messageService.generateMessage("Luke")).thenReturn("Foo!");
		when(messageService.generateMessage(anyString())).thenReturn("Foo!");

		GreetingClient client = new GreetingClient(messageService);

		assertEquals("FOO!", client.greetUser("doesn't matter"));

		// Optionally verify how mock was used.
		// verify(messageService).generateMessage("doesn't matter");
	}

}