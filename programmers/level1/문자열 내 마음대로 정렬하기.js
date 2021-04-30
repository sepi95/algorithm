/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12915
 *
 * @param {*} strings 문자열
 * @param {*} n 정수
 * @returns 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
 */
function solution(strings, n) {
  strings.sort(function (a, b) {
    if (a[n] < b[n]) {
      return -1;
    } else if (a[n] > b[n]) {
      return 1;
    } else {
      return a < b ? -1 : 1;
    }
  });

  return strings;
}

solution(["sun", "bed", "car"], 1); // ["car", "bed", "sun"]
solution(["abce", "abcd", "cdx"], 2); // ["abcd", "abce", "cdx"]
