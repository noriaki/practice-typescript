type User = { gender: string; [k: string]: any }
type UserA = User & { name: string }
type UserB = User & { age: number }

function isUserA(user: UserA | UserB): user is UserA {
  return user.name !== undefined
}
function isUserB(user: UserA | UserB): user is UserB {
  return user.age !== undefined
}

function getUserType(user: any) {
  const u0 = user
  if (isUserA(user)) {
    const u1 = user
    return 'A'
  }
  if (isUserB(user)) {
    const u2 = user
    return 'B'
  }
  return 'unknown'
}

const x = getUserType({ name: 'Taro' })
