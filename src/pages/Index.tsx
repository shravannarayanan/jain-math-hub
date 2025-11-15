import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Video, Users, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Index = () => {
  const courses = [
    {
      title: "Plus Two Mathematics",
      description: "Complete course with 13 comprehensive chapters",
      chapters: 13,
      link: "/plus-two",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Plus One Mathematics",
      description: "Foundation building with 15 detailed chapters",
      chapters: 15,
      link: "/plus-one",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Class 10 Mathematics",
      description: "CBSE board preparation with 14 chapters",
      chapters: 14,
      link: "/class-10",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Basics of Mathematics",
      description: "Fundamental concepts in 6 essential videos",
      chapters: 6,
      link: "/basics",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Structured Syllabus",
      description: "Follow a well-organized curriculum that covers all topics systematically"
    },
    {
      icon: Video,
      title: "Chapter-wise Videos",
      description: "Learn at your own pace with detailed video explanations for each chapter"
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description: "Learn from experienced educators who simplify complex concepts"
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Access high-quality educational material designed for academic excellence"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Learn With Jain
                </span>
              </h1>
              <p className="text-xl font-semibold text-foreground">
                Your Complete Mathematics Learning Companion
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Master mathematics from basics to advanced levels with our comprehensive video courses designed for Plus Two, Plus One, and Class 10 students.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <Button size="lg" className="gap-2 group glow-on-hover hover:scale-105 transition-all duration-300 shadow-lg">
                    Start Learning Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="hover:scale-105 transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img 
                src={heroImage} 
                alt="Mathematics Learning" 
                className="rounded-2xl shadow-2xl w-full relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive mathematics courses designed for different academic levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="card-hover-effect group overflow-hidden animate-fade-up border-2 border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`h-32 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                    <BookOpen className="h-16 w-16 text-white relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-semibold text-primary flex items-center gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                      {course.chapters} {course.chapters === 6 ? 'Videos' : 'Chapters'}
                    </span>
                    <Link to={course.link}>
                      <Button variant="outline" size="sm" className="group-hover:scale-105 transition-transform">
                        View Syllabus
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide the best learning experience with structured content and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-hover-effect group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12 transition-all">
                    <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 premium-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02ek0yNCA0MGMzLjMxMyAwIDYgMi42ODcgNiA2cy0yLjY4NyA2LTYgNi02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
            Join thousands of students who are mastering mathematics with our comprehensive courses
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: '200ms' }}>
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Explore Courses
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-110 transition-all duration-300 shadow-xl">
                Create Free Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
