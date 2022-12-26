import React from 'react';
import GameContainer from './components/SpinningGame/GameContainer';
import Background from "../src/assets/images/mainPageBackground.png";
function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <div className='flex items-center justify-center  h-screen'>
      <div className='bg-amber-200'>
        <h1 className='text-4xl font-semibold'>Welcome to Spin the wheel</h1>
      </div>      
      <button onClick={() => { setIsOpen(!isOpen) }} className={`absolute z-20 bottom-[17rem] bg-blue-900 text-white h-[3rem] w-[10rem] ${isOpen ? 'hidden' : 'block'}`}>
        Click to Start
      </button>
      <GameContainer isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
    </div>
    
    // <div className="App bg-gray-100 min-h-screen relative">
    //   {/* <div className='h-[5rem] bg-white flex px-[3rem] items-center'> */}
    //   <div className='place-content-center'>
    //     <h1 className='text-4xl font-semibold'> Welcome to Spin the wheel</h1>
    //   </div>
    //   {/* </div> */}
    //   {/* <img src={Background}/> */}
    //   {/* <div className='h-[15rem] lg:w-1/3'><img src={Spinner}/></div> */}
    //   <button onClick={()=>{setIsOpen(!isOpen)}} className={`absolute z-20 bottom-[25rem] left-[14rem] bg-blue-900 text-white h-[2rem] w-[8rem] ${isOpen? 'hidden' : 'block'}`}>
    //     Click to Start
    //   </button>
    //   <GameContainer isOpen={isOpen} setIsOpen={setIsOpen}/>
    // </div>
  );
}

export default App;
