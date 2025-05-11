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
    image: "https://media-hosting.imagekit.io/206bdd51a386428b/screenshot_1746971186710.png?Expires=1841579188&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ypctXdWlEUhkcIIMh0~50xiX5dPq2NVySQIVg7bjshTDYp9Q95FiObE2RKfUruhCIfHtClYl5Se3llVrLGlRaCIPKAygyhS4ptNmK92bLRuNAvwLaysXyea3qrZMTvFbPsN~DwXm2F4A1eCgsUi6Jojcfo1oyWor0XinKZj-iN0Ep1qh4L7ZmOmJjzdErlldH9XY7GlUWsc9PrBQ26tIXBFIL83kVqxRVM9F2m~81YwkphjEV86M5JzzppDStKe8Mr8XsKmFutxNVk~iu8HGfai66gnZahadgnVghLmXDK1s7hNqnzkkA1kiAHhkx~IAafzXEP0JJrJeLw5jVft1iA__",
    description: "A real-time security monitoring dashboard for tracking exploits and vulnerabilities in the Solana ecosystem.",
    preview : "https://superteam-security-dashboard-swart.vercel.app/",
  },
  {
    id: 2,
    title: "Weeding photoshoot Platform",
    category: "Web",
    image: "https://media-hosting.imagekit.io/40de3b970e1943d2/screenshot_1746972242296.png?Expires=1841580243&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EcSIEWS05Z8wFjT3LZhfNXaxE7IQRI8HK3E9LzcdmQ6iSfSgD8QNGdWBRfUfVcXQm8CJ5lLZ9MGUzGD1FYv0uznTI5wdEvmDL3ZsaAfxB7B4v8SnLnXXelIxA0USPOLgJrFvIocxnrx4KSmMa21SFT8GRufNOXNSFNqwgDI22rxFd0Df2nZOelERN1wgE-wZ5scV~e9y9HASPViDGdKmHgRObreW4SLA892P1ABL~3ovYeJGrM3Ek1cZRTtHctBfm5JhtXKlgXkH36VFECfXhb9ACjgEpaTrIBM9Gr-yYJGD4ULJGOLNDLbIXyhYi4yN6d55kDR4wfD5g~IHxqPqlA__",
    description: " Parth Studios, we transform your love story into timeless art. We are passionate creators, capturing every emotion and detail. From tender glances to grand celebrations, every moment matters.",
    preview : "https://parth-studios-harshit-jains-projects-ef081127.vercel.app/",
  },
  {
    id: 3,
    title: "Enterprise Event Management",
    category: "Web",
    image: "https://media-hosting.imagekit.io/f3614a7984054725/screenshot_1746972484375.png?Expires=1841580485&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xKPiWNZezfk61tgdSGfzr3g-Qprq~MaGE57IdRalunUdtCGNnhu98nNjL3HYd-TWsnVJQZ~1fbjcZwSZXRdewe9Szt4HrqZPE3h-lgBtOoUyhEt4vaPkDGjVi~TGDq6i1GIb~0I6zc~NK3hGjUchBS-uz7O5Qjgvw8HgtH7h-mKDWqYufvhtytiR2GW1j22Yb8yUw5tJKkToGB7HB2gd3PbWvITkP1iP8diuI-61P09Wv34kmoV~JvfbAGh~XS8eCnZZXm8RX-t0cySyL2RYyVvKsf3LYcEySKfWDkBqRZitMBcN~aDwdXSI03~zIAalrY-WgNvTYfrl-q6Qu~Twbw__",
    description: "At NeoNiche, we craft experiences that seamlessly blend creativity, strategy, and technology to empower brands and drive measurable outcomes. As a full-service global agency, we pride ourselves on delivering holistic solutions that connect with audiences, enhance brand value, and achieve lasting impact.",
    preview : "https://www.neoniche.com/",
  },
  {
    id: 4,
    title: "Onchain tax optimiser",
    category: "Web3",
    image: "https://media-hosting.imagekit.io/28f67fc1b96c4e7c/screenshot_1746972854686.png?Expires=1841580856&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=DrwR00iAvNssCkEhR7i7wxbSF4PMDAHOaCa2289R-huUTDcaFFM9elJQqj6dL9Dp-T8YS6j5vDuAKysTMnD-QVlST9Eviu8J9BwfY6CEP22T7F7byvlvQ7KS5Togwvqiww~lL-F~RbRvuaUNWn7-qfAA2vytM2WG3YLtUF2xX2gCMlP2TG9VACjBBNneVQrxzol7xpY4lRpiT14~uaWZTKDoFtNN65hJgLBcjJlIsZ~n6Amu~FGG5urLFyJ8h-v0kA5FvK-mh8xrvxqD4nMvs3TeKDLp6sozgvoEDDcxCNOebZz9mBmSY~UivK9HElOjv6MjYmN7hEzUMt3s7mm8hQ__",
    description: "A cutting-edge application designed to simplify and optimize cryptocurrency tax compliance for US users, built on the Base blockchain network. This project leverages AI, blockchain technology, and Base's low-cost infrastructure to deliver a comprehensive, user-friendly solution for crypto tax management.",
    preview: "https://onchain-tax-optimizer.vercel.app/",
  },
  {
    id: 5,
    title: "Climate Impact Apps on Solana",
    category: "Web3",
    image: "https://media-hosting.imagekit.io/61327e57e6554320/screenshot_1746973476717.png?Expires=1841581478&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2NplhzGaX3WAbkymHhwZd82u2s4ZkrSq3ArK8fvPbMjxAJ9m4Q1XPTVCsSR7LqO6Y18vHf79c~~tUf4FK3a9kO~3CyXp2MtoBRHa7htne9M-z0wJn3bFvcgUk-ZpVZvRoHeIr9hN4aZQWWnZTF-DfCWKaXwEuhWtPZtIknY15aiefoTgtXxceP7WqhDXjJRcVJi3YlYZmsrGpnhtK2EITfAcB8xaJdKYZSLyAdj2tlQ41khJYnJ3Rqy~cXPx3ivLrp0itTRTVrMVo05lDr9ce0gNliFQRQGjMyplnC56NReJN8PtvUFLvqZj0fbc1lgDv8-lG03qqiL1WcJu9nUgwQ__",
    description: "The complete developer toolkit for building, verifying, and scaling climate-focused applications on the Solana blockchain. Transparent, composable, and impact-driven.",
    preview: "https://sol-track-mu.vercel.app/",
  },
  {
    id: 6,
    title: "AI Content Generator",
    category: "ML Projects",
    image: "https://media-hosting.imagekit.io/f0211edcbdd84dac/screenshot_1746978183417.png?Expires=1841586192&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lPPg7jnanFGaKz8eu3O2cOvop5LQE~X9uCD-feW9UFU8NZexyLqNefXPXLy51iUsDp9-W3axCqGlDf16pWW5vF5O59TdGWKSqhnQCWT17ZaqyPsg~wreMMRHL28TdqBtQf2Z0tSa5cgHNX0DYpW1oKuUv22g0kt6VnFIEucV35Fu-66P-qDe1FSKS0iRTdUuAFyKoSTzpkry2U6VVvvpht8ESV6CmagsUr1XXia59vdqgNWis~5zF51Y5JePSUPvEuAT9KJd6i2usdYdjHhmkHqjyb2lKZkU9TU-f9brBocvbHl~hR5JSgK~AENRuR0RlRw~Ckz8G6nr1sfHIqM-lQ__",
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
