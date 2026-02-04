import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Carmine Agro Exports",
  description: "How Carmine Agro Exports collects and uses personal data.",
};

export default function Privacy() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span className="mx-2">/</span>
          <span>Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">Last updated: 3 February 2026</p>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            This Privacy Policy explains how Carmine Agro Exports (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) collects, uses,
            discloses and safeguards your personal information when you visit our website or contact us.
          </p>

          <h2 className="text-xl font-semibold mt-6">Information We Collect</h2>
          <p>
            We collect information you provide directly (enquiries, contact forms), as well as technical data (IP
            address, browser type) for analytics and security.
          </p>

          <h2 className="text-xl font-semibold mt-6">Use of Information</h2>
          <p>
            We use personal data to respond to enquiries, manage orders, provide customer support, and improve our
            services. We will not sell your personal data.
          </p>

          <h2 className="text-xl font-semibold mt-6">Sharing &amp; Disclosure</h2>
          <p>
            We may share information with service providers (logistics, payment processors) as necessary to fulfil
            orders and meet legal obligations.
          </p>

          <h2 className="text-xl font-semibold mt-6">Your Rights</h2>
          <p>
            You have the right to access, correct or request deletion of your personal information. Contact us at
            <a className="text-emerald-600" href="mailto:contact@carminecargoexports.com"> contact@carminecargoexports.com</a>.
          </p>

          <h2 className="text-xl font-semibold mt-6">Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your information. However, no
            method of transmission over the internet is completely secure.
          </p>
        </section>
      </div>
    </main>
  );
}
