function solution(nums) {
  var answer = 0;
  // 기존 값을 중복을 배제하여 복사
  const unique = [...new Set(nums)];

  // 가능한 카운트 계산 (주어진 배열의 N/2)
  const selectAvailble = Math.round(nums.length / 2);

  // 중복값이 제거된 unique의 길이를 가져와서 선택 가능한 갯수와 비교
  // ex1) 중복 값이 제거된 unique가 선택 가능수보다 클 경우 선택 가능한 수만큼 고를 수 있는게 최대
  // ex2) 중복 값이 제거된 unique가 선택 가능수보다 작을 경우 unique값이 최대가 됨
  answer = unique.length > selectAvailble ? selectAvailble : unique.length
  return answer;
}
