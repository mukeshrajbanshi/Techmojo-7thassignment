import React, { useState } from 'react';

const App = () => {

   const [name, setName] = useState('');
   const [urlImg, setUrlImg] = useState('');
   const [des , setDes] = useState('');


   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Url', urlImg);
      localStorage.setItem("Des" , des);
   };
   return (
      <div className="App">
         <h1>Blogs:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         {/* <h1>Password of the user:</h1> */}
         <input
            type="url"
            placeholder="enter image"
            value={urlImg}
            onChange={(e) => setUrlImg(e.target.value)}
         />
             <input
            type="text"
            placeholder="enter tilte"
            value={des}
            onChange={(e) => setDes(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {/* {localStorage.getItem('Password') && (
            <div>
               {localStorage.getItem('Password')}
            </div>
         )} */}
         <div>
         {localStorage.getItem("Url")}
         </div>
         {localStorage.getItem('Des')}
      </div>
   );
};
export default App;