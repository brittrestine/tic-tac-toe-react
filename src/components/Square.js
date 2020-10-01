import React from 'react';

function Square({index, onClick, row, value}) {
  return (
      <button className="Square" onClick={() => onClick(index, row)}>{value}</button>
  );
}

export default Square
