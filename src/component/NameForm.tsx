import { useDispatch, useSelector } from 'react-redux';
import { nameAction } from '../store/name-slice';

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
    <form onSubmit={nameRegisterHandler}>
      <input type="text" placeholder="이름을 입력하세요" name="userName" />
      <button type="submit">이름 넣기</button>
    </form>
  );
}

export default NameForm;
