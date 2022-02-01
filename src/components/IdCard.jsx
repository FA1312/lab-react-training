function IdCard(props) {
  let { firstName, lastName, gender, height, birth, picture } = props;

  return (
    <div>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>

        <li>Gender: {gender}</li>
        <li>Height: {height}m</li>
        <li>Birth: {birth.toDateString()}</li>
        <li>
          {' '}
          <img src={picture} alt="Pic" />{' '}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
