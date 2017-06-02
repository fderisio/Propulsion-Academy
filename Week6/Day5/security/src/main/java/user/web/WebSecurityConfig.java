package user.web;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/", "/favicon.ico", "/css/**", "/images/**");
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				//.antMatchers("/users/**", "/h2-console/**").hasRole("ADMIN") // makes all users ADMIN
				.antMatchers(GET, "/**").permitAll()
				.antMatchers(POST, "/**").permitAll()
				.antMatchers(PUT, "/**").hasAnyRole("ADMIN", "USER") // admin or user
				.and()
			.csrf().disable()
			.httpBasic();
	}
	
}
