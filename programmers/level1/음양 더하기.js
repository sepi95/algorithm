/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/76501
 *
 * @param {*} absolutes 정수들의 절댓값을 차례대로 담은 정수 배열
 * @param {*} signs 정수들의 부호를 차례대로 담은 불리언 배열
 * @returns 실제 정수들의 합
 */
function solution(absolutes, signs) {
  let answer = 0;

  for (let i in absolutes) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }

  return answer;
}

solution([4, 7, 12], [true, false, true]); // 9
solution([1, 2, 3], [false, false, true]); // 0
