package com.ledger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class SampleRunner implements ApplicationRunner {

    @Autowired
    ysClass ysclass;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        //......
        System.out.println(ysclass.getName());
    }
}
