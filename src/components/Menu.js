import React from 'react'
import {Navbar , Nav , Button , Form , FormControl} from "react-bootstrap"

import './card.css'
function Menu({search,setSearch}) {
  const handleChange = (e) => {
    setSearch(e.target.value);
  }
    return (
      <>
      <Navbar bg="black" variant="dark">
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Movies</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
          <Button variant="outline-info">Trailer</Button>

        </Form>
        
        
      </Navbar>
        
      </>
 )   
}

export default Menu
