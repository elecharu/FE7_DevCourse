// 테스트 케이스  (Map 활용)
function solution(participant, completion) {
  const answer = new Map();

  // console.log(answer)
  for (const name of participant) {
    answer.set(name, (answer.get(name) ? answer.get(name) : 0) + 1)
  }

  // console.log(answer)
  for (const name of completion) {
    answer.set(name, (answer.get(name) ? answer.get(name) : 0) - 1)
  }
  // console.log(answer)

  for (const [name, count] of answer) {
    // console.log(name, count)
    if (count !== 0) {
      return name
    }
  }
}