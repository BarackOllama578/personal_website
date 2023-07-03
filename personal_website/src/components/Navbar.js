export default function NavBar(props){
    const {displayNavBar, handleClick, navBarElements} = props

    return (
        <div className="nav-bar">
       {displayNavBar ? 
       <div className="nav-menu">
            <div>
                {navBarElements}
            </div>
            
            <button className="nav-button" onClick={handleClick}> Hello</button>
       </div>
       : 
        <button className="nav-button" onClick={handleClick}> Hello</button>
       }
        </div>
    )
}