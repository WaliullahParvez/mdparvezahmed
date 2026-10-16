/**
 * data.js — All portfolio content lives here.
 * To update anything on the site, edit this file only.
 */

const SITE_DATA = {
  meta: {
    name:  "Muhammad Parvez Ahmed",
    title: "Cyber Security Expert",
    email: "oaliullahparvez@gmail.com",
    year:  new Date().getFullYear(),
  },

  hero: {
    tagline:  "I break systems to make them unbreakable.",
    subtitle: "Penetration Testing · Vulnerability Assessment · Security Audits",
  },

  stats: {
    experience:     "1+",
    projects:       "20+",
    certifications: "4+",
  },

  about: {
    bio: `Computer Science & Engineering graduate with a specialization in cybersecurity.
          I've spent years understanding how attackers think — so organizations can defend smarter.
          Currently focused on ethical hacking, network security hardening, and red-team operations.`,
    location:   "Dhaka, Bangladesh",
    experience: "1+ Years",
  },

  experience: [
    {
      role:    "Network Support Engineer",
      company: "Alpha Broadway System",
      period:  "Aug 2025 — Dec 2025",
      bullets: [
        "Monitored and maintained network infrastructure for 200+ enterprise clients",
        "Assisted in vulnerability scanning and firewall rule audits",
        "Responded to 150+ support tickets related to network security incidents",
      ],
    },
  ],

  skills: {
    "Offensive Security": ["Metasploit", "Burp Suite", "SQLmap", "Hydra", "Nessus"],
    "Network & Recon":    ["Nmap", "Wireshark", "Aircrack-ng"],
    "Programming":        ["Python", "PHP", "SQL", "Bash"],
    "Platforms":          ["Kali Linux", "Parrot OS", "Windows Server", "AWS", "Docker"],
  },

  projects: [
    {
      title:   "PhishGuard — Phishing Link Detection Web App",
      desc:    "Designed and developed PhishGuard, a full-stack web application that detects malicious phishing URLs in real time. Performs multi-layer threat analysis including domain reputation checks, URL pattern recognition, SSL certificate validation, and redirect chain inspection to classify links as safe, suspicious, or dangerous.",
      role:    "Solo Developer & Security Researcher",
      results: "Successfully identifies phishing URLs with high accuracy. Deployed and tested against 500+ real-world phishing samples.",
      tools:   ["Python", "Flask", "VirusTotal API", "Regex", "HTML/CSS", "JavaScript"],
    },
    {
      title:   "PassForge — Password Strength Analyzer & Smart Generator",
      desc:    "Built a web application that evaluates the cryptographic strength of any password in real time using entropy scoring, pattern detection, and dictionary attack simulation. Also generates strong, memorable password suggestions using passphrase techniques and substitution rules tailored for usability and security.",
      role:    "Solo Developer",
      results: "Helps users replace weak passwords with secure alternatives. Reduces predictable password patterns by guiding users through strength criteria.",
      tools:   ["Python", "JavaScript", "zxcvbn Library", "Flask", "HTML/CSS"],
    },
    {
      title:   "Web Application Vulnerability Assessment — 100+ Targets",
      desc:    "Conducted comprehensive vulnerability assessments across 100+ websites, identifying and responsibly disclosing critical security flaws. Testing covered POST-based SQL Injection, database-level SQLi, CSRF, Reflected and Stored XSS, SQLi WAF bypass, and general bug hunting across authentication and input surfaces.",
      role:    "Security Researcher / Penetration Tester",
      results: "Discovered and reported critical vulnerabilities including SQLi, XSS, and CSRF across 100+ web targets. Demonstrated WAF bypass techniques in controlled environments.",
      tools:   ["Burp Suite", "SQLmap", "OWASP ZAP", "Nmap", "Nessus", "Manual Testing"],
    },
    {
      title:   "Website Security Hardening, Malware Removal & Migration — 60+ Sites",
      desc:    "Provided end-to-end website security services for 60+ client websites. Conducted full security scans to detect malware, backdoors, and misconfigurations. Performed malware removal, error diagnosis, CMS hardening, and complete site migrations with zero data loss and minimal downtime.",
      role:    "Web Security Engineer",
      results: "Cleaned and hardened 60+ websites. Achieved 100% malware-free status post-remediation. Completed migrations with no data loss and improved security posture.",
      tools:   ["Nmap", "Nessus", "cPanel", "WP-CLI", "Sucuri", "SSH", "FTP"],
    },
  ],

  certifications: [
    { badge: "🎖️", name: "Certified Ethical Hacker (CEH)",   issuer: "Arena Web Security",    year: "2025" },
    { badge: "🏆", name: "Cisco CCNA",                        issuer: "Cisco",                 year: "2025" },
    { badge: "🤖", name: "AI Innovations in Cyber Security",  issuer: "AI Connect Bangladesh", year: "2025" },
    { badge: "💻", name: "AI for Developers",                 issuer: "AI Connect Bangladesh", year: "2025" },
  ],

  achievements: [
    {
      icon:  "🎯",
      title: "OWASP Top 10 Completed — SQL Injection",
      desc:  "Successfully completed all OWASP Top 10 tasks in the SQL Injection category, covering POST-based SQLi, error-based, blind, and WAF bypass techniques.",
      year:  "2025",
    },
    {
      icon:  "🛡️",
      title: "OWASP Top 10 Completed — Cross-Site Request Forgery (CSRF)",
      desc:  "Completed all OWASP Top 10 tasks in the CSRF category, demonstrating hands-on expertise in forging cross-site requests and testing token validation weaknesses.",
      year:  "2025",
    },
    {
      icon:  "🔐",
      title: "OWASP Top 10 Completed — Cross-Site Scripting (XSS)",
      desc:  "Completed all OWASP Top 10 tasks in the XSS category, including reflected, stored, and DOM-based XSS exploitation across real-world style environments.",
      year:  "2025",
    },
  ],

  services: [
    { icon: "⚔️", title: "Penetration Testing",     desc: "Full-scope ethical hacking engagements — web apps, networks, APIs, and infrastructure. Identifying vulnerabilities before attackers do." },
    { icon: "🔍", title: "Vulnerability Assessment", desc: "Systematic scanning, analysis, and prioritization of security weaknesses across your digital estate." },
    { icon: "📋", title: "Security Audits",          desc: "Comprehensive review of policies, configurations, and controls aligned with ISO 27001, NIST, and OWASP frameworks." },
    { icon: "🛡️", title: "Incident Response",       desc: "Rapid investigation, containment, and post-incident analysis to minimize damage and prevent recurrence." },
  ],

  contact: {
    email:    "oaliullahparvez@gmail.com",
    linkedin: { label: "linkedin.com/in/muhammad-parvez-ahmed", url: "https://linkedin.com/in/muhammad-parvez-ahmed" },
    github:   { label: "github.com/WaliullahParvez",            url: "https://github.com/WaliullahParvez" },
    whatsapp: { label: "WhatsApp: 01863578601",                  url: "https://wa.me/8801863578601" },
  },
};
