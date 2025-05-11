"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Users, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-500">Stepous Labs</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're a team of passionate technologists dedicated to building cutting-edge digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30"></div>
              <div className="relative bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      17+
                    </span>
                    <span className="text-gray-400 text-sm text-center">Projects Completed</span>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      10+
                    </span>
                    <span className="text-gray-400 text-sm text-center">Happy Clients</span>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      2+
                    </span>
                    <span className="text-gray-400 text-sm text-center">Years Experience</span>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      24/7
                    </span>
                    <span className="text-gray-400 text-sm text-center">Support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Transforming Ideas into Digital Reality</h3>
            <p className="text-gray-400 mb-6">
              At Stepous Labs, we combine technical expertise with creative thinking to deliver innovative solutions
              that drive business growth. Our team of experts is passionate about leveraging cutting-edge technologies
              to solve complex problems and create exceptional digital experiences.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
                  text: "Expert team of developers, designers, and strategists",
                },
                {
                  icon: <Award className="h-5 w-5 text-blue-500" />,
                  text: "Award-winning solutions with measurable results",
                },
                {
                  icon: <Users className="h-5 w-5 text-blue-500" />,
                  text: "Client-focused approach with transparent communication",
                },
                {
                  icon: <Zap className="h-5 w-5 text-blue-500" />,
                  text: "Rapid development and deployment methodologies",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-0.5">{item.icon}</div>
                  <p className="text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {["Innovation", "Quality", "Reliability", "Expertise", "Scalability"].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {/* Timeline items */}
            {[
              {
                year: "2025",
                title: "Founded",
                description: "Stepous Labs was founded with a vision to create innovative digital solutions.",
              },
              {
                year: "2025",
                title: "Legally Registered",
                description: "This is to certify that the Stepous Labs has been registered under the provisions of the Micro, Small & Medium Enterprises Development (MSMED) Act, 2006.",
              },
              {
                year: "2025",
                title: "Global Reach",
                description: "Started working with international clients and opened our first overseas office.",
              },
              
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center justify-between mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-5/12"></div>
                <div className="z-10 flex items-center justify-center w-10 h-10 bg-gray-900 border-4 border-blue-500 rounded-full">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                </div>
                <div className="w-5/12 p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-lg">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
