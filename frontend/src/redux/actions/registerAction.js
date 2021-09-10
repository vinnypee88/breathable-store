export const register = async (credentials) => {
  const registerAttempt = await fetch("/api/register", {
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
