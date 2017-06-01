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

package user.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@AllArgsConstructor
@EqualsAndHashCode(exclude = "id")
@Entity
@Table(name="users")
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name="first_name", nullable= false, length=50)
	private String firstName;
	
	@Column(name="last_name", nullable= false, length=50)
	private String lastName;
	
	@Column(nullable= false)
	private Integer age;

	@OneToMany(fetch=FetchType.EAGER, mappedBy="user", cascade=CascadeType.ALL)
	private List<Address> addresses = new ArrayList<>();
	
	public User(){
	}
	
	public User(String firstName, String lastName, Integer age) {
		this(null, firstName, lastName, age);
	}

	public User(Long id, String firstName, String lastName, Integer age) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	
	public void addAddress(Address address) {
		getAddresses().add(address);
		address.setUser(this);
	}
}
