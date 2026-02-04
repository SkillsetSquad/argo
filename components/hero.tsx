"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Globe, Package, ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function Hero() {
  const trustBadges = [
    { icon: ShieldCheck, label: "Export-Grade Quality" },
    { icon: Globe, label: "On-Time Shipments" },
    { icon: Package, label: "Competitive Pricing" },
  ];

const images = [
    // "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623066798929-946425dbe1b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",    
    "https://images.unsplash.com/photo-1668295037469-8b0e8d11cd2a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1589707790848-9097c28e8569?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

  const [current, setCurrent] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(s: any) {
        setCurrent(s.track.details.rel);
      },
    },
    []
  );

  // autoplay
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => (slider as any)?.current?.next?.(), 4000);
    return () => clearInterval(interval);
  }, [slider]);

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
            <Button size="lg" variant="outline" className="rounded-xl px-8 py-4 border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full sm:w-auto" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
                View Products
            </Button>
            </div>

            <div className="pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
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

          {/* Right: Image slider */}
          <div className="order-1 md:order-2">
            <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden shadow-xl">
              {images.map((src, idx) => (
                <div key={src} className={`keen-slider__slide`}> 
                  <div className="w-full h-[360px] md:h-[420px] bg-gray-100">
                    <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-4">
              <button
                aria-label="Previous"
                onClick={() => (slider as any)?.current?.prev?.()}
                className="p-2 rounded-xl bg-white shadow hover:bg-emerald-50 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-emerald-600" />
              </button>

              <div className="flex items-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => (slider as any)?.current?.moveToIdx?.(idx)}
                    className={`w-2.5 h-2.5 rounded-full ${current === idx ? "bg-emerald-600" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                aria-label="Next"
                onClick={() => (slider as any)?.current?.next?.()}
                className="p-2 rounded-xl bg-white shadow hover:bg-emerald-50 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-emerald-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

