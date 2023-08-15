import { Modal, Button } from 'react-bootstrap';

const SaveConfirmDialog = ({
    show,
    onClose,
    onSave,
}) => {
    return (
        <Modal show={show} onHide={onClose} className="modal">
            <Modal.Header>
                <Modal.Title className="modal__title">Do you want to save this color palette?</Modal.Title>
            </Modal.Header>

            {/* <Modal.Body>
                <h6 className="modal__question">Delete this record?</h6>
            </Modal.Body> */}

            <Modal.Footer className="modal__buttons">
                <Button className="button" variant="secondary" onClick={onClose}>No, go back</Button>
                <Button className="button" variant="primary" onClick={onSave}>Yes, save to gallery</Button>
                <Button className="button" variant="primary" onClick={onSave}>Export without saving</Button>
                {/* <Button className="button" variant="primary" onClick={uploadAndExport}>Save and export</Button> */}
            </Modal.Footer>
        </Modal>
    );
};

export default SaveConfirmDialog;