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
    private Integer userNo;
    @Column(nullable = false)
    private String userId;
    @Column(nullable = false)
    private String userEmail;
    @Column(nullable = false)
    private String userPassword;
    @Column
    private String userNickName;
    @Column
    private String userProfile;
    @Column
    private String userJoinDt;
    @Column
    private String userGrade;
    @Column
    private String userUseYn;
    @Column
    private String userGroupId;
    @Column
    private String updateDt;
    @Column
    private String updateId;


    protected UserVO(){}

    @Builder
    public UserVO(
            String userEmail
    ) {
        this.userEmail = userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail =userEmail;
    }
    @Builder
    public UserVO(
            Integer userNo
            , String userEmail
            , String userPassword
            , String userNickName
            , String userProfile
            , String userJoinDt
            , String userGrade
            , String userUseYn
            , String userGroupId
    ) {
        this.userNo = userNo;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userNickName = userNickName;
        this.userProfile = userProfile;
        this.userJoinDt = userJoinDt;
        this.userGrade = userGrade;
        this.userUseYn = userUseYn;
        this.userGroupId = userGroupId;
    }

    @Override
    public String toString() {
        return "UserVO{" +
                "userNo=" + userNo +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userNickName='" + userNickName + '\'' +
                ", userProfile='" + userProfile + '\'' +
                ", userJoinDt='" + userJoinDt + '\'' +
                ", userGrade='" + userGrade + '\'' +
                ", userUseYn='" + userUseYn + '\'' +
                ", userGroupId='" + userGroupId + '\'' +
                '}';
    }
}
