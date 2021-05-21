/**
 * Link: https://programmers.co.kr/learn/courses/30/lessons/12924
 *
 * @param {*} n 10,000 이하의 자연수
 * @returns 연속된 자연수들로 n을 표현하는 방법의 수
 */
function solution(n) {
  let count = 0;

  for (let index = 1; index <= n; index++) {
    const resultSum = addLoop(index, 0, n);
    if (resultSum === n) {
      count++;
    }
  }
  return count;
}

function addLoop(current, sum, total) {
  return total <= sum ? sum : addLoop(current + 1, sum + current, total);
}

solution(15); // 4
solution(6); // 2
