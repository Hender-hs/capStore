import Modal from "@material-ui/core/Modal";
import { ModalPix } from "./ModalPix";
import { ModalTransfer } from "./ModalTransfer";

const StyledModal = ({ open, onClose, type = "transfer" }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        {type === "pix" ? (
          <div>
            <ModalPix />
          </div>
        ) : (
          <div>
            <ModalTransfer />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default StyledModal;
