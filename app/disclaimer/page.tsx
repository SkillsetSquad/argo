import Link from "next/link";

export const metadata = {
  title: "Disclaimer - Carmine Agro Exports",
  description: "Disclaimer and accuracy of information on Carmine Agro Exports website.",
};

export default function Disclaimer() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span className="mx-2">/</span>
          <span>Disclaimer</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
        <p className="text-gray-700 mb-6">Last updated: 3 February 2026</p>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The information provided on this website is for general informational purposes only. While we aim to
            keep information up to date and correct, we make no warranties about the completeness, reliability or
            accuracy of the content.
          </p>

          <h2 className="text-xl font-semibold mt-6">External Links</h2>
          <p>
            The site may contain links to third-party websites. We are not responsible for the content or practices
            of those sites.
          </p>

          <h2 className="text-xl font-semibold mt-6">No Professional Advice</h2>
          <p>
            Content on this website does not constitute professional or legal advice and should not be relied upon as
            such; always seek appropriate professional advice for specific matters.
          </p>
        </section>
      </div>
    </main>
  );
}
