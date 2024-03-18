package com.ledger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;
import java.util.HashMap;

@Controller
public class FirstController {
    @GetMapping("/test")
    public Map<String, Object> test(){
        Map<String, Object> returnData = new HashMap<>();

        returnData.put("test11", "data11");
        return returnData;
    }

    @GetMapping("/user")
    public String user(){
        System.out.println("Test");
        return "userPage";
    }
    @GetMapping("/admin")
    public String admin(){
        return "admin";
    }
    @GetMapping("/manager")
    public String manager(){
        return "manager";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/join")
    public String join(){
        return "join";
    }

    @GetMapping("/joinProc")
    public @ResponseBody String joinProc(){
        return "회원가입성공";
    }
}
