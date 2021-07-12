import * as S from "./styled";
import { useState } from "react";
import { useProducts } from "../../providers/Products";
import { AiOutlineSearch } from "react-icons/ai";
const Search = () => {
  const { products } = useProducts();
  const [input, setInput] = useState();

  const searchProductForName = () => {
    const result = products.filter(
      (item) => item.name.includes(input) || item.description.includes(input)
    );
    console.log(result);
  };

  return (
    <S.Container>
      <S.Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></S.Input>
      <S.Button onClick={() => searchProductForName()}>
        <AiOutlineSearch size={20} />
      </S.Button>
    </S.Container>
  );
};

export default Search;
