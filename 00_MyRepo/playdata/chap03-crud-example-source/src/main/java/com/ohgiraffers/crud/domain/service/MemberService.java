package com.ohgiraffers.crud.domain.service;

import com.ohgiraffers.crud.domain.repsitory.MemberRepository;

import java.lang.reflect.Member;
import java.sql.Connection;
import java.util.List;

import static com.ohgiraffers.crud.common.JDBCTemplate.getConnection;

public class MemberService {
    private final MemberRepository memberRepository;
    // ++ 생성자에서 다양한 방식으로 초기화할 수 있음 (예: 파라미터로 받거나 조건부 처리 등).
    // ++ 테스트 코드 작성이나 **스프링 같은 프레임워크에서 의존성 주입(DI)**을 고려하면 생성자 방식이 더 유연하고 확장성 있음.


    public MemberService() {
        memberRepository = new MemberRepository();

        public void selectAllMembers() {

            Connection con = getConnection();

            List<Member> memberList = memberRepository.selectAllMembers(con);

            for(Member member : memberList) {
                System.out.println(member);
            };

            close(con);
        }
    }

}
