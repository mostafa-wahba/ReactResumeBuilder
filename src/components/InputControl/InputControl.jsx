import React from 'react'

export default function InputControl({ label, ...props }) {
  return (
    <>
    <div className="inputs-container">
    {label && <label>{label}</label>}
    <input type="text" {...props} />
  </div>
  </>
  )
}
