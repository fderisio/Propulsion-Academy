package service;

public abstract class AbstractMessageService implements MessageService {
	
	@Override
	public final String generateMessage(String name) {
		return String.format(getTemplate(),  getHelloText(), name);
	}
	
	// abstract method
	protected abstract String getHelloText(); // definida en las subclases
	
	protected String getTemplate() {
		return "%s, %s";
	}
}
