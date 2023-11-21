package home.ledger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*
 @SpringBootApplication 하위 패키지로 컴포넌트 스캔을 함.
 그래서 해당 클래스의 위치가 중요함
 */
@SpringBootApplication
public class LedgerApplication {
    public static void main(String[] args) {
        SpringApplication.run(LedgerApplication.class, args);
    }
}
