package com.ledger.config.vo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;


import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Data
@Entity(name="T_USER_M")
public class UserVO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="user_no", nullable = false)
    private Integer userNo;
    @Column(name ="user_email", nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String nickName;
    @Column
    private String profile;
    @Column(nullable = false)
    private String inputDt;
    @Column
    private String grade;
    @Column
    private String useYn;

    protected UserVO(){}

    @Builder
    public UserVO(
            String email
    ) {
        this.email = email;
    }

    public void setUserEmail(String email) {
        this.email =email;
    }
    @Builder
    public UserVO(
            Integer userNo
            , String email
            , String password
            , String nickName
            , String profile
            , String inputDt
            , String grade
            , String useYn
    ) {
        this.userNo = userNo;
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.profile = profile;
        this.inputDt = inputDt;
        this.grade = grade;
        this.useYn = useYn;
    }

    @Override
    public String toString() {
        return "UserVO{" +
                "userNo=" + userNo +
                ", userEmail='" + email + '\'' +
                ", userPassword='" + password + '\'' +
                ", userNickName='" + nickName + '\'' +
                ", userProfile='" + profile + '\'' +
                ", userJoinDt='" + inputDt + '\'' +
                ", userGrade='" + grade + '\'' +
                ", userUseYn='" + useYn + '\'' +
                '}';
    }
}
