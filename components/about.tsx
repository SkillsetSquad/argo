import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const services = [
    "Procurement of quality commodities",
    "Rigorous quality checks",
    "Professional packaging solutions",
    "Loading & logistics coordination",
  ];

  const countries = ["UAE", "KSA", "Africa", "Southeast Asia"];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Global Trading Excellence"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-emerald-600">Carmine Agro Exports</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Carmine Agro Exports is an India-based company specializing in the sourcing, 
                trading, and export of high-quality agricultural commodities, animal & poultry feed, and fresh vegetables. With a robust logistics network and commitment to quality, 
                we serve clients across multiple continents.
              </p>
            </div>

            {/* Services list */}
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>

            {/* Countries served */}
            <div className="pt-6 space-y-3">
              <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                Countries Served
              </p>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <Badge
                    key={country}
                    variant="outline"
                    className="px-4 py-1.5 bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50 rounded-xl"
                  >
                    {country}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
