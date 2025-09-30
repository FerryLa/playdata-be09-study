package com.ohgiraffers.crud.common;

import java.sql.Connection;
import java.util.Properties;

public class JDBCTemplate {

    public static Connection getConnection() {
        // getConnection 기본 생성자 생성
        Properties props = new Properties();
        Connection con = null;

        // 파일 불러오기

        // 자동 커밋 또는 수동 커밋 설정
        String driver = props.getProperty("driver");
        String url = props.getProperty("url");
        Class.forName(driver);

        con =


    }


}
