/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12945?language=javascript
 *
 * @param {*} n 1이상, 100000이하인 자연수
 * @returns n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴
 */
function solution(n) {
  let fibonacci = [0, 1];
  let result = [0, 1];
  let loop = n - 2;

  while (loop) {
    fibonacci[0] = (fibonacci[0] + fibonacci[1]) % 1234567;
    fibonacci[1] = (fibonacci[0] + fibonacci[1]) % 1234567;
    result.push(fibonacci[0], fibonacci[1]);
    loop--;
  }
  return result[n];
}

solution(3); // 2
solution(5); // 5
