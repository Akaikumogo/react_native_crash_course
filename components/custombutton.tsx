import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  text,
  width,
  additionalStyle,
  pressFunction,
}: {
  text: string;
  width: string;
  additionalStyle: string;
  pressFunction: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => pressFunction()}
      className={`w-[${width}] bg-white mx-auto py-[15px] flex items-center rounded-md ${additionalStyle} `}
    >
      <Text className="font-extrabold">{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
