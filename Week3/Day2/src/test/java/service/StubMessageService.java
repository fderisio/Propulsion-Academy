package service;

public class StubMessageService implements MessageService {

	@Override
	public String generateMessage(String name) {
		return "Hey!";
	}

}