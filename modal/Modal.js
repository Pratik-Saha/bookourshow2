import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
//import Modal from 'react-modal'

function MyModal(props) {
    console.log(props)
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <ModalHeader>
            Modal heading
        </ModalHeader>

        <ModalBody>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </ModalBody>
        
        <ModalFooter>
          <Button onClick={props.dohide}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }

  export default MyModal
