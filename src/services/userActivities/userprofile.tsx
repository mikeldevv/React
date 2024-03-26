
export async function fetchUser() {
  const token = typeof window !== "undefined" ? localStorage.getItem('AuthToken') : null;
  
  if (!token) {
    throw new Error('No authentication token found');
  }
  
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!baseUrl) {
    throw new Error('API base URL is not defined in the environment variables.');
  }
  
  const response = await fetch(`${baseUrl}/User/WhoAmI`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch user info: ${response.status} ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  return data;
}
