import React from "react";
import { PageLayout } from "components/PageLayout";

export default function Contact() {
  return (
    <PageLayout
      title="Al-Tofail Al-Hiary"
      subtitle="Lead Quality Assurance Engineer, ISTQB® CTFL/CTAL-TA/CTAL-TTA"
    >
      <div className="max-w-6xl mx-auto space-y-12 py-12">

        <section className="rounded-lg p-8 text-center bg-gradient-to-r from-[#00A2FF] to-[#9C27FF] text-white shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">About the Creator</h3>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-4">
            This website was created by <strong>Al-Tofail Al-Hiary</strong>, Lead Quality Assurance Engineer.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://www.linkedin.com/in/al-tofail-al-hiary-3268a798/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white text-[#00A2FF] font-semibold hover:bg-[#00A2FF] hover:text-white transition">
              LinkedIn
            </a>
            <a href="https://tofailhiary.github.io/Portfolio/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white text-[#9C27FF] font-semibold hover:bg-[#9C27FF] hover:text-white transition">
              Portfolio
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-white rounded-lg shadow p-6 border-t-4 border-[#00A2FF]">
            <h3 className="text-2xl font-bold mb-2 text-[#00A2FF]">Contact Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Address:</strong> Amman, Jordan</li>
              <li><strong>Phone:</strong> +962777894429</li>
              <li><strong>Email:</strong> <a href="mailto:tofailhiary@gmail.com" className="text-[#00A2FF] hover:underline">tofailhiary@gmail.com</a></li>
              <li><strong>Date of Birth:</strong> May 25, 1990</li>
              <li><strong>Nationality:</strong> Jordanian</li>
              <li><strong>Gender:</strong> Male</li>
              <li><strong>Languages:</strong> Arabic and English</li>
            </ul>
          </div>
          <div className="space-y-4 bg-white rounded-lg shadow p-6 border-t-4 border-[#9C27FF]">
            <h3 className="text-2xl font-bold mb-2 text-[#9C27FF]">Profile Summary</h3>
            <p className="text-gray-700">
              Lead Quality Assurance Engineer with extensive experience in manual and automation testing, team leadership, and a strong background in software engineering.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-[#00A2FF]">Education</h3>
          <p className="text-gray-700">
            <strong>Bachelor’s in Software Engineering</strong> (2008-2013) from Al Balqa’a Applied University, GPA 2.5 (Good).
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-[#9C27FF]">Certificates</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>ISTQB Certified Tester Foundation Level (CTFL)</li>
            <li>ISTQB Certified Tester Advanced Level (CTAL-TA) Test Analyst</li>
            <li>ISTQB Certified Tester Advanced Level (CTAL-TTA) Technical Test Analyst</li>
            <li>English Courses Level 1-3 at Berlitz Language Center</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-[#00A2FF]">Trainings</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>CCNA Certificates Training at Cyber Technical Consulting Jordan</li>
            <li>CCNP Switching at Cyber Technical Consulting Jordan</li>
            <li>Computer System Validation at ETQ</li>
            <li>JMeter Training at ETQ</li>
            <li>Risk Assessment Practice at ETQ</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-[#9C27FF]">Experience</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>2022 - Present:</strong> Lead/Senior QA & Automation Engineer at Estarta Solutions</li>
            <li><strong>2021 - 2022:</strong> QA & Automation Engineer at MAJID ALFUTTAIM</li>
            <li><strong>2020 - 2021:</strong> QA & Automation Engineer at Mawdoo3.com</li>
            <li><strong>2019 - 2020:</strong> QA & Automation Engineer at Shepherd</li>
            <li><strong>2018 - 2019:</strong> QA & Automation Engineer at Baaz</li>
            <li><strong>2016 - 2018:</strong> Software Testing Engineer at ETQ</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-[#00A2FF]">Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Strong programming, networking, and computer science background</li>
            <li>Excellent communication, leadership, and teamwork skills</li>
            <li>Quick learner, adaptable, and able to work under pressure</li>
            <li>Good presentation and documentation skills</li>
            <li>Capable of leading and mentoring QA teams</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 text-[#9C27FF]">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Application analysis, design, and development in web environments</li>
            <li>Strong understanding of SDLC, QA lifecycle, and methodologies</li>
            <li>Experience with Apache Tomcat, WebSphere, WebLogic, MS SQL, MySQL, Oracle</li>
            <li>Manual and automated testing (Selenium, Appium, JMeter, Postman)</li>
            <li>Automation frameworks (BDD, Cucumber, JBehave)</li>
            <li>CI/CD tools (Jenkins, Azure DevOps)</li>
            <li>Version control (Git)</li>
            <li>API testing and documentation (Postman, Swagger)</li>
            <li>Mobile testing with Xcode and related tools</li>
            <li>Tools: Charles, Fabric, Google Analytics, SourceTree, Firebase, Jira, TFS</li>
            <li>Building automation frameworks from scratch</li>
            <li>Leading, training, and mentoring QA teams</li>
          </ul>
        </section>

      </div>
    </PageLayout>
  );
}
