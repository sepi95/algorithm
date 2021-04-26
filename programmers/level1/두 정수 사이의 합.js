/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
 *
 * @param {*} a 정수
 * @param {*} b 정수
 * @returns a와 b 사이에 속한 모든 정수의 합
 */
function solution(a, b) {
  let answer = 0;
  let temp = 0;

  if (a > b) {
    temp = b;
    b = a;
    a = temp;
  }

  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
}

solution(3, 5); // 12
solution(3, 3); // 3
solution(5, 3); // 12
