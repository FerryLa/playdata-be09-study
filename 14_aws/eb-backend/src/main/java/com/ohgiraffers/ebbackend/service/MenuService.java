package com.ohgiraffers.ebbackend.service;

import com.ohgiraffers.ebbackend.dto.MenuDTO;
import com.ohgiraffers.ebbackend.entity.Menu;
import com.ohgiraffers.ebbackend.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final ModelMapper mapper;
    private final MenuRepository menuRepository;

    public MenuDTO findMenuByMenuCode(int menuCode) {
        Menu selectedMenu = menuRepository.findById(menuCode).orElseThrow(IllegalArgumentException::new);
        return mapper.map(selectedMenu, MenuDTO.class);
    }
}
