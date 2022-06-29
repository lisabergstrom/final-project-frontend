import React, { useEffect, useState } from 'react';


import {
  TimeWrapper,
  Timer,
  Label,
}
from "./TickingClockStyles"

const TimeTicker = () => {
  const [timeState, setTimeState] = useState()

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setTimeState(date.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <TimeWrapper>
      <Label>Your local time is</Label>
      <Timer>{timeState}</Timer>
    </TimeWrapper>
  )
}

export default TimeTicker