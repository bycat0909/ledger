package com.ledger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;
import java.util.HashMap;

@Controller
public class FirstController {
    @GetMapping("/test")
    public Map<String, Object> test(){
        Map<String, Object> returnData = new HashMap<>();

        returnData.put("test", "data");
        return returnData;
    }

    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping("/my")
    public String my(){
        return "my";
    }

    @RequestMapping("/login")
    public String login(){
        return "three";
    }
}
