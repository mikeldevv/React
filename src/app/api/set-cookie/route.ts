import { NextResponse, NextRequest } from 'next/server';

export const POST = async (request: NextRequest) => {
  const { accessCode } = await request.json();
  console.log("Access Code:", accessCode);

  // Do something
  const response = NextResponse.json({ message: 'Operation successful' });

  const maxAge = 60 * 60 * 24; // 1 day expiration
  response.headers.set('Set-Cookie', `AuthToken=${accessCode}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure; SameSite=Strict`);

  return response;
};
