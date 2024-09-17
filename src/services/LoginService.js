const API_URL = import.meta.env.VITE_API_URL;
const USERS_ENDPOINT = import.meta.env.VITE_USERS_ENDPOINT;

const login = async (credentials) => {
  const response = await fetch(`${API_URL}${USERS_ENDPOINT}?email=${credentials.email}`);
  const users = await response.json();

  if (users.length === 0) {
    throw new Error(`Doesn't exist user with email: ${credentials.email}`);
  }

  const user = users.find(
    (user) =>
      user.email === credentials.email &&
      user.password === credentials.password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return user;
};

const LoginService = { login };

export default LoginService;