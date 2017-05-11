package MultidimensionalArrays;

import java.util.Arrays;

public class MultidimensionalArray3x3 {
	
	public static void main(String[] args) {

		String[][] grid = new String[3][3];
		
		for (int i=0; i<3; i++){
			for (int j=0; j<3; j++) {
				int x = i + 1;
				int y = (j + 1);
				String value = "(" + x + ", " + y + ")";
				grid[i][j] = value;
			}
		}
		print2dArray(grid);
	}
	
	private static void print2dArray(Object[][] array) {
		for (int i = 0; i < array.length; i++) {
			System.out.println(Arrays.toString(array[i]));
		}
	}

	@SuppressWarnings("unused")
	private static void print2dArray(int[][] array) {
		for (int i = 0; i < array.length; i++) {
			System.out.println(Arrays.toString(array[i]));
		}
	}
}
