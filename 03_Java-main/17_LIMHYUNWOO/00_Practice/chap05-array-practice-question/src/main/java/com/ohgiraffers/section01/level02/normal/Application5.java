package com.ohgiraffers.section01.level02.normal;

import java.util.Arrays;
import java.util.Scanner;

public class Application5 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("문자열 : ");
        String input = sc.nextLine();
        System.out.println("문자 : ");
        char chinput = sc.next().charAt(0);
        int[] checkArr = new int[input.length()];
        int index = 0;
        char[] chArr= new char[input.length()];
        for (int i = 0; i < input.length(); i++) {
            chArr[i] = input.charAt(i);
            if(chArr[i]==chinput){
                checkArr[index]=i;
            }
        }
        System.out.println(input+"에 "+chinput+"가 존재하는 위치(인덱스) : "+ Arrays.toString(checkArr));
        System.out.println(chinput+" 개수 : "+index);
        /*
         * 문자열을 입력받아 문자 하나하나를 배열에 넣고 검색할 문자가
         * 문자열에 몇 개 들어가 있는지 개수와 몇 번째 인덱스에 위치하는지
         * 인덱스를 출력하세요.
         *
         * ex.
         *	문자열 : application
         *	문자 : i
         *	application에 i가 존재하는 위치(인덱스) : 4 8
         *	i 개수 : 2
         * */
    }
}
