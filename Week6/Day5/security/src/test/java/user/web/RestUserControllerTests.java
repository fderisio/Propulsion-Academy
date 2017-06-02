package user.web;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.CoreMatchers.hasItems;
import static org.hamcrest.CoreMatchers.is;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrint;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import user.domain.User;
import user.repository.UserRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.MOCK) // no es (webEnvironment = MOCK) porque es estatico, es ENUM
@AutoConfigureMockMvc(print = MockMvcPrint.SYSTEM_ERR) // ctrl+shift+o --> importar
@Transactional
public class RestUserControllerTests {

	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	UserRepository repo;
	
	@Test
	public void retrieveAllUsers() throws Exception {
		mockMvc.perform(get("/users").accept(APPLICATION_JSON))//
			.andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON))//
			.andExpect(status().isOk())//
			.andExpect(jsonPath("$[2]").exists())//
			.andExpect(jsonPath("$[?(@.lastName =~ /Smith/)].firstName", hasItems("John", "John")))//
			.andExpect(jsonPath("$[?(@.firstName =~ /J.+/)].firstName", hasItems("John", "Jane", "Josh")));
	}
	
//	@GetMapping("/{id}")
//	public User retrieveUser(@PathVariable Long id) {
//		return userService.findById(id);
//	}
	
	@Test
	public void retrieveUser() throws Exception {
		mockMvc.perform(get("/users/{id}", 1).accept(APPLICATION_JSON))// = get("URL") = get("/users/1") 
		.andExpect(content().contentTypeCompatibleWith(APPLICATION_JSON))//
		.andExpect(status().isOk())//
		.andExpect(jsonPath("$.id", is(1)))//
		.andExpect(jsonPath("$.firstName", is("John")))//
		.andExpect(jsonPath("$.lastName", is("Smith")))//
		.andExpect(jsonPath("$.age", is(42)))
		.andExpect(jsonPath("$[?(@.lastName =~ /Smith/)].firstName",
				hasItems("John")));
	}

	@Test
	public void retrieveNonexistentUser() throws Exception {
		mockMvc.perform(get("/users/{id}", 12345).accept(APPLICATION_JSON))//
				.andExpect(status().isNotFound());
	}
	
//	@PostMapping
//	public HttpEntity<Void> createUser(@RequestBody User user) {
//		User savedUser = userService.save(user);
//
//		UriComponents uriComponents = fromMethodCall(
//			on(getClass()).retrieveUser(savedUser.getId())).build();
//
//		return ResponseEntity.created(uriComponents.encode().toUri()).build();
//	}
	
	@Test
	@WithMockUser (roles = "USER") // porque lo pide el service
	public void createUser() throws Exception{
		String json = "{\"first"+ "Name\": \"Juancito\", \"lastName\": \"Perez\", \"age\": 37}";
		mockMvc.perform(post("/users/").contentType(APPLICATION_JSON)//
				.content(json))//
				.andExpect(status().isCreated());
	}
	
//	@PutMapping("/{id}")
//	@ResponseStatus(code=NO_CONTENT) // = @ResponseStatus(NO_CONTENT)
//	public void updateUser(@RequestBody User user, @PathVariable Long id) {
//		userService.save(user);
//	}
	
	@Test
	@WithMockUser (roles = "USER")
	public void updateUser() throws Exception {
		String json = "{\"id\": 1, \"firstName\": \"John\", \"lastName\": \"Smith\", \"age\": 32}";
		
		mockMvc.perform(put("/users/{id}", 1).contentType(APPLICATION_JSON).content(json))//
			.andExpect(status().isNoContent());
				
		User updatedUser = repo.findOne(1L);
		assertThat(updatedUser.getAge()).isEqualTo(32); // was 42, now must be 32
	}

//	@DeleteMapping("/{id}")
//	@ResponseStatus(NO_CONTENT)
//	public void deleteUser(@PathVariable Long id) {
//		userService.deleteById(id);
//	}
	
	@Test
	@WithMockUser (roles = "ADMIN")
	public void deleteUser() throws Exception {
		mockMvc.perform(delete("/users/{id}", 3))//
				.andExpect(status().isNoContent());

		User deletedUser = repo.findOne(3L); // --> deletes user id: 3 (3L) L = Long
		assertThat(deletedUser).isNull();
	}
	
}
