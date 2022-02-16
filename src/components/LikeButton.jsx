import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  const colors = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
    'white',
    'grey',
    'black',
    'pink',
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const handleClick = () => {
    setCount(count + 1);
  };

  const style = { backgroundColor: randomColor };

  return (
    <div>
      <button style={style} onClick={handleClick}>
        {count} Likes
      </button>
    </div>
  );
}

export default LikeButton;
