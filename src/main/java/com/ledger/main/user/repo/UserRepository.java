package com.ledger.main.user.repo;

import com.ledger.config.vo.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserVO, Long> {
    UserVO findByEmail(String username);
}
