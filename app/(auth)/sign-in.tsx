import { SafeAreaView, ScrollView, Text, View } from "react-native";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full flex justify-center  items-center px-4">
          <Text className="text-white text-5xl">Auth Page</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
