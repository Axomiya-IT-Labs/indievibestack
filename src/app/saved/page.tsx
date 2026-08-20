"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Bookmark } from "lucide-react";

export default function SavedPage() {
  const [savedPrompts, setSavedPrompts] = useState<any[]>([]);
  const [savedTools, setSavedTools] = useState<any[]>([]);
  const [savedGuides, setSavedGuides] = useState<any[]>([]);

  useEffect(() => {
    setSavedPrompts(JSON.parse(localStorage.getItem("savedPrompts") || "[]"));
    setSavedTools(JSON.parse(localStorage.getItem("savedTools") || "[]"));
    setSavedGuides(JSON.parse(localStorage.getItem("savedGuides") || "[]"));
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Saved Items</h1>
        <p className="text-gray-600 text-lg mb-8">Your bookmarked prompts, tools, and guides in one place.</p>

        {savedPrompts.length === 0 && savedTools.length === 0 && savedGuides.length === 0 && (
          <div className="text-center py-20">
            <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No saved items yet.</p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Link href="/prompts" className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">Browse Prompts</Link>
              <Link href="/tools" className="px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition">Browse Tools</Link>
              <Link href="/guides" className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">Browse Guides</Link>
            </div>
          </div>
        )}

        {savedPrompts.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Saved Prompts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {savedPrompts.map((item: any) => (
                <Link key={item.id} href={`/prompts/${item.slug}`} className="block p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        {savedTools.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Saved Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {savedTools.map((item: any) => (
                <Link key={item.id} href={`/tools/${item.slug}`} className="block p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        {savedGuides.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Saved Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {savedGuides.map((item: any) => (
                <Link key={item.id} href={`/guides/${item.slug}`} className="block p-4 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
