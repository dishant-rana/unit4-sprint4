import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, sortProducts } from "../Redux/actions";
import { store } from "../Redux/store";
import { ProductCard } from "./ProductCard";
import { Select, Grid } from "./Styled";

export const Products = () => {
  const { data, isLoading, isError, filterData } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsData());
  }, []);
  const handleSort = (e) => {
    dispatch(sortProducts(e.target.value));
  };
  return isLoading ? (
    <h2>Loading the Data</h2>
  ) : (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {data.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </Grid>
    </>
  );
};
