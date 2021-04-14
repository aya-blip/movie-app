
import {useState } from 'react'
import {Button , Modal , FormControl} from 'react-bootstrap'
import './card.css'
function AddMovie({newMovie,setNewMovie,Add}) {
  const handleChange = (e) => {
    setNewMovie({...newMovie,  [e.target.name] : e.target.value})
  }
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
          
      <Button className="d" variant="primary" onClick={handleShow}>
      <Modal.Title>Add Movie</Modal.Title>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton >
          <Modal.Title> + Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body><FormControl type="text" placeholder="Title" className="mr-sm-2" name="Title" onChange={handleChange}  />
        <FormControl type="text" placeholder="Image" className="mr-sm-2" name="Image" onChange={handleChange} />
        <FormControl type="text" placeholder="Rating" className="mr-sm-2" name="Rating" onChange={handleChange} />
        <FormControl type="text" placeholder="Description" className="mr-sm-2" name="Description" onChange={handleChange} />
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => {handleClose() ; Add(newMovie)}} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>   
        
    )
}

export default AddMovie
