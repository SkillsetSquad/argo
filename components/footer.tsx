import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Leaf, Facebook, Linkedin, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Products", href: "#products" },
      { label: "Contact Us", href: "#contact" },
    ],
    // legal: [
    //   { label: "Privacy Policy", href: "/privacy" },
    //   { label: "Terms of Service", href: "/terms" },
    //   { label: "Disclaimer", href: "/disclaimer" },
    //   { label: "Cookie Policy", href: "/cookies" },
    // ],
    // resources: [
    //   { label: "Product Catalog", href: "/catalog" },
    //   { label: "Quality Standards", href: "/quality" },
    //   { label: "Shipping Info", href: "/shipping" },
    // ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-3 font-bold text-xl">
                <Image src="/logo.png" alt="Carmine Agro Exports" width={130} height={90} className="rounded-xl object-cover" />
                <span className="hidden sm:inline">Carmine Agro Exports</span>
                <span className="sm:hidden">Carmine</span>
              </Link>
              <p className="text-gray-400 leading-relaxed max-w-md">
                India-based agro trading and export company specializing in quality 
                agricultural commodities, animal & poultry feed, and fresh vegetables for global markets.
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+971501234567"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 9324286042</span>
                </a>
                <a
                  href="mailto:info@carmineagroexports.com"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@carmineagroexports.com</span>
                </a>
              </div>
            </div>

            {/* Company links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal links */}
            {/* <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Resources */}
            {/* <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Carmine Agro Exports. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-xl hover:bg-emerald-600 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
