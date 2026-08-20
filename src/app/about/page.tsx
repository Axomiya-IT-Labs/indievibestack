export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 gradient-text">About Us</h1>
        <p className="text-gray-600 text-lg mb-6">
          IndieVibeStack is a curated platform for indie hackers and builders who want to create real AI products without writing code.
        </p>
        <p className="text-gray-600 mb-4">
          We provide curated tools, step-by-step project stacks, ready-to-use prompts, and guides to help you ship faster.
        </p>
        <p className="text-gray-600">
          Built by <a href="https://x.com/rkblailabs" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Rakibul</a> · <a href="https://github.com/Axomiya-IT-Labs" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">GitHub</a>
        </p>
      </div>
    </div>
  );
}
