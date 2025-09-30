package com.ohgiraffers.bootproject.config.service;


import com.ohgiraffers.bootproject.config.dto.CalculatorDto;
import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public int plusTwoNumbers(CalculatorDto calculatorDto) {
        return calculatorDto.getNum1() + calculatorDto.getNum2();
    }
}
