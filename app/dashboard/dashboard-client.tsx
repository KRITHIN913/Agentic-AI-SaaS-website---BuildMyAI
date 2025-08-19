"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import { CodeRain } from "@/components/code-rain";
import { Project } from "@/lib/db/schema";
import {
  CheckCircle, Clock, Mail, Phone, Calendar, User, Building, Target, DollarSign, Sparkles, ArrowRight, MessageSquare, Headphones, Video, FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// A small helper component to keep the JSX clean
const InfoCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | null | undefined }) => {
  if (!value) return null;
  return (
    <div className="bg-gray-800/30 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-2">
        {icon}
        <span className="text-sm text-gray-400">{label}</span>
      </div>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
};

export function DashboardClient({ consultationData }: { consultationData: Project | null }) {
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const responseTime = new Date(consultationData?.createdAt || Date.now());
    responseTime.setHours(responseTime.getHours() + 24);

    const updateTimer = () => {
      const now = new Date();
      const diff = responseTime.getTime() - now.getTime();
      
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`${hours}h ${minutes}m`);
      } else {
        setTimeRemaining("Soon!");
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000);

    return () => clearInterval(interval);
  }, [consultationData]);

  const nextSteps = [
    { icon: <Mail className="w-6 h-6" />, title: "Email Confirmation", description: "You'll receive a confirmation email within 5 minutes", time: "5 minutes" },
    { icon: <Phone className="w-6 h-6" />, title: "Initial Contact", description: "Our team will reach out to schedule your consultation", time: "2-4 hours" },
    { icon: <Video className="w-6 h-6" />, title: "Strategy Session", description: "30-minute video call to discuss your project in detail", time: "24-48 hours" },
    { icon: <FileText className="w-6 h-6" />, title: "Custom Proposal", description: "Detailed project proposal with timeline and pricing", time: "3-5 days" },
  ];

  const supportOptions = [
    { icon: <MessageSquare className="w-5 h-5" />, title: "Live Chat", description: "Get instant answers", action: "Start Chat", href: "/support" },
    { icon: <Headphones className="w-5 h-5" />, title: "Phone Support", description: "Speak directly with our team", action: "Call Now", href: "+918374315934" },
    { icon: <Mail className="w-5 h-5" />, title: "Email Support", description: "Send us your questions", action: "Send Email", href: "buildmyai.tech@gmailx.com" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0"><CodeRain /></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <NavBar />
      <div className="relative z-10 min-h-screen pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-12">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">Thank You!</span></h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">Thank you for choosing BuildMyAi for your project needs. We're excited to help transform your vision into reality.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
              <CardHeader className="text-center"><CardTitle className="text-2xl text-white flex items-center justify-center"><Clock className="w-6 h-6 mr-3 text-blue-400" />We'll Get Back to You Soon</CardTitle></CardHeader>
              <CardContent className="text-center space-y-4"><div className="text-4xl font-bold text-emerald-400">{timeRemaining}</div><p className="text-gray-400">Expected response time</p></CardContent>
            </Card>
          </motion.div>
          {consultationData && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardHeader><CardTitle className="text-xl text-white flex items-center"><User className="w-5 h-5 mr-3 text-purple-400" />Your Consultation Details</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <InfoCard icon={<User className="w-4 h-4 text-emerald-400" />} label="Contact Name" value={consultationData.name} />
                    <InfoCard icon={<Mail className="w-4 h-4 text-blue-400" />} label="Email" value={consultationData.email} />
                    <InfoCard icon={<Building className="w-4 h-4 text-cyan-400" />} label="Company" value={consultationData.company} />
                    <InfoCard icon={<Target className="w-4 h-4 text-orange-400" />} label="Business Type" value={consultationData.businessType} />
                    <InfoCard icon={<DollarSign className="w-4 h-4 text-green-400" />} label="Budget Range" value={consultationData.budget} />
                    <InfoCard icon={<Calendar className="w-4 h-4 text-pink-400" />} label="Timeline" value={consultationData.timeline} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What Happens Next?</h2>
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }} className="flex items-center space-x-6 bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex-shrink-0"><div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center text-white">{step.icon}</div></div>
                  <div className="flex-1"><h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3><p className="text-gray-400">{step.description}</p></div>
                  <div className="flex-shrink-0 text-right"><div className="text-sm text-emerald-400 font-medium">{step.time}</div><div className="text-xs text-gray-500">Expected</div></div>
                  <div className="flex-shrink-0"><div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ✅ THIS IS THE MISSING SECTION ✅ */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Need Immediate Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportOptions.map((option, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}>
                  <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-500 group-hover:to-blue-500 transition-all duration-300">
                        <div className="text-gray-300 group-hover:text-white transition-colors">{option.icon}</div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                      <Button asChild className="w-full bg-gray-800 hover:bg-emerald-500 text-white border border-gray-700 hover:border-emerald-500 transition-all duration-300">
                        <a href={option.href}>{option.action}<ArrowRight className="w-4 h-4 ml-2" /></a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      <Footer />
    </main>
  );
}