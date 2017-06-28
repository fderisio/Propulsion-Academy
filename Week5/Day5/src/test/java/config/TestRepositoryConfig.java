package config;

import static org.mockito.Mockito.mock;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import repository.SongRepository;

@Configuration
@Profile("dev")
public class TestRepositoryConfig {

	@Bean
	public SongRepository songRepository() {
		return mock(SongRepository.class);
	}

}