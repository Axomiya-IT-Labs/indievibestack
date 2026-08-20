"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Copy, Bookmark, Share2, ArrowRight, Sparkles, Zap, Award, Check, Edit3, Tag, BookmarkCheck } from "lucide-react";
import { prompts } from "@/data/prompts";
import LaunchWithAI from "@/components/LaunchWithAI";

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Writing": "bg-gray-100 text-gray-700",
    "Development": "bg-gray-100 text-gray-700",
    "Marketing": "bg-gray-100 text-gray-700",
    "Design": "bg-gray-100 text-gray-700",
    "Business": "bg-gray-100 text-gray-700",
    "Productivity": "bg-gray-100 text-gray-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
}

function getAlternativePrompts(currentPrompt: any, limit: number = 3) {
  return prompts.filter(p => p.id !== currentPrompt.id && p.category === currentPrompt.category).slice(0, limit);
}

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

interface Props { params: { slug: string }; }

export default function PromptDetailPage({ params }: Props) {
  const prompt = prompts.find(p => p.slug === params.slug);
  const alternatives = prompt ? getAlternativePrompts(prompt, 3) : [];
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(prompt ? prompt.promptText : "");
  const [placeholderValues, setPlaceholderValues] = useState<Record<string, string>>({});

  if (!prompt) notFound();

  const currentText = isEditing ? editableText : fillPlaceholders(editableText, placeholderValues);
  const placeholders = extractPlaceholders(prompt.promptText);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleEdit = () => setIsEditing(true);
  const handleCancelEdit = () => { setIsEditing(false); setEditableText(prompt.promptText); };
  const handleSaveEdit = () => setIsEditing(false);
  const handleSave = () => {
    const savedPrompts = JSON.parse(localStorage.getItem("savedPrompts") || "[]");
    if (!saved) {
      savedPrompts.push({ id: prompt.id, title: prompt.title, slug: prompt.slug });
      localStorage.setItem("savedPrompts", JSON.stringify(savedPrompts));
      setSaved(true);
    } else {
      const filtered = savedPrompts.filter((p: any) => p.id !== prompt.id);
      localStorage.setItem("savedPrompts", JSON.stringify(filtered));
      setSaved(false);
    }
  };
  const handleShare = async () => {
    if (navigator.share) { await navigator.share({ title: prompt.title, text: prompt.description, url: window.location.href }); }
    else { await navigator.clipboard.writeText(window.location.href); alert("Link copied to clipboard!"); }
  };

  const updatePlaceholder = (key: string, value: string) => {
    setPlaceholderValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen py-10 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumbs */}
        <nav className="flex mb-4 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/prompts" className="text-gray-500 hover:text-gray-900">Prompts</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{prompt.title}</span>
        </nav>

        {/* Header */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            <span className={`text-[11px] px-2 py-0.5 rounded-full ${getCategoryColor(prompt.category)}`}>
              {prompt.category}
            </span>
            <div className="flex flex-wrap gap-1">
              {prompt.tags.map(tag => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600 flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold mb-0.5 text-gray-900">{prompt.title}</h1>
          <p className="text-gray-500 text-xs mb-3">{prompt.description}</p>

          {/* Placeholders - right below title */}
          {!isEditing && placeholders.length > 0 && (
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {placeholders.map((placeholder) => (
                <div key={placeholder} className="space-y-0.5">
                  <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">
                    {placeholder}
                  </label>
                  <input
                    type="text"
                    value={placeholderValues[placeholder] || ""}
                    onChange={(e) => updatePlaceholder(placeholder, e.target.value)}
                    placeholder={`Enter ${placeholder.toLowerCase()}`}
                    className="w-full px-2 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-gray-400 focus:bg-white transition"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-xs font-semibold transition"
            >
              {copied ? <Check className="w-3 h-3 text-gray-900" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied!" : "Copy"}
            </button>
            <button
              onClick={handleSave}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition ${saved ? "bg-gray-900 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {saved ? <BookmarkCheck className="w-3 h-3" /> : <Bookmark className="w-3 h-3" />}
              {saved ? "Saved" : "Save"}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-xs font-semibold transition"
            >
              <Share2 className="w-3 h-3" />
              Share
            </button>
            <button
              onClick={handleEdit}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-900 text-white hover:bg-gray-800 rounded-md text-xs font-semibold transition ml-auto"
            >
              <Edit3 className="w-3 h-3" />
              Edit
            </button>
          </div>
        </div>

        {/* Prompt Text */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
          {isEditing ? (
            <div className="space-y-2">
              <textarea
                value={editableText}
                onChange={(e) => setEditableText(e.target.value)}
                className="w-full h-56 p-3 border border-gray-200 rounded-lg font-mono text-xs leading-relaxed focus:outline-none focus:ring-1 focus:ring-gray-400 resize-y"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-semibold transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <pre className="bg-gray-50 p-3 rounded-lg overflow-x-auto text-xs leading-relaxed whitespace-pre-wrap font-mono border border-gray-100">
              {currentText}
            </pre>
          )}
        </div>

        {/* Launch with AI - directly below prompt */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
          <LaunchWithAI text={currentText} heading="Run this prompt with AI" compact />
        </div>

        {/* Example */}
        {prompt.example && (
          <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
            <h2 className="text-base font-bold mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-gray-700" />
              Example
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">{prompt.example}</p>
          </div>
        )}

        {/* Alternative Prompts */}
        {alternatives.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h2 className="text-base font-bold mb-3 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-gray-700" />
              Similar Prompts
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              {alternatives.map(alt => (
                <Link key={alt.id} href={`/prompts/${alt.slug}`} className="block p-3 rounded-lg border border-gray-100 hover:border-gray-300 hover:shadow-sm transition">
                  <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{alt.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{alt.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
