// import { useRef, useState } from "react";
// import { Box, VStack, HStack, Textarea, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "./LanguageSelector";
// import { CODE_SNIPPETS } from "../constants";
// import Output from "./Output";

// const CodeEditor = () => {
//   const editorRef = useRef();
//   const [value, setValue] = useState("");
//   const [language, setLanguage] = useState("javascript");
//   const [problemStatement, setProblemStatement] = useState("Enter the problem statement here...");
  
//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const onSelect = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]);
//   };

//   return (
//     <Box height="100%"  bg="gray.100">
//       {/* Main Layout */}
//       <HStack spacing={4} height="100%" bg={"black"}>
        
//         {/* Left Section: Problem Statement */}
//         <Box w="50%" p={4} bg="black" borderRadius="md" boxShadow="md">
//           <Textarea
//             value={problemStatement}
//             onChange={(e) => setProblemStatement(e.target.value)}
//             height="100%"
//             placeholder="Problem statement here..."
//             bg="gray.50"
//           />
//         </Box>

//         {/* Right Section: Code Editor and Output */}
//         <VStack w="50%" spacing={4} height="100%">
//           {/* Code Editor */}
//           <Box w="100%" bg="black" borderRadius="md" boxShadow="md" flexGrow={1}>
//             <LanguageSelector language={language} onSelect={onSelect} />
//             <Editor
//               options={{
//                 minimap: { enabled: false },
//               }}
//               height="50vh"
//               theme="vs-dark"
//               language={language}
//               defaultValue={CODE_SNIPPETS[language]}
//               onMount={onMount}
//               value={value}
//               onChange={(value) => setValue(value)}
//             />
//           </Box>

//           {/* Tabs for Test Cases and Output */}
//           <Tabs w="100%" height="100%" variant="enclosed" bg="black" borderRadius="md" boxShadow="md">
//             {/* <TabList>
//               <Tab>Testcase 1</Tab>
//               <Tab>Testcase 2</Tab>
//             </TabList> */}

//             <TabPanels>
//               <TabPanel>
//                 {/* Example test case input */}
//                 <Box>
//                   {/* <Textarea
//                     placeholder="Enter inputs for test case 1..."
//                     bg="gray.50"
//                     mb={4}
//                   /> */}
//                   <Output editorRef={editorRef} language={language} />
//                 </Box>
//               </TabPanel>
//               <TabPanel>
//                 {/* Example test case input */}
//                 <Box>
//                   {/* <Textarea
//                     placeholder="Enter inputs for test case 2..."
//                     bg="gray.50"
//                     mb={4}
//                   /> */}
//                   <Output editorRef={editorRef} language={language} />
//                 </Box>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         </VStack>
//       </HStack>
//     </Box>
//   );
// };
// export default CodeEditor;

// import { useRef, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, VStack, HStack, Textarea, Tabs, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import { Editor } from "@monaco-editor/react";
// import LanguageSelector from "./LanguageSelector";
// import { CODE_SNIPPETS } from "../constants";
// import Output from "./Output";

// const CodeEditor = () => {
//   const editorRef = useRef();
//   const [value, setValue] = useState("");
//   const [language, setLanguage] = useState("javascript");
//   const [problemStatement, setProblemStatement] = useState("Enter the problem statement here...");
  
//   // Get the location object from React Router
//   const location = useLocation();
//   const { problem } = location.state || { problem: null }; // Get the problem from state

//   // Use an effect to set the problem statement when the component mounts
//   useEffect(() => {
//     if (problem) {
//       setProblemStatement(problem.statement); // Set the problem statement received from homepage
//     }
//   }, [problem]);

//   const onMount = (editor) => {
//     editorRef.current = editor;
//     editor.focus();
//   };

//   const onSelect = (language) => {
//     setLanguage(language);
//     setValue(CODE_SNIPPETS[language]);
//   };

//   return (
//     <Box height="100%" bg="gray.100">
//       {/* Main Layout */}
//       <HStack spacing={4} height="100%" bg={"black"}>
        
