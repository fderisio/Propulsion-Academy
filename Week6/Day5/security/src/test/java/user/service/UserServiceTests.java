/*
 * Copyright 2010-2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package user.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.NONE;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import user.domain.User;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = NONE)
@Transactional
public class UserServiceTests {

	@Autowired
	UserService userService;

	@Test
	public void findAll() {
		assertThat(userService.findAll()).hasSize(5);
	}

	@Test
	@WithMockUser (roles = "USER")
	public void save() {
		userService.save(new User("Test", "User", 25));
		assertThat(userService.findAll()).hasSize(6);
	}

	@Test
	@WithMockUser (roles = "ADMIN")
	public void deleteById() {
		userService.deleteById(1L);
		assertThat(userService.findAll()).hasSize(4);
	}

}
