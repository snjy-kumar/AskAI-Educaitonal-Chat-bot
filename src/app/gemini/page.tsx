"use client";
import { useChat } from "ai/react";
import { Bot, Loader2, Send, User2 } from "lucide-react";
import Markdown from "@/components/Markdown";

export default function Home() {

  
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: "/api/genai",
    });
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/* form element */}
      {RenderForm()}
      {RenderMessages()}
      {/* rendering messages */}
    </main>
  );

  // inner render functions
  function RenderForm() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(event, {
            data: {
              prompt: input,
            },
          });
        }}
        className="w-full flex flex-row gap-2 items-center h-full"
      >
        <input
          type="text"
          placeholder={isLoading ? "Generating . . ." : "ask something . . . "}
          value={input}
          disabled={isLoading}
          onChange={handleInputChange}
          className="border-b border-dashed rounded-md outline-none w-full ml-10 px-4 py-2 text-black placeholder:text-black text-left focus:placeholder-transparent disabled:bg-transparent"
        />
        <button
          type="submit"
          className="rounded-full shadow-md border flex flex-row"
        >
          {isLoading ? (
            <Loader2
              onClick={stop}
              className="p-3 h-10 w-10 stroke-sky-500 animate-spin"
            />
          ) : (
            <Send className="p-3 h-10 w-10 stroke-stone-500" />
          )}
        </button>
      </form>
    );
  }

  function RenderMessages() {
    return (
      <div id="chatbox" className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
        {messages.map((m, index) => {
          return (
            <div
              className={`p-4 shadow-md rounded-md ml-10 relative ${
                m.role === "user" ? "bg-sky-400 mr-10" : "bg-stone-500 text-white mr-10"
              }`}
              key={index}
            >
              <Markdown text={m.content} />
              {m.role === "user" ? (
                <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg text-sky-600" />
              ) : (
                <Bot
                  className={`absolute top-2 -left-10 border rounded-full p-1 shadow-lg stroke-white ${
                    isLoading && index === messages.length - 1
                      ? "animate-bounce"
                      : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}