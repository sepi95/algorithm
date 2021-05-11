/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
 *
 * @param {*} n 지도의 한 변 크기
 * @param {*} arr1 길이 n인 정수 배열
 * @param {*} arr2 길이 n인 정수 배열
 * @returns 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력
 */
function solution(n, arr1, arr2) {
  let binaryArr1 = arr1.map((item) =>
    ("0".repeat(n) + item.toString(2)).slice(-n)
  );
  let binaryArr2 = arr2.map((item) =>
    ("0".repeat(n) + item.toString(2)).slice(-n)
  );
  let secretCode = [];
  for (let idx in binaryArr1) {
    let addResult = "";
    for (let i = 0; i < n; i++) {
      const digit = +binaryArr1[idx][i] + +binaryArr2[idx][i];
      digit >= 1 ? (addResult += "1") : (addResult += "0");
    }
    secretCode.push(addResult);
  }
  return secretCode.map((item) => {
    return item.replace(/1/g, "#").replace(/0/g, " ");
  });
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]); // ["#####","# # #", "### #", "# ##", "#####"]
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]); // ["######", "### #", "## ##", " #### ", " #####", "### # "]
