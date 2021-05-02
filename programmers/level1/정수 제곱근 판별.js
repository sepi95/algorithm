/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript
 *
 * @param {*} n 1이상, 50000000000000 이하인 양의 정수
 * @returns n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
 */
function solution(n) {
  let result = -1;
  const sqrtNum = Math.sqrt(n);

  if (Number.isInteger(sqrtNum)) {
    result = Math.pow(sqrtNum + 1, 2);
  }

  return result;
}

solution(121); // 144
solution(3); // -1
