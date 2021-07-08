interface Product {
  name: string,
  price: number,
}

interface ComponentProps {
  whichHistory: string,
  SalesOrPurchases: Product[],
}

const SalesAndPurchases = (props: ComponentProps) => {

  const {whichHistory, SalesOrPurchases} = props;

  const printSalesOrPurchases = ({name, price}: Product) => (
    <div>
      <h4>{name}</h4>
      <h5>R$ {price}</h5>
    </div>
  );

  const TotalSales = (acc: number, element: Product) => {
    acc += element.price;
    return acc;
  };

  return (
    <div>
      <h1>{whichHistory}</h1>
      {SalesOrPurchases.map(printSalesOrPurchases)}
      <h5>Total R$ {SalesOrPurchases.reduce(TotalSales, 0)}</h5>
    </div>
  );
};

export default SalesAndPurchases;