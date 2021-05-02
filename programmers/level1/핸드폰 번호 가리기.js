/**
 * Link : https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
 *
 * @param {*} phone_number 길이 4 이상, 20이하인 문자열
 * @returns 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴
 */
function solution(phone_number) {
  let answer = "";
  let phone_number_Arr = phone_number.split("");
  answer = phone_number_Arr
    .map((_, index) => {
      if (index < phone_number_Arr.length - 4)
        return (phone_number_Arr[index] = "*");
      return phone_number_Arr[index];
    })
    .join("");
  return answer;
}

solution("01033334444"); // "*******4444"
solution("027778888"); // "*****8888"
