import logo from "../assets/logoipsum-custom-logo.svg"
import { HStack, Image } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <HStack px={5} py={3} bg="white">
            <Image src={logo} height={{ base: "40px", md: "50px", lg: "60px" }} />
        </HStack>
    </div>
  )
}

export default NavBar
