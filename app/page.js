const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "SPSS",
  "JavaScript",
  "React",
  "Next.js",
  "Django",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
];

const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "Data Analysis & Reporting",
    description:
      "Data validation, quality checks, KPI analysis and interactive reporting to support business decisions.",
    tools: ["SQL", "Power BI", "Excel"],
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Web Applications",
    description:
      "Web development focused on useful interfaces, data processing and practical application functionality.",
    tools: ["Python", "Django", "JavaScript"],
  },
  {
    number: "03",
    category: "DATA & AUTOMATION",
    title: "Data Processing & Prediction",
    description:
      "Exploring data processing, automation and predictive analysis through practical projects.",
    tools: ["Python", "SQL", "Data Analysis"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#080b12]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Islem<span className="text-blue-400">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-blue-400" href="#about">About</a>
            <a className="transition hover:text-blue-400" href="#skills">Skills</a>
            <a className="transition hover:text-blue-400" href="#projects">Projects</a>
            <a className="transition hover:text-blue-400" href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-lg border border-blue-400/40 px-4 py-2 text-sm font-medium text-blue-300 transition hover:bg-blue-400/10"
          >
            Let&apos;s talk ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-36"
      >
        <div className="pointer-events-none absolute -left-40 top-16 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Data Analytics · Web Development
          </div>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            Data-driven
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              solutions.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            I&apos;m Islem Naimi, a Data Analyst and Web Developer passionate
            about transforming data into actionable insights and building
            useful digital solutions with Python, SQL, Power BI and modern
            web technologies.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>⌘ Data quality & reporting</span>
            <span>⌘ Web applications</span>
          </div>
        </div>

        {/* Profile card */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 blur-2xl" />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex items-center gap-4 border-b border-slate-800 pb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl font-bold text-blue-300">
                IN
              </div>
              <div>
                <h2 className="text-xl font-semibold">Islem Naimi</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Data Analyst & Web Developer
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-800 bg-[#080b12]/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-300">
                    ↗
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Data Analytics</p>
                    <p className="mt-1 font-medium">Insights & Visualization</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#080b12]/70 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-lg text-cyan-300">
                    {"</>"}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Web Development</p>
                    <p className="mt-1 font-medium">Applications & APIs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Core technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "SQL", "Power BI", "Django", "Next.js"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-800/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-24 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About me
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              Where data
              <br />
              meets development.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-400">
            <p>
              I work at the intersection of data analysis and software
              development, combining analytical thinking with technical
              problem-solving.
            </p>
            <p>
              My interests include data quality, KPI reporting, visualization,
              automation and building web applications that make data more
              useful and accessible.
            </p>
            <p>
              I value clear communication, reliable results and solutions
              designed around real business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-slate-800/70 bg-slate-900/20">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Technical toolkit
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Skills & technologies
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Technologies I use across analytics, data processing and web development.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-slate-800 bg-[#0b101a] px-5 py-3 text-sm text-slate-300 transition hover:border-blue-400/50 hover:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-[#0b101a] p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                01 / Analytics
              </p>
              <h3 className="mt-4 text-xl font-semibold">Turning data into decisions</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Data validation, KPI analysis, reporting, visualization and
                structured data processing.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0b101a] p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                02 / Development
              </p>
              <h3 className="mt-4 text-xl font-semibold">Building practical tools</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Web interfaces, backend functionality, API integration and
                database-driven applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-slate-800/70">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Selected work
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Projects & experience
              </h2>
            </div>
            <a
              href="https://github.com/DevByIslem"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-300 transition hover:text-blue-200"
            >
              GitHub profile ↗
            </a>
          </div>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            An overview of my main technical areas. More detailed project
            descriptions and repository links will be added as they are prepared.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900/70"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-400">
                    {project.number}
                  </span>
                  <span className="text-xs tracking-wider text-slate-500">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold transition group-hover:text-blue-300">
                  {project.title}
                </h3>
                <p className="mt-4 min-h-28 leading-7 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-slate-800 px-2.5 py-1.5 text-xs text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-800/70">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-slate-900/50 to-cyan-500/5 p-8 md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Get in touch
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Interested in data analytics, reporting or web development?
              Explore my GitHub profile and discover my technical work.
            </p>
            <a
              href="https://github.com/DevByIslem"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-400"
            >
              Visit my GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-7 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Islem Naimi</p>
          <p>Data Analytics · Web Development · Next.js</p>
        </div>
      </footer>
    </main>
  );
}