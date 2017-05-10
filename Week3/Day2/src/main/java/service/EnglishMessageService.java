package service;

public class EnglishMessageService implements MessageService {

	@Override
	public String generateMessage(String name) {
		return "Hello, " + name;
	}

}
