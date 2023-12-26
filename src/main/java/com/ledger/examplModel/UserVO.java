package com.ledger.examplModel;

/*
    Ledger Project
    사용자 테이블
    DB : PostGresql
    WEB, WAS : Apache, Tomcat
    SpringBoot, Security, OAuth
    CamelCase

    사용자, 그룹별 전체 잔고가 관리되어야함.

    사용자, 그룹별 수입과 지출이 관리되어야함

    수입 :
        통장
    지출 :
        현금
        카드

    사용자VO
    그룹VO

    결제VO(지출, 수입)
    고정결제VO(고정지출, 고정수입)

    할부VO

    카드VO(지출정보, 결제일 관련)
        -> 카드대금 결제일이 있어서 그 전까지 잔고에서 빼서 보여줌
        -> 대금 결제일이 휴일이면 다음 영업일로 넘어감
    통장VO(잔고)
        ->

    공휴일VO
 */
public class UserVO {

    private String userId;      //ID
    private String passwd;      //비밀번호
    private String emailAddr;   //이메일
    private String userName;    //사용자명
    private String userGrade;   //사용자권한
    private String useYn;       //사용여부
    private String inputDt;     //등록일
    private String inputId;     //등록ID
    private String updateDt;    //수정일
    private String updateId;    //수정ID

}
