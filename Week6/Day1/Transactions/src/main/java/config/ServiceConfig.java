package config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import service.BookService;

@Configuration
@ComponentScan(basePackageClasses = BookService.class) // scanning for the service package
public class ServiceConfig {

}
