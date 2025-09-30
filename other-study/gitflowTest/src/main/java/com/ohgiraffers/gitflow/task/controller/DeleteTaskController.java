package com.ohgiraffers.gitflow.task.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task")
public class DeleteTaskController {

    @GetMapping("delete-task")
    public String deleteTask(){
        System.out.println("hello world, delete task modify1");
        return "할일 완료처리하는 기능 개발 완료 (check2";
    }
}
