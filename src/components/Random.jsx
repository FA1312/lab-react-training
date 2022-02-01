function Random(props) {
  const { min, max } = props;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      <p>
        {' '}
        Random value between {min} and {max} => {result}{' '}
      </p>
    </div>
  );
}

export default Random;
