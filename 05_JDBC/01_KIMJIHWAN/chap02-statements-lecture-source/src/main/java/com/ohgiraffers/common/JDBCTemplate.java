package com.ohgiraffers.common;

import java.io.FileReader;
import java.sql.*;
import java.util.Properties;

public class JDBCTemplate {
    // 사용자가 데이터베이스에 접근하기위해서 필요한 Connection 객체를 생성해서 반환하는 메소드
    // 이떄 Connection 객체를 생성하기위해서는 driver, url, user, password의 값을 이용해서 객체를 생성한다.
    public static Connection getConnection() {
        Properties props = new Properties();
        Connection con = null;
        try {
            props.load(new FileReader("src/main/java/com/ohgiraffers/config/connection-info.properties"));

            String driver = props.getProperty("driver");
            String url = props.getProperty("url");
            Class.forName(driver);

            con = DriverManager.getConnection(url, props);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        // finally를 붙여서 connection객체를 강제로 닫지 않는다. 나중에 닫고 싶은 경우에는 아래 생성한 close() 메소드를 호툴해서 사용한다.
        return con;
    }

    /* connection을 닫는 개념은 별도의 메소드로 분리하고 실제 닫는 시점은 Service 계층에서 진행 */
    public static void close(Connection con) {
        try {
            if (con != null) {
                con.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void close(Statement stmt) {
        try {
            if (stmt != null) {
                stmt.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public static void close(ResultSet rset) {
        try {
            if (rset != null) {
                rset.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }


}