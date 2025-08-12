"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import { SimpleBarChart, SimpleLineChart } from "@/components/ui/chart"
import { ModeToggle } from "@/components/mode-toggle"
import { cn, formatCurrency } from "@/lib/utils"
import {
  GraduationCap,
  HeartHandshake,
  User2,
  Users2,
  Zap,
  DollarSign,
  Target,
  Award,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Star,
} from "lucide-react"
import Link from "next/link"
import { Icons } from "@/components/icons"

// Sample dashboard data
const dashboardStats = [
  {
    title: "Total Revenue",
    value: formatCurrency(847250),
    change: "+12.5%",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Active Projects",
    value: "47",
    change: "+8.2%",
    icon: Target,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Client Satisfaction",
    value: "98.7%",
    change: "+2.1%",
    icon: Award,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Team Members",
    value: "24",
    change: "+4.3%",
    icon: Users2,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

const recentProjects = [
  {
    name: "E-commerce Platform",
    client: "TechCorp Inc.",
    progress: 85,
    status: "In Progress",
    dueDate: "2024-02-15",
    budget: 125000,
  },
  {
    name: "Mobile Banking App",
    client: "FinanceFirst",
    progress: 60,
    status: "Development",
    dueDate: "2024-03-20",
    budget: 200000,
  },
  {
    name: "Healthcare Dashboard",
    client: "MedTech Solutions",
    progress: 95,
    status: "Testing",
    dueDate: "2024-01-30",
    budget: 85000,
  },
  {
    name: "AI Analytics Tool",
    client: "DataDriven Co.",
    progress: 40,
    status: "Planning",
    dueDate: "2024-04-10",
    budget: 300000,
  },
]

const monthlyRevenue = [
  { name: "Jan", value: 65000 },
  { name: "Feb", value: 72000 },
  { name: "Mar", value: 68000 },
  { name: "Apr", value: 85000 },
  { name: "May", value: 92000 },
  { name: "Jun", value: 88000 },
]

const projectsByType = [
  { name: "Web Apps", value: 15, color: "#3b82f6" },
  { name: "Mobile", value: 12, color: "#10b981" },
  { name: "AI/ML", value: 8, color: "#f59e0b" },
  { name: "E-commerce", value: 12, color: "#8b5cf6" },
]

const features = [
  {
    name: "Engaging Learning Experience",
    description: "Interactive lessons and real-world projects make learning fun and effective.",
    icon: GraduationCap,
  },
  {
    name: "Personalized Mentorship",
    description: "Receive guidance and support from experienced mentors to achieve your goals.",
    icon: User2,
  },
  {
    name: "Collaborative Community",
    description: "Connect with fellow learners, share ideas, and build lasting relationships.",
    icon: Users2,
  },
  {
    name: "Career Advancement",
    description: "Gain in-demand skills and access career resources to unlock new opportunities.",
    icon: HeartHandshake,
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CTO at TechCorp",
    quote:
      "Weltivation delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
    image: "/placeholder.svg?height=60&width=60&text=SJ",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Founder of FinanceFirst",
    quote:
      "The mobile banking app they built for us has revolutionized how our customers interact with their finances. Outstanding work!",
    image: "/placeholder.svg?height=60&width=60&text=MC",
    rating: 5,
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Director at MedTech Solutions",
    quote:
      "Their healthcare dashboard has streamlined our operations significantly. The team's understanding of our industry needs was impressive.",
    image: "/placeholder.svg?height=60&width=60&text=ER",
    rating: 5,
  },
  {
    name: "David Park",
    title: "CEO of DataDriven Co.",
    quote:
      "The AI analytics tool they're developing for us is cutting-edge. Their expertise in machine learning is evident in every feature.",
    image: "/placeholder.svg?height=60&width=60&text=DP",
    rating: 5,
  },
]

export default function DashboardPage() {
  return (
    <div className="container relative">
      <header className="flex items-center justify-between py-10">
        <Link href="#" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Weltivation</span>
        </Link>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transform Your Business with Expert Development
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Partner with Weltivation to build cutting-edge applications that drive growth and innovation. From web
                platforms to AI solutions, we deliver excellence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "/services")}
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
              >
                Our Services
              </Button>
              <Button
                onClick={() => (window.location.href = "/consultation")}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-8 py-3"
              >
                <Zap className="w-5 h-5 mr-2" />
                Free Consultation
              </Button>
            </div>
          </div>
          <img
            src="/hero-image.png"
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Business Overview</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardStats.map((stat, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className={cn("p-2 rounded-full", stat.bgColor)}>
                    <stat.icon className={cn("h-4 w-4", stat.color)} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">{stat.change}</span> from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Monthly Revenue</span>
                </CardTitle>
                <CardDescription>Revenue trends over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleLineChart data={monthlyRevenue} height={200} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Projects by Type</span>
                </CardTitle>
                <CardDescription>Distribution of current projects</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleBarChart data={projectsByType} height={200} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Recent Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {recentProjects.map((project, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <span
                      className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        project.status === "In Progress" && "bg-blue-100 text-blue-800",
                        project.status === "Development" && "bg-yellow-100 text-yellow-800",
                        project.status === "Testing" && "bg-purple-100 text-purple-800",
                        project.status === "Planning" && "bg-gray-100 text-gray-800",
                      )}
                    >
                      {project.status}
                    </span>
                  </div>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} />
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {project.dueDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{formatCurrency(project.budget)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Weltivation?</h2>
            <p className="max-w-[800px] text-gray-500 mx-auto mt-4 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <span>{feature.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl mb-4">Client Success Stories</h2>
          <p className="max-w-[800px] text-gray-500 mx-auto text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
            See how we've helped businesses transform their operations and achieve remarkable growth.
          </p>
          <Carousel className="container" autoPlay={true} autoPlayInterval={5000}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="border-none shadow-md h-full">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="h-12 w-12 rounded-full"
                          />
                          <div className="flex-1">
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <CardDescription>{testimonial.title}</CardDescription>
                          </div>
                          <div className="flex space-x-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselIndicators />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <img
              src="/cta-image.png"
              alt="CTA Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Business?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of successful clients and start your journey towards digital transformation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => (window.location.href = "/consultation")}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium"
                >
                  <Activity className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
                <Button onClick={() => (window.location.href = "/portfolio")} variant="outline" size="lg">
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Weltivation. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
