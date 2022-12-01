// Most important
// make any data type generic

//Arrrow
// below actually a closure
const useState = <T>(initialVal: T): [() => T, (v: T) => void] => {
  let str: T = initialVal;
  return [
    () => str,
    (v: T) => {
      str = v
    }
  ]
}
// Convential function

function _useState<T>(initialVal: T): [() => T, (v: T) => void] {
  let str: T = initialVal;
  return [
    () => str,
    (v: T) => {
      str = v
    }
  ]
}

// 
const [nickName, setNickName] = useState('Tom')
console.log(nickName())
setNickName('Tommy')
console.log(nickName()) // works well b/c here we're sticking with string

const [balance, setBalance] = useState<null | number>(null) // todo : Telling it 
console.log(balance())
setBalance(33) //!Argument of type '""' is not assignable to parameter of type 'null'. we can fix it by telling TS.
console.log(balance())


//! GENERIC RANKING ALGORITHM
interface Rank<RankPerson> {
  person: RankPerson;
  rank: number;
}
const ranker = <RankPerson>(peoples: RankPerson[], rank: (yearOfExp: RankPerson) => number): RankPerson[] => {

  const ranks: Rank<RankPerson>[] = peoples.map((person) => ({
    person,
    rank: rank(person),
  }))
  ranks.sort((a, b) => b.rank - a.rank);
  return ranks.map((ranked) => ranked.person)
}

interface Person {
  id: number,
  name: string,
  yearOfExp: number

}

const person: Person[] = [
  { id: 1, name: 'Asim', yearOfExp: 3 },
  { id: 3, name: 'Sabir', yearOfExp: 8 },
  { id: 4, name: 'Amir', yearOfExp: 10 },
  { id: 2, name: 'Tariq', yearOfExp: 5 },


]

console.log(ranker(person, ({ yearOfExp }) => yearOfExp))

//new generic example

function fill<IDontKnow>(array: any[], value: IDontKnow): IDontKnow[] {
  return array.map(() => value)
}
console.clear()
const res = fill([1, 2, 4, 5], 'X')
const RES = fill(['a', 'b', 'c', 'd'], 5)
console.log(res.map(c => c.startsWith('5')))
console.log(RES.map(v => v))