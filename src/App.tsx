import AgeInfo from './component/AgeInfo';
import BirthForm from './component/BirthForm';
import NameForm from './component/NameForm';

import { SectionStyle } from './App.style';

function App() {
  return (
    <SectionStyle>
      <h1>만 나이 계산기🧵</h1>
      <NameForm />
      <BirthForm />
      <AgeInfo />
    </SectionStyle>
  );
}

export default App;
