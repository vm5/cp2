import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Verification({ onVerify }) {
  const [srns, setSrns] = useState('');
  const [alumniCode, setAlumniCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStudentVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if ((srns.length === 13 || srns.length === 14)  &&  srns.startsWith("PES") && srns.includes("UG")) {
        onVerify();
      } else {
        alert('Please provide a valid SRN');
      }
    }, 2000); // Simulating a delay for verification
  };

  const handleAlumniVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (alumniCode === 'pes') {
        window.location.href='https://connectpesalumni.vercel.app/';
      } else {
        alert('Please provide a valid alumni code');
      }
    }, 2000); // Simulating a delay for verification
  };

  return (
    <PageContainer>
      <VerificationWrapper>
        <VerificationContainer>
          <Title>Student Verification</Title>
          <Description>The first step is student verification. This is simply to verify and confirm that you are a student of PES University.</Description>
          <Input
            type="text"
            placeholder="Enter your SRN (Case-sensitive)"
            value={srns}
            onChange={(e) => setSrns(e.target.value)}
          />
          <Button onClick={handleStudentVerification}>Verify</Button>
        </VerificationContainer>
        <VerificationContainer>
          <Title>Alumni Verification</Title>
          <Description>If you are an alumni, please enter your verification code.</Description>
          <Input
            type="text"
            placeholder="Enter your Alumni Code (Case-Sensitive)"
            value={alumniCode}
            onChange={(e) => setAlumniCode(e.target.value)}
          />
          <Button onClick={handleAlumniVerification}>Verify</Button>
        </VerificationContainer>
      </VerificationWrapper>
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
    </PageContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #FF6F00, #003366);
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
`;

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;  // Adjusted for better fit on screens
`;

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  max-width: 60000px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  color: #666;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 50%;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #333;
    outline: none;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export default Verification;
