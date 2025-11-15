import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, PlayCircle, BookOpen, CheckCircle2, Clock, Download, Share2 } from "lucide-react";

const ChapterVideo = () => {
  const { chapterId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(1);
  const [completedVideos, setCompletedVideos] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Demo data - in real app this would come from backend
  const videos = [
    { id: 1, title: "Introduction to the Chapter", duration: "15:30" },
    { id: 2, title: "Basic Concepts Explained", duration: "22:45" },
    { id: 3, title: "Advanced Topics", duration: "28:15" },
    { id: 4, title: "Problem Solving Techniques", duration: "35:20" },
    { id: 5, title: "Practice Examples", duration: "25:10" }
  ];

  const chapterInfo = {
    title: "Matrices",
    description: "Master the fundamentals of matrices including operations, determinants, and their real-world applications. This comprehensive chapter guides you through matrix algebra with clear examples and practice problems."
  };

  useEffect(() => {
    // Animate on video change
    setIsPlaying(false);
    const timer = setTimeout(() => setIsPlaying(true), 100);
    return () => clearTimeout(timer);
  }, [currentVideo]);

  const handleVideoComplete = (videoId: number) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos([...completedVideos, videoId]);
    }
  };

  const progress = (completedVideos.length / videos.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Progress Bar */}
      <div className="w-full h-1 bg-secondary">
        <div 
          className="h-full premium-gradient transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary smooth-transition">Home</Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-primary smooth-transition">Courses</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Chapter {chapterId}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <Card className={`overflow-hidden shadow-xl transition-all duration-500 ${isPlaying ? 'animate-scale-in' : ''}`}>
                <CardContent className="p-0 relative group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 animate-gradient"></div>
                    
                    <div className="text-center space-y-6 z-10 relative">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 animate-glow rounded-full"></div>
                        <PlayCircle className="h-24 w-24 text-primary mx-auto relative z-10 animate-bounce-subtle cursor-pointer hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold">Video Player</p>
                        <p className="text-sm text-muted-foreground">Chapter {chapterId} - Video {currentVideo}</p>
                        <div className="flex items-center gap-2 justify-center text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{videos[currentVideo - 1].duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating action buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="glass-effect">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="glass-effect">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chapter Info */}
              <Card className="card-hover-effect border-l-4 border-l-primary animate-fade-up">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-semibold text-primary">Chapter {chapterId}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span>{completedVideos.length}/{videos.length} completed</span>
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {chapterInfo.title}
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">{chapterInfo.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      Mathematics
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                      Plus Two
                    </span>
                    <span className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-medium">
                      Interactive
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex gap-4 animate-fade-up">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 group hover:scale-105 transition-all duration-300"
                  disabled={currentVideo === 1}
                  onClick={() => setCurrentVideo(Math.max(1, currentVideo - 1))}
                >
                  <ChevronLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Previous Video
                </Button>
                <Button
                  size="lg"
                  className="flex-1 group glow-on-hover hover:scale-105 transition-all duration-300"
                  disabled={currentVideo === videos.length}
                  onClick={() => {
                    handleVideoComplete(currentVideo);
                    setCurrentVideo(Math.min(videos.length, currentVideo + 1));
                  }}
                >
                  Next Video
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Sidebar - Video List */}
            <div className="space-y-4 animate-slide-in">
              <Card className="glass-effect shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Chapter Videos</h2>
                    <span className="text-xs text-muted-foreground">{videos.length} videos</span>
                  </div>
                  <div className="space-y-2">
                    {videos.map((video) => {
                      const isCompleted = completedVideos.includes(video.id);
                      const isCurrent = currentVideo === video.id;
                      
                      return (
                        <button
                          key={video.id}
                          onClick={() => setCurrentVideo(video.id)}
                          className={`w-full p-4 rounded-xl text-left transition-all duration-300 relative overflow-hidden group ${
                            isCurrent
                              ? 'premium-gradient text-white shadow-lg scale-[1.02]'
                              : 'bg-secondary hover:bg-secondary/80 hover:scale-[1.01]'
                          }`}
                        >
                          {isCurrent && (
                            <div className="absolute inset-0 shimmer"></div>
                          )}
                          <div className="flex items-center gap-3 relative z-10">
                            {isCompleted ? (
                              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success" />
                            ) : (
                              <PlayCircle className={`h-5 w-5 flex-shrink-0 ${
                                isCurrent ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'
                              }`} />
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">
                                {video.title}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="h-3 w-3" />
                                <p className={`text-xs ${
                                  isCurrent ? 'opacity-90' : 'text-muted-foreground'
                                }`}>
                                  {video.duration}
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect shadow-xl border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Need Help?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about this chapter? Our support team is here to help you succeed.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full group hover:scale-105 transition-all duration-300">
                      <span className="group-hover:underline">Contact Support</span>
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
