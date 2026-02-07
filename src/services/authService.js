import axiosClient from '../api/axiosClient';

const registerEmailService = async email => {
  const payload = { email };
  const response = await axiosClient.post('/auth/register-email', payload);
  return response.data;
};

const verifyEmailOtpService = async otp => {
  const payload = { otp };
  const response = await axiosClient.post('/auth/verify-otp', payload);
  return response.data;
};

const resendEmailOtpService = async email => {
  const payload = { email };
  const response = await axiosClient.post('/auth/resend-otp', payload);
  return response.data;
};

const registerService = async payload => {
  const response = await axiosClient.post('/auth/register', payload);
  return response;
};

const sigInService = async payload => {
  const response = await axiosClient.post('/auth/login', payload);
  return response;
};

const forgotPasswordService = async payload => {
  console.log(payload);
  const response = await axiosClient.post('/auth/forgot-password', payload);
  return response;
};

export { registerEmailService, verifyEmailOtpService, resendEmailOtpService, registerService, sigInService, forgotPasswordService };
