import React from 'react'

function FormData() {
  return (
    <div>
        <form >
            <input type="text" placeholder='enter tile'/><br />
            <input type = "url" placeholder='enter image url'/><br />
            <input type = "text" placeholder='enter description'/><br />
            <button >Submit</button>
        </form>
    </div>
  )
}

export default FormData;