import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <Auth0Provider
      domain="dev-ohlo1ckp7z4ike02.us.auth0.com"
      clientId="9iP9mTLW4u23dbGu4g9qF7IYdyJJWNRj"  
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </Auth0Provider>
  
);
