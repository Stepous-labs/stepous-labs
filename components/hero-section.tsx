"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ParticleBackground } from "./particle-background"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex  items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950"></div>

      {/* Particle Effect */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                WE BUILD PERMISSIONLESS SYSTEMS WITH TRUSTLESS TECH.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block">Scaling Innovation with</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              From AI automation to web3 solutions, we build your digital future. Elevate your business with our
              full-stack development, AI agents, and blockchain expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-md group"
              >
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800 rounded-md">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-lg blur opacity-75"></div>
              <div className="relative rounded-2xl p-6">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                src="https://media-hosting.imagekit.io/cdc9a38b3f9540de/labslogo-removebg-preview.png?Expires=1841578649&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l5Yj6MjAkHIy1wo6~iAZeOfEETx~yAk1-c6s0M4xI0mdWG5rBmG4QjIbjGH9fRmNvrOQCpTIsqMtawTzfGAVLf2QgfY2~EPNKb3FBCAokFYng67XuFsgh-K~QYIaojDszGEqvZDPjqhMmjQksTb~LGctzp0gLxDfeuwq1bCTcz7PENRFlWOc2oDDMWVr2peVZFhYc8adgBhbEAjaP0JbyesaslLCMzlHVKWII6n5e49~fspgSY0FnlKTCtAe5MMTEIywJFENgrW8zJxpHwz19Sn5FlFqR1e8oI~uwRipcp2~HS9JTRSY~Akr8AOHLrIDeAh~yvtaWiNNW~o~Td5QDg__"
                alt="Background"
                className="absolute  inset-0 w-full h-[590px] rounded-full object-cover z-0"
                />
                <TechSphere />
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

 function TechSphere() {
  // Variants for node animations (pulsing effect)
  const nodeVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  // Variants for line animations (fading effect)
  const lineVariants = {
    animate: {
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  // Variants for the entire SVG rotation
  const sphereVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  }

  return (
    <div className="w-full h-full  rounded-2xl flex items-center justify-center">
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        variants={sphereVariants}
        animate="animate"
      >
        <defs>
          {/* Dynamic gradient */}
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6">
              <animate
                attributeName="stop-color"
                values="#3b82f6;#8b5cf6;#3b82f6"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate
                attributeName="stop-color"
                values="#8b5cf6;#3b82f6;#8b5cf6"
                dur="4s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* Glow effect filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g fill="url(#techGradient)" filter="url(#glow)">
          {/* Blockchain-inspired pattern with varied sizes */}
          {[
            { x: 40, y: 40, size: 20, opacity: 0.7 },
            { x: 70, y: 40, size: 18, opacity: 0.5 },
            { x: 100, y: 40, size: 22, opacity: 0.9 },
            { x: 130, y: 40, size: 19, opacity: 0.6 },
            { x: 40, y: 70, size: 21, opacity: 0.8 },
            { x: 70, y: 70, size: 20, opacity: 0.4 },
            { x: 100, y: 70, size: 18, opacity: 0.7 },
            { x: 130, y: 70, size: 22, opacity: 0.5 },
            { x: 40, y: 100, size: 19, opacity: 0.6 },
            { x: 70, y: 100, size: 21, opacity: 0.9 },
            { x: 100, y: 100, size: 20, opacity: 0.5 },
            { x: 130, y: 100, size: 18, opacity: 0.8 },
            { x: 40, y: 130, size: 22, opacity: 0.5 },
            { x: 70, y: 130, size: 19, opacity: 0.7 },
            { x: 100, y: 130, size: 21, opacity: 0.6 },
            { x: 130, y: 130, size: 20, opacity: 0.9 },
          ].map((node, index) => (
            <motion.rect
              key={`node-${index}`}
              x={node.x}
              y={node.y}
              width={node.size}
              height={node.size}
              rx="2"
              variants={nodeVariants}
              animate="animate"
              initial={{ opacity: node.opacity }}
            />
          ))}

          {/* Connection lines */}
          {[
            // Vertical lines
            { x1: 50, y1: 60, x2: 50, y2: 70, strokeWidth: 2 },
            { x1: 80, y1: 60, x2: 80, y2: 70, strokeWidth: 2 },
            { x1: 110, y1: 60, x2: 110, y2: 70, strokeWidth: 2 },
            { x1: 140, y1: 60, x2: 140, y2: 70, strokeWidth: 2 },
            { x1: 50, y1: 90, x2: 50, y2: 100, strokeWidth: 2 },
            { x1: 80, y1: 90, x2: 80, y2: 100, strokeWidth: 2 },
            { x1: 110, y1: 90, x2: 110, y2: 100, strokeWidth: 2 },
            { x1: 140, y1: 90, x2: 140, y2: 100, strokeWidth: 2 },
            { x1: 50, y1: 120, x2: 50, y2: 130, strokeWidth: 2 },
            { x1: 80, y1: 120, x2: 80, y2: 130, strokeWidth: 2 },
            { x1: 110, y1: 120, x2: 110, y2: 130, strokeWidth: 2 },
            { x1: 140, y1: 120, x2: 140, y2: 130, strokeWidth: 2 },
            // Horizontal lines
            { x1: 60, y1: 50, x2: 70, y2: 50, strokeWidth: 2 },
            { x1: 90, y1: 50, x2: 100, y2: 50, strokeWidth: 2 },
            { x1: 120, y1: 50, x2: 130, y2: 50, strokeWidth: 2 },
            { x1: 60, y1: 80, x2: 70, y2: 80, strokeWidth: 2 },
            { x1: 90, y1: 80, x2: 100, y2: 80, strokeWidth: 2 },
            { x1: 120, y1: 80, x2: 130, y2: 80, strokeWidth: 2 },
            { x1: 60, y1: 110, x2: 70, y2: 110, strokeWidth: 2 },
            { x1: 90, y1: 110, x2: 100, y2: 110, strokeWidth: 2 },
            { x1: 120, y1: 110, x2: 130, y2: 110, strokeWidth: 2 },
            { x1: 60, y1: 140, x2: 70, y2: 140, strokeWidth: 2 },
            { x1: 90, y1: 140, x2: 100, y2: 140, strokeWidth: 2 },
            { x1: 120, y1: 140, x2: 130, y2: 140, strokeWidth: 2 },
            // Diagonal lines
            { x1: 60, y1: 60, x2: 70, y2: 70, strokeWidth: 1.5 },
            { x1: 90, y1: 60, x2: 100, y2: 70, strokeWidth: 1.5 },
            { x1: 120, y1: 60, x2: 130, y2: 70, strokeWidth: 1.5 },
            { x1: 60, y1: 90, x2: 70, y2: 100, strokeWidth: 1.5 },
            { x1: 90, y1: 90, x2: 100, y2: 100, strokeWidth: 1.5 },
            { x1: 120, y1: 90, x2: 130, y2: 100, strokeWidth: 1.5 },
            { x1: 60, y1: 120, x2: 70, y2: 130, strokeWidth: 1.5 },
            { x1: 90, y1: 120, x2: 100, y2: 130, strokeWidth: 1.5 },
            { x1: 120, y1: 120, x2: 130, y2: 130, strokeWidth: 1.5 },
          ].map((line, index) => (
            <motion.line
              key={`line-${index}`}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#techGradient)"
              strokeWidth={line.strokeWidth}
              variants={lineVariants}
              animate="animate"
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  )
}