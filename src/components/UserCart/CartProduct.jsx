import { useState } from "react";
import { MdRemove } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import * as S from "./styles";
import formatValue from "../../utils/formatValue";
import { useCart } from "../../providers/Cart";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CartProduct = ({
  image,
  name,
  price,
  id,
  howMany,
  index,
  handleAddCost,
  handleRemoveCost,
}) => {
  const { removeFromCart, cart, setCart } = useCart();
  const [counter, setCounter] = useState(howMany || 1);

  useEffect(() => {
    const newCart = cart;
    newCart[index].howMany = counter;
    setCart(newCart);

    // eslint-disable-next-line
  }, [counter]);

  const handleAdd = () => {
    setCounter(counter + 1);

    handleAddCost(price);
  };

  const handleRemove = () => {
    const newCounter = counter - 1;
    handleRemoveCost(price);

    if (newCounter < 1) {
      removeFromCart(id);
      toast.error("Produto removido");
      return;
    }

    setCounter(newCounter);
  };

  return (
    <S.Content>
      <S.ProductCol>
        <img src={image} alt={name} />
      </S.ProductCol>
      <S.ProductCol style={{ maxWidth: "178px" }}>
        <p>{name.slice(0, 20)}</p>
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
    </S.Content>
  );
};

export default CartProduct;
