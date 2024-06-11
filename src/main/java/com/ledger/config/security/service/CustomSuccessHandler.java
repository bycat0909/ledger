package com.ledger.config.security.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.Set;

public class CustomSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        Set<String> roles = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
        if (roles.contains("ROLE_ADMIN")) {
            System.out.println("관리자");
            response.sendRedirect("/admin/dashboard");
        } else if (roles.contains("ROLE_USER")) {
            System.out.println("사용자");
            response.sendRedirect("/user/dashboard");
        } else {
            System.out.println("로그인화면");
            response.sendRedirect("/login");
        }
    }
}