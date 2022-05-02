import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts, getProductsData } from "../Redux/actions";
import { Grid } from "./Styled";
import { ProductCard } from "./ProductCard";
export const CategoryCard = () => {
  const data = useSelector((state) => state.data);
  const { category } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterProducts(category));
  }, [category]);
  return (
    <Grid data-testid="category-container">
      {data.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </Grid>
  );
};
