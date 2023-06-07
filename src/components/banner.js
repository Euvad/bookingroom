import React from 'react'

export default function banner({children, title, subtitle}) {
  return (
    <div className='banner'>
        <h1>{title}</h1>
        <div className='small-bar'></div>
        <p>{subtitle}</p>
        {children}
    </div>
  )
}
