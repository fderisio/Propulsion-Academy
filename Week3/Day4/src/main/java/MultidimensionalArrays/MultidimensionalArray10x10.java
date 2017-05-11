package MultidimensionalArrays;

import java.util.Arrays;

public class MultidimensionalArray10x10 {

	public static void main(String[] args) {

		int[][] grid = new int[10][10];
		int a = (grid.length);// 10
		int b = (grid[0].length); // 10

		for (int i = 0; i < a; i++) {
			for (int j = 0; j < b; j++) {
				int x = (i + 1) * (j + 1);
				grid[i][j] = x;
				//System.out.print(grid[i][j] + ";");
			}
			//System.out.println();
		}
		print2dArray(grid);
		//System.out.println(Arrays.deepToString(grid)); // all in one array
	}

	
	@SuppressWarnings("unused")
	private static void print2dArray(Object[][] array) {
		for (int i = 0; i < array.length; i++) {
			System.out.println(Arrays.toString(array[i]));
		}
	}

	private static void print2dArray(int[][] array) {
		for (int i = 0; i < array.length; i++) {
			System.out.println(Arrays.toString(array[i]));
		}
	}
}
