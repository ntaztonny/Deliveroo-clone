import {
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  SearchIcon,
  ChevronDownIcon,
  AdjustmentsIcon,
  BeakerIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 px-1 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-300 p-3">
          <SearchIcon size={20} color="gray" />
          <TextInput placeholder="Search for a meal!" keyboardType="default" />
        </View>
        <AdjustmentsIcon size={20} color="#00CCBB" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyles={{ paddingBottom: 100 }}
      >
        {/* categories */}
        <Categories />
        {/* featured rows */}
        <FeaturedRow id="123" title="featured" description="Paid placements" />
        <FeaturedRow
          id="1234"
          title="Tasty Discounts"
          description="Everyone's been enjoying this"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you"
          description="Why not Suport your local restaurant tonight"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
