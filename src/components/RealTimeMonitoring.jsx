// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Heading, Button, VStack } from '@chakra-ui/react';

// const RealTimeMonitoring = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [streaming, setStreaming] = useState(false);
//   const [opencvLoaded, setOpencvLoaded] = useState(false);

//   useEffect(() => {
//     // Load OpenCV and start video stream when component mounts
//     const initOpenCV = () => {
//       if (window.cv && window.cv.loaded) {
//         setOpencvLoaded(true);
//         startVideoStream();
//       } else {
//         window.cv = {}; // Prevent errors if OpenCV isn't loaded yet
//         const script = document.createElement('script');
//         script.src = 'https://docs.opencv.org/4.x/opencv.js'; // You can change the version here if needed
//         script.async = true;
//         script.onload = () => {
//           window.cv['onRuntimeInitialized'] = () => {
//             setOpencvLoaded(true);
//             startVideoStream();
//           };
//         };
//         document.body.appendChild(script);
//       }
//     };

//     initOpenCV();
//   }, []);

//   const startVideoStream = () => {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       console.error('getUserMedia is not supported in this browser.');
//       return;
//     }

//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         videoRef.current.srcObject = stream;
//         setStreaming(true);
//       })
//       .catch((err) => console.error('Error accessing webcam:', err));
//   };

//   const detectFaces = () => {
//     const video = videoRef.current;
//     const canvas = canvasRef.current;

//     if (!video || !canvas || !window.cv) {
//       return;
//     }

//     const context = canvas.getContext('2d');
//     const cap = new window.cv.VideoCapture(video);

//     const processFrame = () => {
//       const src = new window.cv.Mat(video.videoHeight, video.videoWidth, window.cv.CV_8UC4);
//       cap.read(src);

//       // Convert frame to grayscale for face detection
//       const gray = new window.cv.Mat();
//       window.cv.cvtColor(src, gray, window.cv.COLOR_RGBA2GRAY, 0);

//       // Load pre-trained face detection model (haarcascade)
//       const faceCascade = new window.cv.CascadeClassifier();
//       faceCascade.load('haarcascade_frontalface_default.xml'); // Load from OpenCV.js

//       // Detect faces
//       const faces = new window.cv.RectVector();
//       const minSize = new window.cv.Size(30, 30);
//       faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0, minSize, new window.cv.Size());

