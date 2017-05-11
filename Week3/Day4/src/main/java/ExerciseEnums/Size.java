package ExerciseEnums;

public enum Size {
	S, M, L, XL, XXL;
	
	public double getSurchargePercentage(){
		switch(this) {
		case S:
		case M:
		case L:
			return 1;
		case XL:
			return 1.05;
		case XXL:
			return 1.1;
		default:
			System.out.println("Invalid size");
			return -1;
		}
	}
}
