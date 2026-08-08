"use client";

import { useState, useEffect, useRef } from "react";

// ─── Data ───────────────────────────────────────────────
const blogs = [
  {
    id: 1,
    title: "Decompiling the Forest: How Trees Root Themselves in Memory",
    excerpt:
      "An exploration of B-trees, AVL rotations, and how data structures mirror botanical growth patterns — from root to leaf.",
    date: "2025-06-10",
    tags: ["Data Structures", "Algorithms"],
    readTime: "8 min",
  },
  {
    id: 2,
    title: "Threads in the Soil: Concurrent Gardening with Rust",
    excerpt:
      "What can tending parallel garden beds teach us about ownership, borrowing, and fearless concurrency?",
    date: "2025-05-28",
    tags: ["Rust", "Concurrency"],
    readTime: "12 min",
  },
  {
    id: 3,
    title: "Garbage Collection as Composting: Reclaiming Heap Memory",
    excerpt:
      "Tracing GC, generational heaps, and the beautiful analogy of turning dead objects into fertile allocation space.",
    date: "2025-05-14",
    tags: ["Systems", "Memory"],
    readTime: "10 min",
  },
  {
    id: 4,
    title: "Neural Roots: Training Decision Trees on Sensor Data",
    excerpt:
      "Building a real-time plant health classifier with scikit-learn and Arduino — from soil moisture to softmax.",
    date: "2025-04-30",
    tags: ["Machine Learning", "IoT"],
    readTime: "15 min",
  },
];

const skills = [
  { name: "TypeScript", icon: "⟨TS⟩", color: "#3b82f6" },
  { name: "Rust", icon: "🦀", color: "#f97316" },
  { name: "Python", icon: "🐍", color: "#a855f7" },
  { name: "Go", icon: "Go", color: "#06b6d4" },
  { name: "React", icon: "⚛", color: "#22d3ee" },
  { name: "Next.js", icon: "▲", color: "#f8fafc" },
  { name: "PostgreSQL", icon: "🐘", color: "#3b82f6" },
  { name: "Docker", icon: "🐳", color: "#06b6d4" },
  { name: "Linux", icon: "🐧", color: "#10b981" },
  { name: "Git", icon: "⎇", color: "#f97316" },
  { name: "AWS", icon: "☁", color: "#f59e0b" },
  { name: "Neovim", icon: "vim", color: "#10b981" },
];

const projects = [
  {
    title: "SynthGrid",
    desc: "A WebGL-powered infinite canvas for real-time collaborative algorithm visualization. Users see Dijkstra's bloom across a graph like mycelium.",
    tech: ["Rust", "WebGPU", "TypeScript"],
    link: "#",
  },
  {
    title: "HeapGarden",
    desc: "An interactive memory allocator visualizer. Allocate, free, and watch fragmentation grow — or compost it with compaction.",
    tech: ["C++", "Raylib", "Python"],
    link: "#",
  },
  {
    title: "pollen.rs",
    desc: "A minimal, actor-based message queue written in Rust. Zero-copy deserialization, back-pressure via semantic channels.",
    tech: ["Rust", "Tokio", "gRPC"],
    link: "#",
  },
  {
    title: "dotfiles",
    desc: "A garden-themed Neovim + tmux setup. Every keybind is a seed; every plugin, a cultivar. Managed by Nix flakes.",
    tech: ["Nix", "Lua", "Bash"],
    link: "#",
  },
];

