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
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Learn With Jain
              </h1>
              <p className="text-xl text-muted-foreground">
                Your Complete Mathematics Learning Companion
              </p>
              <p className="text-lg text-muted-foreground">
                Master mathematics from basics to advanced levels with our comprehensive video courses designed for Plus Two, Plus One, and Class 10 students.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/courses">
                  <Button size="lg" className="gap-2">
                    Start Learning Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mathematics Learning" 
                className="rounded-2xl shadow-2xl w-full"
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
              <Card key={index} className="card-hover-effect">
                <CardContent className="p-6 space-y-4">
                  <div className={`h-32 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                    <BookOpen className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-sm font-medium text-primary">
                      {course.chapters} {course.chapters === 6 ? 'Videos' : 'Chapters'}
                    </span>
                    <Link to={course.link}>
                      <Button variant="outline" size="sm">
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
              <Card key={index} className="card-hover-effect">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who are mastering mathematics with our comprehensive courses
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" variant="secondary">
                Explore Courses
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
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
