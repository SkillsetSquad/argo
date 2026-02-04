import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - Carmine Agro Exports",
  description: "Terms and conditions for use of Carmine Agro Exports website and services.",
};

export default function Terms() {
  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-emerald-600">Home</Link>
          <span className="mx-2">/</span>
          <span>Terms &amp; Conditions</span>
        </nav>

        <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions</h1>
        <p className="text-gray-700 mb-6">Last updated: 3 February 2026</p>

        <section className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the website and services
            provided by Carmine Agro Exports (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;). By accessing or using our site you agree
            to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-6">Products, Pricing &amp; Orders</h2>
          <p>
            Product selection, pricing, minimum order quantities, packaging and lead times are as specified in
            quotations or order confirmations. We reserve the right to correct pricing errors and to make
            reasonable changes to product availability.
          </p>

          <h2 className="text-xl font-semibold mt-6">Delivery &amp; Risk</h2>
          <p>
            Delivery terms will be agreed upon in the contract. Risk of loss and ownership of goods may pass in
            accordance with the agreed Incoterms or explicit agreement.
          </p>

          <h2 className="text-xl font-semibold mt-6">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Carmine Agro Exports shall not be liable for indirect,
            incidental or consequential damages arising from your use of the website or products sold.
          </p>

          <h2 className="text-xl font-semibold mt-6">Governing Law</h2>
          <p>
            These Terms are governed by the laws of India unless otherwise agreed in writing.
          </p>

          <h2 className="text-xl font-semibold mt-6">Contact</h2>
          <p>
            For questions about these Terms, contact us at <a className="text-emerald-600" href="mailto:contact@carminecargoexports.com">contact@carminecargoexports.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
