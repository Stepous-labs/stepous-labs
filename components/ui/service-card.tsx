"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 group"
    >
      <div className="mb-4 text-blue-500 group-hover:text-purple-500 transition-colors duration-300">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}