//         {/* Left Section: Problem Statement */}
//         <Box w="50%" p={4} bg="black" borderRadius="md" boxShadow="md">
//           <Textarea
//             value={problemStatement}
//             onChange={(e) => setProblemStatement(e.target.value)}
//             height="100%"
//             placeholder="Problem statement here..."
//             bg="gray.50"
//             isReadOnly // Make it read-only since we want to display the statement
//           />
//         </Box>

//         {/* Right Section: Code Editor and Output */}
//         <VStack w="50%" spacing={4} height="100%">
//           {/* Code Editor */}
//           <Box w="100%" bg="black" borderRadius="md" boxShadow="md" flexGrow={1}>
//             <LanguageSelector language={language} onSelect={onSelect} />
//             <Editor
//               options={{
//                 minimap: { enabled: false },
//               }}
//               height="50vh"
//               theme="vs-dark"
//               language={language}
//               defaultValue={CODE_SNIPPETS[language]}
//               onMount={onMount}
//               value={value}
//               onChange={(value) => setValue(value)}
//             />
//           </Box>

//           {/* Tabs for Test Cases and Output */}
//           <Tabs w="100%" height="100%" variant="enclosed" bg="black" borderRadius="md" boxShadow="md">
//             <TabPanels>
//               <TabPanel>
//                 <Box>
//                   <Output editorRef={editorRef} language={language} />
//                 </Box>
//               </TabPanel>
//               <TabPanel>
//                 <Box>
//                   <Output editorRef={editorRef} language={language} />
//                 </Box>
//               </TabPanel>
//             </TabPanels>
//           </Tabs>
//         </VStack>
//       </HStack>
//     </Box>
//   );
// };

// export default CodeEditor;

import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, VStack, HStack, Textarea, Tabs, TabPanels, TabPanel } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [problemStatement, setProblemStatement] = useState("Enter the problem statement here...");
  const [problemName, setProblemName] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { problem } = location.state || { problem: null };

  // Automatically enter full-screen mode on page load
  useEffect(() => {
    if (problem) {
      setProblemStatement(problem.statement); // Set the problem statement
      setProblemName(problem.name); // Set the problem name
    }

    // Request full-screen mode
    const enterFullScreen = () => {
      const element = document.documentElement; // Full-screen the entire page
      if (!document.fullscreenElement) {
        element.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err.message);
        });
      }
    };

    // Trigger full-screen when the component mounts
    enterFullScreen();

    // Listen for full-screen exit event
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        // User has exited full-screen mode, show alert and redirect
        alert("You exited full-screen mode. Returning to the homepage.");
        navigate("/");
      }
    };

    // Add the event listener to handle full-screen changes
    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [problem, navigate]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box height="100%" bg="gray.100">
      <HStack spacing={4} height="100%" bg={"black"}>
        {/* Left Section: Problem Statement */}
        <Box w="50%" p={4} bg="black" borderRadius="md" boxShadow="md">
          <Box textColor="white" fontSize="24px" mb={4} fontWeight="bold">
            {problemName || "Problem Name"}
          </Box>
          <Textarea
            value={problemStatement}
            onChange={(e) => setProblemStatement(e.target.value)}
            height="100%"
            placeholder="Problem statement here..."
            theme="vs-dark"
            fontSize="17px"
            textColor="white"
            fontFamily="monospace"
            resize="none"
            minHeight="732px"
            isReadOnly // Make it read-only since we want to display the statement
          />
        </Box>

        {/* Right Section: Code Editor and Output */}
        <VStack w="50%" spacing={4} height="100%">
          {/* Code Editor */}
          <Box w="100%" bg="black" borderRadius="md" boxShadow="md" flexGrow={1}>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: { enabled: false },
              }}
              height="50vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>

          {/* Tabs for Test Cases and Output */}
          <Tabs w="100%" height="100%" variant="enclosed" bg="black" borderRadius="md" boxShadow="md">
            <TabPanels>
              <TabPanel>
                <Box>
                  <Output editorRef={editorRef} language={language} />
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Output editorRef={editorRef} language={language} />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CodeEditor;
