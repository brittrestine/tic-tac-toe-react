import React, {useEffect, useState} from 'react';

import Board from './Board'

function Game() {
  const [firstRow, setFirstRow] = useState(['','',''])
  const [secondRow, setSecondRow] = useState(['','',''])
  const [thirdRow, setThirdRow] = useState(['','',''])
  const [isNext, setIsNext] = useState('O')
  const [isWinner, setIsWinner] = useState(false)

  useEffect(() => {
    calculateWinner()
  })

  const calculateWinner = () => {
    const sameRowWinner = firstRow.every(v => v.length > 0 && v === firstRow[0]) || secondRow.every(v => v.length > 0 && v === secondRow[0]) || thirdRow.every(v => v.length > 0 && v === thirdRow[0])
    const sameColumnWinner = (firstRow[0].length > 0 && firstRow[0] === secondRow[0] && firstRow[0] === thirdRow[0])
    setIsWinner(sameRowWinner || sameColumnWinner)
  }

  const onClick = (index, row) => {
    let res

    switch (row) {
      case 'firstRow':
       if (firstRow[index].length > 0) {
         res = firstRow
       } else {
         res = setFirstRow(Object.assign([], firstRow, {[index]: isNext}))
         setIsNext(isNext === 'O' ? 'X' : 'O')
       }
        return res

      case 'secondRow':
       if (secondRow[index].length > 0) {
         res = secondRow
       } else {
         res = setSecondRow(Object.assign([], secondRow, {[index]: isNext}))
         setIsNext(isNext === 'O' ? 'X' : 'O')
       }
        return res

      case 'thirdRow':
      if (thirdRow[index].length > 0) {
        res = thirdRow
      } else {
        res = setThirdRow(Object.assign([], thirdRow, {[index]: isNext}))
        setIsNext(isNext === 'O' ? 'X' : 'O')
      }
       return res

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

// setIsNext(currentIsNext => !currentIsNext)
// return thirdRow[index].length > 0 ? thirdRow : setThirdRow(Object.assign([], thirdRow, {[index]: valueToUse}))
