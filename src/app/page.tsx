"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Sparkles, ArrowRight, Zap, Rocket, Star } from "lucide-react";
import { useState } from "react";
import GlobalSearch from "@/components/search/GlobalSearch";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const handleExploreTools = () => {
    router.push("/tools");
  };

  const handleViewStacks = () => {
    router.push("/stacks");
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setSearchOpen(true);
    }
  };

  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IndieVibeStack",
    "url": "https://indievibestack.vercel.app",
    "description": "Discover curated AI tools, project stacks, prompts, and guides. Build real AI products without coding.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://indievibestack.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IndieVibeStack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://indievibestack.vercel.app/images/logo.svg"
      }
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IndieVibeStack",
    "url": "https://indievibestack.vercel.app",
    "logo": "https://indievibestack.vercel.app/images/logo.svg",
        "sameAs": [
      "https://x.com/indievibestack",
      "https://github.com/Axomiya-IT-Labs/indievibestack",
      "https://axomiyaitlabs.vercel.app/",
      "https://t.me/indievibestack",
      "https://youtube.com/@indievibestack"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://t.me/indievibestack"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is IndieVibeStack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IndieVibeStack is a free, open-source platform that helps indie hackers and builders create real AI products without writing code. It provides curated AI tools, step-by-step project stacks, ready-to-use prompts, and in-depth guides."
        }
      },
      {
        "@type": "Question",
        "name": "Who is IndieVibeStack for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's for indie hackers, solopreneurs, makers, and anyone who wants to build AI-powered products but doesn't have coding experience. Whether you're building a SaaS, automation workflow, or AI agent, IndieVibeStack gives you the stack and prompts to ship fast."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need coding experience to use IndieVibeStack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The project stacks are designed for no-code and low-code builders. You can use tools like Bubble, Make.com, Zapier, and AI platforms without writing custom code. The prompts also work inside any LLM, no programming required."
        }
      },
      {
        "@type": "Question",
        "name": "Is IndieVibeStack free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. IndieVibeStack is open source and free forever. The prompts, guides, and stack recommendations are available to everyone. Some linked tools may have their own pricing, but the platform itself is free."
        }
      },
      {
        "@type": "Question",
        "name": "What are AI Prompts and how do I use them?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Prompt Library contains ready-to-use prompts organized by category: Writing, Marketing, Development, Design, Business, and Productivity. Each prompt has editable placeholders. You can copy the prompt or click ChatGPT, Claude, Gemini, or Grok to open it directly in that model."
        }
      },
      {
        "@type": "Question",
        "name": "What are Project Stacks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project Stacks are step-by-step tutorials that show you how to build complete AI products from scratch. Each stack includes the exact tools, APIs, and workflow you need — like building a RAG chatbot, AI automation pipeline, or SaaS boilerplate."
        }
      },
      {
        "@type": "Question",
        "name": "Can I contribute prompts or suggest a new category?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The prompt library is community-driven. Open an issue or PR on GitHub with your prompt. Follow the format in CONTRIBUTING.md: add your prompt object to src/data/prompts.ts with a unique id, slug, title, promptText, category, and subcategory."
        }
      },
      {
        "@type": "Question",
        "name": "How is IndieVibeStack different from other AI directories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike generic AI tool lists, IndieVibeStack focuses on complete project stacks and production-ready prompts. It's built by indie hackers for indie hackers, with an emphasis on shipping real products — not just collecting tools."
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      
      <div className="min-h-screen">
        <main>
          {/* Hero Section */}
          <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            
            <div className="container mx-auto px-4 py-20 text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6 animate-float">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium gradient-text">No Code Needed — Pure Results</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Build Real <span className="gradient-text">AI Products</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Even if you can't code — turn ideas into{" "}
                <span className="font-semibold text-purple-600">scalable SaaS products</span>
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl mx-auto mb-12">
                <button 
                  onClick={handleSearchClick}
                  className="w-full group"
                  onKeyDown={handleKeyDown}
                >
                  <div className="relative flex items-center bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-purple-300 cursor-pointer">
                    <Search className="absolute left-5 w-5 h-5 text-gray-400 group-hover:text-purple-500 transition" />
                    <div className="w-full px-14 py-4 text-left text-gray-500 group-hover:text-gray-700 transition">
                      Search tools, stacks, prompts...
                    </div>
                    <kbd className="absolute right-5 hidden sm:inline-flex px-2 py-1 text-xs bg-gray-100 rounded border text-gray-500">
                      ⌘K
                    </kbd>
                  </div>
                </button>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="text-xs text-gray-400">Popular:</span>
                  {[ "ChatGPT", "Gemini", "Claude", "Grok", "Bubble", "Make.com", "Zapier", "RAG" ].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchOpen(true)}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-purple-700 transition"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={handleExploreTools}
                  className="group px-6 py-3 gradient-bg text-white rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  Explore Tools
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={handleViewStacks}
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition cursor-pointer"
                >
                  View Stacks
                </button>
                <Link href="/prompts" className="px-6 py-3 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition">
                  Explore Prompts
                </Link>
                <Link href="/guides" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
                  Read Guides
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 mt-16">
                <Link href="/tools" className="text-center hover:opacity-80 transition group">
                  <div className="text-2xl font-bold gradient-text">Curated</div>
                  <div className="text-sm text-gray-500">AI Tools</div>
                </Link>
                <Link href="/stacks" className="text-center hover:opacity-80 transition group">
                  <div className="text-2xl font-bold gradient-text">Step-by-Step</div>
                  <div className="text-sm text-gray-500">Project Stacks</div>
                </Link>
                <span className="text-center group">
                  <div className="text-2xl font-bold gradient-text">Open Source</div>
                  <div className="text-sm text-gray-500">Free Forever</div>
                </span>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Everything You Need to <span className="gradient-text">Succeed</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Curated resources that top indie hackers use to build profitable SaaS products
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Link href="/tools" className="p-6 rounded-2xl border hover:shadow-xl transition card-hover block">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Tools Directory</h3>
                  <p className="text-gray-600">Discover curated AI tools for every use case</p>
                </Link>
                
                <Link href="/stacks" className="p-6 rounded-2xl border hover:shadow-xl transition card-hover block">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Stacks</h3>
                  <p className="text-gray-600">Step-by-step tutorials to build real products</p>
                </Link>
                
                <Link href="/prompts" className="p-6 rounded-2xl border hover:shadow-xl transition card-hover block">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Prompts</h3>
                  <p className="text-gray-600">Ready-to-use prompts to supercharge your AI workflow</p>
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Everything you need to know about IndieVibeStack. Can't find an answer? Reach out on Telegram.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  {
                    q: "What is IndieVibeStack?",
                    a: "IndieVibeStack is a free, open-source platform that helps indie hackers and builders create real AI products without writing code. It provides curated AI tools, step-by-step project stacks, ready-to-use prompts, and in-depth guides."
                  },
                  {
                    q: "Who is it for?",
                    a: "It's for indie hackers, solopreneurs, makers, and anyone who wants to build AI-powered products but doesn't have coding experience. Whether you're building a SaaS, automation workflow, or AI agent, IndieVibeStack gives you the stack and prompts to ship fast."
                  },
                  {
                    q: "Do I need coding experience?",
                    a: "No. The project stacks are designed for no-code and low-code builders. You can use tools like Bubble, Make.com, Zapier, and AI platforms without writing custom code. The prompts also work inside any LLM, no programming required."
                  },
                  {
                    q: "Is it free?",
                    a: "Yes. IndieVibeStack is open source and free forever. The prompts, guides, and stack recommendations are available to everyone. Some linked tools may have their own pricing, but the platform itself is free."
                  },
                  {
                    q: "What are AI Prompts and how do I use them?",
                    a: "The Prompt Library contains ready-to-use prompts organized by category: Writing, Marketing, Development, Design, Business, and Productivity. Each prompt has editable placeholders. You can copy the prompt or click ChatGPT, Claude, Gemini, or Grok to open it directly in that model."
                  },
                  {
                    q: "What are Project Stacks?",
                    a: "Project Stacks are step-by-step tutorials that show you how to build complete AI products from scratch. Each stack includes the exact tools, APIs, and workflow you need — like building a RAG chatbot, AI automation pipeline, or SaaS boilerplate."
                  },
                  {
                    q: "Can I contribute prompts?",
                    a: "Yes. The prompt library is community-driven. Open an issue or PR on GitHub with your prompt. Follow the format in CONTRIBUTING.md: add your prompt object to src/data/prompts.ts with a unique id, slug, title, promptText, category, and subcategory."
                  },
                  {
                    q: "How is this different from other AI directories?",
                    a: "Unlike generic AI tool lists, IndieVibeStack focuses on complete project stacks and production-ready prompts. It's built by indie hackers for indie hackers, with an emphasis on shipping real products — not just collecting tools."
                  }
                ].map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <h3 className="text-base font-semibold text-gray-900 pr-4">{item.q}</h3>
                        <span className="text-xl text-gray-400 leading-none select-none">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        
        {/* Global Search Modal */}
        <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      </div>
    </>
  );
}