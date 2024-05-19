import { ScrollView, View, Image, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect } from "react";
import { router } from "expo-router";
import CustomButton from "@/components/custombutton";
const App = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-[50%] flex justify-end  items-center px-4">
          <Image
            source={require("../assets/images/blackhole.png")}
            className="w-[50%] h-[40%] "
            resizeMode="contain"
          />
        </View>
        {/* <Text className="text-[34px] text-center text-white font-extrabold ">
          Akaikumogo
        </Text> */}
        <CustomButton
          text={"Get started"}
          width={"50%"}
          additionalStyle={"shadow-3xl shadow-white  border-red-500"}
          pressFunction={() => router.push("/sign-in")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
