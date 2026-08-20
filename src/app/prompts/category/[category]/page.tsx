"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Edit3, Copy, Check } from "lucide-react";
import { getSubcategories, getCategoryPromptCount, getSubcategoryPromptCount, prompts } from "@/data/prompts";
import LaunchWithAI from "@/components/LaunchWithAI";

function extractPlaceholders(text: string): string[] {
  const matches = text.match(/\[([^\]]+)\]/g) || [];
  return Array.from(new Set(matches.map((m) => m.slice(1, -1))));
}

function fillPlaceholders(text: string, values: Record<string, string>): string {
  let result = text;
  Object.entries(values).forEach(([key, value]) => {
    result = result.replaceAll(`[${key}]`, value);
  });
  return result;
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const rawCategory = decodeURIComponent(params.category);
  const category = rawCategory.charAt(0).toUpperCase() + rawCategory.slice(1);
  const allPromptsInCategory = prompts.filter(p => p.category === category);
  const subcategories = getSubcategories(category);
  const totalCount = getCategoryPromptCount(category);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTexts, setEditTexts] = useState<Record<string, string>>({});
  const [placeholderValues, setPlaceholderValues] = useState<Record<string, Record<string, string>>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string>("all");

  const getCurrentText = (prompt: any) => {
    if (editingId === prompt.id) {
      return editTexts[prompt.id] || prompt.promptText;
    }
    const base = editTexts[prompt.id] || prompt.promptText;
    const values = placeholderValues[prompt.id] || {};
    return fillPlaceholders(base, values);
  };

  const handleEdit = (prompt: any) => {
    setEditingId(prompt.id);
    setEditTexts((prev) => ({ ...prev, [prompt.id]: getCurrentText(prompt) }));
  };

  const handleSaveEdit = (promptId: string) => {
    setEditingId(null);
  };

  const handleCopy = async (text: string, promptId: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(promptId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const updatePlaceholder = (promptId: string, key: string, value: string) => {
    setPlaceholderValues((prev) => ({
      ...prev,
      [promptId]: {
        ...(prev[promptId] || {}),
        [key]: value,
      },
    }));
  };

  const filteredPrompts = activeSubcategory === "all" 
    ? allPromptsInCategory 
    : allPromptsInCategory.filter(p => p.subcategory === activeSubcategory);

  return (
    <div className="min-h-screen py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex mb-4 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/prompts" className="text-gray-500 hover:text-gray-900">Prompts</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{category}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3 flex-wrap">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl font-bold mb-0.5 text-gray-900">{category}</h1>
              <p className="text-gray-500 text-xs mb-2">
                {totalCount} prompts across {subcategories.length} subcategories
              </p>
              
              {/* Subcategory Tabs */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveSubcategory("all")}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                    activeSubcategory === "all"
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All ({totalCount})
                </button>
                {subcategories.map((sub) => {
                  const count = getSubcategoryPromptCount(category, sub);
                  return (
                    <button
                      key={sub}
                      onClick={() => setActiveSubcategory(sub)}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition ${
                        activeSubcategory === sub
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {sub} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Prompts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrompts.map((prompt) => {
            const currentText = getCurrentText(prompt);
            const isEditing = editingId === prompt.id;
            const placeholders = isEditing ? [] : extractPlaceholders(prompt.promptText);
            const filledPlaceholders = placeholderValues[prompt.id] || {};

            return (
              <div key={prompt.id} className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all overflow-hidden flex flex-col">
                <div className="p-3 flex-grow">
                  <div className="flex items-start justify-between mb-1.5">
                    <div className="w-7 h-7 bg-gray-100 rounded-md flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    <div className="flex gap-0.5">
                      <button
                        onClick={() => handleCopy(currentText, prompt.id)}
                        className="p-1 rounded hover:bg-gray-100 transition"
                        title="Copy prompt"
                      >
                        {copiedId === prompt.id ? (
                          <Check className="w-3 h-3 text-gray-900" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                      <button
                        onClick={() => handleEdit(prompt)}
                        className="p-1 rounded hover:bg-gray-100 transition"
                        title="Edit prompt"
                      >
                        <Edit3 className="w-3 h-3 text-gray-400 hover:text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold mb-0.5 text-gray-900 line-clamp-1">
                    {prompt.title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2 mb-1.5">
                    {prompt.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {prompt.subcategory}
                    </span>
                  </div>
                </div>

                <div className="px-3 pb-3 pt-1.5 border-t border-gray-100">
                  {isEditing ? (
                    <div className="space-y-2">
                      <textarea
                        value={editTexts[prompt.id] || prompt.promptText}
                        onChange={(e) => setEditTexts((prev) => ({ ...prev, [prompt.id]: e.target.value }))}
                        className="w-full h-36 p-2.5 border border-gray-200 rounded-lg font-mono text-xs leading-relaxed focus:outline-none focus:ring-1 focus:ring-gray-400 resize-y"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSaveEdit(prompt.id)}
                          className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold transition"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      {placeholders.length > 0 && (
                        <div className="grid grid-cols-2 gap-1.5">
                          {placeholders.map((placeholder) => (
                            <div key={placeholder} className="space-y-0.5">
                              <label className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">
                                {placeholder}
                              </label>
                              <input
                                type="text"
                                value={filledPlaceholders[placeholder] || ""}
                                onChange={(e) => updatePlaceholder(prompt.id, placeholder, e.target.value)}
                                placeholder={`Enter ${placeholder.toLowerCase()}`}
                                className="w-full px-1.5 py-0.5 bg-gray-50 border border-gray-200 rounded text-[11px] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:bg-white transition"
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      <pre className="bg-gray-50 p-2 rounded text-[10px] leading-relaxed whitespace-pre-wrap font-mono border border-gray-100 max-h-16 overflow-hidden">
                        {currentText}
                      </pre>

                      <div className="space-y-1.5">
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => handleCopy(currentText, prompt.id)}
                            className="flex-1 flex items-center justify-center gap-1 px-1.5 py-1 bg-gray-100 hover:bg-gray-200 rounded text-[11px] font-semibold transition"
                          >
                            {copiedId === prompt.id ? (
                              <>
                                <Check className="w-2.5 h-2.5 text-gray-900" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-2.5 h-2.5" />
                                Copy
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleEdit(prompt)}
                            className="flex items-center justify-center gap-1 px-1.5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-[11px] font-semibold transition"
                          >
                            <Edit3 className="w-2.5 h-2.5" />
                            Edit
                          </button>
                        </div>
                        <LaunchWithAI text={currentText} heading="" compact />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
