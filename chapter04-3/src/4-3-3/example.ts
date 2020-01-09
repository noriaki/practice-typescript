class Creature {
  breathe() {}
}
class Animal extends Creature {
  shakeTail() {}
}
class Human extends Creature {
  great() {}
}

function action(creature: Animal | Human | Creature) {
  const c0 = creature
  c0.breathe()
  if (creature instanceof Animal) {
    const c1 = creature
    return c1.shakeTail()
  }
  const c2 = creature
  if (creature instanceof Human) {
    const c3 = creature
    return c3.great()
  }
  const c4 = creature
  return c4.breathe()
}
