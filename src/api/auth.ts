const API_URL = 'https://4027-202-79-184-241.ngrok-free.app/auth';

const handleResponse = async (response: Response) => {
  const data = await response.json();
  console.log('Server response:', data);
  if (!response.ok) {
    throw new Error(data.message || 'Произошла ошибка');
  }
  return data;
};

export const registerUser = async (email: string) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  return handleResponse(response);
};

export const verifyEmail = async (email: string, code: string) => {
  console.log('Sending verification request:', { email, code });
  const response = await fetch(`${API_URL}/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code }),
  });
  const data = await response.json();
  console.log('Server response:', data);
  if (!response.ok) {
    throw new Error(data.message || 'An error occurred');
  }
  return data;
};

export const completeRegistration = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/complete-registration`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};