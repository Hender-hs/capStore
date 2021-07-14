import Modal from "@material-ui/core/Modal";
import { ModalPix } from "./ModalPix";
import { ModalBank } from "./ModalBank";
import ModalEvaluation from "./ModalEvaluation";

const SellerTransferAndClientEvaluationModals = ({ open, onClose, type }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        {type === "pix" ? (
          <div>
            <ModalPix />
          </div>
        ) : type === "transfer" ? (
          <div>
            <ModalBank />
          </div>
        ) : (
          <div>
            <ModalEvaluation />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SellerTransferAndClientEvaluationModals;
