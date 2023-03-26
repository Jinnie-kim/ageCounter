import { useSelector } from 'react-redux';

interface nameState {
  name: { name: string };
}

interface birthState {
  birth: { year: number; month: number; day: number; age: number };
}

function AgeInfo() {
  const name = useSelector((state: nameState) => state.name.name);
  const year = useSelector((state: birthState) => state.birth.year);
  const month = useSelector((state: birthState) => state.birth.month);
  const day = useSelector((state: birthState) => state.birth.day);
  const age = useSelector((state: birthState) => state.birth.age);

  return (
    <div>
      <h1>
        {year}년 {month}월 {day}일에 태어난
        <br /> {name}님의 만 나이는
      </h1>
      <p> {age}입니다.</p>
      <p>
        다음 나이 {}까지 {}개월 {}일 남았습니다.
      </p>
      <p>
        다음 나이 대 까지 {}개월 {}일 남았습니다.
      </p>
    </div>
  );
}

export default AgeInfo;
