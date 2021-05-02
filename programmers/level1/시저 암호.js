/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
 *
 * @param {*} s
 * @param {*} n
 * @returns 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 리턴
 */
function solution(s, n) {
  let result = s
    .split("")
    .map((value) => {
      if (value === " ") return value;
      return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n);
    })
    .join("");
  return result;
}

solution("AB", 1); // "BC"
solution("z", 1); // "a"
solution("a B z", 4); // "e F d"
solution("bC", 25); // ab
