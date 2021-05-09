/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
 *
 * @param {*} x -10000000 이상, 10000000 이하인 정수
 * @param {*} n  1000 이하인 자연수
 * @returns x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴
 */
function solution(x, n) {
  let result = [];
  for (let i = x; result.length < n; i += x) {
    result.push(i);
  }
  return result;
}

solution(2, 5); // [2,4,6,8,10]
solution(4, 3); // [4,8,12]
solution(-4, 2); // [-4, -8]
solution(0, 2); // [0, 0]
