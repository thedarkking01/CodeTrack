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
