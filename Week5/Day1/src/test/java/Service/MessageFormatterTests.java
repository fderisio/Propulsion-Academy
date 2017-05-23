package Service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class MessageFormatterTests {

	@Test
	public void compositeFormatter() {
		// @formatter:off
		List<MessageFormatter> formatters = Arrays.asList(
			new TrimmingMessageFormatter(),
			new UpperCaseMessageFormatter(),
			new HtmlMessageFormatter()
		);
		// @formatter:on

		MessageFormatter formatter = new CompositeMessageFormatter(formatters);

		assertThat(formatter.format("  Test  ")).isEqualTo("<strong>TEST</strong>");
	}
	
	@Test
	public void consoleFormatter() {
		MessageFormatter formatter = new ConsoleMessageFormatter();
		assertThat(formatter.format("Test")).isEqualTo("Test!");
	}

	@Test
	public void htmlFormatter() {
		MessageFormatter formatter = new HtmlMessageFormatter();
		assertThat(formatter.format("Test")).isEqualTo("<strong>Test</strong>");
	}

	@Test
	public void upperCaseFormatter() {
		MessageFormatter formatter = new UpperCaseMessageFormatter();
		assertThat(formatter.format("Test")).isEqualTo("TEST");
	}

	@Test
	public void trimmingFormatter() {
		MessageFormatter formatter = new TrimmingMessageFormatter();
		assertThat(formatter.format("  Test  ")).isEqualTo("Test");
	}

}
