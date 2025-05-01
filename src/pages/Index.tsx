
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-krushi-cream to-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fresh Produce,{" "}
                <span className="text-krushi-green-dark">
                  Directly from Farmers
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-lg">
                KRUSHI connects farmers with buyers, eliminating middlemen and ensuring fair prices for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/marketplace">
                  <Button className="text-md px-8 py-6 bg-krushi-purple hover:bg-krushi-purple/90">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Shop Now
                  </Button>
                </Link>
                <Link to="/farmers">
                  <Button variant="outline" className="text-md px-8 py-6">
                    <User className="mr-2 h-5 w-5" /> Meet Our Farmers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3"
                alt="Fresh produce"
                className="rounded-lg shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How KRUSHI Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-krushi-cream p-4 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-krushi-earth" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Farmers List Products</h3>
              <p className="text-gray-600">Farmers post their products with real-time pricing and availability</p>
            </div>
            <div className="text-center">
              <div className="bg-krushi-cream p-4 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-krushi-earth" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Buyers Shop Directly</h3>
              <p className="text-gray-600">Browse products, compare prices and order from local farmers</p>
            </div>
            <div className="text-center">
              <div className="bg-krushi-cream p-4 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6">
                <svg className="h-10 w-10 text-krushi-earth" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Farm to Table Delivery</h3>
              <p className="text-gray-600">Receive fresh produce delivered directly from the farm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/marketplace" className="text-krushi-purple hover:text-krushi-purple/90 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example product cards */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md product-card">
              <img src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3" alt="Organic vegetables" className="h-48 w-full object-cover" />
              <div className="p-4">
                <span className="text-xs text-gray-500">Green Valley Farm</span>
                <h3 className="font-medium text-lg">Organic Vegetable Basket</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-lg font-bold">$24.99</span>
                  <span className="text-xs text-gray-500 ml-1">/basket</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md product-card">
              <img src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3" alt="Fresh apples" className="h-48 w-full object-cover" />
              <div className="p-4">
                <span className="text-xs text-gray-500">Apple Orchard Co.</span>
                <h3 className="font-medium text-lg">Fresh Red Apples</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-lg font-bold">$3.49</span>
                  <span className="text-xs text-gray-500 ml-1">/kg</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md product-card">
              <img src="https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3" alt="Fresh milk" className="h-48 w-full object-cover" />
              <div className="p-4">
                <span className="text-xs text-gray-500">Happy Cow Dairy</span>
                <h3 className="font-medium text-lg">Organic Milk</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-lg font-bold">$2.49</span>
                  <span className="text-xs text-gray-500 ml-1">/liter</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md product-card">
              <img src="https://images.unsplash.com/photo-1600331322284-46ba833e9dcc?ixlib=rb-4.0.3" alt="Fresh herbs" className="h-48 w-full object-cover" />
              <div className="p-4">
                <span className="text-xs text-gray-500">Herb Haven</span>
                <h3 className="font-medium text-lg">Fresh Herb Bundle</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-lg font-bold">$4.99</span>
                  <span className="text-xs text-gray-500 ml-1">/bundle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3" alt="User" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Buyer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "KRUSHI has completely changed how I shop for groceries. The produce is fresher than anything I've found in supermarkets."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3" alt="User" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Raj Patel</h4>
                  <p className="text-sm text-gray-500">Farmer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a small farmer, KRUSHI has helped me find new customers and get fair prices for my products. My income has increased by 30%."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3" alt="User" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Elena Martinez</h4>
                  <p className="text-sm text-gray-500">Restaurant Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our restaurant sources all ingredients through KRUSHI now. The quality is exceptional and our customers can taste the difference."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-krushi-purple/90 to-krushi-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Farming?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join our community of farmers and buyers creating a sustainable food system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup/farmer">
              <Button variant="secondary" className="text-md px-8 py-6">
                I'm a Farmer
              </Button>
            </Link>
            <Link to="/signup/buyer">
              <Button className="text-md px-8 py-6 bg-white text-krushi-purple hover:bg-gray-100">
                I'm a Buyer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
