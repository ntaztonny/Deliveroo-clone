import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const OrderProcessingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Text className="text-white mb-3 font-bold text-lg">
        Thanks for ordering with us{" "}
      </Text>
      <Animatable.Image
        source={require("../pictures/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-120 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        itarationCount={1}
        className="my-10 text-white font-bold text-center"
      >
        We are processing your order...
      </Animatable.Text>

      <Progress.Bar size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default OrderProcessingScreen;
