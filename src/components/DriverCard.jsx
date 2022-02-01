function DriverCard(props) {
  let { name, rating, img, car } = props;
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{rating}</li>

        <li>{car.model}</li>
        <li>{car.licensePlate}</li>
        <li>
          {' '}
          <img src={img} alt="Pic" />{' '}
        </li>
      </ul>
    </div>
  );
}

export default DriverCard;
