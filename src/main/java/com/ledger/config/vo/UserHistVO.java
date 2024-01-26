package com.ledger.config.vo;


import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity(name="T_USER_H")
public class UserHistVO{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer seq;
    @Column(nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userNo;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column
    private String userNickName;
    @Column
    private String userProfile;
    @Column
    private String userJoinDt;
    @Column
    private String updateDt;
    @Column
    private String updateId;


    protected UserHistVO(){}

}
