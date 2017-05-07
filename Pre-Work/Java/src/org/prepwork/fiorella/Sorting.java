package org.prepwork.fiorella;

import java.util.*;

public class Sorting {

  public static Double[] sortItOut(Double[] array) {
	// lists the elements
	for (double number : array) {
		   System.out.println("Number = " + number);
	}
    //for (int i = 0; i <= array.length; i++) {
    	//if (array(i) % 1) {
    		//Arrays.sort(array); // sorting array
    	//}
    //}
    //array = arrayOdd + arrayEven;
    return array;
  }
  
  public static void main(String[] args) {
	System.out.println(Arrays.toString(sortItOut(new Double[] {1d,2d,3d,4d,5d,6d,7d,8d,9d})));
	System.out.println(Arrays.toString(sortItOut(new Double[] {26.66,24.01,52.00,2.10,44.15,1.02,11.15})));
  }
  
}