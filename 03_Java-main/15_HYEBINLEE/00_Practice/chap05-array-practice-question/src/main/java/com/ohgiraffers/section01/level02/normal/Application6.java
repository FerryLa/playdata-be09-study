package com.ohgiraffers.section01.level02.normal;

import java.util.Arrays;
import java.util.Scanner;

public class Application6 {

    public static void main(String[] args) {

        /*
         * 사용자가 입력한 값이 배열에 있는지 검색하여
         * 있으면 "OOO 치킨 배달 가능", 없으면 "OOO 치킨은 없는 메뉴입니다."를
         * 출력하세요.
         * 단, 치킨메뉴가 들어가 있는 배열은 본인이 스스로 정하세요
         *
         * ex.
         * 치킨 이름을 입력하세요 : 양념     치킨 이름을 입력하세요 : 불닭
         * 양념치킨 배달 가능              불닭치킨은 없는 메뉴입니다.
         * */
        Scanner sc = new Scanner(System.in);
        String[] chickens = {"교촌", "굽네", "bbq"};

        while(true) {
            System.out.print("치킨 이름을 입력하세요 : ");
            String input = sc.nextLine();
            if(Arrays.asList(chickens).contains(input)) {
                System.out.printf("%s치킨 배달 가능\n", input);
            }
            else{
                System.out.printf("%s치킨은 없는 메뉴입니다.\n", input);
            }
        }
    }
}
