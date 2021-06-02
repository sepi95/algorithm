/**
 * Link: https://programmers.co.kr/learn/courses/30/lessons/12953?language=javascript
 *
 * @param {*} arr 길이 1이상, 15이하인 배열, 원소는 100 이하인 자연수
 * @returns  n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환
 */
function solution(arr) {
  let num = 1;

  const gcd = (small, big) => {
    while (small > 0) {
      let temp = small;
      small = big % small;
      big = temp;
    }
    return big;
  };

  const lcm = (small, big) => (small * big) / gcd(small, big);

  for (let index = 0; index < arr.length; index++) {
    num = lcm(num, arr[index]);
  }

  return num;
}

solution([2, 6, 8, 14]); // 168
solution([1, 2, 3]); // 6
