package com.ohgiraffers.section03.math;

public class Application2 {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cec8712 (왜 안돼~~)

    public static void main(String[] args) {
        // 0.0 * 10<=  x   < 1.0 * 10
        // (int) (Math.random() * 구하려는 난수의 갯수) + 구하려는 난수의 최소값
        // 0 ~ 9까지의 난수 생성
        int random1  = (int) (Math.random() * 10) + 0;
        System.out.println("random1 = " + random1);

        // 1 ~ 10 까지의 난수 생성
        int random2 = (int) (Math.random() * 10) + 1;
        System.out.println("random2 = " + random2);

        // 10 ~ 15 까지의 난수 생성
        int random3 = (int) (Math.random() * 6) + 10;
        System.out.println("random3 = " + random3);

        // -128 ~ 127 까지의 난수 발생
//        int random4 = (int) (Math.random() * 256) - 128;
        int random4 = (int) (Math.random() * 256) + (-128);
        System.out.println("random4 = " + random4);


<<<<<<< HEAD
=======
    public static void main(String[] args) {
        // 0.0 (* 10) <= Values < 1.0 (* 10)
        // (int) (Math.random() + 구하려는 난수의 갯수) + 구하려는 난수의 최소값
        // 0 ~ 9 까지의 난수 생성
        int random1 = (int) (Math.random() * 10) + 0;
        System.out.println("난수 생성  : " + random1);

        // 1 ~ 10 까지의 난수 생성
        int random2 = (int) (Math.random() * 10) + 1;
        System.out.println("난수 생성  : " + random2);

        // 10 ~ 15 까지의 난수 생성
        int random3 = (int) ((Math.random() * 6)) + 10 ;
        System.out.println("난수 생성  : " + random3);

        // -127 ~ 128 까지의 난수 생성
        int random4 = (int) ((Math.random() * 256)) - 127 ;
        System.out.println("난수 생성  : " + random4);
>>>>>>> a8fb790 (수정4)
=======
>>>>>>> cec8712 (왜 안돼~~)
    }
}
