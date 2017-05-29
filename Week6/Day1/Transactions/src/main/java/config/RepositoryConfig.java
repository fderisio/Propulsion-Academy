package config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import repository.BookRepository;

@Configuration
@ComponentScan(basePackageClasses = BookRepository.class)
public class RepositoryConfig {

}
