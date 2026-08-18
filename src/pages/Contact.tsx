import { useState } from "react";

import { quickQuestions } from "../data/questions";

const API_URL = "https://api.jayalvin.co";
const SESSION_STORAGE_KEY = "jayalvin-ai-session";

function shuffleQuestions(items: string[]) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function Contact() {
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [promptOptions, setPromptOptions] = useState<string[]>(() =>
    shuffleQuestions(quickQuestions).slice(0, 2),
  );
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

  const submitQuestion = async (prompt: string) => {
    const trimmedMessage = prompt.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    setQuestion(trimmedMessage);
    setAnswer("");
    setError("");
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedMessage,
          session_id: sessionId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
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
    <main className="mx-auto flex min-h-[calc(10vh-4rem)] max-w-7xl items-center justify-center px-6 py-20">
      <section className="w-full max-w-2xl">

        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold tracking-tight sm:text-3xl">
            Hello! I'm Jay Alvin{" "}
            <span className="text-blue-500">
              Co
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            <a href="tel:+2349055741020" className="inline-flex items-center gap-1 text-zinc-400 transition hover:text-blue-400">
              <span aria-hidden="true">📱</span>
              <span>09055741020</span>
            </a>
            <span className="mx-2"> </span>
            <a href="mailto:jalbinco@gmail.com" className="inline-flex items-center gap-1 text-zinc-400 transition hover:text-blue-400">
              <span aria-hidden="true">📧</span>
              <span>jalbinco@gmail.com</span>
            </a>
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            Wanna ask something? You may also click quick questions below. "I" will answer!
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-500">
            Note: LLM Model may sometimes be unavailable due to a free model being used, I will tell my agent ASAP to fix this!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-wrap gap-2">
            {promptOptions.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => {
                  const nextPrompt =
                    quickQuestions[
                      Math.floor(Math.random() * quickQuestions.length)
                    ];

                  setPromptOptions((current) => {
                    if (current.length <= 1) {
                      return shuffleQuestions(quickQuestions).slice(0, 2);
                    }

                    const remaining = current.filter((item) => item !== prompt);
                    const nextOptions = [...remaining, nextPrompt];
                    return shuffleQuestions(nextOptions).slice(0, 2);
                  });

                  void submitQuestion(prompt);
                }}
                className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                {prompt}
              </button>
            ))}
          </div>

          <textarea
            id="question"
            name="question"
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            placeholder="Type your question here..."
            rows={2}
            disabled={isLoading}
            className="h-28 w-full resize-none rounded-2xl border border-zinc-800 bg-zinc-900/70 px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              disabled={
                !message.trim() ||
                isLoading
              }
              className="cursor-pointer rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isLoading
                ? "Thinking..."
                : "Ask Me"}
            </button>
          </div>
        </form>

        {question && (
          <div className="mt-12 space-y-8">

            <div className="pl-5">
              <p className="mb-2 text-sm font-medium text-zinc-400">
                You
              </p>

              <div className="rounded-2xl border border-zinc-800 bg-blue-500 px-5 py-4 text-zinc-200">
                {question}
              </div>
            </div>

            {isLoading && (
              <div className="pr-5">
                <p className="mb-2 text-sm font-medium text-blue-400">
                  AI Me
                </p>

                <div className="rounded-2xl border border-zinc-800 bg-gray-200 px-5 py-4 text-black">
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
                <div className="pr-3">
                  <p className="mb-2 text-sm font-medium text-blue-400">
                    AI Me
                  </p>

                  <div className="rounded-2xl border border-zinc-800 bg-gray-200 px-5 py-4 leading-relaxed text-black">
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