import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CodeEditor from "./components/CodeEditor";
import dsaProblems from "../src/components/dsaProblems"; // Import the dsaProblems array
import Navbar from "./components/Navbar"; // Ensure correct import
import About from "./components/About";
import Services from "./components/Services";
import RealTimeMonitoring from "./components/RealTimeMonitoring"; // Import the RealTimeMonitoring component
import Footer from "./components/Footer";

const Home = () => {
  const resetAttemptedProblems = () => {
    dsaProblems.forEach((problem) => {
      localStorage.removeItem(`attempted-${problem.name}`);
    });
    alert("All attempted problems have been reset!");
    window.location.reload(); // Refresh to reflect changes
  };

  return (
    <>
      <Navbar />
      <Box textAlign="center" p={4}>
        <h1>Welcome to CheapCode</h1>
        <p>
          Click the button below to start coding or explore real-time
          monitoring!
        </p>

  
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
              {dsaProblems.map((problem, index) => {
                const isAttempted = localStorage.getItem(
                  `attempted-${problem.name}`
                ); // Check if attempted

                return (
                  <Tr key={index}>
                    <Td>{problem.name}</Td>
                    <Td>{problem.difficulty}</Td>
                    <Td>{problem.topic}</Td>
                    <Td>
                      {isAttempted ? (
                        <Box as="span" color="green.500" fontWeight="bold">
                          Attempted
                        </Box>
                      ) : (
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
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>

        {/* Reset Button */}
        <Box mt={4}>
          <Box
            as="button"
            bg="red.500"
            color="white"
            p={3}
            borderRadius="md"
            _hover={{ bg: "red.600" }}
            onClick={resetAttemptedProblems}
          >
            Reset Attempted Questions
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/real-time-monitoring" element={<RealTimeMonitoring />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
