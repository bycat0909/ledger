package com.ledger.config.security;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

/*
    스프링 시큐리티 참고
    https://docs.spring.io/spring-security/reference/6.1-SNAPSHOT/servlet/authentication/passwords/index.html
    https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/builders/HttpSecurity.html#authorizeHttpRequests(org.springframework.security.config.Customizer)

    람다식 표현 이해
    https://coding-factory.tistory.com/265#google_vignette
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig{

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .authorizeHttpRequests((authorizeHttpRequests) ->
                authorizeHttpRequests
                    .requestMatchers("/**").hasRole("USER")
            )
            .formLogin(form -> form.loginPage("/login")
                .permitAll()
        );

        return http.build();
    }
}
