import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restos, setRestos] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured" && _id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestos(data?.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant cards */}
        {restos.map((item) => (
          <RestaurantCards
            key={item?._id}
            id={item?._id}
            imgURL={item?.image}
            title={item?.title}
            rating={item?.rating}
            genre={item?.type?.name}
            address={item?.address}
            short_description={item?.short_description}
            dishes={item?.dishes}
            long={item?.long}
            lat={item?.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
