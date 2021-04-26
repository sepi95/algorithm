/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
 *
 * @param {*} s 대문자와 소문자가 섞여있는 문자열 s
 * @returns s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴
 */
function solution(s) {
  s = s.toLowerCase();

  let stringArr = s.split("");
  if (!(stringArr.includes("p") || stringArr.includes("y"))) return true;

  const pLen = stringArr.filter((str) => str === "p").length;
  const yLen = stringArr.filter((str) => str === "y").length;

  return pLen === yLen;
}

solution("pPoooyY"); // true;
solution("Pyy"); // false;
