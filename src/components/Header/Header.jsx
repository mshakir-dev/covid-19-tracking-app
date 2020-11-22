import React from 'react'


const Header = () => {
  const styleObj = {
    fontSize: 14,
    color: "#E1DF1A",
}
  return (
    <header>
      <div className="container">
        <h1>Covid - 19 (Tracking App) by <span style={styleObj}>(Muhammad Shakir)</span>  </h1>
        <p>Created a Covid-19 application by using <span style={styleObj}>Covid API </span>with the help of Bootstrap and React.</p>
    </div>
  </header>
  )
}
export default Header;