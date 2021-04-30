/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12918
 *
 * @param {*} s 길이 1 이상, 길이 8 이하인 문자열
 * @returns 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인
 */
function solution(s) {
  return !(s.length == 4 || s.length == 6)
    ? false
    : s.includes("e")
    ? false
    : !isNaN(s);
}

solution("a234"); // false
solution("1234"); // true
solution("0000"); // true
solution("1e22"); // false
solution("1"); // false
solution("34234"); // false
