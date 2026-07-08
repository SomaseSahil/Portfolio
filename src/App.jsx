import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Code2,
  Cpu,
  Database,
  Download,
  Facebook,
  GraduationCap,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MonitorPlay,
  Palette,
  Phone,
  Rocket,
  Send,
  Sparkles,
  Stars,
  UserRound,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering (AI & Machine Learning)',
    school: 'Sanjivani University, Kopargaon, Ahmednagar, Maharashtra, India',
    year: '2025 – Present',
    detail: 'I am currently pursuing my Bachelor of Technology at Sanjivani University, a leading institution focused on innovation, research, and industry-oriented education. My coursework includes Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, Data Structures, DBMS, Operating Systems, and Software Engineering.',
  },
  {
    degree: 'Diploma in Mechatronics Engineering',
    school: 'Sanjivani K.B.P. Polytechnic, Kopargaon, Ahmednagar, Maharashtra, India',
    year: '2021 – 2024',
    detail: 'I completed my diploma at Sanjivani K.B.P. Polytechnic, where I built a strong foundation in automation, electronics, mechanical systems, industrial engineering, and problem-solving.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'Madhyamik Vidyalaya, Bhramhangaon, Ahmednagar, Maharashtra, India',
    year: '2021',
    detail: 'I completed my SSC under the Maharashtra State Board (MSBSHSE), establishing a solid academic foundation in mathematics, science, and analytical thinking.',
  },
];

const skills = [
  { name: 'Python', icon: Code2, progress: '85%' },
  { name: 'Java', icon: Cpu, progress: '85%' },
  { name: 'C/C++', icon: Code2, progress: '85%' },
  { name: 'HTML5', icon: MonitorPlay, progress: '75%' },
  { name: 'CSS3', icon: Palette, progress: '70%' },
  { name: 'JavaScript', icon: Code2, progress: '70%' },
  { name: 'React.js', icon: MonitorPlay, progress: '65%' },
  { name: 'Node.js', icon: Database, progress: '60%' },
  { name: 'MySQL / SQL', icon: Database, progress: '65%' },
  { name: 'AWS', icon: Globe2, progress: '50%' },
];

const projects = [
  {
    title: 'RoadSense AI',
    description: 'An AI-powered application that detects road surface cracks using OpenCV and computer vision techniques, enabling faster and more accurate road inspection.',
    stack: ['Python', 'OpenCV', 'Computer Vision', 'Image Processing'],
    github: 'https://github.com/SomaseSahil/RoadSense-AI-Automated-Road-Crack-Detection-using-OpenCV',
    demo: '/videos/Screen Recording 2026-03-15 202617.mp4.mp4',
  },
  {
    title: 'ABRIS EV System',
    description: 'An intelligent EV battery management system that enhances performance through automated battery switching and rest cycles, improving efficiency, battery lifespan, and sustainable energy utilization.',
    stack: ['Python', 'IoT', 'Battery Management', 'Energy Optimization'],
    github: 'https://github.com/SomaseSahil/ABRIS-EV-System',
    demo: '/videos/abris-ev-demo.mp4.mp4',
  },
  {
    title: 'E-Commerce Website',
    description: 'A responsive e-commerce website with product browsing, shopping cart functionality, and a modern user-friendly interface.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SomaseSahil/E-Commerce-Website',
    demo: '/videos/Recording 2026-07-08 221451.mp4',
  },
];

const socials = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/SomaseSahil' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/somase-sahil-4a6645328/' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/sahilsomase_112/?__pwa=1' },
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100070553092792' },
];

