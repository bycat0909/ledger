package com.ledger.config.security;

import com.ledger.config.security.filter.JwtAuthenticationFilter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;

/*
    스프링 시큐리티 참고
    https://docs.spring.io/spring-security/reference/6.1-SNAPSHOT/servlet/authentication/passwords/index.html
    https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/builders/HttpSecurity.html#authorizeHttpRequests(org.springframework.security.config.Customizer)

    람다식 표현 이해
    https://coding-factory.tistory.com/265#google_vignette
 */
@Configuration
@EnableWebSecurity //스프링 시큐리티 필터체인 등록
public class WebSecurityConfig extends WebSecurityConfiguration {

    @Autowired
    private JwtAuthenticationFilter customFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class)
            .authorizeRequests()
            .anyRequest().authenticated();

        return http.build();
    }
}


