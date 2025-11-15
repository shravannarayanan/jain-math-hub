import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, PlayCircle } from "lucide-react";

const PlusOne = () => {
  const chapters = [
    { id: 1, title: "Sets" },
    { id: 2, title: "Relations & Functions" },
    { id: 3, title: "Trigonometric Functions" },
    { id: 4, title: "Complex Numbers" },
    { id: 5, title: "Linear Inequalities" },
    { id: 6, title: "Permutations & Combinations" },
    { id: 7, title: "Binomial Theorem" },
    { id: 8, title: "Sequences & Series" },
    { id: 9, title: "Straight Lines" },
    { id: 10, title: "Conic Sections" },
    { id: 11, title: "Introduction to 3D Geometry" },
    { id: 12, title: "Limits & Derivatives" },
    { id: 13, title: "Statistics" },
    { id: 14, title: "Probability" },
    { id: 15, title: "Mathematical Reasoning" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <section className="py-12 hero-gradient text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium">Grade 11 / Plus One</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Plus One Mathematics</h1>
              <p className="text-lg opacity-90">
                Foundation building course with 15 comprehensive chapters covering all essential mathematics topics
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  <span>15 Chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Intermediate Level</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Course Chapters</h2>
                <p className="text-muted-foreground">
                  Select a chapter to start learning
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapters.map((chapter) => (
                  <Card key={chapter.id} className="card-hover-effect">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary font-bold">
                          {chapter.id}
                        </div>
                        <h3 className="font-semibold flex-1 leading-tight">{chapter.title}</h3>
                      </div>
                      <Link to={`/chapter/${chapter.id}`}>
                        <Button className="w-full">
                          <PlayCircle className="h-4 w-4 mr-2" />
                          Open Chapter
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PlusOne;
