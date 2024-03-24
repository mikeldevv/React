
interface UserLoginData {
    emailAddress: string;
    password: string;
  }

export async function loginUser(userData: UserLoginData) {
   
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error('API base URL is not defined in the environment variables.');
    }
  
    const response = await fetch(`${baseUrl}/Authentication/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( userData ),
    });
    const result = await response.json();
    return result;
  }