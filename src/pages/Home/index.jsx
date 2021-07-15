import { useProducts } from "../../providers/Products";
import { useState, useEffect } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as S from "./styled";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useCart } from "../../providers/Cart";
import { useHistory } from "react-router-dom";
import GabineteHome from "../../assets/gabinete_gamer.jpeg";
import LaptopSVG from "../../assets/Laptop-SVG.json";
import Lottie from "react-lottie";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useAuth } from "../../providers/Auth";

const Home = () => {
  const [inputValue, setInput] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const { products, filterBySellerId, filteredProducts } = useProducts();
  const { addToCart } = useCart();
  const { getUserInfo } = useAuth();

  const history = useHistory();

  const LaptopOptions = {
    loop: true,
    autoplay: true,
    animationData: LaptopSVG,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getType = () => {
    const token = localStorage.getItem("@capstore:accessToken");
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
    localStorage.setItem("@capstone:product_Id", el.id);
    history.push("/specificProduct");
  };

  const getToRegisterProducts = () => history.push("/register-products");

  useEffect(() => {
    getType();
    filterBySellerId(id);
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <S.Container>
      <Header />
      <div style={{ marginTop: "75px" }} />
      <img src={GabineteHome} alt="gabinete" />
      <div className="search">
        <input
          placeholder="Pesquisar hardware"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {/* <Lottie width="30%" height="50%" options={LaptopOptions} /> */}
      {type !== "seller" && (
        <>
          <input onChange={(e) => setInput(e.target.value)} />
          {inputValue === "" && (
            <>
              <h1>Placa mãe</h1>
              <Slider autoFocus="true">
                {products
                  .filter((item) => item.category === "Placa-mãe")
                  .map((item) => (
                    <S.SliderChild>
                      <S.Card
                        onClick={() => redirectToSpecificProductPage(item)}
                      >
                        <img src={item.url} alt="img de uma peça" />
                        <span>{item.name.slice(0, 30)}</span>
                        {/* <p>R${item.price}</p> */}
                      </S.Card>
                    </S.SliderChild>
                  ))}
              </Slider>

              <>
                <h1 style={{ color: "rgb(255, 255, 255, 0.5)" }}>
                  Processadores
                </h1>
                <Slider>
                  {products
                    .filter((item) => item.category === "Processador")
                    .map((item) => (
                      <S.SliderChild>
                        <S.Card
                          onClick={() => redirectToSpecificProductPage(item)}
                        >
                          <img src={item.url} alt="Processador" />
                          <span>{item.name.slice(0, 30)}</span>
                          {/* <p>R${item.price}</p> */}
                        </S.Card>
                      </S.SliderChild>
                    ))}
                </Slider>
              </>

              <>
                <h1 style={{ color: "white" }}>Monitores Gamer</h1>
                <Slider>
                  {products
                    .filter((item) => item.category === "Monitor Gamer")
                    .map((item) => (
                      <S.SliderChild>
                        <S.Card
                          onClick={() => redirectToSpecificProductPage(item)}
                        >
                          <img src={item.url} alt="Monitor" />
                          <span>{item.name.slice(0, 30)}</span>
                        </S.Card>
                      </S.SliderChild>
                    ))}
                </Slider>
              </>
            </>
          )}
          {inputValue !== "" && (
            <>
              <Slider>
                {products
                  .filter(
                    (item) =>
                      item.category.toLowerCase() === inputValue.toLowerCase()
                  )
                  .map((item) => (
                    <S.SliderChild>
                      <S.Card
                        onClick={() => redirectToSpecificProductPage(item)}
                      >
                        <span>{item.name.slice(0, 30)}</span>
                        {/* <p>R${item.price}</p> */}
                        <button
                          onClick={() => addToCart(item)}
                          className="client"
                        >
                          Comprar
                        </button>
                      </S.Card>
                    </S.SliderChild>
                  ))}
              </Slider>
            </>
          )}
        </>
      )}
      {type === "seller" && (
        <>
          {
            <Slider>
              {filteredProducts.map((item) => (
                <S.SliderChild>
                  <S.CardS onClick={() => redirectToSpecificProductPage(item)}>
                    <span>{item.name.slice(0, 30)}</span>
                    {/* <p>R${item.price}</p> */}
                  </S.CardS>
                </S.SliderChild>
              ))}
            </Slider>
          }
          <Button
            width="300px"
            style={{
              fontSize: "1.2rem",
              borderRadius: "10px",
              color: "white",
              height: "50px",
              marginBottom: "20px",
            }}
            onClick={getToRegisterProducts}
          >
            Anunciar novo produto
          </Button>
        </>
      )}
    </S.Container>
  );
};

export default Home;
