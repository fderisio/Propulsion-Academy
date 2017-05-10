package service;

public class GreetingClient {
	
	private final MessageService messageService;
	
	public GreetingClient (MessageService messageService) {
		this.messageService = messageService;
	}
	
	public String greetUser (String name) {
		String msg = this.messageService.generateMessage(name);
		return msg.toUpperCase();
	}
	
	
}
