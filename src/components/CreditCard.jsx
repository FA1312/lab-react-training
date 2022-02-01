function CreditCard(props) {
  const cardBack = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  const ccNumb = props.number;
  const maskedCC = ccNumb.replace(/.(?=.{4})/g, '#');
  return (
    <div>
      <div style={cardBack}>
        <aside>{props.type}</aside>
        <h2>{maskedCC}</h2>
        <h3>
          Expires {props.expirationMonth} / {props.expirationYear} {props.bank}
        </h3>
        <h4>{props.owner}</h4>
      </div>
    </div>
  );
}

export default CreditCard;
