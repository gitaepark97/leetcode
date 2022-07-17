const isMonotonic = nums => {
  const type_nums = nums[0] - nums[nums.length - 1]
  const type = type_nums === 0 ? 'same' : type_nums < 0 ? 'increase' : 'decreace'

  if (type === 'increase') {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] < 0) {
        return false
      }
    }
  } else if (type === 'decreace') {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 0) {
        return false
      }
    }
  } else {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] !== 0) {
        return false
      }
    }
  }

  return true
}

// test
const input = [1, 2, 2, 3]
const result = true

isMonotonic(input) === result ? console.log('SUCCESS') : console.log('FAIL')
