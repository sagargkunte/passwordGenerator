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
     <div className=''></div>
    </>
  )
}

export default App
