import './App.css';
import Split from 'react-split'
import NavBar from './components/Navbar';
import { useState } from 'react'
function App() {

  const[displayNavBar, setDisplayNavBar] = useState(false)

  function navHandleClick(){
    setDisplayNavBar(prevState => !prevState)
  }
  return (
    <body className="intro-page">
            <div className='intro-page-header'> Hello world</div>
      <Split sizes={[30,70]} direction="horizontal" className="split">
        <NavBar handleClick={navHandleClick} displayNavBar={displayNavBar}></NavBar>
        <div className='intro-page-body'></div>
      
      </Split>
    </body>
  );
}

export default App;
