import React from 'react';
import { Box, Text, VStack, HStack, Link, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={6} px={4} mt={8}>
      <VStack spacing={4}>
        {/* Logo and Description */}
          <Link href="/" fontWeight="bold" fontSize="xl" color='teal'>
            CodeTrack
          </Link>
        <Text textAlign="center" fontSize="sm" maxW="600px">
          A secure and real-time coding platform for practicing and solving coding challenges across multiple languages, integrated with Piston API, OpenCV, and MongoDB for efficient user management and monitoring.
        </Text>
        <Divider borderColor="gray.600" />

        {/* Quick Links */}
        <HStack spacing={6}>
          <Link href="/about" fontSize="sm" color="gray.300" _hover={{ color: 'white' }}>
            About
          </Link>
          <Link href="/services" fontSize="sm" color="gray.300" _hover={{ color: 'white' }}>
            Services
          </Link>
          <Link href="/contact" fontSize="sm" color="gray.300" _hover={{ color: 'white' }}>
            Contact
          </Link>
          <Link href="/privacy" fontSize="sm" color="gray.300" _hover={{ color: 'white' }}>
            Privacy Policy
          </Link>
        </HStack>


        <Divider borderColor="gray.600" />
        {/* Copyright */}
        <Text fontSize="xs" color="gray.400">
          © {new Date().getFullYear()} CodeTrack. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
