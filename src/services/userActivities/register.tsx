
interface UserRegistrationData {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    otp: string;
  }

export async function registerUser(userData: UserRegistrationData) {
   
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error('API base URL is not defined in the environment variables.');
    }
  
    const response = await fetch(`${baseUrl}/User/Register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( userData ),
    });
    const result = await response.json();
    return result;
  }