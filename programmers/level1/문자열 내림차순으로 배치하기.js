/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
 *
 * @param {*} s 길이 1 이상인 문자열
 * @returns 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴
 */
function solution(s) {
  return s
    .split("")
    .sort(function (a, b) {
      if (a < b) return 1;
      if (a > b) return -1;
    })
    .join("");
}

solution("Zbcdefg"); // "gfedcbZ"
