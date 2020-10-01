import React, {useState} from 'react';

import Square from './Square'

function Board({firstRow, onClick, secondRow, thirdRow}) {
  return (
    <div className="Grid">
      <div className="Row">
        {firstRow.map((value, index) => {
        return <Square key={index} index={index} onClick={onClick} row="firstRow" value={value} />
        })}
      </div>

      <div className="Row">
        {secondRow.map((value, index) => {
        return <Square key={index} index={index} onClick={onClick} row="secondRow" value={value} />
        })}
      </div>

      <div className="Row">
        {thirdRow.map((value, index) => {
        return <Square key={index} index={index} onClick={onClick} row="thirdRow" value={value} />
        })}
      </div>
    </div>
  );
}

export default Board
