import React from 'react';

function NumbersTable(props) {
  let numArr = [];
  for (let i = 1; i < props.limit; i++) {
    numArr.push(i);
  }

  const checkColor = (num) => {
    if (num % 2 === 0) {
      return 'red';
    }
  };

  return (
    <div>
      {numArr.map((elm) => {
        return (
          <div
            key={elm}
            style={{
              backgroundColor: checkColor(elm),
              border: '1px solid black',
              margin: '0',
            }}
          >
            <span>{elm}</span>
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
