type UserA = { gender: 'male'; name: string }
type UserB = { gender: 'female'; age: number }
type UserC = { gender: 'other'; graduate: string }

function judgeUserType(user: UserA | UserB | UserC) {
  switch(user.gender) {
    case 'male':
      const u0 = user
      return 'user type is UserA'
    case 'female':
      const u1 = user
      return 'user type is UserB'
    case 'other':
      const u2 = user
      return 'user type is UserC'
    default:
      const u3 = user
      return 'user type is never'
  }
}
