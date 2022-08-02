import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const {
    params: {
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
    },
  } = useRoute();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgURL).url() }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 bg-gray-100 rounded-full p-2"
        >
          <ArrowLeftIcon size={30} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color="#00CCBB" opacity={0.5} />
              <Text className="text-xs text-gray-500 font-bold pl-2">
                {rating}. {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
              <Text className="text-xs text-gray-500 font-bold pl-2">
                Nearby. {address}
              </Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" size={22} opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allerge?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bolde text-xl">Menu</Text>
        {dishes.map((item) => (
          <DishRow
            key={item?._id}
            id={item?._id}
            name={item?.name}
            description={item?.Short_description}
            price={item?.price}
            image={item?.image}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
