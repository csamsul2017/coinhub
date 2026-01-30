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

export { registerEmailService, verifyEmailOtpService, resendEmailOtpService };
