package ExceptionHandlingExercise;

import java.io.IOException;

import org.assertj.core.api.ThrowableAssert.ThrowingCallable;
import org.mockito.internal.stubbing.answers.ThrowsException;

public class ExceptionHandlingDemo {
	
	// main
	public static void main(String[] args) {
	
		checkedException();
	
	}
	
	public static void checkedException() {
		try {
			boom();
		}
		catch (Exception ex) {
			System.err.println(ex);
			ex.printStackTrace();
		}
		System.out.println("Print after the boom!");
	}
	
	// metodos
	public static void boom() throws Exception {
		throw new Exception("Boom!");
	}
	
	public static void throwIOException() throws IOException {
		throw new IOException("File not found");
	}
	
	public static void throwIllegalArgumentException() {
		throw new IllegalArgumentException("Only positive values are permitted");
	}
	
	public static void throwThrowable() throws Throwable {
		throw new Throwable();
	}
	
	public static void throwAssertionError() {
		throw new AssertionError();
	}
	
	
}
