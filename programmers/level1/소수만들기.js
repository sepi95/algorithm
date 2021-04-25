/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12977
 *
 * @param {*} nums 숫자들이 들어있는 배열
 * @returns nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수
 */
function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(sum)) count++;
      }
    }
  }

  return count;
}

function isPrimeNumber(num) {
  if (num < 2) return true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// 결과
solution([1, 2, 3, 4]); // 1
solution([1, 2, 7, 6, 4]); // 4
