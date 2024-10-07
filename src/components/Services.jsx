import { Box, Heading, Text, VStack, List, ListItem, ListIcon, Icon, Stack, useColorModeValue } from '@chakra-ui/react';
import { FaLaptopCode, FaUserShield, FaLock, FaExpand, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const highlightColor = useColorModeValue('teal.500', 'teal.200');

  return (
    <Box bg={bg} p={8} minH="100vh">
      <VStack spacing={8} align="center" maxW="6xl" mx="auto" textAlign="center">
        {/* Header */}
        <Heading as="h1" size="2xl" color={highlightColor}>
          Our Services
        </Heading>
        <Text fontSize="xl" color={textColor} maxW="4xl">
          We provide a comprehensive set of tools and services designed to enhance your coding experience with a focus on security, flexibility, and performance.
        </Text>

        {/* Services List with Icons */}
        <Stack direction={['column', 'row']} spacing={12} justify="center" py={8}>
          <VStack align="center" spacing={6}>
            <Box textAlign="center">
              <Icon as={FaLaptopCode} w={16} h={16} color={highlightColor} mb={4} />
              <Heading as="h3" size="lg" color={highlightColor}>
                Code Execution
              </Heading>
              <Text color={textColor} mt={2}>
                Execute code in multiple languages with real-time feedback, powered by the Piston API.
              </Text>
            </Box>

            <Box textAlign="center">
              <Icon as={FaUserShield} w={16} h={16} color={highlightColor} mb={4} />
              <Heading as="h3" size="lg" color={highlightColor}>
                Real-Time Monitoring
              </Heading>
              <Text color={textColor} mt={2}>
                Ensure fair coding practices with real-time user monitoring powered by OpenCV.
              </Text>
            </Box>
          </VStack>

          <VStack align="center" spacing={6}>
            <Box textAlign="center">
              <Icon as={FaLock} w={16} h={16} color={highlightColor} mb={4} />
              <Heading as="h3" size="lg" color={highlightColor}>
                Secure Authentication
              </Heading>
              <Text color={textColor} mt={2}>
                Integrated with Auth0 for secure user authentication and protection of personal data.
              </Text>
            </Box>

            <Box textAlign="center">
              <Icon as={FaExpand} w={16} h={16} color={highlightColor} mb={4} />
              <Heading as="h3" size="lg" color={highlightColor}>
                Full-Screen Integrity
              </Heading>
              <Text color={textColor} mt={2}>
                Our platform protects user integrity by automatically redirecting when leaving full-screen mode.
              </Text>
            </Box>

            <Box textAlign="center">
              <Icon as={FaMobileAlt} w={16} h={16} color={highlightColor} mb={4} />
              <Heading as="h3" size="lg" color={highlightColor}>
                Responsive Interface
              </Heading>
              <Text color={textColor} mt={2}>
                Experience a smooth interface across devices, optimized for both desktop and mobile screens.
              </Text>
            </Box>
          </VStack>
        </Stack>
      </VStack>
    </Box>
  );
};

export default Services;
