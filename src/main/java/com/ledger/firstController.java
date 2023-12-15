package com.ledger;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.HashMap;

@RestController
public class firstController {
    @GetMapping("/test")
    public Map<String, Object> test(){
        Map<String, Object> returnData = new HashMap<>();

        returnData.put("test", "data");
        return returnData;
    }
}
