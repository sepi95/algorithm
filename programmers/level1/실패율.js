/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
 *
 * @param {*} N 전체 스테이지의 개수 N
 * @param {*} stages 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
 * @returns 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열
 */
function solution(N, stages) {
  let remainUsers = stages.length;
  let result = [];

  for (let i = 1; i <= N; i++) {
    const failStage = stages.filter((stage) => stage === i).length;
    const failRatio = failStage / remainUsers;
    result.push({ idex: i, ratio: failRatio });
    remainUsers -= failStage;
  }

  result.sort((a, b) => {
    if (a.ratio > b.ratio) return -1;
    else if (a.ratio < b.ratio) return 1;
    else return a.idex - b.idex;
  });

  result.map((item) => item.idex);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3,4,2,1,5]
solution(4, [4, 4, 4, 4, 4]); // [4,1,2,3]
