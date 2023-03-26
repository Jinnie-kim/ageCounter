function BirthForm() {
  return (
    <form>
      <input type="number" placeholder="연도" />
      <input type="number" placeholder="월" />
      <input type="number" placeholder="일" />
      <button type="submit">생년월일 넣기</button>
    </form>
  );
}

export default BirthForm;
