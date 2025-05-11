"use client"

import { motion } from "framer-motion"
import { Eye } from "lucide-react"

interface PortfolioItemProps {
  item: {
    id: number
    title: string
    category: string
    image: string
    description: string
  }
  onClick: () => void
}

export function PortfolioItem({ item, onClick }: PortfolioItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl cursor-pointer h-full" onClick={onClick}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-gray-900/30 flex flex-col justify-end p-6"
      >
        <div>
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 mb-3">
            {item.category}
          </span>
          <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>
          <div className="flex items-center text-blue-400 text-sm font-medium">
            <Eye className="h-4 w-4 mr-2" />
            <span>View Project</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
