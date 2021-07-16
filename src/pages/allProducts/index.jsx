import { useEffect }  from "react";
import { useState }   from "react";
import { useHistory } from "react-router-dom";
import MenuDesktop    from "../../components/MenuDesktop";
import { useCart }    from "../../providers/Cart";
import { useProducts } from "../../providers/Products";
import api            from "../../services/api";
import formatValue    from "../../utils/formatValue";
import * as S         from "./styles";

const AllProducts = () => {

  const [gotProducts, setGotProducts]           = useState();
  const { addToCart }                           = useCart();
  const { filterByCategory, filteredProducts }  = useProducts();
  const history                                 = useHistory();

  const getProducts = async () => {
    const response = await api.get("/products");
    if (response.status === 200) return setGotProducts(response.data);
  };

  const handleAddToCard = (product) => {
    addToCart(product);
    history.push("/cart");
  };

  const redirectToProductPage = (id) => {
    localStorage.setItem("@capstone:product_Id", id);
    history.push("/specificProduct");
  };

  const printingProducts = (el) => {
   
    return (
      <S.ProductCard>
        <div>
          <img src={el.url} onClick={() => redirectToProductPage(el.id)} />
        </div>
        <div>
          <h3 className="name" onClick={() => redirectToProductPage(el.id)} >{el.name}</h3>
        </div>
        <div>
          <p>{formatValue(el.price)}</p>
          <p>ou</p>
          <p><strong>em até</strong> 12x de {formatValue(el.price / 12)}</p>
        </div>
        <div>
          <S.Button onClick={() => handleAddToCard(el)} >Adicionar ao Carrinho</S.Button>
        </div>
      </S.ProductCard>
    );
  };

  const handleFilterProducts = (category) => {
    filterByCategory(category);
    if (category === "") getProducts();
  };

  const categoriesToFilter = [
    "Placa-mãe",
    "Placa de Vídeo",
    "Processador",
    "Fonte",
    "Cooler",
    "hd/ssd",
    "Memória Ram",
    "Gabinete Gamer",
    "Teclado Gamer",
    "Mouse Gamer",
    "Mousepad Gamer",
    "Headset",
  ];

  useEffect( () => {
    !gotProducts && getProducts();
  });

  useEffect( () => {
    filteredProducts && setGotProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <S.Container>
      <MenuDesktop />
      <S.Div>
        <div className="left-div" >
          <S.DivFilter >
            <div>
              <input placeholder="Pesquisar" onChange={(el) => handleFilterProducts(el.target.value)} />
            </div>
            {categoriesToFilter.map( (el) => <h5 onClick={() => handleFilterProducts(el) } >{el}</h5> )}
          </S.DivFilter>
        </div>
        <S.Body>
          {
            gotProducts
            &&
            gotProducts.map(printingProducts)
          }
        </S.Body>
      </S.Div>
    </S.Container>
  );
};

export default AllProducts;