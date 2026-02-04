import Link from "next/link";

export const metadata = {
  title: "Cookie Policy - Carmine Agro Exports",
  description: "How we use cookies and similar technologies.",
};

export default function Cookies() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span className="mx-2">/</span>
          <span>Cookie Policy</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-gray-700 mb-6">Last updated: 3 February 2026</p>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our website uses cookies and similar technologies to improve user experience, provide analytics, and
            enable certain features.
          </p>

          <h2 className="text-xl font-semibold mt-6">Types of Cookies</h2>
          <p>
            - Essential cookies: required for website operation.
            <br />- Performance cookies: used for analytics and improving the site.
            <br />- Functional cookies: enable enhanced features and personalization.
          </p>

          <h2 className="text-xl font-semibold mt-6">Managing Cookies</h2>
          <p>
            Most browsers allow you to control cookies through settings. Disabling cookies may affect the
            functionality of the site.
          </p>
        </section>
      </div>
    </main>
  );
}
