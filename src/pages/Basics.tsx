import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlayCircle, Clock } from "lucide-react";

const Basics = () => {
  const videos = [
    { id: 1, title: "Introduction to Number Systems", duration: "25:30" },
    { id: 2, title: "Basic Arithmetic Operations", duration: "30:15" },
    { id: 3, title: "Fractions and Decimals", duration: "28:45" },
    { id: 4, title: "Percentages and Ratios", duration: "22:20" },
    { id: 5, title: "Basic Algebra Concepts", duration: "35:10" },
    { id: 6, title: "Introduction to Geometry", duration: "27:50" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <section className="py-12 hero-gradient text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Basics of Mathematics</h1>
              <p className="text-lg opacity-90">
                Master fundamental mathematical concepts with 6 comprehensive video lessons
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  <span>6 Video Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>~3 hours total</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Video Lessons</h2>
                <p className="text-muted-foreground">
                  Start from the beginning or jump to any topic
                </p>
              </div>

              <div className="space-y-4">
                {videos.map((video) => (
                  <Card key={video.id} className="card-hover-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
                          <PlayCircle className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-primary">Video {video.id}</span>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {video.duration}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold">{video.title}</h3>
                        </div>
                        <Link to={`/video/${video.id}`}>
                          <Button>
                            <PlayCircle className="h-4 w-4 mr-2" />
                            Watch Now
                          </Button>
                        </Link>
                      </div>
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

export default Basics;
