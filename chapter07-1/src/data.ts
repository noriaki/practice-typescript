export type Row = {
  id: string
  generation: string
  answers: number[]
}
export type Rows = Row[]

export const rows: Rows = [
  {
    id: 'up20-un30',
    generation: '20〜30歳',
    answers: [0.18, 0.22, 037, 023]
  },
  {
    id: 'up30-up40',
    generation: '30〜40歳',
    answers: [0.12, 0.28, 0.42, 018]
  }
]
