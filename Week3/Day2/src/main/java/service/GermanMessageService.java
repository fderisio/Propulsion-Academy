package service;

//public class GermanMessageService implements MessageService {
//
//	@Override
//	public String generateMessage(String name) {
//		return "Hallo, " + name;
//	}
//
//}


//With abstract message
public class GermanMessageService extends AbstractMessageService {

	@Override
	public String getHelloText() {
		return "Hallo" ;
	}

}