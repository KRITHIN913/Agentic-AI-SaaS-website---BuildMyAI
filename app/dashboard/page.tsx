"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CodeRain } from "@/components/code-rain"
import {
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Calendar,
  User,
  Building,
  Target,
  DollarSign,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Headphones,
  Video,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  const [consultationData, setConsultationData] = useState<any>(null)
  const [timeRemaining, setTimeRemaining] = useState("")

  useEffect(() => {
    // Get consultation data from localStorage
    const data = localStorage.getItem("consultationData")
    if (data) {
      setConsultationData(JSON.parse(data))
    }

    // Calculate time until response (24 hours from now)
    const responseTime = new Date()
    responseTime.setHours(responseTime.getHours() + 24)

    const updateTimer = () => {
      const now = new Date()
      const diff = responseTime.getTime() - now.getTime()
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        setTimeRemaining(`${hours}h ${minutes}m`)
      } else {
        setTimeRemaining("Soon!")
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  const nextSteps = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Confirmation",
      description: "You'll receive a confirmation email within 5 minutes",
      status: "pending",
      time: "5 minutes",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Initial Contact",
      description: "Our team will reach out to schedule your consultation",
      status: "pending",
      time: "2-4 hours",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Strategy Session",
      description: "30-minute video call to discuss your project in detail",
      status: "pending",
      time: "24-48 hours",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Custom Proposal",
      description: "Detailed project proposal with timeline and pricing",
      status: "pending",
      time: "3-5 days",
    },
  ]

  const supportOptions = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      href: "/support",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      action: "Call Now",
      href: "tel:+15551234567",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Support",
      description: "Send us your questions anytime",
      action: "Send Email",
      href: "mailto:hello@buildmyai.com",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <CodeRain />
      </div>
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <NavBar />

      <div className="relative z-10 min-h-screen pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Thank You Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                Thank You!
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Thank you for choosing BuildMyAi for your project needs. We're excited to help transform your vision into reality.
            </p>

            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Your consultation request has been submitted</span>
            </div>
          </motion.div>

          {/* Response Time Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white flex items-center justify-center">
                  <Clock className="w-6 h-6 mr-3 text-blue-400" />
                  We'll Get Back to You Soon
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-emerald-400">{timeRemaining}</div>
                <p className="text-gray-400">Expected response time</p>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-300">
                    Our expert team is reviewing your consultation request. You'll receive a personalized response 
                    within 24 hours with next steps for your project.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Consultation Summary */}
          {consultationData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    <User className="w-5 h-5 mr-3 text-purple-400" />
                    Your Consultation Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {consultationData.name && (
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm text-gray-400">Contact Name</span>
                        </div>
                        <p className="text-white font-medium">{consultationData.name}</p>
                      </div>
                    )}
                    
                    {consultationData.email && (
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Mail className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-400">Email</span>
                        </div>
                        <p className="text-white font-medium">{consultationData.email}</p>
                      </div>
                    )}

                    {consultationData.company && (
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Building className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-gray-400">Company</span>
                        </div>
                        <p className="text-white font-medium">{consultationData.company}</p>
                      </div>
                    )}

                    {consultationData.businessType && (
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Target className="w-4 h-4 text-orange-400" />
                          <span className="text-sm text-gray-400">Business Type</span>
                        </div>
                        <p className="text-white font-medium">{consultationData.businessType}</p>
                      </div>
                    )}

                    {consultationData.budget && (
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-400">Budget Range</span>
                        </div>
                        <p className="text-white font-medium">{consultationData.budget}</p>
                      </div>
                    )}

                    {consultationData.timeline && (
                      <div className="bg-gray-800/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Calendar className="w-4 h-4 text-pink-400" />
                          <span className="text-sm text-gray-400">Timeline</span>
                        </div>
                        <p className="text-white font-medium">{consultationData.timeline}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Next Steps Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What Happens Next?</h2>
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-6 bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 text-right">
                    <div className="text-sm text-emerald-400 font-medium">{step.time}</div>
                    <div className="text-xs text-gray-500">Expected</div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Need Immediate Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-500 group-hover:to-blue-500 transition-all duration-300">
                        <div className="text-gray-300 group-hover:text-white transition-colors">
                          {option.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                      <Button
                        asChild
                        className="w-full bg-gray-800 hover:bg-emerald-500 text-white border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                      >
                        <a href={option.href}>
                          {option.action}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">What Makes Us Different?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-white">AI-Powered Solutions</h4>
                    <p className="text-gray-400 text-sm">Cutting-edge AI technology tailored to your specific needs</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white">Personalized Approach</h4>
                    <p className="text-gray-400 text-sm">Every solution is customized to fit your unique requirements</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-white">Proven Results</h4>
                    <p className="text-gray-400 text-sm">98% client satisfaction with measurable business impact</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}