/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
 *
 * @param {*} n 1이상 1000000이하의 자연수
 * @param {*} m 1이상 1000000이하의 자연수
 * @returns 두 수의 최대공약수와 최소공배수를 반환
 */
function solution(n, m) {
  n > m && ([n, m] = [m, n]);
  return [getGCD(n, m), getLCM(n, m)];
}

function getGCD(small, big) {
  while (small > 0) {
    let temp = small;
    small = big % small;
    big = temp;
  }
  return big;
}

function getLCM(small, big) {
  return (small * big) / getGCD(small, big);
}

solution(3, 12); // [3, 12]
solution(2, 5); // [1, 10]
