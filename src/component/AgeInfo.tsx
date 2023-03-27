import { useSelector } from 'react-redux';

interface nameState {
  name: { name: string };
}

interface birthState {
  birth: {
    year: number;
    month: number;
    day: number;
    age: number;
    nextAge: number;
    nextAgeMonth: number;
    nextAgeDay: number;
    nextAgeGroup: number;
    nextAgeGroupYear: number;
    nextAgeGroupMonth: number;
  };
}

function AgeInfo() {
  const name = useSelector((state: nameState) => state.name.name);
  const year = useSelector((state: birthState) => state.birth.year);
  const month = useSelector((state: birthState) => state.birth.month);
  const day = useSelector((state: birthState) => state.birth.day);
  const age = useSelector((state: birthState) => state.birth.age);
  const nextAgeMonth = useSelector((state: birthState) => state.birth.nextAgeMonth);
  const nextAgeDay = useSelector((state: birthState) => state.birth.nextAgeDay);
  const nextAge = useSelector((state: birthState) => state.birth.nextAge);
  const nextAgeGroup = useSelector((state: birthState) => state.birth.nextAgeGroup);
  const nextAgeGroupYear = useSelector((state: birthState) => state.birth.nextAgeGroupYear);
  const nextAgeGroupMonth = useSelector((state: birthState) => state.birth.nextAgeGroupMonth);

  return (
    <div>
      <h1>
        {year ? year : '❓'}년 {month ? month : '❓'}월 {day ? day : '❓'}일에 태어난
      </h1>
      <h2>
        {name ? name : '🕶'}님의 만 나이는 {age ? age : '✨'}입니다.
      </h2>
      <p>
        💁🏻‍♀️ 다음 나이 {nextAge}까지 약 {nextAgeMonth}개월 {nextAgeDay}일 남았습니다.
      </p>
      <p>
        🧚 다음 나이 대 {nextAgeGroup}까지 약 {nextAgeGroupYear}년 {nextAgeGroupMonth}개월 남았습니다.
      </p>
    </div>
  );
}

export default AgeInfo;
