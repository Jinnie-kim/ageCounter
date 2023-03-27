import { useDispatch, useSelector } from 'react-redux';
import { birthAction } from '../store/birth-slice';
import { BirthFormStyle, BirthInput, BirthButton } from './BirthForm.style';

interface nameState {
  name: { name: string };
}

function BirthForm() {
  const dispatch = useDispatch();

  const name = useSelector((state: nameState) => state.name.name);

  const birthRegisterHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const birthFormData = new FormData(event.currentTarget);

    dispatch(birthAction.birthInfo({ year: birthFormData.get('year'), month: birthFormData.get('month'), day: birthFormData.get('day') }));

    dispatch(birthAction.calculateCurrentAge());
  };

  return (
    <BirthFormStyle onSubmit={birthRegisterHandler}>
      <BirthInput type="number" placeholder="연도" name="year" />
      <BirthInput type="number" placeholder="월" name="month" />
      <BirthInput type="number" placeholder="일" name="day" />
      <BirthButton type="submit">생년월일 넣기</BirthButton>
    </BirthFormStyle>
  );
}

export default BirthForm;
