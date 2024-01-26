package com.ledger.main.user.service;

import com.ledger.config.vo.UserVO;
import com.ledger.main.user.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public HashMap<String, Object> addUser(UserVO userVO){

        userRepository.save(userVO);

        return null;
    }

    public HashMap<String, Object> modifyUser(UserVO userVO){
        return null;
    }

}
