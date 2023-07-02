export default function NavBar(props){
    const {displayNavBar, handleClick} = props
    var l = []
    for (let i = 0; i < 10; i++){
        l.push(<h1>place holder</h1>)
    }
    return (
        <div className="nav-bar">
       {displayNavBar ? l : <button className="nav-button" onClick={handleClick}> Hello</button>}
        </div>
    )
}