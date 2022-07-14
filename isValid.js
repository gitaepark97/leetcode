const isValid = string => {
  const stack = []
  const parens = ['()', '{}', '[]']

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i])

    const open = stack[stack.length - 2]
    const closed = stack[stack.length - 1]

    const potParens = open + closed

    if (parens.includes(potParens)) {
      stack.pop()
      stack.pop()
    }
  }

  return stack.length === 0
}

const input = '({[]})'
const result = true

isValid(input) === result ? console.log('SUCEESS') : console.log('FAIL')
