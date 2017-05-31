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

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
//import org.springframework.stereotype.Repository;

import user.domain.User;

//@Repository (no longer needed using JPA)
public class JdbcUserRepository implements UserRepository {

	private final UserMapper userMapper = new UserMapper();

	private final JdbcTemplate jdbcTemplate;

	@Autowired
	public JdbcUserRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public long count() {
		return jdbcTemplate.queryForObject("select count(*) from users", Long.class);
	}

	@Override
	public void save(User user) {
		String sql = "insert into users(first_name, last_name, age) values(?,?,?)";
		jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(), user.getAge());
	}

	@Override
	public List<User> findAll() {
		return jdbcTemplate.query("select * from users", userMapper);
	}

	@Override
	public User findById(Long id) {
		String sql = "select * from users where id=?";
		return jdbcTemplate.queryForObject(sql, userMapper, id);
	}

	@Override
	public User findByFirstNameAndLastName(String firstName, String lastName) {
		String sql = "select * from users where first_name=? and last_name=?";
		return jdbcTemplate.queryForObject(sql, userMapper, firstName, lastName);
	}

	@Override
	public void deleteAll() {
		jdbcTemplate.update("delete from users");
	}

	@Override
	public void deleteById(Long id) {
		jdbcTemplate.update("delete from users where id=?", id);
	}

	private static class UserMapper implements RowMapper<User> {

		@Override
		public User mapRow(ResultSet rs, int rowNum) throws SQLException {
			return new User(rs.getLong("id"), rs.getString("first_name"), rs.getString("last_name"), rs.getInt("age"));
		}
	}

	@Override
	public User findFirstByLastName(String lastName) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findFirst10ByLastName(String lastName) {
		// TODO Auto-generated method stub
		return null;
	}

}
