package FactoryMethodsExercise;

class ConsoleMessageFormatter implements MessageFormatter { // sin el public ya es private

	@Override
	public String format(String str) {
		return str + "!";
	} 

}
