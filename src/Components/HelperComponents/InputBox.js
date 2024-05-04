import React from 'react'

const InputBox = (props) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <textarea
          name="message"
          id="message"
          rows={5}
          className="block w-full rounded-lg border-1 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
      </div>
    </div>
  )
}

export default InputBox