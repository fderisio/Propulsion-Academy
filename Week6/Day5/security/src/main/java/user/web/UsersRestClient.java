package user.web;

import java.net.URI;

import org.springframework.web.client.RestTemplate;

import user.domain.User;

public class UsersRestClient {

	private final RestTemplate restTemplate = new RestTemplate();
	private String url;
	 
	public void setUrl(String url) {
	   this.url = url;
	}
	
	public URI createUser(String firstName, String lastName) {
		User user = new User();
		user.setFirstName(firstName);
		user.setLastName(lastName);

		return restTemplate.postForLocation(url, user);
	}

	public void deleteUserByFirstAndLastName(URI user) {
	    restTemplate.delete(user);
	  }

	public void deleteUserById(Long id) {
	    String deletionUrl = url + "/{id}";
	    restTemplate.delete(deletionUrl, id);
	}
	
	public void retrieveUser(URI lastName) {
	    User user = restTemplate.getForObject(lastName, User.class);
	    System.out.println(user);
	}

	public void retrieveAllUsers() {
	    User[] users = restTemplate.getForObject(url, User[].class);
	    for (User user : users) {
	      System.out.println(user);
	    }
	}
	
	public static void main(String[] args) {
	    UsersRestClient client = new UsersRestClient();
	    client.setUrl("http://localhost:8080/spring/rest/events");

	    client.retrieveAllUsers();
	    URI user = client.createUser("Rose", "Dawson");
	    client.retrieveUser(user);

	    client.deleteUserById(1L);
	    client.deleteUserByFirstAndLastName(user);
	    client.retrieveAllUsers();
	}
}
