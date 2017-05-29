package config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import repository.SongRepository;

// 4) creates beans from the desired package
@Configuration
@ComponentScan(basePackageClasses = SongRepository.class)
public class RepositoryConfig {

}
