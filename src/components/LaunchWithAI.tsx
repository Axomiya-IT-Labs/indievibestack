"use client";
import { Rocket } from "lucide-react";
import { LLMS } from "@/data/llms";
import LLMLogo from "@/components/LLMLogo";

interface LaunchWithAIProps {
  text: string;
  heading?: string;
  compact?: boolean;
}

export default function LaunchWithAI({ text, heading = "Run this prompt with AI", compact = false }: LaunchWithAIProps) {
  if (!text || !text.trim()) return null;

  return (
    <div className={compact ? "space-y-1" : "space-y-1.5"}>
      {!compact && (
        <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
          <Rocket className="w-3 h-3 text-purple-600" />
          {heading}
        </p>
      )}
      <div className="grid grid-cols-2 gap-1.5">
        {LLMS.map((llm) => (
          <a
            key={llm.id}
            href={llm.buildUrl(text)}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open in ${llm.name}`}
            className="flex flex-row items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-bold transition shadow-sm hover:shadow-md overflow-hidden bg-white border border-gray-200 hover:border-gray-300"
          >
            <LLMLogo domain={llm.domain} name={llm.name} size={18} />
            <span className="text-[11px] text-gray-900 leading-none">{llm.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
