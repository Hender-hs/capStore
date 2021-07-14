import { useProducts } from "../../providers/Products";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as S from "./styled";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Button from "../../components/Button";
import Search from "../../components/Search";

const Home = () => {
  const [search, setSearch] = useState([]);
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const { products, filterBySellerId, filteredProducts } = useProducts();
  const { history } = useHistory();

  const history = useHistory();

  const getType = () => {
    const token = localStorage.getItem("@capstore:token");
    const decoded = jwt_decode(token);
    setType(JSON.parse(decoded.sub));

    api
      .get(`/users/${decoded.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setType(response.data.type);
        setId(response.data.sellerId);
      });
  };

  const redirectToSpecificProductPage = (el) => {
    localStorage.setItem("@capstone:product_Id", el.id)
    history.push("/specificProduct")
  }

  useEffect(() => {
    console.log("type", type);
    getType();
    filterBySellerId(id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <S.Container>
        <Search setSearch={setSearch} />
        {type === "client" && (
          <>
            {search.length === 0 && (
              <>
                <h1>Placa mãe</h1>
                <Slider autoFocus="true">
                  {products
                    .filter((item) => item.category === "Placa-mãe")
                    .map((item) => (
                      <div>
                        <S.Card onClick={() => redirectToSpecificProductPage(item)} >
                          <img src={item.url} alt="img de uma peça" />
                          <span>Nome {item.name.slice(0, 20)}</span>
                          <p>R${item.price}</p>
                          <Button
                            className="client"
                            handleClick={() => setCart(item)}
                          >
                            Comprar
                          </Button>
                        </S.Card>
                      </div>
                    ))}
                </Slider>

                <>
                  <h1>Processador</h1>
                  <Slider>
                    {products
                      .filter((item) => item.category === "Processador")
                      .map((item) => (
                        <div>
                          <S.Card>
                            <img src={item.url} alt="img de uma peça" />
                            <span>Nome {item.name.slice(0, 20)}</span>
                            <p>R${item.price}</p>
                            <Button
                              className="client"
                              handleClick={() => setCart(item)}
                            >
                              Comprar
                            </Button>
                          </S.Card>
                        </div>
                      ))}
                  </Slider>
                </>

                <>
                  <h1>Monitor Gamer</h1>
                  <Slider>
                    {products
                      .filter((item) => item.category === "Monitor Gamer")
                      .map((item) => (
                        <div>
                          <S.Card>
                            <img src={item.url} alt="img de uma peça" />
                            <span>Nome {item.name.slice(0, 20)}</span>
                            <p>R${item.price}</p>
                            <Button
                              className="client"
                              handleClick={() => setCart(item)}
                            >
                              Comprar
                            </Button>
                          </S.Card>
                        </div>
                      ))}
                  </Slider>
                </>
              </>
            )}

            {search.length !== 0 && (
              <>
                <Slider>
                  {search.map((item) => (
                    <div>
                      <S.CardS>
                        <img src={item.url} alt="img de uma peça" />
                        <span>Nome {item.name.slice(0, 20)}</span>
                        <p>R${item.price}</p>
                        <Button
                          handleClick={() => setCart(item)}
                          className="client"
                        >
                          Comprar
                        </Button>
                      </S.CardS>
                    </div>
                  ))}
                </Slider>
              </>
            )}
          </>
        )}
      </S.Container>
      <S.Container>
        {type === "seller" && (
          <>
            <h1>Seus produtos a venda</h1>
            {
              <Slider>
                {filteredProducts.map((item) => (
                  <div>
                    <S.CardS>
                      <img src={item.url} alt="img de uma peça" />
                      <span>Nome {item.name.slice(0, 20)}</span>
                      <p>R${item.price}</p>
                    </S.CardS>
                  </div>
                ))}
              </Slider>
            }
            <Button
              width="4rem"
              handleClick={() => history.push("/registerProduct")}
            >
              Anunciar
            </Button>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Home;
