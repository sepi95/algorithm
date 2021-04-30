/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
 *
 * @param {*} n 길이 10,000이하인 자연수
 * @returns 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴
 */
function solution(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i % 2 !== 0 ? "수" : "박";
  }
  return result;
}

solution(3); // "수박수"
solution(4); // "수박수박"
