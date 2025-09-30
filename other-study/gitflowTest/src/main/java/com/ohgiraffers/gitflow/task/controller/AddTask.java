package com.ohgiraffers.gitflow.task.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task")
public class AddTask {

    @GetMapping("add-task")
    public String addTask() {
        return "할일 추가 변경을 진행....⚡";
    }
}
