/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12930
 *
 * @param {*} s 한 개 이상의 단어로 구성
 * @returns 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴
 */
function solution(s) {
  let result = s
    .split(" ")
    .map((strArr) => {
      return strArr
        .split("")
        .map((str, i) =>
          (i + 1) % 2 === 0 ? str.toLowerCase() : str.toUpperCase()
        )
        .join("");
    })
    .join(" ");
}

solution("try hello world"); // "TrY HeLlO WoRlD"
