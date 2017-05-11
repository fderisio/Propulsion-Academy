package Day4;

public enum CssColor {
	
	RED("#FF0000"),
	GREEN("#00FF00"),
	BLUE("#0000FF");
	
	private String hexidecimalValue;

	private CssColor(String hexidecimalValue) {
		this.hexidecimalValue = hexidecimalValue;
	}

	public String getHexidecimalValue() {
		return hexidecimalValue;
	}
	
//	private int convertToX() {
//		switch (this) {
//		case BLUE:
//			
//		case RED:
//		 
//		case GREEN:
//		}
//	}
}
