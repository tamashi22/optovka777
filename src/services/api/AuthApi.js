import { parseCookies, setCookie } from 'nookies';
import { request } from './request';

// Helper function to safely parse JSON
const safeParse = json => {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error('Error parsing JSON:', e);
    return null; // or return a sensible default such as {}
  }
};

// Retrieve and parse the token cookie
const getTokenFromCookies = () => {
  const cookies = parseCookies();
  return safeParse(cookies.token);
};

// Logging the token if it exists
const token = getTokenFromCookies();
if (token) {
  console.log('Token:', token);
}

// Auth API module
export const AuthApi = {
  // Send verification code to the phone number
  sendCode(phone) {
    return request.post('/v1/auth/send', { phone_number: phone });
  },

  // Verify authentication data and set cookie
  async verify(data) {
    try {
      const response = await request.post('/v1/auth/verify', data);
      const { data: responseData } = response.data;
      setCookie(null, 'token', JSON.stringify(responseData), {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
        secure: true, // Secure cookie flag (should be used in HTTPS environments)
      });
      return responseData;
    } catch (error) {
      console.error('Error during verification:', error);
      throw error; // rethrow the error after logging it
    }
  },
};
