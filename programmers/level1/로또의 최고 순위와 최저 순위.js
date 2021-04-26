/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/77484?language=javascript
 *
 * @param {*} lottos 민우가 구매한 로또번호 6개. 단 알아볼 수 없는 번호는 0으로 표기.
 * @param {*} win_nums 당첨 번호 6개.
 * @returns 당첨 가능한 최고 순위와 최저 순위
 */
function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;

  count = win_nums.filter((num) => lottos.includes(num)).length;
  answer[1] = ranking(count);
  count += lottos.filter((num) => num === 0).length;
  answer[0] = ranking(count);

  return answer;
}

function ranking(num) {
  switch (num) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    case 1:
    case 0:
      return 6;
  }
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]); // [3, 5]
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]); // [1, 6]
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]); // [1, 1]
