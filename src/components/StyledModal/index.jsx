import Modal from "@material-ui/core/Modal";
import { ModalPix } from "./ModalPix";
import { ModalTransfer } from "./ModalTransfer";

const StyledModal = ({ open, onClose, type = "transfer" }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        {type === "pix" ? <ModalPix /> : <ModalTransfer />}
      </Modal>
    </div>
  );
};

export default StyledModal;
