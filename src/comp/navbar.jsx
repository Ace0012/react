import React from 'react'


const navbar ={
  'background':"black",
'color':'white',
'display':'grid',

// 'gap':'1px',
'margin-top':'3%',
'grid-template-columns':'repeat(5 , 1fr)'

}

const logo = {
  'font-family':'cascadia-code'

}

const links = {
  'color':'white',
  'margin-top':'5%',
  'text-decoration':'none',
}
const btn = {
  'margin-top':'4%',
  'font-size':'19px',
  'border-radius':'20px',
  'color':'white',
  'background':'cyan',
'width':'130px',

'cursor':'pointer'

}
const Navbar = () => {
  return (
   

  
 
    <div style={navbar}>
      <div>
      <h3 style={logo}>LOGOBAKERY</h3>

      </div>

      <a style={links} href="#">Home</a>
      <a style={links} href="#">Services</a>
      <a style={links} href="#">Aboout</a>
      <div>
      <button style={btn}>Contact</button>

      </div>
    </div>
    

  )
}

export { Navbar}