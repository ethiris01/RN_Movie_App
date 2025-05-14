import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
     <Image
     source={images.bg}
     className='flex-1 absolute w-full z-0'
     resizeMode='cover'
     />
          <View
       className='w-full flex-row justify-center mt-8 items-center'
      >
        <Image
        source={icons.logo}
        className='w-12 h-10'
        />
      </View>
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">About</Text>
      </View>
    </SafeAreaView>
  );
};

export default profile;