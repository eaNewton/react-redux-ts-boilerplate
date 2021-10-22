import React from 'react'

interface ButtonPropsType {
  onClick: () => void
  text: string
}

const Button: React.FC<ButtonPropsType> = ({ onClick, text }) => {
  return (
    <button className="btn-primary" onClick={onClick} type="button">
      {text}
    </button>
  )
}

export default Button
