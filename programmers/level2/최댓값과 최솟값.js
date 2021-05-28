/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12939?language=javascript
 *
 * @param {*} str 공백으로 구분된 숫자들
 * @returns str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환
 */
function solution(str) {
  const strArr = str
    .split(" ")
    .map((s) => +s)
    .sort((a, b) => a - b);
  return strArr[0] + " " + strArr[strArr.length - 1];
}

solution("1 2 3 4"); // "1 4"
solution("-1 -2 -3 -4"); // "-4 -1"
solution("-1 -1"); // "-1 -1"
