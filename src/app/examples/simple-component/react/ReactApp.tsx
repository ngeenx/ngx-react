import React, { FC, useState } from "react"

const ReactApp: FC<any> = ({ initialInputValue, ngHandleChange }: any) => {
  const [inputValue, setInputValue] = useState(initialInputValue)

  const handleChange = (event: any) => {
    setInputValue(event.target.value)
    ngHandleChange(event)
  }

  return (
    <div>
      <label htmlFor="myInput">Label:</label>

      <input
        type="text"
        id="myInput"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something"
      />

      <p>Input Value: {inputValue}</p>
    </div>
  )
}

export default ReactApp
