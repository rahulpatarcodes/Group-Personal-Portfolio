export type ProjectType = "cyber" | "aiml" | "systems" | "video";

export interface TeamMember {
  id: string;
  initial: "S" | "R" | "A";
  name: string;
  role: string;
  domain: string;
  spec: string;
  bio: string;
  image: string;
  badgeChip: string;
  highlightTitle: string;
  highlights: string[];
  coreTools: string[];
  avatarAccent: string;
  terminalCommand: string;
  stats: { label: string; value: string }[];
  borderTheme: {
    border: string;
    shadow: string;
    hoverBorder: string;
    hoverShadow: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    glowBg: string;
  };
}

export interface Project {
  id: string;
  type: ProjectType;
  title: string;
  category: string;
  year: string;
  client: string;
  leadMember: string;
  memberInitial: "S" | "R" | "A";
  description: string;
  longDescription: string;
  metrics: string[];
  tags: string[];
  accentColor: string;
  featured: boolean;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  duration?: string;
  aspectRatio?: string;
}

export interface SkillCategory {
  title: string;
  type: "cyber" | "aiml" | "systems" | "cinema";
  subtitle: string;
  skills: { name: string; level: number; note: string }[];
}

export const PORTFOLIO_DATA = {
  branding: {
    name: "SRA NEURAL",
    subName: "Shaikh • Rahul • Ashish",
    department: "Computer Science & Engineering (AI & ML / Core Systems / Security)",
    year: "1st Year B.Tech Engineers",
    tagline: "SECURITY ARCHITECTURE × NEURAL INTELLIGENCE × CORE SYSTEMS",
    mission: "Three engineers driving the convergence of Offensive & Defensive Cybersecurity, Deep Learning Neural Architectures, and High-Performance Core Computer Systems.",
  },

  hero: {
    name: "SRA NEURAL",
    shortName: "SRA NEURAL",
    title: "SRA NEURAL",
    tagline: "SHAIKH ZUBAID HUSSAIN • RAHUL PATAR • ASHISH DAS",
    subtagline: "Cybersecurity • AI/ML Engineering • Core Computer Science",
    status: "Active // 1st Year B.Tech CSE • Security, Neural & Systems Collective",
    timecode: "00:01:24:12",
    fps: "60.00 FPS LOCKED",

    // Tech stack badges
    skills: [
      { name: "Ethical Hacking", tag: "Cyber", color: "#00ff9d" },
      { name: "PyTorch & Vision", tag: "AI/ML", color: "#ff8c00" },
      { name: "Core Systems (C++)", tag: "Systems", color: "#ffaa00" },
      { name: "DaVinci Color", tag: "Cinema", color: "#e62e00" },
    ],

    narrative: [
      {
        progress: [0, 0.22],
        heading: "SRA NEURAL",
        subheading: "Shaikh Zubaid Hussain [S] • Rahul Patar [R] • Ashish Das [A]",
        details: "A triumvirate of 1st Year B.Tech Engineers mastering Cybersecurity, Deep Learning AI, and Core Systems Architecture.",
        align: "center" as const,
      },
      {
        progress: [0.25, 0.48],
        heading: "DEFENDING SYSTEMS & CRAFTING CINEMA.",
        subheading: "Penetration Testing • Network Defense • DaVinci Resolve Color Science",
        details: "Shaikh Zubaid Hussain hardens infrastructure against zero-day exploits while the collective crafts high-impact cinematic narratives.",
        align: "left" as const,
      },
      {
        progress: [0.52, 0.75],
        heading: "INTELLIGENCE & LOW-LEVEL ARCHITECTURE.",
        subheading: "PyTorch Deep Learning • OpenCV Vision • Distributed Systems & Compilers",
        details: "Rahul Patar trains real-time neural models while Ashish Das architects memory-efficient low-level systems in C++.",
        align: "right" as const,
      },
      {
        progress: [0.80, 0.98],
        heading: "THREE MINDS. ONE UNIFIED COLLECTIVE.",
        subheading: "SRA NEURAL // Security • Intelligence • Systems",
        details: "From vulnerability assessment and GPU model training to distributed algorithms and 60 FPS web flagships.",
        align: "center" as const,
      },
    ],
  },

  // The 3 Team Members (S - R - A)
  team: [
    {
      id: "shaikh-zubaid",
      initial: "S",
      name: "Shaikh Zubaid Hussain",
      role: "Cyber Security Specialist",
      domain: "Cybersecurity, Ethical Hacking & SecOps",
      spec: "1st Year B.Tech CSE",
      image: "/zubaid-profile.png",
      badgeChip: "CYBERSEC",
      borderTheme: {
        border: "border-2 border-cyan-500/50",
        shadow: "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
        hoverBorder: "hover:border-cyan-400",
        hoverShadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]",
        badgeBg: "bg-cyan-500/10",
        badgeBorder: "border-cyan-500/50",
        badgeText: "text-cyan-300",
        glowBg: "bg-cyan-500/15",
      },
      bio: "Specializes in offensive and defensive security, penetration testing, network threat mitigation, and vulnerability assessment. Passionate about safeguarding systems against zero-day exploits, designing secure architectures, and auditing code for attack vectors.",
      highlightTitle: "Security & Ethical Hacking Focus",
      highlights: [
        "Penetration testing & network vulnerability auditing",
        "Wireshark packet inspection & protocol anomaly analysis",
        "Metasploit, Nmap, Burp Suite, & Linux kernel hardening",
        "OWASP Top 10 mitigation & cryptographic protocols",
      ],
      coreTools: ["Linux/Kali", "Wireshark", "Metasploit", "Burp Suite", "Python", "Nmap"],
      avatarAccent: "#00e5ff", // Cyan / Emerald
      terminalCommand: "cyber",
      stats: [
        { label: "Vulnerabilities Audited", value: "35+" },
        { label: "Security Frameworks", value: "OWASP/NIST" },
      ],
    },
    {
      id: "rahul-patar",
      initial: "R",
      name: "Rahul Patar",
      role: "AI/ML Engineer & Video Editor",
      domain: "AI/ML Engineering, Neural Models & Full-Stack",
      spec: "1st Year B.Tech CSE (AI & ML)",
      image: "/rahul-profile.jpg?v=2",
      badgeChip: "AI/ML",
      borderTheme: {
        border: "border-2 border-red-500/50",
        shadow: "shadow-[0_0_15px_rgba(239,68,68,0.3)]",
        hoverBorder: "hover:border-red-400",
        hoverShadow: "hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
        badgeBg: "bg-red-500/10",
        badgeBorder: "border-red-500/50",
        badgeText: "text-red-300",
        glowBg: "bg-red-500/15",
      },
      bio: "Directs neural network design, computer vision pipelines, and cinematic color editing. Expert in training PyTorch models, optimizing inference with OpenCV & CUDA, and crafting hardware-accelerated 60 FPS web applications with DaVinci Resolve color science.",
      highlightTitle: "AI/ML & Neural Systems Focus",
      highlights: [
        "PyTorch deep neural network design & custom loss functions",
        "OpenCV real-time computer vision & YOLOv8 tracking",
        "Full-stack Next.js 14 App Router & Canvas 60 FPS GPU engines",
        "DaVinci Resolve Studio color science (Rec.709, Kodak 2383 LUTs)",
      ],
      coreTools: ["PyTorch", "OpenCV", "Python", "Next.js 14", "CUDA", "DaVinci Resolve"],
      avatarAccent: "#ef4444", // Cinematic Deep Red / Crimson
      terminalCommand: "aiml",
      stats: [
        { label: "Neural Models", value: "15+" },
        { label: "Inference Accuracy", value: "99.4%" },
      ],
    },
    {
      id: "ashish-das",
      initial: "A",
      name: "Ashish Das",
      role: "CSE Core Specialist",
      domain: "CSE Core, System Design & Architecture",
      spec: "1st Year B.Tech CSE",
      image: "/ashish-profile.png?v=2",
      badgeChip: "CSE CORE",
      borderTheme: {
        border: "border-2 border-blue-500/50",
        shadow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        hoverBorder: "hover:border-blue-400",
        hoverShadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
        badgeBg: "bg-blue-500/10",
        badgeBorder: "border-blue-500/50",
        badgeText: "text-blue-300",
        glowBg: "bg-blue-500/15",
      },
      bio: "Focuses on foundational computer science engineering, low-level systems programming, operating system mechanics, and distributed backend architectures. Passionate about algorithms, memory optimization in C/C++, concurrency, and microservice efficiency.",
      highlightTitle: "CSE Core & Systems Design Focus",
      highlights: [
        "Data structures & algorithms (graph theory, trees, DP)",
        "Operating systems, multi-threading & POSIX concurrency",
        "Distributed key-value stores & low-latency caching",
        "Compiler construction, lexers, parsers & bytecode execution",
      ],
      coreTools: ["C/C++", "Linux Systems", "Data Structures", "Distributed Systems", "SQL/NoSQL", "Docker"],
      avatarAccent: "#3b82f6", // Electric Blue / Cobalt
      terminalCommand: "systems",
      stats: [
        { label: "Algorithms Solved", value: "250+" },
        { label: "Concurrency Target", value: "<5ms Latency" },
      ],
    },
  ] as TeamMember[],

  stats: [
    { label: "3 Disciplines", value: "Sec • AI • Sys", detail: "Cybersecurity, AI/ML, CSE Core" },
    { label: "Render Engine", value: "60 FPS", detail: "Hardware-accelerated Canvas & WebGL" },
    { label: "System Accuracy", value: "99.4%", detail: "Neural inference & NIDS precision" },
    { label: "B.Tech Class", value: "Class of '28", detail: "1st Year B.Tech CSE Collective" },
  ],

  projects: [
    // ==========================================
    // 1. CYBERSECURITY PROJECTS (SHAIKH ZUBAID HUSSAIN)
    // ==========================================
    {
      id: "network-nids-engine",
      type: "cyber" as ProjectType,
      title: "SENTINEL — REAL-TIME NETWORK INTRUSION DETECTION",
      category: "Network Security & Packet Inspection",
      year: "2024",
      client: "Security Lab Research",
      leadMember: "Shaikh Zubaid Hussain",
      memberInitial: "S",
      description: "An automated real-time NIDS analyzing packet signatures, detecting port scans, DDoS floods, and ARP spoofing.",
      longDescription: "Architected by Shaikh Zubaid Hussain using Python raw sockets, Scapy, and Wireshark heuristics. Processes gigabit network traffic with zero dropped packets, matching payloads against Snort-compatible signature rules and raising sub-second telemetry alerts on unauthorized intrusion attempts.",
      metrics: ["100K Packets/sec Inspected", "Zero Packet Drop Rate", "Sub-50ms Threat Alert"],
      tags: ["Python", "Scapy", "Wireshark", "Network Security", "Intrusion Detection", "Linux"],
      accentColor: "#00ff9d",
      featured: true,
      githubUrl: "https://github.com",
    },
    {
      id: "vuln-scanner-automator",
      type: "cyber" as ProjectType,
      title: "AEGIS — AUTOMATED VULNERABILITY AUDITOR",
      category: "Penetration Testing & Security Automation",
      year: "2024",
      client: "Cybersecurity Collective",
      leadMember: "Shaikh Zubaid Hussain",
      memberInitial: "S",
      description: "Fast multi-threaded web application vulnerability scanner targeting OWASP Top 10 security flaws.",
      longDescription: "Engineered by Shaikh Zubaid Hussain to audit web application perimeters. Automates detection of SQL Injection, Cross-Site Scripting (XSS), misconfigured CORS headers, open directories, and unpatched SSL/TLS cipher suites with structured forensic report generation.",
      metrics: ["OWASP Top 10 Coverage", "Multi-Threaded Probing", "Automated PDF Forensics"],
      tags: ["Python", "Nmap", "Burp Suite", "OWASP", "Penetration Testing", "Bash"],
      accentColor: "#00e5ff",
      featured: true,
      githubUrl: "https://github.com",
    },

    // ==========================================
    // 2. AI / ML & VISION PROJECTS (RAHUL PATAR)
    // ==========================================
    {
      id: "neural-video-interpolator",
      type: "aiml" as ProjectType,
      title: "NEURALFRAME — AI VIDEO INTERPOLATION & 60FPS",
      category: "PyTorch & CUDA Deep Learning",
      year: "2024",
      client: "SRA Neural Lab",
      leadMember: "Rahul Patar",
      memberInitial: "R",
      description: "Deep learning model utilizing bidirectional optical flow to synthesize intermediate cinematic frames at 60 FPS.",
      longDescription: "Engineered by Rahul Patar. Trains a custom convolutional neural architecture with perceptual VGG loss to reconstruct intermediate frames from 24 FPS footage without ghosting. Leverages CUDA tensor acceleration for sub-18ms per-frame inference.",
      metrics: ["24 FPS → 60 FPS Synthesis", "Sub-18ms Inference / Frame", "CUDA Acceleration"],
      tags: ["PyTorch", "CUDA", "Python", "OpenCV", "Optical Flow", "Deep Learning"],
      accentColor: "#ff8c00",
      featured: true,
      githubUrl: "https://github.com",
    },
    {
      id: "visionpass-campus-ai",
      type: "aiml" as ProjectType,
      title: "VISIONPASS — REALTIME AI CAMPUS SURVEILLANCE",
      category: "Computer Vision & YOLOv8 Deep Learning",
      year: "2024",
      client: "B.Tech CSE Showcase",
      leadMember: "Rahul Patar",
      memberInitial: "R",
      description: "Edge computer vision pipeline detecting safety parameters and facial identification with sub-second alerts.",
      longDescription: "Developed by Rahul Patar using fine-tuned YOLOv8 and OpenCV multi-camera stream processing. Features ultra-low latency bounding box tracking, sub-second personnel recognition, and a Next.js 14 reactive admin dashboard.",
      metrics: ["99.4% Detection Accuracy", "30 FPS Multi-Stream", "Sub-50ms Event Trigger"],
      tags: ["Python", "OpenCV", "YOLOv8", "Flask", "Next.js 14", "Tailwind CSS"],
      accentColor: "#ff4d00",
      featured: true,
      githubUrl: "https://github.com",
    },

    // ==========================================
    // 3. CORE CSE & SYSTEMS (ASHISH DAS)
    // ==========================================
    {
      id: "custom-bytecode-vm",
      type: "systems" as ProjectType,
      title: "NEXUS-VM — CUSTOM BYTECODE COMPILER & INTERPRETER",
      category: "Compilers & Virtual Machine Architecture",
      year: "2024",
      client: "Systems Architecture Project",
      leadMember: "Ashish Das",
      memberInitial: "A",
      description: "A stack-based virtual machine, lexical scanner, AST parser, and bytecode compiler written from scratch in C++.",
      longDescription: "Engineered by Ashish Das to explore compiler design and instruction-level execution. Features a Pratt parser for mathematical expressions, custom mark-and-sweep garbage collection, op-code instruction dispatch, and JIT-inspired optimizations running at native C++ execution speeds.",
      metrics: ["Custom Stack Bytecode VM", "Mark & Sweep Garbage Collector", "Zero External Dependencies"],
      tags: ["C++", "Compilers", "Virtual Machine", "AST Parser", "Computer Science Core", "Memory Management"],
      accentColor: "#ffaa00",
      featured: true,
      githubUrl: "https://github.com",
    },
    {
      id: "distributed-kv-store",
      type: "systems" as ProjectType,
      title: "TITAN-KV — CONCURRENT DISTRIBUTED KEY-VALUE ENGINE",
      category: "Distributed Systems & Concurrency",
      year: "2024",
      client: "Core Systems Research",
      leadMember: "Ashish Das",
      memberInitial: "A",
      description: "High-throughput in-memory key-value database with lock-free concurrency, WAL persistence, and Raft consensus.",
      longDescription: "Architected by Ashish Das. Implements lock-free skip-lists for concurrent reads and writes, Write-Ahead Logging (WAL) for fault tolerance, and a lightweight Raft consensus module for multi-node leader election and log replication.",
      metrics: ["150K Concurrent Ops/sec", "Raft Consensus Replication", "<2ms Read Latency"],
      tags: ["C++", "Distributed Systems", "Concurrency", "Raft Consensus", "WAL", "Multi-Threading"],
      accentColor: "#ff8c00",
      featured: true,
      githubUrl: "https://github.com",
    },

    // ==========================================
    // 4. CINEMATIC VIDEO & COLOR SCIENCE
    // ==========================================
    {
      id: "apex-horizons-film",
      type: "video" as ProjectType,
      title: "APEX HORIZONS — 4K CINEMATIC FILM",
      category: "DaVinci Resolve Color Science & Sound Foley",
      year: "2024",
      client: "Apex Media Group",
      leadMember: "SRA Collective (Rahul, Shaikh & Ashish)",
      memberInitial: "R",
      description: "Evocative cinematic film featuring speed ramping, 32-stem sound foley, and DaVinci Resolve Kodak 2383 color grading.",
      longDescription: "Co-produced by the SRA collective. Graded in DaVinci Resolve Studio with Rec.709 color management, custom film grain curves, and a 32-stem audio foley design with sub-bass impacts.",
      metrics: ["2.4M Organic Views", "DaVinci Rec.709 Color Grade", "32 Audio Stem Foley"],
      tags: ["DaVinci Resolve", "Premiere Pro", "Kodak 2383 LUT", "32-Stem Audio", "4K Mastering"],
      accentColor: "#ff2200",
      featured: true,
      duration: "02:15",
      aspectRatio: "2.39:1 Anamorphic",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    },
    {
      id: "scrollytelling-engine",
      type: "systems" as ProjectType,
      title: "SRA 60 FPS 2K CANVAS SCROLL ENGINE",
      category: "HTML5 Canvas, Framer Motion & Spring Physics",
      year: "2024",
      client: "SRA Flagship",
      leadMember: "SRA Collective",
      memberInitial: "A",
      description: "Hardware-accelerated 2K canvas sequence scrubbing engine with spring inertia and zero layout shift.",
      longDescription: "Engineered by the SRA team: 180 frames of 2560x1440 WebP images scrubbed via Framer Motion useSpring and HTML5 Canvas 2D context with hardware DPI scaling, biometric HUD projections, and Lenis momentum scroll physics.",
      metrics: ["Locked 60 FPS Benchmark", "2560x1440 2K Master", "Zero Layout Shift"],
      tags: ["HTML5 Canvas", "Framer Motion", "Lenis", "TypeScript", "Next.js 14"],
      accentColor: "#e62e00",
      featured: true,
      liveUrl: "http://localhost:3001",
      githubUrl: "https://github.com",
    },
  ] as Project[],

  colorGradeDemo: {
    title: "DAVINCI RESOLVE COLOR SCIENCE",
    subtitle: "From Flat RAW Camera Log to Film Emulation & Neural Color Harmony",
    description: "Drag the slider to compare uncorrected Flat Log camera footage with the SRA NEURAL signature DaVinci Resolve color grade (Rec.709, Kodak 2383 film LUT emulation, skin-tone preservation, and cinematic deep red/amber expansion).",
    beforeLabel: "RAW Flat Log",
    afterLabel: "DaVinci Resolve Grade",
  },

  terminalCommands: [
    {
      cmd: "whoami",
      output: "SRA NEURAL — 3-Person First-Year B.Tech CSE Collective:\n• S - Shaikh Zubaid Hussain: Cybersecurity & Security Architect\n• R - Rahul Patar: AI/ML Engineering & Neural Models\n• A - Ashish Das: CSE Core Systems & Software Architecture",
    },
    {
      cmd: "team",
      output:
        "SRA NEURAL TRIO (1st Year B.Tech CSE):\n" +
        "1. [S] Shaikh Zubaid Hussain — Cybersecurity, Penetration Testing & Network Security\n" +
        "2. [R] Rahul Patar — AI/ML Engineering, Neural Models, PyTorch & Next.js\n" +
        "3. [A] Ashish Das — CSE Core, Compilers, Distributed Systems & C++ Architecture",
    },
    {
      cmd: "cyber",
      output:
        "Shaikh Zubaid Hussain // Cybersecurity Stack:\n" +
        "• Network Defense: NIDS, Wireshark, Scapy, Snort rules, ARP mitigation\n" +
        "• Penetration Testing: Nmap, Burp Suite, Metasploit, OWASP Top 10 audits\n" +
        "• Security Arch: Linux kernel hardening, Cryptography, Secure Code Review",
    },
    {
      cmd: "aiml",
      output:
        "Rahul Patar // AI & ML Stack:\n" +
        "• Deep Learning: PyTorch, CUDA, Loss Functions, Model Architecture\n" +
        "• Vision: OpenCV, YOLOv8, Optical Flow Frame Synthesis, Edge AI\n" +
        "• Full-Stack & Cinema: Next.js 14 App Router, Canvas 60 FPS, DaVinci Resolve Color Science",
    },
    {
      cmd: "systems",
      output:
        "Ashish Das // CSE Core & Systems Stack:\n" +
        "• Systems: C/C++, POSIX Concurrency, Memory Management, Linux Internals\n" +
        "• Core CS: Advanced DSA (Graphs, Trees, DP), Operating System Design\n" +
        "• Architecture: Custom Bytecode Compilers, Raft Distributed KV Stores, Docker",
    },
    {
      cmd: "skills",
      output:
        "• Cybersecurity: Penetration Testing, NIDS, Wireshark, OWASP (Shaikh)\n" +
        "• AI & Neural: PyTorch, OpenCV, CUDA, Computer Vision, Full-Stack (Rahul)\n" +
        "• Systems & Core: C++, DSA, OS Concurrency, Compilers, Distributed KV (Ashish)",
    },
    {
      cmd: "projects",
      output: "Found 8 production projects spanning Network NIDS, PyTorch Interpolation, Custom Compilers, Distributed Key-Value Store, and DaVinci Films.",
    },
    {
      cmd: "contact",
      output: "Group Email: rahul.patar.codes@gmail.com | Telegram: @sra_neural | Available for Global Security, AI & Systems Work",
    },
    {
      cmd: "status",
      output: "Active // 1st Year B.Tech CSE • Open for High-Impact Security Audits, Neural Pipelines & Systems Engineering",
    },
  ],

  capabilities: [
    {
      title: "Cybersecurity & Security Architecture",
      type: "cyber" as const,
      subtitle: "Offensive & defensive security, penetration testing, and network defense (Shaikh Zubaid Hussain)",
      skills: [
        { name: "Network Penetration Testing & Auditing", level: 96, note: "Vulnerability analysis, Metasploit, Nmap, Burp Suite" },
        { name: "Network Packet Analysis (Wireshark/Scapy)", level: 95, note: "Protocol forensic inspection & signature intrusion detection" },
        { name: "OWASP Top 10 Mitigation & Web Security", level: 94, note: "SQLi, XSS, CSRF, CORS & secure authentication systems" },
        { name: "Linux System Hardening & Firewalls", level: 92, note: "Kernel configuration, iptables, permissions & audit trails" },
        { name: "Cryptographic Protocols & PKI", level: 90, note: "TLS/SSL ciphers, hashing, digital signatures & key management" },
      ],
    },
    {
      title: "AI/ML & Neural Engineering",
      type: "aiml" as const,
      subtitle: "Deep neural networks, computer vision, and GPU acceleration (Rahul Patar)",
      skills: [
        { name: "PyTorch & Deep Neural Architectures", level: 96, note: "Custom loss functions, backprop, CNNs & vision models" },
        { name: "OpenCV & Real-time Computer Vision", level: 95, note: "Optical flow, object tracking & YOLOv8 edge inference" },
        { name: "Python Data Science (NumPy, Scikit)", level: 98, note: "Mathematical modeling, tensor algebra & dataset curation" },
        { name: "Next.js 14 App Router & 60 FPS Canvas", level: 96, note: "Server Actions, hardware DPI scaling & real-time UI" },
        { name: "DaVinci Resolve Studio (Color Science)", level: 95, note: "Rec.709, Kodak 2383 LUTs, skin-tone isolation & HDR" },
      ],
    },
    {
      title: "CSE Core & Systems Design",
      type: "systems" as const,
      subtitle: "Low-level C/C++, data structures, operating systems, and distributed systems (Ashish Das)",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", level: 97, note: "Complex graph theory, trees, dynamic programming & amortized bounds" },
        { name: "C/C++ Systems & Memory Management", level: 95, note: "Pointers, cache locality, RAII, custom allocators & low latency" },
        { name: "Operating Systems & Concurrency", level: 93, note: "Threads, mutexes, condition variables, POSIX & lock-free queues" },
        { name: "Distributed Systems & Consensus", level: 91, note: "Raft consensus, WAL persistence, replication & fault tolerance" },
        { name: "Compiler Construction & VM Design", level: 90, note: "Lexical analyzers, AST parsing, bytecode generation & VM dispatch" },
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      period: "2024 — Present",
      role: "1st Year B.Tech CSE Engineers",
      studio: "SRA NEURAL Collective",
      description: "United as a 3-engineer collective at B.Tech CSE. Shaikh Zubaid Hussain leads cybersecurity and vulnerability research; Rahul Patar directs AI/ML neural model architecture; Ashish Das architects core systems, algorithms, and distributed computing.",
    },
    {
      period: "2023 — 2024",
      role: "Security, AI & Systems Research Labs",
      studio: "Academic & Autonomous Research",
      description: "Built custom NIDS packet filters, optical flow video interpolation models in PyTorch, and concurrent distributed key-value engines in C++.",
    },
    {
      period: "2022 — 2023",
      role: "Independent Developers & Creative Engineers",
      studio: "Tech & Media Collaborations",
      description: "Executed network security audits, built algorithmic data structure frameworks, and color-graded commercial films in DaVinci Resolve.",
    },
  ],

  socials: [
    { name: "GitHub", handle: "github.com/rahulpatar", url: "https://github.com" },
    { name: "LinkedIn", handle: "linkedin.com/in/sra-neural", url: "https://linkedin.com" },
    { name: "YouTube", handle: "@sra_neural", url: "https://youtube.com" },
    { name: "Instagram", handle: "@sra.neural", url: "https://instagram.com" },
  ],

  contact: {
    email: "rahul.patar.codes@gmail.com",
    telegram: "@sra_neural",
    location: "B.Tech CSE • Available Globally",
  },
};
