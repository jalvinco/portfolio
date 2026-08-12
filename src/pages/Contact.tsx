import { useState } from "react";

const API_URL = "https://api.jayalvin.co";
const SESSION_STORAGE_KEY = "jayalvin-ai-session";

function Contact() {
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [sessionId] = useState(() => {
  const existing =
    localStorage.getItem(
      SESSION_STORAGE_KEY,
    );

  if (existing) {
    return existing;
  }

  const newSession =
    crypto.randomUUID();

  localStorage.setItem(
    SESSION_STORAGE_KEY,
    newSession,
  );

  return newSession;
});

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    setQuestion(trimmedMessage);
    setAnswer("");
    setError("");
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: trimmedMessage,
            session_id: sessionId,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Something went wrong.",
        );
      }

      setAnswer(
        data.response ||
          "I received your question, but I couldn't generate a response.",
      );
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center justify-center px-6 py-20">
      <section className="w-full max-w-2xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hello! I'm Jay Alvin{" "}
            <span className="text-blue-500">
              Co
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Ask me a question! Any question,
            my AI me will answer!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="question"
            className="mb-3 block text-sm font-medium text-zinc-300"
          >
            Ask me anything
          </label>

          <textarea
            id="question"
            name="question"
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            placeholder="Type your question here..."
            rows={6}
            disabled={isLoading}
            className="w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={
                !message.trim() ||
                isLoading
              }
              className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLoading
                ? "Thinking..."
                : "Ask Me"}
            </button>
          </div>
        </form>

        {question && (
          <div className="mt-12 space-y-8">

            <div>
              <p className="mb-2 text-sm font-medium text-zinc-400">
                You
              </p>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-5 py-4 text-zinc-200">
                {question}
              </div>
            </div>

            {isLoading && (
              <div>
                <p className="mb-2 text-sm font-medium text-blue-400">
                  AI Me
                </p>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 text-zinc-500">
                  Thinking...
                </div>
              </div>
            )}

            {error && !isLoading && (
              <div>
                <p className="mb-2 text-sm font-medium text-red-400">
                  Error
                </p>

                <div className="rounded-2xl border border-red-900/50 bg-red-950/20 px-5 py-4 text-red-300">
                  {error}
                </div>
              </div>
            )}

            {answer &&
              !isLoading &&
              !error && (
                <div>
                  <p className="mb-2 text-sm font-medium text-blue-400">
                    AI Me
                  </p>

                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 leading-relaxed text-zinc-300">
                    {answer}
                  </div>
                </div>
              )}
          </div>
        )}
      </section>
    </main>
  );
}

export default Contact;