package com.ohgiraffers.hw1.model.dto;

public class EmployeeDTO {
    private int empNo;
    private String empName;
    private String dept;
    private String job;
    private int age;
    private char gender;
    private int salary;
    private double bonusPoint;
    private String phone;
    private String address;

    public int getEmpNo() {
        return empNo;
    }

    public void setEmpNo(int empNo) {
        this.empNo = empNo;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public double getBonusPoint() {
        return bonusPoint;
    }

    public void setBonusPoint(double bonusPoint) {
        this.bonusPoint = bonusPoint;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public EmployeeDTO() {}
    public EmployeeDTO(int empNo, String empName, int age, char gender, String phone, String address) {
        this.empNo = empNo;
        this.empName = empName;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.address = address;
    }
    public EmployeeDTO(int empNo, String empName, String dept, String job, int age, char gender, int salary, double bonusPoint, String phone, String address) {
        this(empNo, empName, age, gender, phone, address);
        this.salary = salary;
        this.bonusPoint = bonusPoint;
        this.dept = dept;
        this.job = job;
    }

    public String information() {
        var sb = new StringBuilder();
        sb.append(empNo);
        sb.append(", ");
        sb.append(empName);
        sb.append(", ");
        sb.append(dept);
        sb.append(", ");
        sb.append(job);
        sb.append(", ");
        sb.append(age);
        sb.append(", ");
        sb.append(gender);
        sb.append(", ");
        sb.append(salary);
        sb.append(", ");
        sb.append(bonusPoint);
        sb.append(", ");
        sb.append(phone);
        sb.append(", ");
        sb.append(address);
        return sb.toString();
    }
}
