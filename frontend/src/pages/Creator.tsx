import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Corrected path alias
import { Button } from "@/components/ui/button"; // Corrected path alias
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Corrected path alias
import { Input } from "@/components/ui/input"; // Added Input
import { Textarea } from "@/components/ui/textarea"; // Added Textarea
import { Label } from "@/components/ui/label"; // Added Label
import { Mail, Phone, MapPin, Linkedin, User, Calendar, Languages, Briefcase, Award, GraduationCap, Wrench, Code, Users, Presentation, Brain, Sparkles, Bot, Lightbulb, Send } from 'lucide-react'; // Added Sparkles, Bot, Lightbulb, Send

export default function Creator() { // Renamed component function
  // Placeholder for potential image URL or use initials
  const avatarImageUrl = ""; // Add an image URL if available
  const initials = "AA"; // Al-Tofail Al-Hiary

  return (
    <PageLayout
      title="Al-Tofail Al-Hiary"
      subtitle="Lead Quality Assurance Engineer | ISTQB® CTFL/CTAL-TA/CTAL-TTA"
    >
      <div className="max-w-6xl mx-auto space-y-8 py-12 px-4 md:px-6">

        {/* Intro Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 bg-card rounded-lg shadow-md border border-border">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary">
            {avatarImageUrl ? (
              <AvatarImage src={avatarImageUrl} alt="Al-Tofail Al-Hiary" />
            ) : (
              <AvatarFallback className="text-4xl">{initials}</AvatarFallback>
            )}
          </Avatar>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Al-Tofail Al-Hiary</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">Lead Quality Assurance Engineer</p>
            <p className="text-md text-muted-foreground mb-4">ISTQB® Certified: CTFL | CTAL-TA | CTAL-TTA</p>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/al-tofail-al-hiary-3268a798/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://tofailhiary.github.io/Portfolio/" target="_blank" rel="noopener noreferrer">
                  <User className="mr-2 h-4 w-4" /> Portfolio
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Contact Details Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Briefcase className="mr-2 h-5 w-5" /> Contact & Personal Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Amman, Jordan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:+962777894429" className="hover:text-primary transition-colors">+962 777 894 429</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:tofailhiary@gmail.com" className="hover:text-primary transition-colors">tofailhiary@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>May 25, 1990</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Jordanian, Male</span>
              </div>
              <div className="flex items-center gap-3">
                <Languages className="h-4 w-4 text-muted-foreground" />
                <span>Arabic (Native), English (Fluent)</span>
              </div>
            </CardContent>
          </Card>

          {/* Profile Summary Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <User className="mr-2 h-5 w-5" /> About the Creator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hi, I'm Al-Tofail Al-Hiary, a Lead Quality Assurance Engineer with a deep passion for software quality and continuous learning. Holding advanced ISTQB certifications (CTFL, CTAL-TA, CTAL-TTA), I've dedicated my career to mastering the art and science of QA.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                I created QAGeeks as a dedicated resource hub for fellow QA professionals and aspiring engineers. My goal is to share practical knowledge, insights from real-world experience, and helpful resources covering everything from fundamental principles to advanced testing techniques and tools. I believe in empowering the QA community through accessible, high-quality information. Welcome, and I hope you find this site valuable!
              </p>
            </CardContent>
          </Card>

          {/* General Skills & AI Interests Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Brain className="mr-2 h-5 w-5" /> Core Skills & AI Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {/* Existing Skills */}
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground" /><span>Leadership & Teamwork</span></div>
              <div className="flex items-center gap-2"><Presentation className="h-4 w-4 text-muted-foreground" /><span>Communication & Presentation</span></div>
              <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-muted-foreground" /><span>Quick Learner & Adaptable</span></div>
              <div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-muted-foreground" /><span>Problem Solving & Pressure Handling</span></div>
              <div className="flex items-center gap-2"><Code className="h-4 w-4 text-muted-foreground" /><span>Strong CS & Networking Background</span></div>
              {/* AI Related Points */}
              <div className="flex items-center gap-2 pt-2 border-t mt-2"><Sparkles className="h-4 w-4 text-muted-foreground" /><span>Exploring AI for QA Enhancement</span></div>
              <div className="flex items-center gap-2"><Bot className="h-4 w-4 text-muted-foreground" /><span>Utilizing AI Tools for Automation & Efficiency</span></div>
              <div className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-muted-foreground" /><span>Interested in AI's Role in Software Testing Futures</span></div>
              {/* Key Tools & Methodologies */}
              <div className="pt-2 border-t mt-2">
                 <h4 className="font-medium text-gray-700 mb-1.5 flex items-center gap-2"><Wrench className="h-4 w-4 text-muted-foreground" /> Key Skills, Tools & Methodologies:</h4>
                 <p className="text-xs text-muted-foreground leading-snug">
                   SDLC & QA Lifecycles, Manual & Automated Testing, Selenium, Appium, JMeter, Postman, BDD (Cucumber, JBehave), CI/CD (Jenkins, Azure DevOps), Version Control (Git, SourceTree), API Testing (Swagger), Mobile Testing (Xcode, Android Studio), Performance Testing, Database Testing (SQL), Web Servers, Debugging (Charles Proxy), Analytics (Firebase, Google Analytics), Issue Tracking (Jira, TFS), Framework Development, CSV, Risk Assessment, AI Tools for QA.
                 </p>
              </div>
            </CardContent>
          </Card>

          {/* Removed Technical Skills, Experience, Education, Trainings Cards */}

        </div>

        {/* Contact Form Section */}
        <section className="pt-8 border-t border-border">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center gap-2">
                <Mail className="w-6 h-6" /> Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/mgvadeje"
                method="POST"
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address</Label>
                    {/* Formspree uses the 'name="_replyto"' to set the reply-to address */}
                    <Input id="email" name="_replyto" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                 <div className="space-y-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" type="text" placeholder="Subject of your message" />
                  </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required rows={5} />
                </div>
                <div className="text-center pt-2">
                  <Button type="submit" size="lg">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

      </div>
    </PageLayout>
  );
}
