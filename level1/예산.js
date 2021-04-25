/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12982
 *
 * @param {*} d 부서 별 신청한 금액이 들어있는 배열
 * @param {*} budget 예산
 * @returns 부서에 물품을 지원할 수 있는 최대 갯수
 */
function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);
  d.reduce((a, c) => {
    if (a + c <= budget) answer++;
    return a + c;
  }, 0);

  return answer;
}

// 결과
solution([1, 3, 2, 5, 4], 9); // 3
solution([2, 2, 3, 3], 10); // 4
