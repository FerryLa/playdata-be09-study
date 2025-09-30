package com.ohgiraffers.ebbackend.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MenuDTO {
    private int menuCode;
    private String menuName;
    private String menuPrice;
    private String categoryCode;
    private String orderableStatus;
}
