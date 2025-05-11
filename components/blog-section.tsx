"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Automation",
    excerpt:
      "Explore how artificial intelligence is transforming business processes and creating new opportunities for automation.",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "AI",
  },
  {
    id: 2,
    title: "Web3 Development: Trends to Watch in 2023",
    excerpt:
      "Discover the latest trends in Web3 development and how they're shaping the future of decentralized applications.",
    date: "April 28, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web3",
  },
  {
    id: 3,
    title: "Building Scalable B2B Portals: Best Practices",
    excerpt: "Learn the best practices for designing and developing scalable B2B portals that drive business growth.",
    date: "April 10, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    category: "Development",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-purple-500">Insights</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest articles, news, and insights on technology and digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/80 text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0 group">
                  <span className="mr-2">Read More</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md">
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
