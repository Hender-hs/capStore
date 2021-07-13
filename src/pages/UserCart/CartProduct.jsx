import { useState } from "react";
import { MdRemove } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import * as S from "./styles";
import formatValue from "../../utils/formatValue";

const CartProduct = ({ image, name, price }) => {
  const [counter, setCounter] = useState(1);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    const newCounter = counter - 1;

    if (newCounter < 1) {
      // remove product
      return;
    }

    setCounter(newCounter);
  };

  return (
    <S.ProductContent>
      <S.ProductCol>
        <img src={image} alt={name} />
      </S.ProductCol>
      <S.ProductCol>
        <p>Monitor sansung</p>
        <p>{formatValue(price)}</p>
      </S.ProductCol>
      <S.ProductCol>
        <S.QuantityButton onClick={handleRemove}>
          <MdRemove size={15} color="white" />
        </S.QuantityButton>
        <label>{counter}</label>
        <S.QuantityButton onClick={handleAdd}>
          <IoMdAdd size={15} color="white" />
        </S.QuantityButton>
      </S.ProductCol>
    </S.ProductContent>
  );
};

export default CartProduct;
