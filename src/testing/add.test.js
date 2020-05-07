const add = (a, b) => a + b

test('should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

const generateGreeting = (name) => `Hello ${name}`

test('should generate greeting wtih correct name', () => {
  const greet = generateGreeting('Bjorn')
  expect(greet).toBe('Hello Bjorn')
})