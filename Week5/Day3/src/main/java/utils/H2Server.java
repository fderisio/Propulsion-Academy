package utils;

import org.h2.tools.Server;

public class H2Server {

	public static void main(String[] args) throws Exception {
		String[] h2Arguments = new String[] { "-tcp", "-tcpAllowOthers" };
		Server server = Server.createTcpServer(h2Arguments).start();

		System.out.println("Driver: " + org.h2.Driver.class.getName());
		System.out.println("URL:    " + server.getURL());

		// JDBC driver class: org.h2.Driver
		// Database URL: jdbc:h2:tcp://localhost/~/h2_pa

		System.out.println();
		System.out.println("Press enter to stop the H2 database server...");
		System.in.read();

		server.stop();
	}

}