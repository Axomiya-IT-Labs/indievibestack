export default function TermsPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Terms of Service</h1>
        <p className="text-gray-600 text-lg mb-6">
          By using IndieVibeStack, you agree to the following terms and conditions.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Use of Content</h2>
        <p className="text-gray-600 mb-4">
          All prompts, guides, and tools are provided for educational and personal use. Respect intellectual property rights.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          We are not liable for any damages arising from the use of third-party tools or AI models linked from this site.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Changes</h2>
        <p className="text-gray-600">
          We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.
        </p>
      </div>
    </div>
  );
}
