import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, PlayCircle, BookOpen } from "lucide-react";

const ChapterVideo = () => {
  const { chapterId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(1);

  // Demo data - in real app this would come from backend
  const videos = [
    { id: 1, title: "Introduction to the Chapter", duration: "15:30" },
    { id: 2, title: "Basic Concepts Explained", duration: "22:45" },
    { id: 3, title: "Advanced Topics", duration: "28:15" },
    { id: 4, title: "Problem Solving Techniques", duration: "35:20" },
    { id: 5, title: "Practice Examples", duration: "25:10" }
  ];

  const chapterInfo = {
    title: "Chapter Overview",
    description: "This chapter covers fundamental concepts and their applications. Learn through step-by-step video explanations and practice problems."
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <PlayCircle className="h-24 w-24 text-primary mx-auto" />
                      <p className="text-lg font-semibold">Video Player</p>
                      <p className="text-sm text-muted-foreground">Chapter {chapterId} - Video {currentVideo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chapter Info */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-primary">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-semibold">Chapter {chapterId}</span>
                  </div>
                  <h1 className="text-2xl font-bold">{chapterInfo.title}</h1>
                  <p className="text-muted-foreground">{chapterInfo.description}</p>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  disabled={currentVideo === 1}
                  onClick={() => setCurrentVideo(Math.max(1, currentVideo - 1))}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous Video
                </Button>
                <Button
                  className="flex-1"
                  disabled={currentVideo === videos.length}
                  onClick={() => setCurrentVideo(Math.min(videos.length, currentVideo + 1))}
                >
                  Next Video
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Sidebar - Video List */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Chapter Videos</h2>
                  <div className="space-y-2">
                    {videos.map((video) => (
                      <button
                        key={video.id}
                        onClick={() => setCurrentVideo(video.id)}
                        className={`w-full p-4 rounded-lg text-left smooth-transition ${
                          currentVideo === video.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary hover:bg-secondary/80'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <PlayCircle className="h-5 w-5 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              {video.title}
                            </p>
                            <p className={`text-xs ${
                              currentVideo === video.id ? 'opacity-90' : 'text-muted-foreground'
                            }`}>
                              {video.duration}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about this chapter? Contact us for support.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChapterVideo;
