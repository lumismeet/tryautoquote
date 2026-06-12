"use client"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import Navbar from "@/components/NavbarV2";
import Footer from "@/components/footer"

// Import your own Navbar and Footer here
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />  
      {/* Add your <Navbar /> here */}

      {/* Header */}
      <section className="bg-[#EBF2FB] pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Have a question or need help finding the right policy? Send us a message and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-[#EBF2FB] pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left - Info Card */}
            <div className="relative bg-[#2B5BA8] text-white rounded-2xl p-10 overflow-hidden flex flex-col justify-between min-h-[420px]">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#378ADD] rounded-full opacity-40" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#378ADD] rounded-full opacity-40" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="opacity-80 mb-12 leading-relaxed">
                  We typically respond within one business day. For any questions about your quotes or how the platform works, we are happy to help.
                </p>

                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70 mb-0.5">Email us at</p>
                    <a
                      href="mailto:info@tryautoquotes.com"
                      className="font-semibold hover:opacity-80 transition"
                    >
                      info@tryautoquotes.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-16">
                <p className="text-sm opacity-50">
                  TryAutoQuote is a free service. You are never obligated to purchase any policy.
                </p>
              </div>
            </div>

            {/* Right - Form Card */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="bg-[#EBF2FB] p-5 rounded-full mb-6">
                    <Send className="w-8 h-8 text-[#2B5BA8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0C2340] mb-3">
                    Message Sent
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    Thanks for reaching out. We will get back to you at your email address within one business day.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2B5BA8] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2B5BA8] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#2B5BA8] transition resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#2B5BA8] text-white font-semibold py-3 rounded-lg hover:bg-[#E8732A] transition shadow-lg cursor-pointer"
                  >
                    Send Message →
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}