import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { birthAction } from '../store/birth-slice';
import { AgeInfoButton } from './AgeInfo.style';

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
  const dispatch = useDispatch();

  const [showNextAge, setShowNextAge] = useState(false);
  const [showNextAgeGroup, setShowNextAgeGroup] = useState(false);

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

  const showNextAgeHandler = () => {
    setShowNextAge((prevState) => !prevState);
    dispatch(birthAction.calculateNextAge());
  };

  const showNextAgeGroupHandler = () => {
    setShowNextAgeGroup((prevState) => !prevState);
    dispatch(birthAction.calculateNextAgeGroup());
  };

  return (
    <div>
      <h1>
        {year ? year : '❓'}년 {month ? month : '❓'}월 {day ? day : '❓'}일에 태어난
      </h1>
      <h2>
        {name ? name : '🕶'}님의 만 나이는 {age ? age : '✨'}입니다.
      </h2>
      <div>
        {showNextAge && (
          <p>
            💁🏻‍♀️ 다음 나이 {nextAge}까지 약 {nextAgeMonth}개월 {nextAgeDay}일 남았습니다.
          </p>
        )}
        <AgeInfoButton type="button" onClick={showNextAgeHandler}>
          다음 나이까지 남은 기간 보기
        </AgeInfoButton>
      </div>
      <div>
        {showNextAgeGroup && (
          <p>
            🧚 다음 나이 대 {nextAgeGroup}까지 약 {nextAgeGroupYear}년 {nextAgeGroupMonth}개월 남았습니다.
          </p>
        )}
        <AgeInfoButton type="button" onClick={showNextAgeGroupHandler}>
          다음 나이대까지 남은 기간 보기
        </AgeInfoButton>
      </div>
    </div>
  );
}

export default AgeInfo;
