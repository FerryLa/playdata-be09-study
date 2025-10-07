package com.ohgiraffers.hw1.run;

import com.ohgiraffers.hw1.model.dto.EmployeeDTO;
import com.ohgiraffers.hw1.model.dto.StudentDTO;
import java.util.Scanner;

public class Application {
  public static int count = 0;
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    StudentDTO[] students = new StudentDTO[3];
    students[0] = new StudentDTO("홍길동", 20, 178.2, 70.0, 1, "정보시스템공학과");
    students[1] = new StudentDTO("김말똥",  21, 187.3, 80.0, 2, "경영학과");
    students[2] = new StudentDTO("강개순", 23, 167.0, 45.0, 4, "정보통신공학과");
    for (StudentDTO student : students) {
      System.out.println(student.information());
    }
    EmployeeDTO[] employees = new EmployeeDTO[10];
    while (true){
      System.out.print("이름 : ");
      String name = sc.nextLine();

      System.out.print("나이 : ");
      int age = sc.nextInt();

      System.out.print("키 : ");
      double height = sc.nextDouble();

      System.out.print("몸무게 : ");
      double weight = sc.nextDouble();

      System.out.print("급여 : ");
      int salary = sc.nextInt();

      System.out.print("부서 : ");
      String dept = sc.next();
      employees[count++] = new EmployeeDTO(name, age, height, weight, salary, dept);
      String cmd;
      while(true){
        System.out.print("계속 입력하시겠습니까? (y/n) : ");
        cmd = sc.next();
        if (cmd.equals("n")||cmd.equals("y")) {
          break;
        }
      }
      if(cmd.equals("n")){
        break;
      }
    }
    for(int i=0; i<count; i++){
      System.out.println(employees[i].information());
    }
  }
}
