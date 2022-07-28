import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = ({ title, imgURL }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{ uri: urlFor(imgURL).url() }}
        className="h-40 w-40 rounded"
      />
      <Text className="font-bold absolute bottom-1 left-1 text-white shadow">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
