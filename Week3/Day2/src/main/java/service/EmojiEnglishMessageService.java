package service;

public class EmojiEnglishMessageService extends AbstractMessageService {
	
//	@Override
//	protected String getTemplate() {
//		return super.getTemplate() + "😱";
//	}

	@Override
	protected String getHelloText() {
		return super.getTemplate() + "😱";
	}

}
