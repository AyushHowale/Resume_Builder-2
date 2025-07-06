



  "use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Sparkles,
  FileText,
  Download,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X,
  Play,
  ChevronLeft,
  ChevronRight,
  Wand2,
  Shield,
  Palette,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react"

export  default function LandingPage({ onGetStarted }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const router=useRouter()
  const features = [
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "AI-Generated Bullet Points",
      description:
        "Let our AI craft compelling, industry-specific bullet points that highlight your achievements and skills.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Customizable Templates",
      description: "Choose from 20+ professionally designed templates that adapt to any industry or career level.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ATS Optimization",
      description: "Ensure your resume passes through Applicant Tracking Systems with our built-in ATS checker.",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Instant PDF Export",
      description: "Download your resume as a high-quality PDF, Word document, or share it online instantly.",
    },
  ]
  const modernResumeImages = [
  "https://imgs.search.brave.com/oAZDpNEOe10wCGZ47MYWHaUWfkVBvrl-4_xDjiwbY_8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2VzLnJlc3Vt/ZWxhYi5jb20vcGFn/ZXMvbW9kZXJuX3Rl/bXBsYXRlc19zeW5l/cmd5LndlYnA.svg?height=400&width=300&text=Modern+Resume+1&bg=4F46E5&color=white",
  "/placeholder.svg?height=400&width=300&text=Modern+Resume+2&bg=6366F1&color=white",
  "/placeholder.svg?height=400&width=300&text=Modern+Resume+3&bg=818CF8&color=white"
];

   const classicResumeImages = [
    "/placeholder.svg?height=400&width=300&text=Classic+Resume+1&bg=374151&color=white",
    "/placeholder.svg?height=400&width=300&text=Classic+Resume+2&bg=6B7280&color=white",
    "/placeholder.svg?height=400&width=300&text=Classic+Resume+3&bg=9CA3AF&color=white"
  ];

    const randomModernImage = modernResumeImages[Math.floor(Math.random() * modernResumeImages.length)];
  const randomClassicImage = classicResumeImages[Math.floor(Math.random() * classicResumeImages.length)];
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content:
        "This AI resume builder helped me land my dream job at Google. The AI suggestions were incredibly accurate and saved me hours of writing.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=SJ",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director at Meta",
      content:
        "The ATS optimization feature made all the difference. I went from 2% to 40% response rate on my applications. Absolutely game-changing!",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Netflix",
      content:
        "Clean, professional templates and AI-powered content suggestions. I got 3 job offers within 2 weeks of using this platform.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=ER",
    },
    {
      name: "David Kim",
      role: "Product Manager at Spotify",
      content:
        "The step-by-step guidance and real-time feedback helped me create a resume that truly represents my experience and achievements.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80&text=DK",
    },
  ]

  const faqs = [
    {
      question: "Is it really free?",
      answer:
        "Yes! Our basic plan is completely free and includes access to templates, AI suggestions, and PDF downloads. Premium features like advanced templates and priority support are available with our paid plans.",
    },
    {
      question: "Can I download my resume as PDF?",
      answer:
        "You can download your resume as a high-quality PDF, Word document, or even get a shareable link. All formats are optimized for both digital applications and printing.",
    },
    {
      question: "How is it different from Canva or MS Word?",
      answer:
        "Unlike generic design tools, our platform is specifically built for resumes with AI-powered content suggestions, ATS optimization, industry-specific templates, and real-time feedback to maximize your job search success.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security seriously. All your information is encrypted and stored securely. We never share your personal data with third parties, and you can delete your account and data at any time.",
    },
    {
      question: "Can I create multiple resumes?",
      answer:
        "Yes! You can create unlimited resumes and tailor them for different positions or industries. Our AI will help you customize content for each specific role you're applying for.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  const handleGetStarted = () => {
    router.push("/pages/login")
    if (onGetStarted) {
      onGetStarted()
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ResumeAI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Resume Builder
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Templates
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Examples
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                AI Tools
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" onClick={handleGetStarted }>
                Login
              </Button>
              <Button variant="ghost" onClick={handleGetStarted }>
                Sign Up
              </Button>
              <Button
                onClick={handleGetStarted }
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6"
              >
                Create Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  Resume Builder
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  Templates
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  Examples
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  AI Tools
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium px-4">
                  Pricing
                </a>
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                  <Button variant="outline" onClick={handleGetStarted }>
                    Login
                  </Button>
                  <Button
                    onClick={handleGetStarted }
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    Create Resume
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-6 gap-2">
                <Sparkles className="w-4 h-4" />
                Trusted by 500K+ users
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build your resume in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  minutes with AI
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get job-winning resumes tailored to your industry, experience, and goals. Our AI analyzes thousands of
                successful resumes to help you stand out.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2"
                >
                  Start for Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 gap-2">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  ATS-friendly
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free PDF download
                </div>
              </div>
            </div>

            {/* Enhanced Resume Preview with Real Images */}
            <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          {/* Modern Resume Template */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <img
              src={randomModernImage}
              alt="Modern Resume Template"
              className="w-full h-full object-cover"
            />
          </div>

                {/* Classic Resume Template */}
               <div className="bg-white rounded-xl shadow-2xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
            <img
              src={randomClassicImage}
              alt="Classic Resume Template"
              className="w-full h-full object-cover"
            />
          </div>
              </div>

              {/* Floating AI Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full animate-pulse">
                <Sparkles className="w-6 h-6" />
              </div>

              {/* Floating Success Badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                ✓ ATS Optimized
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Templates Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Professional Resume Templates</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of ATS-friendly templates designed by hiring experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Template 1 - Modern */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=300&text=Modern+Template&bg=4F46E5&color=white"
                    alt="Modern Resume Template"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-100 text-blue-800">Modern</Badge>
                    <span className="text-sm text-gray-500">Most Popular</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mt-2">Modern Professional</h3>
                  <p className="text-sm text-gray-600 mt-1">Clean design with gradient header</p>
                </div>
              </div>
            </div>

            {/* Template 2 - Creative */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=300&text=Creative+Template&bg=EC4899&color=white"
                    alt="Creative Resume Template"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-100 text-purple-800">Creative</Badge>
                    <span className="text-sm text-gray-500">Designer Favorite</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mt-2">Creative Edge</h3>
                  <p className="text-sm text-gray-600 mt-1">Bold design for creative roles</p>
                </div>
              </div>
            </div>

            {/* Template 3 - Professional */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=300&text=Professional+Template&bg=374151&color=white"
                    alt="Professional Resume Template"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gray-100 text-gray-800">Professional</Badge>
                    <span className="text-sm text-gray-500">Executive Choice</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mt-2">Executive Pro</h3>
                  <p className="text-sm text-gray-600 mt-1">Traditional layout for corporate roles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleGetStarted }
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2"
            >
              View All Templates
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our users transformed their careers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Before+After+Resume&bg=10B981&color=white"
                  alt="Resume transformation example"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/placeholder.svg?height=50&width=50&text=JS&bg=3B82F6&color=white"
                    alt="John Smith"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">John Smith</h3>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  "Increased my interview rate by 300% after using the AI suggestions. Landed my dream job at a Fortune
                  500 company!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Career+Growth&bg=8B5CF6&color=white"
                  alt="Career growth visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/placeholder.svg?height=50&width=50&text=MJ&bg=EC4899&color=white"
                    alt="Maria Johnson"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Maria Johnson</h3>
                    <p className="text-sm text-gray-600">Marketing Director</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  "The ATS optimization helped me get past the initial screening. Got 5 interviews in 2 weeks!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Job+Success&bg=F59E0B&color=white"
                  alt="Job success story"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/placeholder.svg?height=50&width=50&text=AL&bg=EF4444&color=white"
                    alt="Alex Lee"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Alex Lee</h3>
                    <p className="text-sm text-gray-600">Product Manager</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  "The professional templates made my resume stand out. Received multiple job offers within a month!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What makes our builder different?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge AI technology with proven resume strategies to help you land more interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Preview Section with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See how it works</h2>
            <p className="text-xl text-gray-600">Create a professional resume in 3 simple steps</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Your Template</h3>
                  <p className="text-gray-600">
                    Select from our collection of ATS-friendly, professionally designed templates that match your
                    industry.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Content</h3>
                  <p className="text-gray-600">
                    Our AI analyzes your experience and suggests compelling bullet points optimized for your target
                    role.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Download & Apply</h3>
                  <p className="text-gray-600">
                    Export your resume as PDF or Word and start applying to your dream jobs with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600&text=Resume+Builder+Demo&bg=6366F1&color=white"
                alt="Resume builder demo interface"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <Button
                size="lg"
                variant="secondary"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={handleGetStarted }
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2"
            >
              Start Building
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Loved by job seekers worldwide</h2>
            <p className="text-xl text-gray-600">Join thousands who've landed their dream jobs</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full border-2 border-gray-200"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</p>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
         {/* Company Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Trusted by professionals at top companies</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
              <img
                src="/placeholder.svg?height=60&width=120&text=Google&bg=4285F4&color=white"
                alt="Google"
                className="h-8 mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/placeholder.svg?height=60&width=120&text=Microsoft&bg=00A4EF&color=white"
                alt="Microsoft"
                className="h-8 mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/placeholder.svg?height=60&width=120&text=Apple&bg=000000&color=white"
                alt="Apple"
                className="h-8 mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/placeholder.svg?height=60&width=120&text=Amazon&bg=FF9900&color=white"
                alt="Amazon"
                className="h-8 mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/placeholder.svg?height=60&width=120&text=Meta&bg=1877F2&color=white"
                alt="Meta"
                className="h-8 mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/placeholder.svg?height=60&width=120&text=Netflix&bg=E50914&color=white"
                alt="Netflix"
                className="h-8 mx-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our resume builder</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to land your dream job?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join over 500,000 job seekers who've successfully created winning resumes with our AI-powered platform.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleGetStarted }
            className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 gap-2"
          >
            Build Resume Now
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ResumeAI</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Create professional, ATS-optimized resumes with the power of AI. Trusted by over 500,000 job seekers
                worldwide.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2024 ResumeAI. All rights reserved.</p>
              <Button
                onClick={handleGetStarted }
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2"
              >
                Build Resume Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
