import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Parent_platform } from "@/hooks/useGames";
import type { IconType } from "react-icons";

interface Props {
  platforms: Parent_platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack spacing={2} marginY={2}>
      {platforms.map(({ platform }) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? (
          <Icon
            key={platform.id}
            as={IconComponent}
            color="gray.600"
            boxSize={5}
            _hover={{ color: "blue.400", transform: "scale(1.1)" }} 
            transition="all 0.2s ease-in-out"
          />
        ) : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
