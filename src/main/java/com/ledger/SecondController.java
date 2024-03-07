package com.ledger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class SecondController {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }

    @GetMapping("/api/test")
    public String hello() {
        return "테스트입니다.";
    }
}
