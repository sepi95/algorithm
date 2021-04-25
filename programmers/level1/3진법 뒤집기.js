/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/68935
 *
 * @param {*} n 자연수
 * @returns n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수
 */
function solution(n) {
  let ternary = "";
  let quotient = n;
  let decimal = 0;

  while (quotient) {
    ternary += String(quotient % 3);
    quotient = Math.floor(quotient / 3);
  }

  for (let i in ternary) {
    decimal += Number(ternary[i]) * Math.pow(3, ternary.length - i - 1);
  }

  return decimal;
}

solution(45); // 7
solution(125); // 229
