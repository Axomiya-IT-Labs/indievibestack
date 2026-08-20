export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy</h1>
        <p className="text-gray-600 text-lg mb-6">
          Your privacy is important to us. This policy explains how we handle data on IndieVibeStack.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection</h2>
        <p className="text-gray-600 mb-4">
          We do not collect personal data beyond what is voluntarily provided. We use localStorage for saved items and preferences only.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
        <p className="text-gray-600 mb-4">
          We do not use tracking cookies. Any cookies used are strictly necessary for site functionality.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
        <p className="text-gray-600">
          For privacy concerns, reach out via <a href="https://t.me/indievibestack" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Telegram</a>.
        </p>
      </div>
    </div>
  );
}
