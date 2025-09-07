export const config = { runtime: "edge" };

const MODEL = "gpt-5-turbo";

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Only POST", { status: 405 });
  }

  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "message required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "missing openAI key" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const system = [
      "You are a consice, friendly portfolio assistant.",
      "Answer clearly in 1-5 short sentences.",
      "If you don't know, say so briefly.",
    ].join(" ");

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: system },
          { role: "user", content: message },
        ],
        temperature: 0.7,
        max_tokens: 400,
      }),
    });

    const data = await r.json();
    if (!r.ok) {
      return new Response(
        JSON.stringify({ error: data?.error?.message || "api_error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const answer = data.choices?.[0]?.message?.content?.trim() || "";
    return new Response(JSON.stringify({ answer }), {
      headers: { "Content-Type ": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e.message || e) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
