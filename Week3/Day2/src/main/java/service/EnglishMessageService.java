package service;

//public class EnglishMessageService implements MessageService {
//
//	@Override
//	public String generateMessage(String name) {
//		return "Hello, " + name;
//	}
//
//}


// With abstract message
public class EnglishMessageService extends AbstractMessageService {

	@Override
	public String getHelloText() {
		return "Hello" ;
	}

}