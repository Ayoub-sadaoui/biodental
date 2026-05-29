import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: assetPath } = await params;
  const filePath = path.join(
    process.cwd(),
    "public",
    "admin",
    "assets",
    ...assetPath,
  );

  try {
    const asset = await readFile(filePath);
    const contentType =
      contentTypes[path.extname(filePath).toLowerCase()] ??
      "application/octet-stream";

    return new Response(asset, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=0",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
