import { Flex } from "./Styled";

export const ProductCard = (item) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        <h3>{item.title}</h3>
        <img src={item.image} alt="" />
        <h2>{item.brand}</h2>
        <p>{item.price}</p>
      </Flex>
    </>
  );
};
