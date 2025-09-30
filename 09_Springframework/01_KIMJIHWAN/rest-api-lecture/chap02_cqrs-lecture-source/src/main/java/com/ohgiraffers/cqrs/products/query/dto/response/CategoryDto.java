package com.ohgiraffers.cqrs.products.query.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter // Setter는 엔터티에서만 지양
public class CategoryDto {
    private long categoryCode;
    private String categoryName;
}
