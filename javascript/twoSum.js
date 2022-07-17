const twoSum = (nums, target) => {
  const hash = {}

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    hash[value] = i
  }

  for (let i = 0; i < nums.length; i++) {
    const potential_key = target - nums[i]

    if (hash[potential_key] && hash[potential_key] !== i) {
      return [i, hash[potential_key]]
    }
  }
}

// test
const input = { nums: [2, 7, 11, 15], target: 9 }
const result = [0, 1]

JSON.stringify(twoSum(input.nums, input.target)) == JSON.stringify(result)
  ? console.log('SUCEESS')
  : console.log('FAIL')
