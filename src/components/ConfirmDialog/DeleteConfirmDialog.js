import { Modal, Button } from 'react-bootstrap';

const DeleteConfirmDialog = ({
    show,
    onClose,
    onSave,
}) => {
    return (
        <Modal show={show} onHide={onClose} className="modal">
            <Modal.Header>
                <Modal.Title className="modal__title">Are you sure you want to delete this record?</Modal.Title>
            </Modal.Header>

            {/* <Modal.Body>
                <h6 className="modal__question">Delete this record?</h6>
            </Modal.Body> */}

            <Modal.Footer className="modal__buttons">
                <Button className="button" variant="secondary" onClick={onClose}>No, get back</Button>
                <Button className="button" variant="primary" onClick={onSave}>Yes, delete it</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmDialog;