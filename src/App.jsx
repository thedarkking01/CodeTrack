// // import { Box } from "@chakra-ui/react";
// // import CodeEditor from "./components/CodeEditor";

// // function App() {
// //   return (
// //     <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
// //       <CodeEditor />
// //     </Box>
// //   );
// // }

// // export default App;

// import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import Router components
// import CodeEditor from "./components/CodeEditor";

// // Sample DSA problems
// const dsaProblems = [
//   { name: "Two Sum", difficulty: "Easy", topic: "Array" },
//   { name: "Valid Anagram", difficulty: "Easy", topic: "String" },
//   { name: "Merge Intervals", difficulty: "Medium", topic: "Array" },
//   { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", topic: "String" },
//   { name: "Binary Search", difficulty: "Medium", topic: "Searching" },
//   { name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", topic: "Tree" },
//   { name: "Maximum Depth of Binary Tree", difficulty: "Easy", topic: "Tree" },
//   { name: "Rotate Image", difficulty: "Medium", topic: "Array" },
// ];

// const Home = () => {
//   return (
//     <Box textAlign="center" p={4}>
//       <h1>Welcome to the Code Playground</h1>
//       <p>Click the button below to start coding!</p>
//       <Link to="/code-editor">
//         <Box
//           as="button"
//           bg="teal.500"
//           color="white"
//           p={3}
//           borderRadius="md"
//           _hover={{ bg: "teal.600" }}
//         >
//           Go to Code Editor
//         </Box>
//       </Link>

//       {/* DSA Problems Table */}
//       <Box mt={8} overflowX="auto">
//         <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Question Name</Th>
//               <Th>Difficulty Level</Th>
//               <Th>Topic</Th>
//               <Th>Action</Th> {/* Add an Action column for the button */}
//             </Tr>
//           </Thead>
//           <Tbody>
//             {dsaProblems.map((problem, index) => (
//               <Tr key={index}>
//                 <Td>{problem.name}</Td>
//                 <Td>{problem.difficulty}</Td>
//                 <Td>{problem.topic}</Td>
//                 <Td>
//                   <Link to="/code-editor" state={{ problem: problem.name }}>
//                     <Box
//                       as="button"
//                       bg="teal.500"
//                       color="white"
//                       p={3}
//                       borderRadius="md"
//                       _hover={{ bg: "teal.600" }}
//                     >
//                       Go to Code Editor
//                     </Box>
//                   </Link>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </Box>
//     </Box>
//   );
// };

// function App() {
//   return (
//     <Router> {/* Wrap your app with Router */}
//       <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Home route */}
//           <Route path="/code-editor" element={<CodeEditor />} /> {/* CodeEditor route */}
//         </Routes>
//       </Box>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import CodeEditor from "./components/CodeEditor";
import dsaProblems from "../src/components/dsaProblems"; // Import the dsaProblems array

const Home = () => {
  return (
    <Box textAlign="center" p={4}>
      <h1>Welcome to the CheapCode</h1>
      <p>Click the button below to start coding!</p>
      <Link to="/code-editor">
        <Box
          as="button"
          bg="teal.500"
          color="white"
          p={3}
          borderRadius="md"
          _hover={{ bg: "teal.600" }}
        >
          Go to Code Editor
        </Box>
      </Link>

      {/* DSA Problems Table */}
      <Box mt={8} overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Question Name</Th>
              <Th>Difficulty Level</Th>
              <Th>Topic</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dsaProblems.map((problem, index) => (
              <Tr key={index}>
                <Td>{problem.name}</Td>
                <Td>{problem.difficulty}</Td>
                <Td>{problem.topic}</Td>
                <Td>
                  <Link to="/code-editor" state={{ problem }}>
                    <Box
                      as="button"
                      bg="teal.500"
                      color="white"
                      p={3}
                      borderRadius="md"
                      _hover={{ bg: "teal.600" }}
                    >
                      Go to Code Editor
                    </Box>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-editor" element={<CodeEditor />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;

