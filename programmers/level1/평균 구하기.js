/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
 *
 * @param {*} arr -10,000 이상 10,000 이하인 정수
 * @returns 배열 arr의 평균값
 */
function solution(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur);
  let answer = sum / arr.length;

  return answer;
}

solution([1, 2, 3, 4]); // 2.5
solution([5, 5]); // 5
