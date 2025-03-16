import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  ShoppingBag,
  User,
  Mail,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-orange-500 font-bold text-xl">
            Bharath
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-orange-500 px-3 py-2"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-orange-500 px-3 py-2"
              >
                Services
              </Link>
              <a
                href="https://itsbharathhere.live/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 px-3 py-2 flex items-center"
              >
                Portfolio <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <Link
                to="/about"
                className="text-gray-300 hover:text-orange-500 px-3 py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-orange-500 px-3 py-2"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2"
            >
              Services
            </Link>
            <a
              href="https://itsbharathhere.live/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2 flex items-center"
            >
              Portfolio <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <Link
              to="/about"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-orange-500 block px-3 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Pages
const HomePage = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Student Portfolio - GitHub Hosting",
      icon: <Github className="w-8 h-8" />,
      price: "₹2,500 - ₹5,000",
      features: [
        "One-page responsive portfolio",
        "Personal bio, skills, projects",
        "Contact section",
        "GitHub Pages hosting",
      ],
    },
    {
      title: "Student Portfolio - Custom Domain",
      icon: <Globe className="w-8 h-8" />,
      price: "₹5,000 - ₹8,000",
      features: [
        "Everything from GitHub portfolio",
        "Custom domain setup",
        "SEO optimization",
        "Google indexing",
      ],
    },
    {
      title: "Product Catalog Website",
      icon: <ShoppingBag className="w-8 h-8" />,
      price: "₹5,000 - ₹10,000",
      features: [
        "Static product showcase",
        "Image gallery",
        "Product descriptions",
        "Contact form integration",
      ],
    },
    {
      title: "Business Portfolio Website",
      icon: <User className="w-8 h-8" />,
      price: "₹8,000 - ₹15,000",
      features: [
        "Multi-page business website",
        "Services & About sections",
        "SEO-friendly design",
        "Domain & hosting setup",
      ],
    },
    {
      title: "E-Commerce Website",
      icon: <Code2 className="w-8 h-8" />,
      price: "₹25,000 - ₹60,000",
      features: [
        "Custom-built with React & Node.js",
        "Admin panel",
        "Payment gateway integration",
        "SEO & mobile responsive",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 py-32 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Freelance Web Development Services
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl text-orange-500 font-semibold mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            by Bharath
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Professional web development solutions tailored to your needs
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-orange-500 font-bold mb-4">
                  {service.price}
                </p>
                <ul className="text-gray-300 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <motion.a
              href="mailto:contact@bharathofficial05@gmail.com"
              className="flex items-center text-orange-500 hover:text-orange-400"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-6 h-6 mr-2" />
              contact@bharath.dev
            </motion.a>
            <motion.a
              href="tel:+919597913367"
              className="flex items-center text-orange-500 hover:text-orange-400"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-6 h-6 mr-2" />
              +91 95979 13367
            </motion.a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <motion.a
              href="https://github.com/Bharath-007/"
              className="text-gray-400 hover:text-orange-500"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            {/* <motion.a
              href="https://twitter.com/bharath"
              className="text-gray-400 hover:text-orange-500"
              whileHover={{ scale: 1.2 }}
            >
              <Twitter className="w-6 h-6" />
            </motion.a> */}
            <motion.a
              href="https://www.linkedin.com/in/bharath-ilangovan-30a284211/"
              className="text-gray-400 hover:text-orange-500"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      title: "Student Portfolio - GitHub Hosting",
      description:
        "Perfect for students and beginners looking to establish their online presence. Get a professional portfolio hosted on GitHub Pages.",
      features: [
        "Responsive single-page design",
        "Skills & projects showcase",
        "GitHub integration",
        "Contact form",
        "Social media links",
        "Free hosting on GitHub Pages",
      ],
      price: "₹2,500 - ₹5,000",
      icon: <Github className="w-12 h-12" />,
    },
    {
      title: "Student Portfolio - Custom Domain",
      description:
        "Enhanced portfolio website with your own domain name and advanced features for a more professional presence.",
      features: [
        "All features from GitHub hosting",
        "Custom domain setup",
        "Professional email setup",
        "SEO optimization",
        "Google Analytics",
        "Regular maintenance",
      ],
      price: "₹5,000 - ₹8,000",
      icon: <Globe className="w-12 h-12" />,
    },
    {
      title: "Product Catalog Website",
      description:
        "Showcase your products with a beautiful, easy-to-navigate catalog website.",
      features: [
        "Responsive product gallery",
        "Product categorization",
        "Search functionality",
        "Contact integration",
        "SEO optimization",
        "Analytics integration",
      ],
      price: "₹5,000 - ₹10,000",
      icon: <ShoppingBag className="w-12 h-12" />,
    },
    {
      title: "Business Portfolio Website",
      description:
        "Professional multi-page website for businesses looking to establish a strong online presence.",
      features: [
        "Custom design",
        "Multiple pages",
        "Blog integration",
        "SEO optimization",
        "Social media integration",
        "Regular updates",
      ],
      price: "₹8,000 - ₹15,000",
      icon: <User className="w-12 h-12" />,
    },
    {
      title: "E-Commerce Website",
      description:
        "Full-featured online store with secure payment processing and order management.",
      features: [
        "Product management",
        "Shopping cart",
        "Payment gateway",
        "Order tracking",
        "Admin dashboard",
        "Customer accounts",
      ],
      price: "₹25,000 - ₹60,000",
      icon: <Code2 className="w-12 h-12" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 px-4 pb-16"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Choose from our range of web development services tailored to meet
          your specific needs and budget
        </p>
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="text-orange-500">{service.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-300"
                        >
                          <span className="text-orange-500 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="md:text-right">
                      <p className="text-2xl font-bold text-orange-500">
                        {service.price}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-block mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-24 px-4 pb-16"
  >
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <div className="bg-gray-800 rounded-lg p-8">
        <p className="text-gray-300 mb-6">
          Hi, I'm Bharath, a freelance web developer with a passion for creating
          beautiful, functional, and user-friendly websites. With years of
          experience in web development, I specialize in building custom
          solutions for students, businesses, and e-commerce platforms.
        </p>
        <p className="text-gray-300 mb-6">My expertise includes:</p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>React.js and Next.js development</li>
          <li>Responsive web design</li>
          <li>E-commerce solutions</li>
          <li>SEO optimization</li>
          <li>Performance optimization</li>
          <li>Custom web applications</li>
        </ul>
        <p className="text-gray-300">
          I believe in delivering high-quality work that meets your specific
          needs and helps you achieve your online goals.
        </p>
      </div>
    </div>
  </motion.div>
);

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 px-4 pb-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Service
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                >
                  <option value="">Select a service</option>
                  <option value="student-portfolio">Student Portfolio</option>
                  <option value="custom-domain">Custom Domain Portfolio</option>
                  <option value="product-catalog">Product Catalog</option>
                  <option value="business-website">Business Website</option>
                  <option value="ecommerce">E-Commerce Website</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white h-32"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-orange-500 mr-3" />
                <a
                  href="mailto:contact@bharath.dev"
                  className="text-gray-300 hover:text-orange-500"
                >
                  contact@bharath.dev
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-500 mr-3" />
                <a
                  href="tel:+919597913367"
                  className="text-gray-300 hover:text-orange-500"
                >
                  +91 95979 13367
                </a>
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Bharath-007/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  {/* <a
                    href="https://twitter.com/bharath"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500"
                  >
                    <Twitter className="w-6 h-6" />
                  </a> */}
                  <a
                    href="https://www.linkedin.com/in/bharath-ilangovan-30a284211/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-orange-500"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  return (
    <Router basename="/bharath-freelance/">
      <div className="min-h-screen bg-gray-900 text-white font-[Montserrat]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bharath. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
