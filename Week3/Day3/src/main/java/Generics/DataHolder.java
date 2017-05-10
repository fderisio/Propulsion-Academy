package Generics;

/**
 * @param <T> the type of data stored in this {@code DataHolder}
 */

public class DataHolder<T> {

	private final T data;

	public DataHolder(T data) {
		this.data = data;
	}

	public T getData() {
		return this.data;
	}

}
