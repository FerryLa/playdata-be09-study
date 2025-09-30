package com.ohgiraffers.ebbackend.controller;

import com.ohgiraffers.ebbackend.dto.MenuDTO;
import com.ohgiraffers.ebbackend.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @GetMapping({"/","/health"})
    public String healthCheck() {
        return "eb-backend is fine!";
    }

    @GetMapping("/menus/{menuCode}")
    public MenuDTO findMenuByMenuCode(@PathVariable("menuCode") int menuCode) {
        return menuService.findMenuByMenuCode(menuCode);
    }
}













