import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCards = ({
  id,
  imgURL,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", {
          id,
          imgURL,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        })
      }
      className="bg-white mr-4 shadow"
    >
      <Image
        source={{ uri: urlFor(imgURL).url() }}
        className="h-36 w-64  rounded-sm"
      />
      <View className="px-2 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon size={22} color="#00CCBB" opacity={0.5} />
          <Text className="font-bold text-xs text-gray-500">
            {rating} . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 pt-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500 font-bold">
            Nearby . {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
