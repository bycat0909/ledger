package com.ledger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;

/*
 @SpringBootApplication 하위 패키지로 컴포넌트 스캔을 함.그래서 해당 클래스의 위치가 중요함
 SpringBootApplication 어노테이션은 아래의 어노테이션을 함께 사용한 것과 같음
 - SpringBootConfiguration
 - ComprnentScan
 - EnableAutoConfiguration
 1회주행
 */
@SpringBootApplication
public class LedgerApplication {

    public static void main(String[] args) {
     //SpringApplication.run(LedgerApplication.class, args);
        SpringApplication app = new SpringApplication(LedgerApplication.class);
        app.run(args);
    }
}
