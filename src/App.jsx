import { useState , useCallback } from 'react'
import './App.css'

function App() {
  const [len, setLen] = useState(8);
  const [numAllow,setNumAllow] = useState(false);
  const [charAllow,setCharAllow] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow) str += "0123456789";
    if(charAllow) str += "!@#$%^&*(){}{}|";

    let pass;
    for(let i=0;i<len;i++) {
        let charIndex = Math.floor(Math.random()*str.length);
        pass = str.charAt(charIndex);
    }

    setPassword(pass);
      
  },[len,numAllow,charAllow,setPassword])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-600'>
      <h3 className='text-white'>Password Generator</h3>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} placeholder="Password" readonly className='bg-white'/>
        <button className="outline-none bg-green-700 ">Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gapx-x-1'>
          <input type="range" min={6} max={100} calue={len} className='cursor-pointer'/>
        </div>
      </div>

     </div>
    </>
  )
}

export default App;
 