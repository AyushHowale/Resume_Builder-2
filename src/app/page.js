"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  FileText,
  Zap,
  Target,
  Download,
  Eye,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Award,
} from "lucide-react"

function LandingPage({ onGetStarted }) {
  const router = useRouter()
  
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Content",
      description: "Get intelligent suggestions for your resume content, optimized for your industry",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Live Preview",
      description: "See your resume update in real-time as you make changes",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "ATS Optimized",
      description: "Ensure your resume passes through Applicant Tracking Systems",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Multiple Formats",
      description: "Export your resume as PDF, Word, or share online",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick & Easy",
      description: "Build a professional resume in minutes, not hours",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Templates",
      description: "Choose from expertly designed templates that impress recruiters",
    },
  ]

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "50K+", label: "Resumes Created" },
    { icon: <CheckCircle className="w-5 h-5" />, value: "95%", label: "Success Rate" },
    { icon: <Clock className="w-5 h-5" />, value: "5 min", label: "Average Time" },
    { icon: <Star className="w-5 h-5" />, value: "4.9/5", label: "User Rating" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      content:
        "This AI resume builder helped me land my dream job at a top tech company. The suggestions were spot-on!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      content:
        "The ATS optimization feature made all the difference. I started getting more interview calls immediately.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      content: "Clean, professional templates and AI-powered content suggestions. Couldn't ask for more!",
      rating: 5,
    },
  ]

  const handleGetStarted = () => {
    router.push("/pages/login")
    if (onGetStarted) {
      onGetStarted()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Resume Builder
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="gap-1">
                <Sparkles className="w-3 h-3" />
                AI Powered
              </Badge>
              <Button variant="outline" onClick={handleGetStarted}>
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 gap-2">
            <Sparkles className="w-4 h-4" />
            Powered by Advanced AI
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Build Your Resume with AI
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Create professional, ATS-optimized resumes in minutes with our intelligent AI assistant. Stand out from the
            crowd and land your dream job.
          </p>
         
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
              onClick={handleGetStarted}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Templates
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-blue-600">{stat.icon}</div>
                  <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose Our AI Resume Builder?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our advanced AI technology helps you create resumes that get noticed by both humans and machines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-lg text-gray-600">Create your professional resume in just 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter Your Information</h3>
              <p className="text-gray-600">Fill in your personal details, work experience, and education</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Optimization</h3>
              <p className="text-gray-600">Our AI suggests improvements and optimizes your content</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Download & Apply</h3>
              <p className="text-gray-600">Export your resume and start applying to your dream jobs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Users Say</h2>
          <p className="text-lg text-gray-600">Join thousands of professionals who've landed their dream jobs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Your Perfect Resume?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who've successfully landed their dream jobs with our AI-powered resume
            builder.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100 gap-2"
            onClick={handleGetStarted}
          >
            Start Building Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">AI Resume Builder</span>
              </div>
              <p className="text-gray-400">Create professional resumes with the power of AI technology.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Resume Builder</li>
                <li>Templates</li>
                <li>AI Assistant</li>
                <li>ATS Checker</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Resume Tips</li>
                <li>Career Advice</li>
                <li>Interview Prep</li>
                <li>Job Search</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Resume Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage