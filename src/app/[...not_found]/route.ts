import { readFileSync } from "node:fs";
import { join } from "node:path";
import { pageFor, renderPage } from "../../render";
import View from "../../views/Section404Page";

export const dynamic = "force-static";

export async function GET() {
  const html =
    process.env.NODE_ENV === "development"
      ? await renderPage(pageFor("404.html"), View)
      : readFileSync(join(process.cwd(), ".rendered", "404.html"), "utf8");
  return new Response(html, {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
