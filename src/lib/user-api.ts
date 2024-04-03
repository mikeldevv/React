const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function loginUser(userData: UserLoginData) {
    if (!baseUrl) {
      throw new Error('API base URL is not defined in the environment variables.');
    }

    const response = await fetch(`${baseUrl}/Authentication/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      // Default error message
      let errorMessage = 'Login failed';

      try {
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
              const errorResponse = await response.json();
              errorMessage = errorResponse.message || errorMessage;
          } else {
              // For non-JSON responses, such as the plain text response from your API
              errorMessage = await response.text();
          }
      } catch (error) {
          // If there's an error parsing the error response, we stick with the default message
      }

      throw new Error(errorMessage);
  }
    const result = await response.json();

    return result.accessCode;
  }

  export async function registerUser(userData: UserRegistrationData) {
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
    if (!response.ok) {
      // Default error message
      let errorMessage = 'Registration failed';

      try {
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
              const errorResponse = await response.json();
              errorMessage = errorResponse.message || errorMessage;
          } else {
              // For non-JSON responses, such as the plain text response from your API
              errorMessage = await response.text();
          }
      } catch (error) {
          // If there's an error parsing the error response, we stick with the default message
      }

      throw new Error(errorMessage);
  }
    const result = await response.json();
    return result;
  }

  export async function fetchUser() {
    const token = typeof window !== "undefined" ? localStorage.getItem('AuthToken') : null;
    
    if (!token) {
      throw new Error('No authentication token found');
    }
    
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