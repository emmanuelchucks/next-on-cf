export const runtime = "edge";

const names = ["John", "Paul", "George", "Ringo"];

export function GET(_request: Request) {
  return Response.json(names);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name");

  if (typeof name !== "string") {
    return Response.json({ error: "Invalid name" }, { status: 400 });
  }

  names.push(name);

  return Response.json(names);
}
