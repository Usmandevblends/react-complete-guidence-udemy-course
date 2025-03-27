import React, { useState } from 'react'

const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false)
  const [timerExpired, setTimeExpired] = useState(false)

  const handleStart = () => {
    setTimeout(() => {
      setTimeExpired(true)
    }, targetTime * 1000);
    setTimerStarted(true)
  }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>you lost!</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>Start Challenge</button>
      </p>
      <p className=''>Time is runing... / Timer inactive</p>
    </section>
  )
}

export default TimerChallenge