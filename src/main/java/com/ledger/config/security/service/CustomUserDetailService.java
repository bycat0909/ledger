package com.ledger.config.security.service;

import com.ledger.config.vo.UserVO;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

/*
    UserDetailsService를 구현했음
 */
@Service
public class CustomUserDetailService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        /*
            UserDetails를 상속받은 UserVo를 Return하면 됨
            UserDetailsService를 implements받은 CustomUserDetailServiceimpl의
            loadUserByUsername 에서 사용자를 조회해서 리턴하면 됨.
         */
        System.out.println(username);
        return null;
    }

}
