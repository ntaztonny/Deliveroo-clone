import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCards from "./RestaurantCards";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant cards */}
        <RestaurantCards
          id={1}
          imgURL="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          title="Restarant 1"
          rating={3.8}
          genre="Italien"
          address="11 rue saint pierre"
          short_desription="French resto"
          dishes={[]}
          long={6457}
          lat={263674}
        />
        <RestaurantCards
          id={2}
          imgURL="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Restarant 2"
          rating={4.4}
          genre="French"
          address="11 rue saint pierre"
          short_desription="French resto"
          dishes={[]}
          long={6457}
          lat={263674}
        />
        <RestaurantCards
          id={3}
          imgURL="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          title="Restarant 3"
          rating={4.8}
          genre="Japanese"
          address="11 rue saint pierre"
          short_desription
          dishes={[]}
          long={6457}
          lat={263674}
        />
        <RestaurantCards
          id={4}
          imgURL="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Restarant 4"
          rating={4.3}
          genre="Indian"
          address="11 rue saint pierre"
          short_desription="French resto"
          dishes={[]}
          long={6457}
          lat={263674}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
