import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wheat, Truck, Leaf, Download, Sprout } from "lucide-react";

export function Products() {
  const products = [
    {
      icon: Wheat,
      title: "Agricultural Commodities (Pulses & Grains)",
      items: [
        "Chana Dal (Split Chickpeas)",
        "Kabuli Chickpeas",
        "Desi Chickpeas",
        "Pigeon Peas (Toor / Arhar Dal)",
        "Green Gram (Moong Dal)",
        "Kidney Beans (Rajma – Light & Dark)",
      ],
      color: "bg-amber-100",
      iconColor: "text-amber-600",
    },
    {
      icon: Truck,
      title: "Animal & Poultry Feed",
      items: ["Yellow Maize (Corn)"],
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Leaf,
      title: "Fresh Vegetables",
      items: ["Fresh Onions", "Fresh Potatoes", "Fresh Ginger"],
      color: "bg-green-100",
      iconColor: "text-green-600",
    },

     {
      icon: Sprout,
      title: "Oilseeds",
      items: ["Groundnut", "Sesame seeds",],
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-emerald-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We source and export agricultural commodities (pulses & grains), animal & poultry feed, and fresh vegetables to meet your business needs.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card
              key={product.title}
              className="border-2 border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden group hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`flex items-center justify-center w-14 h-14 ${product.color} rounded-xl group-hover:scale-110 transition-transform`}
                  >
                    <product.icon className={`h-7 w-7 ${product.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download button */}
        <div className="text-center">
          <a href="/product-list.csv" download aria-label="Download product list">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Product List
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
