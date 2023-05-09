import React from 'react'

const Footer = () => {
    const style={
        position:'fixed',
        left:'0',
        bottom:'0',
        width:'100%',
        backgroundColor:'black',
        color:'yellow'
      }  
  return (
    <footer className='footer' style={style}>
        <div className='container'>
           <span className='text-muted'>Car Servicing @ Yash Technologies All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer