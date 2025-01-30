// import React from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import {
//   Box,
//   Flex,
//   Avatar,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   Link,
//   Stack,
//   useColorModeValue,
// } from '@chakra-ui/react';

// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { loginWithRedirect } = useAuth0();
//   const { logout } = useAuth0();
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };

//   return (
//     <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//       <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//         {/* Left Section: Logo or Brand */}
//         <Box>
//           <Link href="/" fontWeight="bold" fontSize="xl">
//             MyApp
//           </Link>
//         </Box>

//         {/* Center: Add any additional nav links if needed */}
//         <Stack direction={'row'} spacing={4}>
//           <Link href="/about" fontWeight="medium">
//             About
//           </Link>
//           <Link href="/services" fontWeight="medium">
//             Services
//           </Link>
//         </Stack>

//         {/* Right Section: User Profile, Login & Signup */}
//         <Flex alignItems={'center'}>
//           {/* Menu for Profile */}
//           <Menu>
//             <MenuButton
//               as={Button}
//               rounded={'full'}
//               variant={'link'}
//               cursor={'pointer'}
//               minW={0}>
//               <Avatar size={'sm'} src={'https://bit.ly/dan-abramov'} />
//             </MenuButton>
//             <MenuList>
//               <MenuItem>Profile</MenuItem>
//               <MenuItem>Settings</MenuItem>
//               <MenuDivider />
//               <MenuItem><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button></MenuItem>
//             </MenuList>
//           </Menu>

//           {/* Login Button */}
//           <Button
//             as={Link}
//             href="/login"
//             fontSize={'sm'}
//             fontWeight={600}
//             variant={'outline'}
//             colorScheme={'teal'}
//             ml={4}
//             onClick={() => loginWithRedirect()}>
//             Login
//           </Button>

//           {/* Signup Button */}
//           <Button
//             as={Link}
//             href="/signup"
//             fontSize={'sm'}
//             fontWeight={600}
//             colorScheme={'teal'}
//             ml={2}>
//             Sign Up
//           </Button>
//         </Flex>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import About from './About';

const Navbar = () => {
  // Destructure Auth0 hooks for authentication
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  // Loading state (optional)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        {/* Left Section: Logo or Brand */}
        <Box>
          <Link href="/" fontWeight="bold" fontSize="xl" color='teal'>
            CodeTrack
          </Link>
        </Box>

        {/* Center: Add any additional nav links if needed */}
        <Stack direction={'row'} spacing={4}>
          <Link href="/About" fontWeight="medium">
            About
          </Link>
          <Link href="/Services" fontWeight="medium">
            Services
          </Link>
        </Stack>

        {/* Right Section: User Profile, Login & Signup */}
        <Flex alignItems={'center'}>
          {isAuthenticated ? (
            <>
              {/* Menu for Profile */}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={user.picture} />
                </MenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <Button
                      variant="link"
                      onClick={() =>
                        logout({ logoutParams: { returnTo: window.location.origin } })
                      }
                    >
                      Log Out
                    </Button>
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <>
              {/* Login Button */}
              <Button
                fontSize={'sm'}
                fontWeight={600}
                variant={'outline'}
                colorScheme={'teal'}
                ml={4}
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>

              {/* Signup Button */}
              <Button
                fontSize={'sm'}
                fontWeight={600}
                colorScheme={'teal'}
                ml={2}
                onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
              >
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
