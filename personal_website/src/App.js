import './App.css';
import Split from 'react-split'
import NavBar from './components/Navbar';
import { useState } from 'react'
function App() {

  const[displayNavBar, setDisplayNavBar] = useState(false)

  function navHandleClick(){
    setDisplayNavBar(prevState => !prevState)
  }
  // this is a place holder 
  var navBarElements = []
  for (let i = 0; i < 10; i++){
      navBarElements.push(<h1>place holder</h1>)
  }


  return (
    <body className="intro-page">
            <div className='intro-page-header'> Hello world</div>
      <Split sizes={[30,70]} direction="horizontal" className="split">
        <NavBar handleClick={navHandleClick} displayNavBar={displayNavBar} navBarElements={navBarElements}></NavBar>
        <div className='intro-page-body'></div>
      
      </Split>
    </body>
  );
}

export default App;
