/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12910
 *
 * @param {*} arr 자연수를 담은 배열
 * @param {*} divisor 자연수
 * @returns array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환
 */
function solution(arr, divisor) {
  let result = [];

  for (let i of arr) {
    if (i % divisor === 0) result.push(i);
  }

  result.sort((a, b) => a - b);
  if (!result.length) result.push(-1);

  return result;
}

solution([5, 9, 7, 10], 5); // [5, 10]
solution([2, 36, 1, 3], 1); // [1, 2, 3, 36]
solution([3, 2, 6], 10); // [-1]
