export const register = async (credentials) => {
  const registerAttempt = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(credentials),
  });
  const response = await registerAttempt.json();
  return response;
};
