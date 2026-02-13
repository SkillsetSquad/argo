"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Globe, Package } from "lucide-react";

export function Hero() {
  const trustBadges = [
    { icon: ShieldCheck, label: "Export-Grade Quality" },
    { icon: Globe, label: "On-Time Shipments" },
    { icon: Package, label: "Competitive Pricing" },
  ];

  const heroImage = "./heroImg.jpeg"; // Replace with your actual image path

  return (
    <section id="home" className="py-12 md:py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Welcome to <span className="text-emerald-600">Carmine Agro Exports</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
              Reliable sourcing and export of agricultural commodities, animal & poultry feed, and fresh vegetables. 
              We connect growers, processors, and buyers across the globe with expertise in logistics and quality assurance.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 rounded-xl px-8 py-4 w-full sm:w-auto"
                onClick={() =>
                  (window.location.href = `mailto:info@carmineagroexports.com?subject=${encodeURIComponent(
                    "Product inquiry"
                  )}&body=${encodeURIComponent(
                    "Hello Carmine Agro Exports,\n\nI'm interested in your products. Could you please share pricing, MOQ and lead times?\n\nThanks,\n"
                  )}`)
                }
              >
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl px-8 py-4 border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full sm:w-auto" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                View Products
              </Button>
            </div>

            <div className="pt-6 md:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-full md:max-w-lg mx-auto md:mx-0">
                {trustBadges.map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
                      <badge.icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <p className="font-medium text-gray-900 text-sm text-center">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="order-1 md:order-2">
            <div className="w-full h-[280px] md:h-[420px] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
              <img src={heroImage} alt="Carmine Agro Exports" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

