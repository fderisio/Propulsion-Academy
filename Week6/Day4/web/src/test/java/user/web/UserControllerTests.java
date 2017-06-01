package user.web;

import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrint;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.MOCK) // no es (webEnvironment = MOCK) porque es estatico, es ENUM
@AutoConfigureMockMvc(print = MockMvcPrint.SYSTEM_ERR) // ctrl+shift+o --> importar
@Transactional
public class UserControllerTests {

	@Autowired
	MockMvc mockMvc;
	
	@Test
	public void listUsers() throws Exception {
		mockMvc.perform(get("/"))
			.andExpect(view().name("user/list"))
			.andExpect(model().attribute("users", hasSize(greaterThan(2))));
	}

}
