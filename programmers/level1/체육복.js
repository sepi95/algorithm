/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/42862
 *
 * @param {*} n 전체 학생 수
 * @param {*} lost 체육복을 도난당한 학생들의 번호가 담긴 배열
 * @param {*} reserve 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
 * @returns 체육수업을 들을 수 있는 학생의 최댓값
 */
function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let result = [];
  let tempLost = [...lost];

  lost = lost.filter((l) => {
    if (reserve.includes(l)) answer++;
    if (!reserve.includes(l)) return true;
  });
  reserve = reserve.filter((r) => !tempLost.includes(r));

  result = lost.filter((l) => {
    let finded = reserve.find((r) => r - 1 === l || r + 1 === l);
    reserve = reserve.filter((f) => f !== finded);
    if (finded) return true;
  });

  return answer + result.length;
}

// 결과
solution(7, [2, 4, 5, 6, 7], [1, 3, 4, 5, 6, 7]); // 7
