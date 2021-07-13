import { Button } from "@material-ui/core";
import { useState } from "react";
import Product from "./Product";
import TransferModal from "./TransferModal";

const Styleguide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransferOpen, setIsTransferOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenTransfer = () => {
    setIsTransferOpen(!isTransferOpen);
  };

  return (
    <div>
      <Product
        name="Teclado Mecânico TGT Spawn Tournament"
        url=""
        price={200}
        quantity={2}
        userType="seller"
      />
      <Product
        name="Teclado Mecânico TGT Spawn Tournament"
        url=""
        price={200}
        quantity={2}
        userType="client"
      />
      <Button onClick={handleOpen} variant="contained">
        pix
      </Button>
      <Button onClick={handleOpenTransfer} variant="contained">
        transfer
      </Button>
      <TransferModal open={isOpen} onClose={handleOpen} type="pix" />
      <TransferModal
        open={isTransferOpen}
        onClose={handleOpenTransfer}
        type="transfer"
      />
    </div>
  );
};

export default Styleguide;
