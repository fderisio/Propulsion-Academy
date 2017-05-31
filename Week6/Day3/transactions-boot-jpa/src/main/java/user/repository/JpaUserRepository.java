package user.repository;

//import java.sql.ResultSet;
//import java.sql.SQLException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import user.domain.User;

@Repository
public class JpaUserRepository implements UserRepository {

	private EntityManager entityManager;
	
	@PersistenceContext // instead of autowired
    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
	
//	private final JdbcTemplate jdbcTemplate;
//
//	@Autowired
//	public JpaUserRepository(JdbcTemplate jdbcTemplate) {
//		this.jdbcTemplate = jdbcTemplate;
//	}

	@Override
	public long count() {
//		return jdbcTemplate.queryForObject("select count(*) from users", Long.class);
		String query = "select count(*) from User";
		long count = entityManager
		  .createQuery(query, Long.class)
		  .getSingleResult();
		return count;
	}

	@Override
	public void save(User user) {
//		String sql = "insert into users(first_name, last_name, age) values(?,?,?)";
//		jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(), user.getAge());
		entityManager.persist(user);
	}

	@Override
	public List<User> findAll() {
		//return jdbcTemplate.query("select * from users", userMapper);
		String query = "from User";
		return this.entityManager
			.createQuery(query, User.class)
			.getResultList();
	}

	@Override
	public User findById(Long id) {
		String query = "from User u where u.id = :id";
		return this.entityManager
	            .createQuery(query, User.class)
	            .setParameter("id", id)
	            .getSingleResult();
	}

	@Override
	public User findByFirstNameAndLastName(String firstName, String lastName) {
//		String sql = "select * from users where first_name=? and last_name=?";
//		return jdbcTemplate.queryForObject(sql, userMapper, firstName, lastName);
		String query = "from User u where u.firstName = :first_name and u.lastName = :last_name";
		return this.entityManager
	            .createQuery(query, User.class)
	            .setParameter("first_name", firstName)
	            .setParameter("last_name", lastName)
	            .getSingleResult();
	}

	@Override
	public void deleteAll() {
//		jdbcTemplate.update("delete from users");
		String query = "delete from User";
		entityManager.createQuery(query)
		  .executeUpdate();
	}

	@Override
	public void deleteById(Long id) {
//		jdbcTemplate.update("delete from users where id=?", id);
		String query = "delete from User u where u.id = :id";
		entityManager.createQuery(query)
		  .setParameter("id", id)
		  .executeUpdate();
	}

	@Override
	public User findFirstByLastName(String lastName) {
		String query = "from User u where u.lastName = :last_name order by u.firstName";
				return entityManager.createQuery(query, User.class)
				  .setParameter("last_name", lastName)
				  .setMaxResults(1)
				  .getSingleResult();
	}

	@Override
	public List<User> findFirst10ByLastName(String lastName) {
		String query = "from User u where u.lastName = :last_name";
		return entityManager.createQuery(query, User.class)
		  .setParameter("last_name", lastName)
		  .setMaxResults(10)
		  .getResultList();
	}

}
