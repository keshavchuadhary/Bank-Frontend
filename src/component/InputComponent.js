import React from 'react'

const InputComponent = ({inputProp}) => {
  return (
    <div className="flex flex-col gap-2">
            <label htmlFor={inputProp.field} className="block">{inputProp.label}</label>
            <input 
              type={inputProp.type} 
              placeholder={inputProp.placeholder}
              id={inputProp.field} 
              name={inputProp.field} 
              required 
              value={inputProp.value}
              onChange={inputProp.onChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  )
}

export default InputComponent