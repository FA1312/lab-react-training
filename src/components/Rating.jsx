function Rating(props) {
  const value = props.children;
  let rating = '';

  if (value < 0.5) {
    rating = '☆☆☆☆☆';
  } else if (value >= 0.5 && value < 1.5) {
    rating = '★☆☆☆☆';
  } else if (value >= 1.5 && value < 2.5) {
    rating = '★★☆☆☆';
  } else if (value >= 2.5 && value < 3.5) {
    rating = '★★★☆☆';
  } else if (value >= 3.5 && value < 4.5) {
    rating = '★★★★☆';
  } else if (value >= 4.5) {
    rating = '★★★★★';
  }

  return (
    <div>
      <p>{rating}</p>
    </div>
  );
}

export default Rating;
