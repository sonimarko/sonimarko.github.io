
import React, { useState } from 'react'
import {
  Home, User, Briefcase, Code2, GraduationCap, Award, Mail, Menu, X, ChevronDown, ChevronUp, Download
} from 'lucide-react'

const experiences = [
  {
    title: 'ERP Developer - South East Asia Team',
    company: 'HashMicro, Jakarta - Singapore',
    period: '2024 - Present',
    details: [
      'Handle Projects in South East Asia scope (Singapore, Malaysia and Philippines)',
      'Implement Odoo ERP in Business Plans for 10+ projects',
      'Customize Front End and Back End (JS and Python) of the apps with Odoo',
      'Collaborating on Projects with Gitlab and Github',
      'Maintain Existing Projects and Give Best Advices for Users',
    ],
  },
  {
    title: 'Odoo Developer (Freelance)',
    company: 'Goja Solution, Jakarta - Hongkong',
    period: '2025 - Present',
    details: [
      'Handle various projects in Odoo version 16, 17, 18',
      'Customize Front End and Back End (JS and Python) of the apps with Odoo',
      'Collaborating on Projects with Gitlab and Github',
      'Maintain Existing Projects and Give Best Advices for Users',
    ],
  },
  {
    title: 'Mid-Level Odoo Developer',
    company: 'Nurosoft Consulting, Surabaya',
    period: '2022 - 2024',
    details: [
      'Create and Modifying modules for ERP and Business Plans',
      'Data and Information Processing with Python and Postgresql',
      'Collaborating on Projects with Git and Github',
      'Research on implementation of new features of Odoo',
    ],
  },
]

const certifications = [
  {
    title: 'Google Data Analytics',
    year: '2022',
    details: [
      'Completed eight courses developed by Google',
      'Hands-on assessments and practical analytics projects',
      'Experienced with Spreadsheet, SQL, Tableau, and R',
      'Data preparation, processing, analysis, and visualization',
    ],
  },
  {
    title: 'Google Associate Cloud Engineer',
    year: '2021',
    details: [
      'International Certification from Google',
      'Associate-level cloud computing certification',
      'Focused on Google Cloud Platform implementation',
    ],
  },
  {
    title: 'Architecting with Google Compute Engine',
    year: '2021',
    details: [
      'Accelerated specialization program',
      'Infrastructure deployment with Google Cloud Platform',
      'Focused on Compute Engine, networks, systems, and applications',
    ],
  },
  {
    title: 'From Data to Insights with Google Cloud Platform',
    year: '2021',
    details: [
      'Data analysis and visualization using Google Cloud Platform',
      'Derived insights from cloud-based datasets',
      'Accelerated specialization certification',
    ],
  },
  {
    title: 'Google IT Automation with Python',
    year: '2021',
    details: [
      'Focused on Python, Git, and IT automation',
      'Designed for IT professionals with in-demand skills',
      'Automation workflow and scripting practices',
    ],
  },
  {
    title: 'Google IT Support',
    year: '2021',
    details: [
      'Preparation for entry-level IT support roles',
      'Troubleshooting, networking, and operating systems',
      'System administration and security fundamentals',
    ],
  },
  {
    title: 'AWS Academy Cloud Foundations',
    year: '2021',
    details: [
      'AWS Cloud Computing specialization course',
      'Cloud infrastructure and foundational services',
      'Fundamental AWS platform knowledge',
    ],
  },
]

const academicExperiences = [
  {
    title: 'Baparekraf Digital Talent',
    year: '2022',
    details: [
      'Data Analytics Learning Path',
      'Data Processing, Analyzing, and Data Visualization',
      'National Certification by Coursera',
      'Selected from more than 79,000 applicants',
    ],
  },
  {
    title: 'BANGKIT Academy',
    year: '2021',
    details: [
      'Cloud Computing Learning Path',
      'Web Development & Cloud Programming',
      'International Certification by Google',
      'National Certification by Dicoding and Coursera',
    ],
  },
  {
    title: 'Digitalent Scholarship - Fresh Graduate Academy',
    year: '2021',
    details: [
      'Seminars, training, and soft skill development',
      'Opportunity for international certification',
      'Opportunity to work with KOMINFO partner companies',
    ],
  },
]

