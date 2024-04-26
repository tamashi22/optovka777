import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';

const BASE_URL = 'https://online-store-kv77.onrender.com/online-store';

// Helper function to safely parse JSON
const safeParse = json => {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error('Error parsing JSON:', e);
    return null;
  }
};

const axiosRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

// Function to refresh token
async function refreshToken(refreshToken) {
  try {
    const response = await axios.post(`${BASE_URL}/v1/auth/refresh`, {
      refresh_token: refreshToken,
    });
    const { access_token, refresh_token } = response.data;
    // Update cookies with new tokens
    setCookie(null, 'token', JSON.stringify({ access_token, refresh_token }), {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/',
      secure: true,
    });
    return { access_token, refresh_token };
  } catch (error) {
    throw error;
  }
}

// Request interceptor to add token
axiosRequest.interceptors.request.use(
  config => {
    const cookies = parseCookies();
    const token = safeParse(cookies.token);
    if (token && token.access_token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle 401 Unauthorized
axiosRequest.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // mark the request to avoid infinite loop
      const cookies = parseCookies();
      const token = safeParse(cookies.token);
      try {
        const newTokens = await refreshToken(token.refresh_token);
        originalRequest.headers.Authorization = `Bearer ${newTokens.access_token}`;
        return axiosRequest(originalRequest); // retry the original request with new token
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export { axiosRequest as request };
