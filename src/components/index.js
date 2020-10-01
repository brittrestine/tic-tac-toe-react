import React, {useEffect, useState} from 'react';

import Board from './Board'

function Game() {
  const [firstRow, setFirstRow] = useState(['','',''])
  const [secondRow, setSecondRow] = useState(['','',''])
  const [thirdRow, setThirdRow] = useState(['','',''])
  const [isNext, setIsNext] = useState(false)
  const [isWinner, setIsWinner] = useState(false)

  useEffect(() => {
    calculateWinner()
  })

  const calculateWinner = () => {
    const sameRowWinner = firstRow.every(v => v.length > 0 && v === firstRow[0]) || secondRow.every(v => v.length > 0 && v === secondRow[0]) || thirdRow.every(v => v.length > 0 && v === thirdRow[0])
    setIsWinner(sameRowWinner)
  }

  const onClick = (index, row) => {
    setIsNext(currentIsNext => !currentIsNext)
    const valueToUse = isNext ? 'X' : 'O'

    switch (row) {
      case 'firstRow':
        const updatedFirstRow = Object.assign([], firstRow, {[index]: valueToUse});
        setFirstRow(updatedFirstRow)
        break

      case 'secondRow':
        const updatedSecondRow = Object.assign([], secondRow, {[index]: valueToUse});
        return setSecondRow(updatedSecondRow)

      case 'thirdRow':
        const updatedThirdRow = Object.assign([], thirdRow, {[index]: valueToUse});
        return setThirdRow(updatedThirdRow)

      default:
        return
    }
  }

  const setClearBoard = () => {
    setFirstRow(['','',''])
    setSecondRow(['','',''])
    setThirdRow(['','',''])
    setIsWinner(false)
  }

  return (
    <>
      {isWinner ? (
        <div className="Winner">YAY, You're The Winner!</div>
      ) : (
        <Board onClick={onClick} firstRow={firstRow} secondRow={secondRow} thirdRow={thirdRow} />
      )}

      <div>
        <button className="Restart" onClick={() => setClearBoard()}>Restart</button>
      </div>
    </>
  );
}

export default Game