// ─── Component ──────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [glowParticles, setGlowParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ── Typing effect ──
  const fullText = "console.garden(\"hello, world 🌱\")";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, []);

  // ── Glow particles ──
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 6,
    }));
    setGlowParticles(particles);
  }, []);

  // ── Binary rain canvas ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01λΣ∀∃∂∇∫⟨⟩[]{};→⇒≡⊥⊤∞".split("");
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = "rgba(6, 12, 8, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Garden-green tinted binary
        const brightness = Math.random();
        if (brightness > 0.95) {
          ctx.fillStyle = "rgba(16, 185, 129, 0.9)";
          ctx.font = `bold ${fontSize}px "JetBrains Mono", monospace`;
        } else if (brightness > 0.85) {
          ctx.fillStyle = "rgba(52, 211, 153, 0.5)";
          ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        } else {
          ctx.fillStyle = "rgba(16, 185, 129, 0.15)";
          ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4 + Math.random() * 0.3;
      }
    };

    const interval = setInterval(draw, 45);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── Mouse tracking ──
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // ── Intersection observer ──
  useEffect(() => {
    const sections = document.querySelectorAll("section[data-nav]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // ─── Styles ────────────────────────────────────────────
  const s = {
    page: {
      background: "#060c08",
      color: "#e2e8f0",
      fontFamily: "'Inter', sans-serif",
      minHeight: "100vh",
      overflowX: "hidden" as const,
      position: "relative" as const,
    },
    canvas: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none" as const,
      zIndex: 0,
      opacity: 0.7,
    },
    content: { position: "relative" as const, zIndex: 1 },
    nav: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: "rgba(6, 12, 8, 0.8)",
      backdropFilter: "blur(20px) saturate(1.8)",
      WebkitBackdropFilter: "blur(20px) saturate(1.8)",
      borderBottom: "1px solid rgba(16, 185, 129, 0.1)",
    },
    navInner: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
    },
    logo: {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 18,
      fontWeight: 700,
      background: "linear-gradient(135deg, #10b981, #06b6d4)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      cursor: "pointer",
    },
    navLinks: {
      display: "flex",
      gap: 32,
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: (active: boolean) => ({
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 13,
      letterSpacing: "0.05em",
      textTransform: "uppercase" as const,
      color: active ? "#10b981" : "#94a3b8",
      cursor: "pointer",
      transition: "color 0.3s, transform 0.2s",
      borderBottom: active ? "2px solid #10b981" : "2px solid transparent",
      paddingBottom: 2,
      textDecoration: "none",
    }),
    section: { maxWidth: 1200, margin: "0 auto", padding: "120px 24px" },
    heroSection: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "160px 24px 120px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      position: "relative" as const,
    },
    cursorGlow: {
      position: "fixed" as const,
      left: mousePos.x - 200,
      top: mousePos.y - 200,
      width: 400,
      height: 400,
      background:
        "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
      pointerEvents: "none" as const,
      zIndex: 2,
      transition: "left 0.1s ease-out, top 0.1s ease-out",
    },
    tag: (color: string) => ({
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: 999,
      fontSize: 11,
      fontFamily: "'JetBrains Mono', monospace",
      background: `${color}18`,
      color: color,
      border: `1px solid ${color}30`,
    }),
    card: {
      background: "rgba(16, 185, 129, 0.03)",
      border: "1px solid rgba(16, 185, 129, 0.08)",
      borderRadius: 16,
      padding: 32,
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      position: "relative" as const,
      overflow: "hidden" as const,
    },
    btnPrimary: {
      display: "inline-flex",
      alignItems: "center" as const,
      gap: 8,
      padding: "12px 28px",
      background: "linear-gradient(135deg, #10b981, #06b6d4)",
      color: "#060c08",
      borderRadius: 12,
      fontWeight: 700,
      fontSize: 14,
      border: "none",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.3s",
      fontFamily: "'Inter', sans-serif",
    },
    btnGhost: {
      display: "inline-flex",
      alignItems: "center" as const,
      gap: 8,
      padding: "12px 28px",
      background: "transparent",
      color: "#10b981",
      borderRadius: 12,
      fontWeight: 600,
      fontSize: 14,
      border: "1px solid rgba(16, 185, 129, 0.3)",
      cursor: "pointer",
      transition: "all 0.3s",
      fontFamily: "'Inter', sans-serif",
    },
  };

  // ─── Render ────────────────────────────────────────────
  return (
    <div style={s.page}>
      {/* Binary Rain Canvas */}
      <canvas ref={canvasRef} style={s.canvas} />

      {/* Cursor Glow */}
      <div style={s.cursorGlow} />

      {/* Glow Particles */}
      {glowParticles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.id % 3 === 0 ? "#10b981" : p.id % 3 === 1 ? "#06b6d4" : "#a855f7",
            opacity: 0,
            pointerEvents: "none",
            zIndex: 1,
            animation: `glowPulse 5s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div style={s.content}>
        {/* ─── NAV ─── */}
        <nav style={s.nav}>
          <div style={s.navInner}>
            <div style={s.logo} onClick={() => scrollTo("hero")}>
              ∴ garden.dev
            </div>

            {/* Desktop */}
            <ul style={{ ...s.navLinks, display: "flex" } as React.CSSProperties}>
              {navItems.map((n) => (
                <li key={n.id}>
                  <span
                    style={s.navLink(activeSection === n.id)}
                    onClick={() => scrollTo(n.id)}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "#10b981";
                      (e.target as HTMLElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      if (activeSection !== n.id)
                        (e.target as HTMLElement).style.color = "#94a3b8";
                      (e.target as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    {n.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                color: "#10b981",
                fontSize: 24,
                cursor: "pointer",
              }}
              className="mobile-burger"
            >
              {mobileMenuOpen ? "✕" : "≡"}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div
              style={{
                background: "rgba(6, 12, 8, 0.95)",
                backdropFilter: "blur(20px)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
              className="mobile-menu"
            >
              {navItems.map((n) => (
                <span
                  key={n.id}
                  style={{
                    ...s.navLink(activeSection === n.id),
                    fontSize: 16,
                  }}
                  onClick={() => scrollTo(n.id)}
                >
                  {n.label}
                </span>
              ))}
            </div>
          )}
        </nav>

        {/* ─── HERO ─── */}
        <section id="hero" data-nav="hero" ref={heroRef} style={s.heroSection}>
          {/* Decorative circuit lines */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              opacity: 0.08,
            }}
            viewBox="0 0 1200 800"
          >
            <defs>
              <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <path d="M0 400 H200 L250 350 H450 L500 300 H700 L750 350 H950 L1000 400 H1200" stroke="url(#circuitGrad)" strokeWidth="1.5" fill="none" />
            <path d="M100 0 V200 L150 250 V450 L100 500 V800" stroke="url(#circuitGrad)" strokeWidth="1" fill="none" />
            <path d="M900 0 V150 L950 200 V500 L900 550 V800" stroke="url(#circuitGrad)" strokeWidth="1" fill="none" />
            <circle cx="250" cy="350" r="4" fill="#10b981" />
            <circle cx="500" cy="300" r="4" fill="#10b981" />
            <circle cx="750" cy="350" r="4" fill="#06b6d4" />
            <circle cx="1000" cy="400" r="4" fill="#06b6d4" />
            <circle cx="150" cy="250" r="3" fill="#10b981" />
            <circle cx="950" cy="200" r="3" fill="#a855f7" />
          </svg>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: "#10b981",
              letterSpacing: "0.15em",
              marginBottom: 24,
              opacity: 0,
              animation: "slideUp 0.8s 0.2s forwards",
            }}
          >
            ─── root@garden ~ ./initialize.sh
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.05,
              margin: "0 0 8px 0",
              opacity: 0,
              animation: "slideUp 0.8s 0.4s forwards",
            }}
          >
            <span style={{ color: "#f0fdf4" }}>Cultivating</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Gardens
            </span>
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#64748b",
              marginBottom: 16,
              minHeight: 28,
              opacity: 0,
              animation: "slideUp 0.8s 0.6s forwards",
            }}
          >
            <span style={{ color: "#10b981" }}>❯</span> {typedText}
            <span
              style={{
                animation: "blink 1s step-end infinite",
                color: "#10b981",
              }}
            >
              ▌
            </span>
          </div>

          <p
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              color: "#94a3b8",
              maxWidth: 600,
              lineHeight: 1.7,
              margin: "0 0 40px 0",
              opacity: 0,
              animation: "slideUp 0.8s 0.8s forwards",
            }}
          >
            Full-stack engineer crafting elegant systems where code grows like
            well-tended gardens — rooted in fundamentals, branching into
            innovation.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: 0,
              animation: "slideUp 0.8s 1s forwards",
            }}
          >
            <button
              style={s.btnPrimary}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(16,185,129,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              onClick={() => scrollTo("projects")}
            >
              Explore My Garden ⟶
            </button>
            <button
              style={s.btnGhost}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "#10b981";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.3)";
              }}
              onClick={() => scrollTo("blog")}
            >
              Read the Blog 📝
            </button>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              opacity: 0,
              animation: "slideUp 0.8s 1.5s forwards",
            }}
          >
            <span style={{ fontSize: 11, color: "#475569", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}>
              SCROLL
            </span>
            <div
              style={{
                width: 1,
                height: 40,
                background: "linear-gradient(to bottom, #10b981, transparent)",
                animation: "scrollPulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" data-nav="about" style={s.section}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: 48,
              alignItems: "center",
            }}
          >
            {/* Terminal card */}
            <div
              style={{
                background: "rgba(16, 185, 129, 0.04)",
                border: "1px solid rgba(16, 185, 129, 0.12)",
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.08)",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                  about.sh
                </span>
              </div>
              <div
                style={{
                  padding: 24,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 2,
                  color: "#94a3b8",
                }}
              >
                <div><span style={{ color: "#10b981" }}>name</span>=<span style={{ color: "#f59e0b" }}>"Your Name"</span></div>
                <div><span style={{ color: "#10b981" }}>role</span>=<span style={{ color: "#f59e0b" }}>"Full-Stack Engineer"</span></div>
                <div><span style={{ color: "#10b981" }}>location</span>=<span style={{ color: "#f59e0b" }}>"The Terminal Garden"</span></div>
                <div><span style={{ color: "#10b981" }}>education</span>=<span style={{ color: "#f59e0b" }}>"B.S. Computer Science"</span></div>
                <div><span style={{ color: "#10b981" }}>experience</span>=<span style={{ color: "#f59e0b" }}>"4+ years"</span></div>
                <div style={{ marginTop: 8 }}>
                  <span style={{ color: "#64748b" }}># </span>
                  <span style={{ color: "#475569", fontStyle: "italic" }}>where code meets cultivation 🌿</span>
                </div>
              </div>
            </div>

            {/* Bio text */}
            <div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 700,
                  margin: "0 0 20px 0",
                  lineHeight: 1.2,
                }}
              >
                <span style={{ color: "#f0fdf4" }}>Growing</span>{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #10b981, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Software
                </span>{" "}
                <span style={{ color: "#f0fdf4" }}>from Seed to Tree</span>
              </h2>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16, margin: "0 0 16px 0" }}>
                I'm a computer scientist who believes the best code, like the best gardens,
                requires patience, intention, and a deep understanding of the soil it grows in.
                From low-level systems programming to building delightful user interfaces,
                I tend every layer of the stack.
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 16, margin: "0 0 24px 0" }}>
                When I'm not writing code, I'm writing about code — exploring how
                computational thinking mirrors natural processes, and how the
                elegance of a well-pruned algorithm rivals any botanical arrangement.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["Open Source", "Systems Design", "Developer Experience", "Technical Writing"].map(
                  (t) => (
                    <span key={t} style={s.tag("#10b981")}>{t}</span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills" data-nav="skills" style={s.section}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                margin: "0 0 12px 0",
              }}
            >
              <span style={{ color: "#f0fdf4" }}>Tools in the </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #10b981, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Shed
              </span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, fontFamily: "'JetBrains Mono', monospace" }}>
              $ ls ~/toolchain | wc -l → {skills.length}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 160px), 1fr))",
              gap: 16,
            }}
          >
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                style={{
                  background: "rgba(16, 185, 129, 0.03)",
                  border: "1px solid rgba(16, 185, 129, 0.08)",
                  borderRadius: 12,
                  padding: "20px 16px",
                  textAlign: "center",
                  transition: "all 0.3s",
                  cursor: "default",
                  opacity: 0,
                  animation: `slideUp 0.5s ${0.1 * i}s forwards`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = skill.color + "40";
                  el.style.background = skill.color + "0a";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(16, 185, 129, 0.08)";
                  el.style.background = "rgba(16, 185, 129, 0.03)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>{skill.icon}</div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#cbd5e1",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" data-nav="projects" style={s.section}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                margin: "0 0 12px 0",
              }}
            >
              <span style={{ color: "#f0fdf4" }}>Planted </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projects
              </span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, fontFamily: "'JetBrains Mono', monospace" }}>
              git log --oneline --all | head -∞
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
              gap: 24,
            }}
          >
            {projects.map((proj, i) => (
              <div
                key={proj.title}
                style={{
                  ...s.card,
                  opacity: 0,
                  animation: `slideUp 0.6s ${0.15 * i}s forwards`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(16, 185, 129, 0.2)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 20px 60px rgba(16,185,129,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(16, 185, 129, 0.08)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Project index */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 20,
                    fontSize: 48,
                    fontWeight: 800,
                    color: "rgba(16, 185, 129, 0.06)",
                    fontFamily: "'JetBrains Mono', monospace",
                    lineHeight: 1,
                  }}
                >
                  0{i + 1}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <span style={{ fontSize: 20 }}>🌱</span>
                  <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: "#f0fdf4" }}>
                    {proj.title}
                  </h3>
                </div>

                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px 0" }}>
                  {proj.desc}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {proj.tech.map((t) => (
                    <span key={t} style={s.tag("#06b6d4")}>{t}</span>
                  ))}
                </div>

                <a
                  href={proj.link}
                  style={{
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#10b981",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  View Source ⟶
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ─── BLOG ─── */}
        <section id="blog" data-nav="blog" style={s.section}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                margin: "0 0 12px 0",
              }}
            >
              <span style={{ color: "#f0fdf4" }}>The </span>
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Garden Journal
              </span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 15, fontFamily: "'JetBrains Mono', monospace" }}>
              cat ~/thoughts/*.md | render
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720, margin: "0 auto" }}>
            {blogs.slice(0, visibleBlogs).map((post, i) => (
              <article
                key={post.id}
                style={{
                  ...s.card,
                  padding: "28px 32px",
                  cursor: "pointer",
                  opacity: 0,
                  animation: `slideUp 0.5s ${0.1 * i}s forwards`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(16, 185, 129, 0.2)";
                  el.style.transform = "translateX(6px)";
                  el.style.boxShadow = "0 12px 40px rgba(16,185,129,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(16, 185, 129, 0.08)";
                  el.style.transform = "translateX(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 8,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {post.tags.map((t) => (
                      <span key={t} style={s.tag("#a855f7")}>{t}</span>
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {post.readTime} read
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#f0fdf4",
                    margin: "0 0 8px 0",
                    lineHeight: 1.4,
                  }}
                >
                  {post.title}
                </h3>

                <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, margin: "0 0 12px 0" }}>
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      color: "#475569",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "#10b981",
                    }}
                  >
                    Read more ⟶
                  </span>
                </div>
              </article>
            ))}

            {visibleBlogs < blogs.length && (
              <div style={{ textAlign: "center", marginTop: 16 }}>
                <button
                  style={s.btnGhost}
                  onClick={() => setVisibleBlogs(blogs.length)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  Load more entries ↓
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" data-nav="contact" style={{ ...s.section, textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              margin: "0 0 16px 0",
            }}
          >
            <span style={{ color: "#f0fdf4" }}>Open a </span>
            <span
              style={{
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connection
            </span>
          </h2>

          <p style={{ color: "#94a3b8", fontSize: 16, maxWidth: 480, margin: "0 auto 32px auto", lineHeight: 1.7 }}>
            Like a socket awaiting a handshake, I'm always listening for new connections.
            Let's build something beautiful together.
          </p>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              color: "#10b981",
              background: "rgba(16, 185, 129, 0.06)",
              border: "1px solid rgba(16, 185, 129, 0.15)",
              borderRadius: 12,
              padding: "16px 28px",
              display: "inline-block",
              marginBottom: 32,
            }}
          >
            ping -c 1 garden.dev → 64 bytes, ttl=∞
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "GitHub", icon: "⟨GH⟩", href: "#" },
              { label: "LinkedIn", icon: "in", href: "#" },
              { label: "Email", icon: "@", href: "mailto:hello@garden.dev" },
              { label: "RSS", icon: "◎", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 20px",
                  background: "rgba(16, 185, 129, 0.05)",
                  border: "1px solid rgba(16, 185, 129, 0.12)",
                  borderRadius: 10,
                  color: "#cbd5e1",
                  textDecoration: "none",
                  fontSize: 13,
                  fontFamily: "'JetBrains Mono', monospace",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#10b981";
                  el.style.color = "#10b981";
                  el.style.background = "rgba(16, 185, 129, 0.1)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(16, 185, 129, 0.12)";
                  el.style.color = "#cbd5e1";
                  el.style.background = "rgba(16, 185, 129, 0.05)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <span style={{ fontSize: 16 }}>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer
          style={{
            borderTop: "1px solid rgba(16, 185, 129, 0.08)",
            padding: "32px 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: "#475569",
              lineHeight: 2,
            }}
          >
            <div>
              <span style={{ color: "#10b981" }}>∴</span> crafted with care in the garden
            </div>
            <div>
              © {new Date().getFullYear()} garden.dev — all rights rooted 🌿
            </div>
            <div style={{ marginTop: 4, color: "#334155" }}>
              /* the best code grows slowly */
            </div>
          </div>
        </footer>
      </div>

      {/* ─── Global Styles ─── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #060c08;
        }
        ::-webkit-scrollbar-thumb {
          background: #10b98140;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #10b98180;
        }

        ::selection {
          background: rgba(16, 185, 129, 0.3);
          color: #f0fdf4;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes scrollPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.5);
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.6;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .mobile-burger {
            display: block !important;
          }
          nav ul {
            display: none !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}