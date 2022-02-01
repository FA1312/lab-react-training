function Greetings(props) {
  let { greet, lang } = props;
  if (lang === 'de') {
    greet = 'Hallo';
  }
  if (lang === 'fr') {
    greet = 'Bonjour';
  }
  if (lang === 'es') {
    greet = 'Hola';
  }
  if (lang === 'en') {
    greet = 'Hi';
  }
  return (
    <div>
      {greet} {props.children}
    </div>
  );
}

export default Greetings;
