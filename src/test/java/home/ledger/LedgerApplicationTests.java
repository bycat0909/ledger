package home.ledger;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@TestPropertySource(locations = "classpath:/test.properties")
@RunWith(SpringRunner.class)
public class LedgerApplicationTests {

    @Test
    public void contextLoads() {

    }

}
