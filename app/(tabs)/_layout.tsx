import { Feather, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ReactNode } from "react";
import { Text, View } from "react-native";

const TabIcon = ({
  icon,
  text,
  focused,
  color,
}: {
  icon: ReactNode;
  focused: boolean;
  text: string;
  color: any;
}) => {
  return (
    <View className="flex-col items-center justify-center">
      <View className="w-full flex items-center justify-center">{icon}</View>
      <Text
        style={{ color: color }}
        className={`${
          focused ? `font-semibold ` : "font-normal text-white"
        } text-center `}
      >
        {text}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#ffffff",
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 65,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={<Feather name="home" size={24} color={color} />}
                focused={focused}
                text={"Home"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={<FontAwesome name="bookmark" size={24} color={color} />}
                focused={focused}
                text={"Bookmark"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={<FontAwesome6 name="add" size={24} color={color} />}
                focused={focused}
                text={"Create"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                color={color}
                icon={<FontAwesome name="user" size={24} color={color} />}
                focused={focused}
                text={"profile"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
