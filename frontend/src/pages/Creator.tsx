import React from "react";
import { PageLayout } from "components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Corrected path alias
import { Button } from "@/components/ui/button"; // Corrected path alias
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Corrected path alias
import { Mail, Phone, MapPin, Linkedin, User, Calendar, Languages, Briefcase, Award, GraduationCap, Wrench, Code, Users, Presentation, Brain } from 'lucide-react'; // Using lucide-react icons

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
                <User className="mr-2 h-5 w-5" /> Profile Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Highly motivated Lead Quality Assurance Engineer with extensive experience spanning manual and automation testing, team leadership, and a robust foundation in software engineering principles. Proven ability to enhance software quality through meticulous testing strategies and effective team collaboration.
              </p>
            </CardContent>
          </Card>

          {/* General Skills Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Brain className="mr-2 h-5 w-5" /> Core Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-muted-foreground" /><span>Leadership & Teamwork</span></div>
              <div className="flex items-center gap-2"><Presentation className="h-4 w-4 text-muted-foreground" /><span>Communication & Presentation</span></div>
              <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-muted-foreground" /><span>Quick Learner & Adaptable</span></div>
              <div className="flex items-center gap-2"><Wrench className="h-4 w-4 text-muted-foreground" /><span>Problem Solving & Pressure Handling</span></div>
              <div className="flex items-center gap-2"><Code className="h-4 w-4 text-muted-foreground" /><span>Strong CS & Networking Background</span></div>
            </CardContent>
          </Card>

          {/* Technical Skills Card */}
          <Card className="md:col-span-2 lg:col-span-3 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Code className="mr-2 h-5 w-5" /> Technical Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm">
              <span>SDLC, QA Lifecycle & Methodologies</span>
              <span>Manual & Automated Testing</span>
              <span>Selenium, Appium, JMeter, Postman</span>
              <span>BDD (Cucumber, JBehave)</span>
              <span>CI/CD (Jenkins, Azure DevOps)</span>
              <span>Version Control (Git, SourceTree)</span>
              <span>API Testing (Postman, Swagger)</span>
              <span>Mobile Testing (Xcode, Android Studio)</span>
              <span>Performance Testing (JMeter)</span>
              <span>Database Testing (MS SQL, MySQL, Oracle)</span>
              <span>Web Servers (Tomcat, WebSphere, WebLogic)</span>
              <span>Debugging Tools (Charles Proxy)</span>
              <span>Analytics (Firebase, Google Analytics)</span>
              <span>Issue Tracking (Jira, TFS)</span>
              <span>Framework Development</span>
              <span>Team Training & Mentoring</span>
              <span>Computer System Validation (CSV)</span>
              <span>Risk Assessment Practices</span>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="md:col-span-2 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Briefcase className="mr-2 h-5 w-5" /> Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { year: "2022 - Present", role: "Lead/Senior QA & Automation Engineer", company: "Estarta Solutions" },
                { year: "2021 - 2022", role: "QA & Automation Engineer", company: "Majid Al Futtaim" },
                { year: "2020 - 2021", role: "QA & Automation Engineer", company: "Mawdoo3.com" },
                { year: "2019 - 2020", role: "QA & Automation Engineer", company: "Shepherd" },
                { year: "2018 - 2019", role: "QA & Automation Engineer", company: "Baaz" },
                { year: "2016 - 2018", role: "Software Testing Engineer", company: "ETQ" },
              ].map((job, index) => (
                <div key={index} className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-2 last:border-b-0">
                  <div>
                    <p className="font-semibold">{job.role}</p>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1 sm:mt-0">{job.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education & Certs Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <GraduationCap className="mr-2 h-5 w-5" /> Education & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="font-semibold">Bachelor’s in Software Engineering</p>
                <p className="text-muted-foreground">Al Balqa’a Applied University (2008-2013)</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold">ISTQB Certifications:</p>
                <ul className="list-disc list-inside pl-4 text-muted-foreground">
                  <li>Certified Tester Foundation Level (CTFL)</li>
                  <li>Certified Tester Advanced Level - Test Analyst (CTAL-TA)</li>
                  <li>Certified Tester Advanced Level - Technical Test Analyst (CTAL-TTA)</li>
                </ul>
              </div>
               <div className="space-y-1">
                <p className="font-semibold">Language Proficiency:</p>
                 <p className="text-muted-foreground">English Courses Level 1-3 (Berlitz)</p>
              </div>
            </CardContent>
          </Card>

          {/* Trainings Card */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-primary">
                <Award className="mr-2 h-5 w-5" /> Trainings & Workshops
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>CCNA & CCNP Switching (Cyber Technical Consulting)</p>
              <p>Computer System Validation (ETQ)</p>
              <p>JMeter Training (ETQ)</p>
              <p>Risk Assessment Practice (ETQ)</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </PageLayout>
  );
}
