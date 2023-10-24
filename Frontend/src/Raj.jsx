import React from 'react'

function Raj(){
  return (
    <>
    <div className="contaienr">
        <h1>Enter Your Name</h1>
        <form action="/submit" method="POST" />
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br/>
        <input type="submit" value="Submit"/> 
        </div>
    </>

  )
}

export default Raj;