/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
 */
function solution(arr1, arr2) {
  let answer = [[]];

  for (let i in arr1) {
    let tempArr = [];
    arr1[i].forEach((num, index) => {
      let sum = num + arr2[i][index];
      tempArr.push(sum);
    });
    answer[i] = tempArr;
  }
  return answer;
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
); // [[4,6],[7,9]]
solution([[1], [2]], [[3], [4]]); // [[4],[6]]
