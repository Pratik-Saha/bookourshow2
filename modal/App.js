import React, { useState } from 'react';
import { Button } from 'reactstrap'
import MyModal from './Modal'

function App(props) {
  const [ modalShow, setModalShow ] = useState(false)

  return (
    <div>
          <center>
            <Button color="primary" onClick={() => { setModalShow(true) }}>
              Launch vertically centered modal
            </Button>

            <MyModal isOpen={ modalShow } dohide={() => { setModalShow(false) }} />
          </center>
    </div>
  );
}

export default App;
