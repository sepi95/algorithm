/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript
 *
 * @param {*} arr 정수를 저장한 배열
 * @returns arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수
 */
function solution(arr) {
  let min = 9999;

  for (let i of arr) {
    if (min > i) min = i;
  }

  arr.splice(arr.indexOf(min), 1);
  if (!arr.length) arr.push(-1);

  return arr;
}

solution([4, 3, 2, 1]); // [4,3,2]
solution([10]); // [-1]
