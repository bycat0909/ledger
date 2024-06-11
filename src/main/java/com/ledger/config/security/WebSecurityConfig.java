package com.ledger.config.security;
import com.ledger.config.security.service.CustomSuccessHandler;
import com.ledger.config.security.service.CustomUserDetailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
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

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails userDetails = User.withDefaultPasswordEncoder()
                .username("user")
                .password(passwordEncoder().encode("password"))
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(userDetails);
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
            //.httpBasic().disable()
            .csrf(AbstractHttpConfigurer::disable)
            //.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .authorizeHttpRequests((authorize) -> authorize
                    .requestMatchers("/").permitAll()
                    .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults())
            .formLogin((formLogin ->
                    formLogin
                        /*
                        .loginPage("") 로그인 페이지 등록
                        .permitAll() 로그인 페이지는 전체 통과
                         */
                        //.loginPage("/login")
                        .successHandler(new CustomSuccessHandler())
                        .usernameParameter("username")
                        .passwordParameter("password")
                    )


            )
            .logout((logout)->logout.permitAll())
            .requestCache(requestCache -> requestCache.disable()); // requestCache 비활성화
        return http.build();
    }
   /*
        https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html 읽고 시큐리티 분석중..
        https://catsbi.oopy.io/c0a4f395-24b2-44e5-8eeb-275d19e2a536
        https://github.com/spring-projects/spring-security-samples/blob/main/servlet/spring-boot/java/authentication/username-password/user-details-service/custom-user/src/main/java/example/CustomUserRepositoryUserDetailsService.java
        - 아래 블로그 참조해서 UserDetailService 이해중...
        https://jaykaybaek.tistory.com/27
        https://velog.io/@pcs/%EC%8A%A4%ED%94%84%EB%A7%81-%EC%8B%9C%ED%81%90%EB%A6%AC%ED%8B%B0-%EC%A0%95%EB%A6%AC
        https://velog.io/@jkijki12/Spring-Security-%EC%95%84%EB%8A%94%EC%B2%99%ED%95%98%EA%B8%B0

        1.스프링 시큐리티는 요청을 Filter에서 잡아서 SecurityFilterChain으로 넘긴다
        2.이 FilterChain은 여러개가 될 수 있음
            CsrfFilter                              /   HttpSecurity#csrf
            UsernamePasswordAuthenticationFilter    /   HttpSecurity#formLogin
            BasicAuthenticationFilter               /   HttpSecurity#httpBasic
            AuthorizationFilter                     /   HttpSecurity#authorizeHttpRequests

        - 스프링 시큐리티는 내가 모듈을 구현해서 Return해서 기본으로 설정되어있는 클래스를 덮어 씌우는 느낌임
        - 먼저 내가 구현하려고 하는 인증방법이 어떤 것인지 구체화하고
        - 해당 필터를 커스텀해서 Return 하면 됨

     */
   @Bean
   public AuthenticationManager authenticationManager(CustomUserDetailService userDetailsService, PasswordEncoder passwordEncoder) {
       DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
       authenticationProvider.setUserDetailsService(userDetailsService);
       authenticationProvider.setPasswordEncoder(passwordEncoder);

       return new ProviderManager(authenticationProvider);
   }

}


