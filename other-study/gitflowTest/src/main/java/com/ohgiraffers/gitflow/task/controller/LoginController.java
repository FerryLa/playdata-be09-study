package com.ohgiraffers.gitflow.task.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "로그인 기능 완료";
    }
}
