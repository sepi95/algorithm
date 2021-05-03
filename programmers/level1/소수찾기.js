/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12921
 *
 * @param {*} n 2이상 1000000이하의 자연수
 * @returns 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수
 */
function solution(n) {
  let numArr = new Array(n + 1).fill(1);
  numArr[0] = 0;
  numArr[1] = 0;

  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (var j = i; i * j <= n; j++) {
      numArr[i * j] = 0;
    }
  }

  return numArr.filter((num) => num).length;
}

/**
 * 실패한 방법 - 효율성 All 실패
 
function solution(n) {
  let numSet = new Set();

  for (let i = 2; i <= n; i++) {
    numSet.add(i);
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) numSet.delete(i);
    }
  }
  return numSet.size;
}

*/

solution(10); // 4
solution(5); // 3
