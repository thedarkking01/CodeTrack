import { Box, Heading, Text, VStack, Image, useColorModeValue, Stack, Icon } from '@chakra-ui/react';
import { FaCode, FaLaptopCode, FaUserShield } from 'react-icons/fa';

const About = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const highlightColor = useColorModeValue('teal.500', 'teal.200');

  return (
    <Box bg={bg} p={8} minH="100vh">
      <VStack spacing={8} align="center" maxW="6xl" mx="auto" textAlign="center">
        {/* Header Section */}
        <Heading as="h1" size="2xl" color={highlightColor} fontWeight="bold">
          About Our Online Code Editor
        </Heading>
        <Text fontSize="xl" color={textColor} maxW="4xl">
          Our platform is built to provide an intuitive and secure environment for developers to solve coding challenges, with features that enhance your learning experience and productivity.
        </Text>

        {/* Icon Section */}
        <Stack direction={['column', 'row']} spacing={12} justify="center" py={8}>
          <Box textAlign="center">
            <Icon as={FaCode} w={16} h={16} color={highlightColor} mb={4} />
            <Heading as="h3" size="lg" color={highlightColor}>
              Multi-Language Support
            </Heading>
            <Text color={textColor} mt={2}>
              Seamlessly execute code in Python, JavaScript, C++, and more with real-time feedback using the Piston API.
            </Text>
          </Box>

          <Box textAlign="center">
            <Icon as={FaLaptopCode} w={16} h={16} color={highlightColor} mb={4} />
            <Heading as="h3" size="lg" color={highlightColor}>
              Real-Time Execution
            </Heading>
            <Text color={textColor} mt={2}>
              Experience real-time code execution and output to quickly test and debug your code.
            </Text>
          </Box>

          <Box textAlign="center">
            <Icon as={FaUserShield} w={16} h={16} color={highlightColor} mb={4} />
            <Heading as="h3" size="lg" color={highlightColor}>
              Secure and Reliable
            </Heading>
            <Text color={textColor} mt={2}>
              Built-in security features including authentication via Auth0 and real-time user monitoring using OpenCV.
            </Text>
          </Box>
        </Stack>

        {/* Image and Summary Section */}
        <Image
          src="/code-editor-demo.png"
          alt="Code Editor Demo"
          borderRadius="md"
          boxShadow="lg"
          w="full"
          maxW="3xl"
          mt={6}
        />

        <Text fontSize="lg" color={textColor} mt={6} maxW="4xl">
          Whether you are practicing for coding interviews or sharpening your development skills, our platform is designed to offer the best coding environment. With full-screen integrity protection and responsive design, you can trust that your work remains secure and accessible across devices.
        </Text>
      </VStack>
    </Box>
  );
};

export default About;
