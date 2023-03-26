import { useDispatch, useSelector } from 'react-redux';
import { nameAction } from '../store/name-slice';
import { NameFormStyle, NameInput, NameButton } from './NaeForm.style';

interface nameState {
  name: { name: string };
}

function NameForm() {
  const dispatch = useDispatch();

  const name = useSelector((state: nameState) => state.name.name);

  const nameRegisterHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameFormData = new FormData(event.currentTarget);

    dispatch(nameAction.register(nameFormData.get('userName')));
  };
  return (
    <NameFormStyle onSubmit={nameRegisterHandler}>
      <NameInput type="text" placeholder="이름을 입력하세요" name="userName" />
      <NameButton type="submit">이름 넣기</NameButton>
    </NameFormStyle>
  );
}

export default NameForm;