function ExpandableCard({ title, subtitle, period, details }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-slate-900/60 border border-cyan-500/10 rounded-3xl p-6">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          {subtitle && <p className="text-cyan-400 mt-1">{subtitle}</p>}
        </div>

        {period && <div className="text-slate-400">{period}</div>}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="mt-5 flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
      >
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        {open ? 'Hide Details' : 'Show Details'}
      </button>

      {open && (
        <ul className="mt-5 space-y-3 text-slate-300">
          {details.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  const menus = [
    ['home', 'Home', Home],
    ['about', 'About', User],
    ['experience', 'Experience', Briefcase],
    ['education', 'Education', GraduationCap],
    ['skills', 'Skills', Code2],
    ['certifications', 'Certifications', Award],
    ['contact', 'Contact', Mail],
  ]

  const skills = {
    'Programming Language': ['Python', 'C++', 'JavaScript', 'PHP'],
    'Database Query Language': ['SQL', 'No SQL', 'Postgresql'],
    'Markup Language': ['HTML', 'XML', 'CSS'],
    Framework: ['Odoo', 'Bootstrap', 'Flask'],
    Software: [
      'Visual Studio',
      'Git',
      'Jupyter Notebook',
      'Anaconda Python',
      'Netbeans',
      'Oracle Database',
      'Power BI',
      'Ms. Word',
      'Ms. Excel',
      'Ms. Powerpoint',
    ],
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div className="bg-[#020617] text-white min-h-screen">
      <button
        className="lg:hidden fixed top-5 left-5 z-50 bg-cyan-400 text-black p-3 rounded-xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <aside className={`fixed top-0 left-0 z-40 h-screen w-[270px] bg-slate-950 border-r border-cyan-500/10 p-8 transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="mb-12">
          <div className="text-5xl text-cyan-400 font-bold mb-4">{'</>'}</div>
          <h1 className="text-3xl font-bold text-cyan-400">Soni Marko</h1>
          <p className="text-slate-400 mt-2">Odoo Software Engineer</p>
        </div>

        <div className="space-y-3">
          {menus.map(([id, label, Icon]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-cyan-500/10 transition"
            >
              <Icon size={20} className="text-cyan-400" />
              {label}
            </button>
          ))}
        </div>
      </aside>

      <main className="lg:ml-[270px] p-6 lg:p-12">
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <div className="text-cyan-400 text-xl font-semibold mb-4">
            Hello, I&apos;m
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight">
            Soni Marko
            <span className="block text-cyan-400">
              Nathanniel Tannady
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-slate-300 text-lg leading-8">
            Currently, I work as Odoo Software Engineer. I have developed project management and analytical skills through my degree and experiences leading projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Soni-Marko-CV.pdf"
              download
              className="bg-cyan-400 text-black px-6 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold mb-10">About Me</h2>

          <div className="bg-slate-900/60 rounded-3xl border border-cyan-500/10 p-8 leading-8 text-slate-300">
            I used Python, XML, HTML and JavaScript with PostgreSQL database to build programs in Odoo. My last personal project is creating a Pokemon Generator using Pokemon API with Odoo. Besides that, I also learned Cloud Computing and Data Analytics through Baparekraf Digital Talent and Bangkit Academy led by Google, Gojek, Tokopedia, Traveloka and Deeptech.
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold mb-10">Working Experiences</h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <ExpandableCard
                key={idx}
                title={exp.title}
                subtitle={exp.company}
                period={exp.period}
                details={exp.details}
              />
            ))}
          </div>
        </section>

        <section id="education" className="py-20">
          <h2 className="text-4xl font-bold mb-10">Education & Academic Experiences</h2>

          <div className="space-y-6">
            <ExpandableCard
              title="B.Comp.Sc, Petra Christian University"
              subtitle="Data Analytic Concentration"
              period="2018 - 2022"
              details={[
                'Current GPA: 3.84 / 4.00 (145 credits)',
                'Focused on Data Analytics and Software Development',
              ]}
            />

            {academicExperiences.map((item, idx) => (
              <ExpandableCard
                key={idx}
                title={item.title}
                period={item.year}
                details={item.details}
              />
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, list], idx) => (
              <div key={idx} className="bg-slate-900/60 rounded-3xl border border-cyan-500/10 p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {list.map((skill, i) => (
                    <div key={i} className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-xl">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="py-20">
          <h2 className="text-4xl font-bold mb-10">Certifications & Awards</h2>

          <div className="space-y-6">
            <ExpandableCard
              title="Awardee of Highest GPA Scholarship"
              period="2019"
              details={[
                'Received the highest GPA among more than 300 Informatics students at Petra Christian University',
              ]}
            />

            {certifications.map((cert, idx) => (
              <ExpandableCard
                key={idx}
                title={cert.title}
                period={cert.year}
                details={cert.details}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold mb-10">Contact</h2>

          <div className="bg-slate-900/60 rounded-3xl border border-cyan-500/10 p-8 space-y-4 text-lg">
            <p>Email: sonimarko07@gmail.com</p>
            <p>Phone: +62 895368745882</p>
            <p>LinkedIn: www.linkedin.com/in/soni-marko</p>
          </div>
        </section>
      </main>
    </div>
  )
}
