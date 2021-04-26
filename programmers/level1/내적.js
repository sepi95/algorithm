/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript
 *
 * @param {*} a 1차원 정수 배열
 * @param {*} b 1차원 정수 배열
 * @returns a와 b의 내적
 */
function solution(a, b) {
  let answer = 0;

  for (let i in a) {
    answer += a[i] * b[i];
  }

  return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); // 3
solution([-1, 0, 1], [1, 0, -1]); // -2
