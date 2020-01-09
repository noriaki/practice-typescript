type User = { name: string }
type UserA = User & { gender: 'male' | 'female' | 'other' }
type UserB = User & { graduate: string }

const users: (UserA | UserB)[] = [
  { name: 'Taro', gender: 'male' },
  { name: 'Hanako', gender: 'female' },
]

const filteredUsers = users.filter(user => 'graduate' in user)

const typedFilteredUsers = users.filter((user): user is UserB => 'graduate' in user)
