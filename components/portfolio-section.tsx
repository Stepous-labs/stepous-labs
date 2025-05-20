"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PortfolioItem } from "./ui/portfolio-item"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const portfolioItems = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    category: "AI Automation",
    image: "https://img.freepik.com/free-vector/professional-dashboard-user-panel_23-2148368370.jpg?semt=ais_hybrid&w=740",
    description: "A real-time security monitoring dashboard for tracking exploits and vulnerabilities in the Solana ecosystem.",
    preview : "https://superteam-security-dashboard-swart.vercel.app/",
  },
  {
    id: 2,
    title: "Weeding photoshoot Platform",
    category: "Web",
    image: "https://www.paperlesspost.com/blog/wp-content/uploads/051723_Blog_Wedding_BestWeddingWebsites_09.png",
    description: " Parth Studios, we transform your love story into timeless art. We are passionate creators, capturing every emotion and detail. From tender glances to grand celebrations, every moment matters.",
    preview : "https://parth-studios-harshit-jains-projects-ef081127.vercel.app/",
  },
  {
    id: 3,
    title: "Enterprise Event Management",
    category: "Web",
    image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/6421ecd67b719c224d9aeef6_6402c001fff8cd3a4f51e2cd_OG.jpeg",
    description: "At NeoNiche, we craft experiences that seamlessly blend creativity, strategy, and technology to empower brands and drive measurable outcomes. As a full-service global agency, we pride ourselves on delivering holistic solutions that connect with audiences, enhance brand value, and achieve lasting impact.",
    preview : "https://www.neoniche.com/",
  },
  {
    id: 4,
    title: "Onchain tax optimiser",
    category: "Web3",
    image: "https://cdn.prod.website-files.com/63f8ca18cae2585db28fd75b/645ebfff3c7d464668b6a39f_cosmos-crypto-network-website-design-inspiration.jpg",
    description: "A cutting-edge application designed to simplify and optimize cryptocurrency tax compliance for US users, built on the Base blockchain network. This project leverages AI, blockchain technology, and Base's low-cost infrastructure to deliver a comprehensive, user-friendly solution for crypto tax management.",
    preview: "https://onchain-tax-optimizer.vercel.app/",
  },
  {
    id: 5,
    title: "Climate Impact Apps on Solana",
    category: "Web3",
    image: "https://cdn.cryptohopper.com/images/Blogposts/solana-website.webp",
    description: "The complete developer toolkit for building, verifying, and scaling climate-focused applications on the Solana blockchain. Transparent, composable, and impact-driven.",
    preview: "https://sol-track-mu.vercel.app/",
  },
  {
    id: 6,
    title: "AI Content Generator",
    category: "ML Projects",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*O2cB1LBTdHp22-eRukNKog.png",
    description: "AI-powered platform that helps you create, customize, and manage online courses with ease, featuring tools like script generation, video creation, and learning roadmaps.",
    preview: "https://ai-frontend-flame-two.vercel.app/",
  },
]

const categories = ["All", "AI Automation", "Web3", "B2B Portal", "ML Projects","Web"]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-purple-500">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <PortfolioItem item={item} onClick={() => setSelectedItem(item.id)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Portfolio Modal */}
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {portfolioItems.find((item) => item.id === selectedItem) && (
                  <div>
                    <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                      <img
                        src={portfolioItems.find((item) => item.id === selectedItem)?.image || "/placeholder.svg"}
                        alt={portfolioItems.find((item) => item.id === selectedItem)?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {portfolioItems.find((item) => item.id === selectedItem)?.title}
                    </h3>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400">
                        {portfolioItems.find((item) => item.id === selectedItem)?.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">
                      {portfolioItems.find((item) => item.id === selectedItem)?.description}
                    </p>
                    <div className="flex justify-between">
                      <Link
                      href={portfolioItems.find((item) => item.id === selectedItem)?.preview || "#"}
                      target="_blank"
                        className="border-gray-700 border rounded-lg p-2 hover:bg-black text-gray-300 hover:text-white"
                      >
                        Preview
                      </Link>
                      <Button
                        onClick={() => setSelectedItem(null)}
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:text-white"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
