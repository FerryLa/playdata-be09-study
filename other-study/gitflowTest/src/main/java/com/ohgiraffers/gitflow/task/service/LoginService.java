package com.ohgiraffers.gitflow.task.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class LoginService {

    @GetMapping("login")
    public String loginService() {
        System.out.println("login service");
        return "로그인 기능 개발 완료 (check)";
    }
}
