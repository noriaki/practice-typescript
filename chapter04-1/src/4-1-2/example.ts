function greet(name?: string) {
  return `Hello ${name.toUpperCase()}`
}
console.log(greet('Taro'))
console.log(greet())
