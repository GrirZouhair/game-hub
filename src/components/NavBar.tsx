import logo from "../assets/logoipsum-custom-logo.svg"
import { HStack, Image, Box } from '@chakra-ui/react'
import ThemeToggle from './ThemeToggle.tsx'

const NavBar = () => {
  return (
    <Box 
      bg="white" 
      boxShadow="sm"
      backgroundColor={'#1f1f1f'}
    >
        <HStack 
        px={{ base: 4, md: 6, lg: 8 }} 
        py={3} 
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
      >
        {/* Logo Section */}
        <Box>
          <Image 
            src={logo} 
            alt="Company Logo"
            height={{ base: "40px", md: "50px", lg: "60px" }}
            width="auto"
          />
        </Box>

        {/* Theme Toggle Section */}
        <ThemeToggle />
      </HStack>
    </Box>
  )
}

export default NavBar