import { NextRequest, NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await res.json();

  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title)
    return NextResponse.json({ message: "Todo missing required data" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "API-Key": API_KEY },
    body: JSON.stringify({ userId, title, completed: false }),
  });

  const newTodos = await res.json();
  return NextResponse.json(newTodos);
}

export async function PUT(request: NextRequest) {
  const { userId, title, completed, id }: Partial<Todo> = await request.json();

  if (!userId || !title || !id || typeof completed !== "boolean")
    return NextResponse.json({ message: "Todo missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "API-Key": API_KEY },
    body: JSON.stringify({ userId, title, completed }),
  });

  const updatedTodos = await res.json();
  return NextResponse.json(updatedTodos);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ message: "Todo id required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", "API-Key": API_KEY },
  });

  return NextResponse.json({ message: `Todo ${id}  deleted` });
}
