"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "./ui/service-card"
import { Code2, Bot, Workflow, Globe, Database, BarChart3, Server, Rocket, Cog } from "lucide-react"

const services = [
  {
    icon: <Code2 className="h-10 w-10" />,
    title: "Full-Stack Development",
    description: "End-to-end website and application development with cutting-edge technologies.",
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "AI Automation & Agents",
    description: "Custom AI solutions and intelligent agents to automate your business processes.",
  },
  {
    icon: <Workflow className="h-10 w-10" />,
    title: "Workflow Automation",
    description: "Streamline your operations with custom workflow automation solutions.",
  },
  {
    icon: <Database className="h-10 w-10" />,
    title: "B2B Portals",
    description: "Secure, scalable B2B portals to enhance your business relationships.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Web3 Projects",
    description: "Blockchain solutions on Solana, Base, Aptos, Xion, and other platforms.",
  },
  {
    icon: <BarChart3 className="h-10 w-10" />,
    title: "ML Projects",
    description: "Machine learning solutions to extract insights and value from your data.",
  },
  {
    icon: <Server className="h-10 w-10" />,
    title: "MCP Servers",
    description: "Managed cloud platform servers with high performance and reliability.",
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "Startup Scaling",
    description: "Comprehensive solutions to scale your startup from concept to market leader.",
  },
  {
    icon: <Cog className="h-10 w-10" />,
    title: "Server Maintenance",
    description: "Proactive server maintenance to ensure optimal performance and security.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard icon={service.icon} title={service.title} description={service.description} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
