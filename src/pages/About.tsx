import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make quality mathematics education accessible to every student, helping them build strong foundations and achieve academic excellence."
    },
    {
      icon: Users,
      title: "Expert Teaching",
      description: "Learn from experienced educators who break down complex topics into simple, easy-to-understand concepts."
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Every video is carefully crafted to ensure comprehensive coverage of topics with clear explanations and examples."
    },
    {
      icon: Heart,
      title: "Student-Focused",
      description: "We understand student needs and design our courses to be engaging, effective, and aligned with curriculum requirements."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">About Learn With Jain</h1>
              <p className="text-lg text-muted-foreground">
                Empowering students with quality mathematics education
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Learn With Jain is dedicated to providing comprehensive mathematics education 
                  for students at various academic levels. Our platform offers structured courses 
                  for Plus Two, Plus One, Class 10, and fundamental mathematics, ensuring that 
                  every student has access to quality learning resources.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We believe that mathematics is not just about formulas and calculations—it's about 
                  understanding concepts, developing logical thinking, and building problem-solving skills. 
                  Our carefully designed courses break down complex topics into manageable lessons, 
                  making learning both effective and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="card-hover-effect">
                    <CardContent className="p-6 space-y-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Join Our Learning Community</h2>
              <p className="text-lg text-muted-foreground">
                Start your journey towards mathematical excellence today. Whether you're preparing 
                for board exams or building foundational skills, we're here to support your learning 
                every step of the way.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
