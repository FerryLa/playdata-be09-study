package com.greedy.level02.normal.book.model.dto;

public class BookDTO {

    // 기본 생성자를 통해서 객체를 생성하고 값을 추가하는 방법

    // 매개변수가 있는 생성자를 이용해서 생성시점부터 값을 초기화하고 시작하는 방법

    private String title;
    private String publisher;
    private String author;
    private int price;
    private double discountRate;

    // 기본 생성자
    public BookDTO() {
    }

    // 필드 3가지를 초기화하는 생성자
    public BookDTO(String title, String publisher, String author) {
        this.title = title;
        this.publisher = publisher;
        this.author = author;
    }

    // 모든 필드를 초기화하는 생성자
    public BookDTO(String title, String publisher, String author, int price, double discountRate) {
        this.title = title;
        this.publisher = publisher;
        this.author = author;
        this.price = price;
        this.discountRate = discountRate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public double getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(double discountRate) {
        this.discountRate = discountRate;
    }


    public void printInformation () {
        System.out.println(title + ", " + publisher + ", " + author + ", "+ price + ", " + discountRate);
    }
}
