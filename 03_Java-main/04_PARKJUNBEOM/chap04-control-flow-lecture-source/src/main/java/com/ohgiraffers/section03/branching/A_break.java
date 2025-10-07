package com.ohgiraffers.section03.branching;

public class A_break {

    public void testSimpleBreakStatement() {

        int sum = 0;
        int i = 1;  // 초기식

        while(true) {   // 조건식
            // 실행할 구문
            sum += i;
            System.out.println("sum = " + sum);

            if(i == 10) {
                break;  // 가장 가까운 반복문을 빠져나간다.
            }
            i++;
        }
    }

    public void testJumpBreak() {
        label:
        for(;;) {   // 무한 반복
            for(int i = 0; i < 10; i++) {
                System.out.println(i);

                if(i == 3) {
                    break label;
                }
            }
        }
    }
}
