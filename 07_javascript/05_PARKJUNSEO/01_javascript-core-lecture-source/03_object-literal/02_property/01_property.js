var obj = {
    normal: 'normal value',
    '@ s p a c e @' : 'space value',  //특수문자 사용시
    0 : 1,          // 숫자 키는 내부적으로 문자열로 변환
    var : 'var',    // 예약어를 키값으로 쓸 수 있음 // 오류가 발생하진 않지만 권장 x
    normal: 'new value',    // 이미 존재하는 키를 중복 선언하면 나중에 선언한 값으로 덮어씀
};

console.log(`obj >>`, obj);