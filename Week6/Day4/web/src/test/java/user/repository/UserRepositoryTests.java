/*
 * Copyright 2016-2017 the original author or authors.
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

package user.repository;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.jdbc.JdbcTestUtils;
import org.springframework.transaction.annotation.Transactional;

import user.domain.User;

/**
 * Integration tests for the {@link UserRepository} implementation.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.NONE)
@Transactional
@Sql(statements = "delete from users")
@Sql(statements = "insert into users(first_name, last_name, age) values('John', 'Smith', 42)")
public class UserRepositoryTests {

	@Autowired
	UserRepository repository;

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Test
	public void count() {
		assertThat(repository.count()).isEqualTo(1);
	}

	@Test
	public void save() {
		saveJaneDoe();
		assertNumUsers(2);
	}

	@Test
	public void findById() {
		User user = repository.findByFirstNameAndLastName("John", "Smith");
		user = repository.findById(user.getId());
		assertThat(user.getFirstName()).isEqualTo("John");
	}

	@Test
	public void findByFirstNameAndLastName() {
		User user = repository.findByFirstNameAndLastName("John", "Smith");
		assertThat(user.getFirstName()).isEqualTo("John");
		assertThat(user.getLastName()).isEqualTo("Smith");
	}

	@Test
	public void findAll() {
		saveJaneDoe();
		assertThat(repository.findAll()).hasSize(2);
	}

	@Test
	public void deleteById() {
		assertNumUsers(1);
		User user = repository.findByFirstNameAndLastName("John", "Smith");
		repository.delete(user.getId());
		repository.flush();
		assertNumUsers(0);
	}

	private void saveJaneDoe() {
		repository.save(new User("Jane", "Doe", 38));
	}

	private void assertNumUsers(int expected) {
		assertThat(JdbcTestUtils.countRowsInTable(jdbcTemplate, "users")).isEqualTo(expected);
	}

}
