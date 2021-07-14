import {RiVisaFill as Visa} from "react-icons/ri";
import { FaCcMastercard as Mastercard } from "react-icons/fa";
import { BsCreditCard as CreditCard } from "react-icons/bs";
import * as S from "./styled";
const Footer = () => {

    return (
      <S.Container>
        <div>
          <p>
            <a href="/aboutUs">Quem somos</a>
          </p>
          <p>Formas de pagamento</p>
        </div>

        <div>
          <Visa size={50} />
          <Mastercard size={50} />
          <CreditCard size={50} />
        </div>
      </S.Container>
    );
}
export default Footer;