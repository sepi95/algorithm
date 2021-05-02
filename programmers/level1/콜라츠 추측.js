/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascripts
 *
 * @param {*} num 1 이상 8000000 미만인 정수
 * @returns
 */
function solution(num) {
  let count = 0;
  do {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num === 1) {
      break;
    } else {
      num = num * 3 + 1;
    }
    count++;
    if (count >= 500) {
      count = -1;
      break;
    }
  } while (num > 1);
  return count;
}

solution(6); // 8
solution(16); // 4
solution(626331); // -1
solution(1); // 0
