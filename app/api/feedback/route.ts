import { NextResponse } from "next/server";

type Feedback = {
  name?: string;
  email?: string;
  message?: string;
};

export const POST = async (request: Request) => {
  const data: Feedback = await request.json();
  console.log("data: ", data);
  // const { email, message, name } = data;
  return NextResponse.json(data);
};
