/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12899
 *
 * @param {*} n 자연수 n
 * @returns 124 나라에서 사용하는 숫자로 바꾼 값
 */
function solution(n) {
  const radix = [4, 1, 2];
  let result = "";

  while (n) {
    result = radix[n % 3] + result;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }
  return result;
}

solution(1); // 1
solution(2); // 2
solution(3); // 4
solution(4); // 11
solution(5); // 12
solution(6); // 14
solution(7); // 21
solution(8); // 22
solution(9); // 24
solution(10); // 41
solution(11); // 42
solution(12); // 44
solution(13); // 111
