package config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@Profile("dev")
public class DataBaseConfig {
	
	@Bean
	public DataSource dataSource() {
	  String url = "jdbc:h2:tcp://localhost/~/h2_pa";
	  return new DriverManagerDataSource(url);
	}
	
	@Bean
	public JdbcTemplate jdbcTemplate() {
	    return new JdbcTemplate(dataSource());
	}
}
