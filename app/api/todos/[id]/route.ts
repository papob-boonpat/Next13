import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // get id with slice
  // const id = request.url.slice(request.url.lastIndexOf("/") + 1);

  // get params with params
  const { id } = params;
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`);

  const todo: Todo = await res.json();

  if (!todo.id) NextResponse.json({ message: "Todo Not Found" });
  return NextResponse.json(todo);
}
