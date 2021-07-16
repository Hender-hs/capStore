import { useProducts } from "../../providers/Products";
import { useState, useEffect } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import * as S from "./styled";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useCart } from "../../providers/Cart";
import { useHistory } from "react-router-dom";
import GabineteHome from "../../assets/gabinete-gamer.png";
import LaptopSVG from "../../assets/Laptop-SVG.json";
import Lottie from "react-lottie";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useAuth } from "../../providers/Auth";
import formatValue from "../../utils/formatValue";
import animationPc from "../../assets/lotties/pc.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const [inputValue, setInput] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const { products, filterBySellerId, filteredProducts } = useProducts();
  const { addToCart } = useCart();
  const { getUserInfo, user } = useAuth();

  const history = useHistory();

  const DefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPc,
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
    <>
      <S.Container>
        <Header />
        <div style={{ marginTop: "105px" }} />
        <img src={GabineteHome} alt="gabinete" />
        <div className="search">
          <input
            placeholder="Pesquisar categoria"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {type !== "seller" && (
          <>
            {inputValue === "" && (
              <>
                <h1>Placa mãe</h1>
                <Slider autofocus={true}>
                  {products
                    .filter((item) => item.category === "Placa-mãe")
                    .map((item) => (
                      <S.SliderChild>
                        <S.Card
                          onClick={() => redirectToSpecificProductPage(item)}
                        >
                          <img src={item.url} alt="img de uma peça" />
                          <span>{item.name.slice(0, 30)}</span>
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
                            <img src={item.url} alt={item.name} />
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
                        <S.Card>
                          <span>{item.name.slice(0, 30)}</span>
                          <img
                            src={item.url}
                            alt={item.name}
                            onClick={() => redirectToSpecificProductPage(item)}
                          />
                          <Button
                            onClick={() => addToCart(item)}
                            className="client"
                            width="200px"
                            style={{ margin: "10px 0", color: "darkgreen" }}
                          >
                            Comprar
                          </Button>
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
            <h1 className="seller-title">Seus produtos</h1>
            {
              <Slider>
                {user.products?.map((item) => (
                  <S.SliderChild>
                    <S.Card onClick={() => redirectToSpecificProductPage(item)}>
                      <img src={item.url} alt={item.name} />
                      <span>{item.name.slice(0, 30)}</span>
                    </S.Card>
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
        <div>
          <Carousel responsive={responsive}>
            {products
              .filter((item) => item.category === "Processador")
              .map((item) => (
                <S.SliderChild>
                  <S.Card onClick={() => redirectToSpecificProductPage(item)}>
                    <img src={item.url} alt="Processador" />
                    <span>{item.name.slice(0, 30)}</span>
                  </S.Card>
                </S.SliderChild>
              ))}
          </Carousel>
        </div>
      </S.Container>
    </>
  );
};

export default Home;
