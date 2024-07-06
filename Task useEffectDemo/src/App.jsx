import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  //basic hooks password state num allowed char allowed
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null)

  //function to generate random password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    numAllowed ? str += "123456":""
    charAllowed? str += "!@#$%^&*()_{}|?><":""

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [numAllowed,charAllowed,length]);

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numAllowed,passwordGenerator])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
      <div className="place-content-center w-full h-[200px] max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className=" outline-none w-full py-1 px-3  my-2"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipBoard}
            className="outline-none
            bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex justify-evenly">
          <div className="flex text-sm gap-x-2 items-center">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
