import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Plus Two Mathematics",
      description: "Advanced mathematics for Grade 12 students covering Relations & Functions, Calculus, Vectors, Linear Programming, and more",
      chapters: 13,
      link: "/plus-two",
      gradient: "from-blue-500 to-blue-700",
      topics: ["Calculus", "Vectors", "Probability", "Linear Programming"]
    },
    {
      title: "Plus One Mathematics",
      description: "Foundation course for Grade 11 covering Sets, Trigonometry, Complex Numbers, Sequences & Series, and more",
      chapters: 15,
      link: "/plus-one",
      gradient: "from-cyan-500 to-cyan-700",
      topics: ["Sets", "Trigonometry", "Permutations", "Conic Sections"]
    },
    {
      title: "Class 10 Mathematics",
      description: "Complete CBSE Class 10 curriculum including Real Numbers, Algebra, Geometry, Trigonometry, and Statistics",
      chapters: 14,
      link: "/class-10",
      gradient: "from-indigo-500 to-indigo-700",
      topics: ["Algebra", "Geometry", "Trigonometry", "Statistics"]
    },
    {
      title: "Basics of Mathematics",
      description: "Essential mathematical concepts and fundamentals explained through 6 comprehensive videos",
      chapters: 6,
      link: "/basics",
      gradient: "from-purple-500 to-purple-700",
      topics: ["Number Systems", "Basic Operations", "Fractions", "Percentages"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <section className="py-12 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Our Courses</h1>
              <p className="text-lg text-muted-foreground">
                Choose from our comprehensive mathematics courses designed for different academic levels. 
                Each course features chapter-wise videos and structured learning paths.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {courses.map((course, index) => (
                <Card key={index} className="card-hover-effect overflow-hidden">
                  <div className={`h-40 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
                    <BookOpen className="h-20 w-20 text-white" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">{course.title}</h2>
                    <p className="text-muted-foreground">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, i) => (
                        <span key={i} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm font-semibold text-primary">
                        {course.chapters} {course.chapters === 6 ? 'Videos' : 'Chapters'}
                      </span>
                      <Link to={course.link}>
                        <Button>
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
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
