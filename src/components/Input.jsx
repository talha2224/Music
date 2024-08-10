import React from 'react'

const Input = ({type,name,placeholder,onChangeFunc,className}) => {
  return (
    <input type={type} name={name} placeholder={placeholder} className={className} onChange={(e)=>onChangeFunc(e)} />
  )
}

export default Input
