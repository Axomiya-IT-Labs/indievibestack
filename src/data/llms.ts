// ============================================================
// Scalable registry of AI models you can "Launch" a prompt into.
// To add another model, just append one entry to `LLMS` — every
// launch button (prompt pages + site footer) updates automatically.
// ============================================================

export interface LLM {
  id: string;
  name: string;
  shortName: string;
  description: string;
  buttonClass: string;
  buildUrl: (promptText: string) => string;
  domain: string;
}

export const LLMS: LLM[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    shortName: "ChatGPT",
    description: "OpenAI",
    buttonClass: "bg-[#10A37F] hover:bg-[#0E8A6B] text-white",
    buildUrl: (t) => `https://chatgpt.com/?q=${encodeURIComponent(t)}`,
    domain: "chatgpt.com",
  },
  {
    id: "grok",
    name: "Grok",
    shortName: "Grok",
    description: "xAI",
    buttonClass: "bg-[#1A1A1A] hover:bg-black text-white",
    buildUrl: (t) => `https://grok.com/?q=${encodeURIComponent(t)}`,
    domain: "grok.com",
  },
  {
    id: "gemini",
    name: "Gemini",
    shortName: "Gemini",
    description: "Google",
    buttonClass: "bg-gradient-to-r from-[#4285F4] to-[#9B72CB] text-white",
    buildUrl: (t) => `https://gemini.google.com/app?q=${encodeURIComponent(t)}`,
    domain: "gemini.google.com",
  },
  {
    id: "claude",
    name: "Claude AI",
    shortName: "Claude",
    description: "Anthropic",
    buttonClass: "bg-[#D97757] hover:bg-[#C96A4A] text-white",
    buildUrl: (t) => `https://claude.ai/new?q=${encodeURIComponent(t)}`,
    domain: "claude.ai",
  },
];
