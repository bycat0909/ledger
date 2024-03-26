package com.ledger.config.security;





import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

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
    //  @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    //@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
            //.httpBasic().disable()
            .csrf(AbstractHttpConfigurer::disable)
            //.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .authorizeHttpRequests((authorize) -> authorize
                    .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults())
            .formLogin((formLogin ->
                    formLogin
                        /*
                        .loginPage("") 로그인 페이지 등록
                        .permitAll() 로그인 페이지는 전체 통과
                         */
                        .usernameParameter("username")
                        .passwordParameter("password")
                        .defaultSuccessUrl("/", true)
                    )
            )
            .logout((logout)->logout.permitAll());
        return http.build();
    }

    public UserDetailsService userDetailsService(){
        /*
            https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html 읽고 시큐리티 분석중..
            https://catsbi.oopy.io/c0a4f395-24b2-44e5-8eeb-275d19e2a536
         */
        UserDetails users = User.withDefaultPasswordEncoder()
                .username("username")
                .password("password")
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(users);
    }
}


