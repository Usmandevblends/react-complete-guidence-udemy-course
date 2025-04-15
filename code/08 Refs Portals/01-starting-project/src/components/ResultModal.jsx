import React from 'react'

function ResultModal({result, targetTime}) {
  return (
    <dialog className='result-modal'>
        <h2>You {result}</h2>
        <p>The target time was <strong></strong></p>
        <p>You stopped the timer with <strong>X seconds left</strong></p>
        <form method='dialog'>
            <button type='submit'>Close</button>
        </form>
    </dialog>
  )
}

export default ResultModal