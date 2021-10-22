import React from 'react'

interface DialoguePropsType {
  children: any
  className: string
}

const Dialogue: React.FC<DialoguePropsType> = ({ children, className = '' }) => (
  <div id="dialogue" className={className}>
    {children}
  </div>
)

export default Dialogue
