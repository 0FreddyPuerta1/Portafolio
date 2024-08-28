import { NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from "fs";
export async function GET() {
  const filePath = join(
    process.cwd(),
    "src",
    "app",
    "api",
    "CV Freddy Puerta.pdf"
  );

  const fileBuffer = await fs.readFile(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CV Freddy Puerta.pdf"',
    },
  });
}