//       // Draw rectangles around detected faces
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < faces.size(); i++) {
//         const face = faces.get(i);
//         context.beginPath();
//         context.rect(face.x, face.y, face.width, face.height);
//         context.lineWidth = 2;
//         context.strokeStyle = 'red';
//         context.stroke();
//       }

//       // Clean up
//       src.delete();
//       gray.delete();
//       faces.delete();
//       faceCascade.delete();
//     };

//     setInterval(processFrame, 1000 / 30); // Process at 30 FPS
//   };

//   return (
//     <Box p={8}>
//       <VStack spacing={6}>
//         <Heading as="h1" size="xl" textAlign="center">
//           Real-Time Monitoring
//         </Heading>

//         {!opencvLoaded && (
//           <Heading size="md" color="red">
//             Loading OpenCV, please wait...
//           </Heading>
//         )}

//         {opencvLoaded && !streaming && (
//           <Button colorScheme="blue" onClick={startVideoStream}>
//             Start Webcam
//           </Button>
//         )}

//         {streaming && (
//           <Box>
//             <video ref={videoRef} width="640" height="480" autoPlay muted />
//             <canvas ref={canvasRef} width="640" height="480" style={{ display: 'block' }} />
//             <Button colorScheme="green" onClick={detectFaces}>
//               Detect Faces
//             </Button>
//           </Box>
//         )}
//       </VStack>
//     </Box>
//   );
// };

// export default RealTimeMonitoring;





// import React, { useRef, useCallback, useState } from 'react';
// import Webcam from 'react-webcam';
// import { Box, Button, VStack, Text, Image } from '@chakra-ui/react';

// const RealTimeMonitoring = () => {
//   const webcamRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);

//   // Capture the image from webcam
//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc); // Store the image as data URL
//   }, [webcamRef]);

//   return (
//     <Box textAlign="center" py={6}>
//       <VStack spacing={6}>
//         <Text fontSize="2xl" fontWeight="bold">
//           Real-Time Monitoring
//         </Text>
        
//         {/* Webcam Feed */}
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={320}
//           height={240}
//           videoConstraints={{
//             width: 320,
//             height: 240,
//             facingMode: "user" // Uses the front camera
//           }}
//         />

//         {/* Capture Button */}
//         <Button colorScheme="teal" size="md" onClick={capture}>
//           Capture Image
//         </Button>

//         {/* Show Captured Image */}
//         {capturedImage && (
//           <Box>
//             <Text fontSize="lg" fontWeight="medium">Captured Image:</Text>
//             <Image
//               src={capturedImage}
//               alt="Captured face"
//               boxSize="320px"
//               objectFit="cover"
//               mt={4}
//             />
//           </Box>
//         )}
//       </VStack>
//     </Box>
//   );
// };

// export default RealTimeMonitoring;



import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { Box, VStack, Text, Alert, AlertIcon } from '@chakra-ui/react';

const RealTimeMonitoring = () => {
  const webcamRef = useRef(null);
  const [cheatingStatus, setCheatingStatus] = useState('Monitoring...');
  const [opencvLoaded, setOpencvLoaded] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [noFaceCount, setNoFaceCount] = useState(0); // Counter for no face detection
  
  useEffect(() => {
    // Load OpenCV
    const loadOpenCV = () => {
      if (window.cv && window.cv.loaded) {
        setOpencvLoaded(true);
      } else {
        window.cv = {};
        const script = document.createElement('script');
        script.src = 'https://docs.opencv.org/4.x/opencv.js';
        script.async = true;
        script.onload = () => {
          window.cv['onRuntimeInitialized'] = () => {
            setOpencvLoaded(true);
          };
        };
        document.body.appendChild(script);
      }
    };

    loadOpenCV();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (webcamRef.current && opencvLoaded) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          checkCheating(imageSrc);
        }
      }
    }, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, [opencvLoaded]);

  const checkCheating = (imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);

      const src = window.cv.imread(canvas);
      const gray = new window.cv.Mat();
      window.cv.cvtColor(src, gray, window.cv.COLOR_RGBA2GRAY, 0);

      const faceCascade = new window.cv.CascadeClassifier();
      
      // Load Haar Cascade from URL or local directory
      faceCascade.load('haarcascade_frontalface_default.xml');

      const faces = new window.cv.RectVector();
      const msize = new window.cv.Size(0, 0);
      faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0, msize, msize);

      // Handle face detection results
      if (faces.size() === 0) {
        setNoFaceCount((prevCount) => prevCount + 1);
        if (noFaceCount >= 3) { // Trigger only after 3 consecutive no-face frames
          setCheatingStatus('No face detected! Possible cheating.');
          setAlertMessage('No face detected! Possible cheating.');
        }
      } else if (faces.size() > 1) {
        setCheatingStatus('Multiple faces detected! Possible cheating.');
        setAlertMessage('Multiple faces detected! Possible cheating.');
        setNoFaceCount(0); // Reset the no-face count
      } else {
        setCheatingStatus('Monitoring... No cheating detected.');
        setAlertMessage(null); // Clear alert message
        setNoFaceCount(0); // Reset the no-face count
      }

      // Clean up OpenCV resources
      src.delete();
      gray.delete();
      faces.delete();
      faceCascade.delete();
    };
  };

  return (
    <Box textAlign="center" py={6}>
      <VStack spacing={6}>
        {/* <Text fontSize="2xl" fontWeight="bold">
          Real-Time Monitoring
        </Text> */}

        {/* Webcam Feed */}
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={320}
          height={240}
          videoConstraints={{
            width: 0,
            height: -1,
            facingMode: 'user' // Uses the front camera
          }}
        />

        {/* Cheating Status */}
        <Text fontSize="sm" color="red">
          {cheatingStatus}
        </Text>

        {/* Display Alert Message */}
        {alertMessage && (
          <Alert status="warning" mt={4}>
            <AlertIcon />
            {alertMessage}
          </Alert>
        )}
      </VStack>
    </Box>
  );
};

export default RealTimeMonitoring;
