import { useState } from "react";
export default function MahadAI() {
  const [input, setInput] = useState("");
  const [out, setOut] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim() || loading) return;
    setLoading(true);
    setOut("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setOut(data.answer || "no answer");
    } catch (e) {
      setOut("Sorry - something went wrong");
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading || !input.trim()}>
        Send
      </button>
      <p>{out}</p>
    </form>
  );
}
