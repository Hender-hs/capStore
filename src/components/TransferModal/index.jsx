import Modal from "@material-ui/core/Modal";
import { ModalPix } from "./ModalPix";
import { ModalBank } from "./ModalBank";

const TransferModal = ({ open, onClose, type = "transfer" }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        {type === "pix" ? (
          <div>
            <ModalPix />
          </div>
        ) : (
          <div>
            <ModalBank />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default TransferModal;
