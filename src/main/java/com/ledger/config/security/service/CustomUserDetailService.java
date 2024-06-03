package com.ledger.config.security.service;

import com.ledger.config.vo.UserVO;
import com.ledger.main.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;

/*
    UserDetailsService를 구현했음
 */
@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserVO user = userRepository.findByEmail(username);
        /*
            UserDetails를 상속받은 UserVo를 Return하면 됨
            UserDetailsService를 implements받은 CustomUserDetailServiceimpl의
            loadUserByUsername 에서 사용자를 조회해서 리턴하면 됨.
            Test
         */
        if(user == null){
            throw new UsernameNotFoundException(username);
        }

        System.out.println("==============");
        System.out.println(user.getEmail());
        System.out.println(user.getPassword());
        System.out.println("==============");
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        return User.builder()
                .username(user.getEmail())
                .password(encoder.encode(user.getPassword()))
                .roles("USER")
                .build();
    }

}
