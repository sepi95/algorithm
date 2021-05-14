/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/17682?language=javascript
 *
 * @param {*} dartResult "점수|보너스|[옵션]"으로 이루어진 문자열 3세트
 * @returns 3번의 기회에서 얻은 점수 합계에 해당하는 정수값을 출력
 */
function solution(dartResult) {
  const score = { S: 1, D: 2, T: 3 };
  let scoreArr = [];
  let loop = -1;
  for (let i in dartResult) {
    const str = dartResult[i];
    if (str === "S" || str === "D" || str === "T") {
      scoreArr[loop] = Math.pow(scoreArr[loop], score[str]);
    } else if (str === "*" || str === "#") {
      if (str === "*") {
        scoreArr[loop] = scoreArr[loop] * 2;
        scoreArr[loop - 1] = scoreArr[loop - 1] * 2;
      } else if (str === "#") {
        scoreArr[loop] = scoreArr[loop] * -1;
      }
    } else {
      if (dartResult.split("")[+i + 1] === "0") {
        scoreArr.push(10);
      } else if (dartResult.split("")[i - 1] === "1") {
        continue;
      } else {
        scoreArr.push(+str);
      }
      loop++;
    }
  }
  return scoreArr.reduce((acc, cur) => acc + cur);
}

solution("1S2D*3T"); // 37
solution("1D2S#10S"); // 9
solution("1D2S0T"); // 3
solution("1S*2T*3S"); // 23
solution("1D#2S*3S"); // 5
solution("1T2D3D#"); // -4
solution("1D2S3T*"); // 59
