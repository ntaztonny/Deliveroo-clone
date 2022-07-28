import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import client from "../sanity";

const Categories = () => {
  const [category, setCategoty] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type=="category"]
    `
      )
      .then((data) => {
        setCategoty(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      {category.map((item) => (
        <CategoryCard key={item?._id} imgURL={item?.image} title={item?.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
