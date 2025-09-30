package com.ohgiraffers.cqrs.products.command.application.dto.request;


import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class ProductCreateRequest {
    @NotBlank   // 비어있음 안돼
    private final String productName;
    @Min(value = 1) // 최소값이 1
    private final Long productPrice;
    @NotBlank
    private final String productDescription;
    @Min(value = 1)
    private final Long categoryCode;
    @Min(value = 1)
    private final Long productStock;
}