function SectionHeading({ eyebrow, title, description, icon: Icon, centered = false }) {
  return (
    <div className={`mb-8 flex ${centered ? 'flex-col items-center text-center' : 'items-start'} gap-4`}>
      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 shadow-[0_0_30px_rgba(49,214,255,0.16)]">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
        <h2 className="text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">{description}</p>
      </div>
    </div>
  );
}

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [demoSrc, setDemoSrc] = useState(null);
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const sendContactEmail = () => {
    const subject = encodeURIComponent(`New message from ${contactName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`Name: ${contactName || 'N/A'}\nEmail: ${contactEmail || 'N/A'}\n\nMessage:\n${contactMessage || ''}`);
    const mailtoLink = `mailto:sahilsomase05@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    setPointer({ x, y });
  };

  const openDemo = (event, demo) => {
    event.preventDefault();
    if (!demo || demo === '#') return;
    setVideoError(false);
    setIsPlaying(false);
    setDemoSrc(encodeURI(demo));
    document.body.style.overflow = 'hidden';
  };

  const closeDemo = () => {
    setDemoSrc(null);
    document.body.style.overflow = '';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!demoSrc) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => {
      /* Autoplay may be blocked; user can press play */
    });
  }, [demoSrc]);

  const playVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setIsPlaying(true)).catch(() => {
      /* play failed */
    });
  };

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(49,214,255,0.12),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(139,92,246,0.16),_transparent_35%),#030712] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-lg font-semibold tracking-[0.3em] text-white">
            <div className="rounded-full border border-cyan-400/40 bg-cyan-400/10 p-2 text-cyan-300">
              <Stars className="h-4 w-4" />
            </div>
            SAHIL
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </div>
        </nav>
      </header>

      <div className="birds-wrapper">
        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>
        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>
        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>
        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
      </div>

      <main id="home" className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-16 lg:px-8 lg:py-24">
        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] py-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-2xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              🚀 AI & Machine Learning Engineer | Building Intelligent Solutions
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
              Hi, I'm <span className="text-cyan-300">SAHIL SOMASE</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Building Intelligent AI Solutions That Make a Difference
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-400">
              AI & Machine Learning Engineer passionate about building intelligent, scalable solutions using Artificial Intelligence, Machine Learning, Computer Vision, and modern software technologies to solve real-world challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-200 transition hover:bg-cyan-400/20"
              >
                View Work <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Contact Me <Mail className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            onMouseMove={handlePointerMove}
            onMouseLeave={() => setPointer({ x: 0, y: 0 })}
            className="relative z-10 mx-auto w-full max-w-[460px]"
          >
            <motion.div
              animate={{ rotateX: pointer.y * 0.8, rotateY: pointer.x * 0.8, y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative aspect-square overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-violet-500/15 p-4 shadow-[0_0_70px_rgba(49,214,255,0.16)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.16)_0,_transparent_40%)]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/20"
              />
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400/30 via-slate-900/60 to-violet-400/30 blur-3xl"
              />
              <div className="absolute inset-3 rounded-[1.8rem] border border-white/10 bg-slate-950/80 p-4 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <div className="flex h-full flex-col justify-between gap-2">
                  <div className="flex items-center justify-between text-[0.8rem] uppercase tracking-[0.46em] text-cyan-300 font-semibold">
                    <span>AI ENGINEER</span>
                    <span className="text-cyan-300 font-semibold">AVAILABLE</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="inline-flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/65 shadow-[0_0_40px_rgba(49,214,255,0.28)]">
                      <span className="text-7xl leading-none">🤖</span>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-[1.7rem] border border-white/10 bg-slate-900/75 px-4 py-4 text-center transition hover:border-cyan-300/40 hover:bg-slate-900/90">
                      <p className="text-base font-semibold text-white">Machine</p>
                      <p className="mt-1 text-sm text-cyan-300">Learning</p>
                    </div>
                    <div className="rounded-[1.7rem] border border-white/10 bg-slate-900/75 px-4 py-4 text-center transition hover:border-violet-300/40 hover:bg-slate-900/90">
                      <p className="text-base font-semibold text-white">Computer</p>
                      <p className="mt-1 text-sm text-violet-300">Vision</p>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="rounded-[1.7rem] border border-white/10 bg-slate-900/75 px-4 py-4 text-center transition hover:border-cyan-300/40 hover:bg-slate-900/90">
                      <p className="text-base font-semibold text-white">GenAI &amp;</p>
                      <p className="mt-1 text-sm text-cyan-300">LLM</p>
                    </div>
                    <div className="rounded-[1.7rem] border border-white/10 bg-slate-900/75 px-4 py-4 text-center transition hover:border-violet-300/40 hover:bg-slate-900/90">
                      <p className="text-base font-semibold text-white">Full</p>
                      <p className="mt-1 text-sm text-violet-300">Stack</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(10,15,30,0.5)] backdrop-blur-xl"
        >
          <SectionHeading
            eyebrow="About"
            title="AI Engineer Driven by Innovation & Real-World Impact"
            description=""
            icon={UserRound}
          />
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.6rem] border border-cyan-400/20 bg-slate-950/70 p-6"
            >
              <div className="mb-4 flex items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-violet-400/10 p-6">
                <img 
                  src="/images/profile.jpg" 
                  alt="Profile" 
                  className="h-72 w-72 rounded-full border-2 border-cyan-400/40 object-cover object-[50%_10%] shadow-[0_0_40px_rgba(49,214,255,0.28)]"
                />
              </div>
              <div className="space-y-4 text-center">
                <p className="text-2xl font-semibold text-white">AI & Machine Learning Engineer</p>
                <p className="text-lg font-medium text-cyan-200">+91 86055 03084</p>
                <p className="text-lg font-medium text-cyan-200">sahilsomase05@gmail.com</p>
              </div>
            </motion.div>
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
                <h3 className="text-2xl font-semibold text-white">Professional Bio</h3>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-400">
                  <p>I am an AI & Machine Learning Engineer passionate about building intelligent systems that solve real-world challenges through Artificial Intelligence and modern software engineering. My expertise includes Machine Learning, Deep Learning, Computer Vision, Generative AI, and Full-Stack Development.</p>
                  <p>I have developed AI-powered applications including RoadSense AI, Spotify Song Popularity Prediction, Student Exam Score Prediction, and IoT-based smart energy systems. I also completed internships in Google Cloud Generative AI and Front-End Web Development, strengthening my expertise in AI, cloud technologies, and modern web engineering.</p>
                  <p>My objective is to build scalable AI products that create real-world impact while continuously learning, innovating, and contributing to cutting-edge technologies.</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-300">
                  <p className="text-base font-semibold text-white">🤖 AI & Machine Learning</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-300">
                  <p className="text-base font-semibold text-white">🏆 Top 10 Finalist</p>
                  <p className="mt-1 text-sm text-cyan-300">Tata Technologies InnoVent 2026</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-300">
                  <p className="text-base font-semibold text-white">💻 Full Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        {demoSrc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6" onClick={closeDemo}>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative rounded-lg bg-slate-900/90 p-4">
                <button onClick={closeDemo} className="absolute right-3 top-3 rounded-full bg-white/5 p-2 text-slate-200">Close</button>
                <div className="relative">
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    className="w-full rounded-md border border-white/10 bg-black"
                    src={demoSrc}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setVideoError(true)}
                  >
                    Your browser does not support the video tag.
                  </video>

                  {!isPlaying && !videoError && (
                    <button
                      onClick={playVideo}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 p-4 text-cyan-300 shadow-[0_8px_30px_rgba(49,214,255,0.12)]"
                      aria-label="Play demo"
                    >
                      ▶
                    </button>
                  )}

                  {videoError && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black/80 p-4 text-center text-sm text-slate-300">
                      <p>Unable to load video. Ensure the file exists in public/videos/ and the path is correct.</p>
                      <button onClick={playVideo} className="mt-3 rounded-full bg-cyan-400/10 px-4 py-2 text-cyan-300">Try Play</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <section id="skills" className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <SectionHeading
              eyebrow="Education"
              title="Academic Foundation"
              description=""
              icon={GraduationCap}
            />
            <div className="flex-1 space-y-6">
              {education.map((item, index) => (
                <div key={item.school} className="relative pl-8">
                  {index !== education.length - 1 && <div className="absolute left-2 top-8 h-full w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />}
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-cyan-300 bg-slate-950" />
                  <div className="rounded-[1.2rem] border border-white/10 bg-slate-950/60 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                      <span className="text-sm text-cyan-300">{item.year}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{item.school}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <SectionHeading
              eyebrow="Skills"
              title="Professional Skills"
              description=""
              icon={Rocket}
            />
            <div className="grid flex-1 gap-4 md:grid-cols-2">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="rounded-[1.3rem] border border-cyan-400/20 bg-slate-950/70 p-4 shadow-[0_0_30px_rgba(49,214,255,0.06)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="truncate font-medium text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-400">{skill.progress}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.progress }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <SectionHeading
            eyebrow="Projects"
            title="Solutions I've Built"
            description="A collection of innovative projects showcasing my expertise in Artificial Intelligence & Machine Learning"
            icon={MonitorPlay}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4, scale: 1.01 }}
                className="group rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_45px_rgba(10,15,30,0.35)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={project.title === 'E-Commerce Website' ? 'https://github.com/SomaseSahil/E-Commerce-Website' : project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-cyan-300" aria-label="View code">
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo ? encodeURI(project.demo) : '#'}
                      onClick={(e) => openDemo(e, project.demo)}
                      className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-cyan-300"
                      aria-label="View demo"
                    >
                      <MonitorPlay className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-400">{project.description}</p>
                {/* Inline preview removed — demos open via the demo icon/modal */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.title === 'E-Commerce Website' && (
                  <a
                    href="https://github.com/SomaseSahil"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-cyan-300 underline-offset-4 transition hover:text-cyan-200 hover:underline"
                  >
                    For More Project Check my Github profile
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-950/80 to-violet-400/10 p-8 shadow-[0_0_60px_rgba(49,214,255,0.13)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">RESUME</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Download My Resume</h2>
              <p className="mt-3 max-w-2xl text-slate-400">You can download my Resume directly from here.</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-7 py-4 font-medium text-cyan-100 transition hover:bg-cyan-400/20"
            >
              <Download className="h-5 w-5" />
              Download CV
            </motion.a>
          </div>
        </motion.section>

        <motion.section
          id="social"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <SectionHeading
            eyebrow="SOCIAL"
            title="Connect With Me"
            description="Feel free to reach out through my social platforms."
            icon={Globe2}
            centered
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-4 rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-5 text-slate-300 transition hover:border-cyan-400/40 hover:bg-slate-950/90 hover:text-cyan-200"
                >
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-white">{social.label}</p>
                    <p className="text-sm text-slate-400">{social.href.replace('mailto:', '').replace('https://', '').replace('http://', '')}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="CONTACT"
              title="Let's Connect"
              description="Have a project, internship, or collaboration in mind? I'd love to hear from you. Feel free to reach out, and let's build something amazing together."
              icon={Send}
              centered
            />
            <form className="mx-auto max-w-xl space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Name</label>
                <input
                  value={contactName}
                  onChange={(event) => setContactName(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Email</label>
                <input
                  value={contactEmail}
                  onChange={(event) => setContactEmail(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">Message</label>
                <textarea
                  value={contactMessage}
                  onChange={(event) => setContactMessage(event.target.value)}
                  className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="button"
                onClick={sendContactEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.section>
      </main>

      <div className="fixed right-4 bottom-28 z-50 flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/95 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-900/80 text-cyan-300 transition hover:bg-cyan-400/10 hover:text-white"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollToBottom}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-900/80 text-cyan-300 transition hover:bg-cyan-400/10 hover:text-white"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
      <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-10 text-center">
        <div className="mx-auto max-w-3xl space-y-2">
          <p className="text-base text-slate-400">Let's shape the future with Artificial Intelligence.</p>
          <p className="text-base text-slate-400">© 2026 Sahil Somase. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
