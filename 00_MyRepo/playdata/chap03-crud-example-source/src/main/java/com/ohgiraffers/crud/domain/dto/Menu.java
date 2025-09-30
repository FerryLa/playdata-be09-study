package com.ohgiraffers.crud.domain.dto;

public class Menu {
    private int menuId;
    private String menuName;
    private int quantity;
    private int price;

    public Menu() {
    }

    public Menu(int menuId, String menuName, int quantity, int price) {
        this.menuId = menuId;
        this.menuName = menuName;
        this.quantity = quantity;
        this.price = price;
    }

    public int getMenuId() {
        return menuId;
    }

    public void setMenuId(int menuId) {
        this.menuId = menuId;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "[" +
                "menuId=" + menuId +
                ", menuName='" + menuName + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                ']';
    }
}
