function greet(name?: string) {
  if (name === undefined) return 'Hello'
  return `Hello ${name.toUpperCase()}`
}
console.log(greet('Taro'))
console.log(greet())
