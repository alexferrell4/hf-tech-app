"use client";



import { useState } from "react";

const BRAND = {
  name: "H.F. Tech Consulting",
  tagline: "Smart Solutions. Real Results.",
  location: "Houston, TX",
  services: ["Workflow Automation", "Custom Software Development", "Cloud Solutions", "Data Analytics & Reporting", "Website Management", "IT Support"],
  niche: "Healthcare & Small Business",
  stats: { projects: 9, satisfaction: "98%", support: "24/7", costReduction: "42%", efficiency: "+127%", timeSaved: "15+ hrs/wk" },
  contact: { email: "hftechconsulting@gmail.com", phone: "(281) 223-3570", website: "hftechconsulting.com" }
};

const PLATFORMS = [
  { id: "linkedin", label: "LinkedIn", icon: "💼", color: "#0A66C2", bg: "#EBF3FB", note: "Best for B2B leads & thought leadership" },
  { id: "instagram", label: "Instagram", icon: "📸", color: "#E1306C", bg: "#FDF0F5", note: "Visual storytelling & brand awareness" },
  { id: "facebook", label: "Facebook", icon: "👥", color: "#1877F2", bg: "#EEF4FF", note: "Local community & healthcare orgs" },
  { id: "twitter", label: "X (Twitter)", icon: "🐦", color: "#14171A", bg: "#F5F8FA", note: "Real-time industry conversations" },
];

const CONTENT_TYPES = [
  { id: "thought_leadership", label: "Thought Leadership", icon: "🧠", desc: "Position you as the go-to IT expert in Houston" },
  { id: "case_study", label: "Client Win / Case Study", icon: "🏆", desc: "Showcase real results with healthcare & business clients" },
  { id: "edu_tip", label: "Educational Tip", icon: "💡", desc: "Tech tips that help your audience & build trust" },
  { id: "service_spotlight", label: "Service Spotlight", icon: "🔦", desc: "Highlight a specific service with a CTA" },
  { id: "stat_post", label: "Stats & Data Post", icon: "📊", desc: "Lead with a powerful number to stop the scroll" },
  { id: "behind_scenes", label: "Behind the Scenes", icon: "🛠️", desc: "Humanize the brand — show how you work" },
];

const CONTENT_TEMPLATES = {
  linkedin: {
    thought_leadership: [
      `Most small businesses treat IT as a cost center.\n\nThe ones growing treat it as a growth engine.\n\nHere's the difference:\n\n→ Cost center mindset: "Fix it when it breaks"\n→ Growth mindset: "Automate before it slows us down"\n\nAt H.F. Tech Consulting, we help Houston businesses shift that mindset — through workflow automation, custom software, and cloud solutions that actually move the needle.\n\nIf your team is still doing manually what a system could do in seconds, let's talk.\n\n#ITConsulting #WorkflowAutomation #HoustonBusiness #DigitalTransformation`,
      `Healthcare providers are leaving money on the table every single day.\n\nNot because of poor care. Because of poor processes.\n\nManual intake forms. Paper compliance docs. Disconnected systems.\n\nWe've helped assisted living facilities and home care agencies reduce operational costs by up to 42% — just by digitizing and automating what they were doing by hand.\n\nThe technology isn't the hard part. The decision to start is.\n\nDM me or visit hftechconsulting.com to see how we can help.\n\n#HealthcareIT #AssistedLiving #WorkflowAutomation #HoustonTech`
    ],
    case_study: [
      `Client Win 🏆\n\nA Houston-area healthcare provider came to us drowning in manual paperwork.\n\nTheir staff was spending 15+ hours a week on tasks that had nothing to do with patient care.\n\nWe built them:\n✅ Automated document management workflows\n✅ Digital compliance forms\n✅ A custom reporting dashboard\n\nResult? 15+ hours saved per week. 42% reduction in operational costs.\n\nThat's what "Smart Solutions. Real Results." actually looks like.\n\nReady for yours? → hftechconsulting.com\n\n#CaseStudy #HealthcareIT #ITConsulting #Houston`,
    ],
    edu_tip: [
      `3 signs your business is ready for workflow automation:\n\n1️⃣ Your team copies data between systems manually\n2️⃣ You're sending the same email or form over and over\n3️⃣ Approvals and notifications rely on someone remembering\n\nIf any of these hit close to home — you're not alone.\n\nWorkflow automation doesn't require a big budget or an IT department. It requires the right partner.\n\nThat's what we do at H.F. Tech Consulting. We build cloud-based automation that works while you sleep.\n\n→ Schedule a free consultation: hftechconsulting.com\n\n#WorkflowAutomation #SmallBusiness #CloudSolutions #HoustonTech`,
      `The cloud isn't just for big corporations.\n\nSmall businesses and healthcare providers that move to cloud-based platforms typically see:\n\n📉 Lower IT overhead\n📈 Better team collaboration\n🔒 More secure data management\n⚡ Faster workflows\n\nAt H.F. Tech Consulting, we handle the entire transition — from planning to launch to ongoing support.\n\nYou focus on your customers. We handle the tech.\n\n#CloudSolutions #ITSupport #Houston #DigitalTransformation`
    ],
    service_spotlight: [
      `Spotlight: Data Analytics & Reporting 📊\n\nYour business is generating data every day.\n\nBut if that data is sitting in spreadsheets no one looks at — it's not working for you.\n\nWe build custom dashboards and reporting tools that turn your raw data into decisions:\n\n→ Which clients are most profitable?\n→ Where are operations slowing down?\n→ What does next quarter actually look like?\n\nStop guessing. Start knowing.\n\n📍 Houston, TX | hftechconsulting.com | (281) 223-3570\n\n#DataAnalytics #BusinessIntelligence #ITConsulting #Houston`,
    ],
    stat_post: [
      `73% of business decision-makers say thought leadership content is MORE persuasive than traditional marketing.\n\nThat's why we show up here — not to sell, but to teach.\n\nIf you run a business in Houston and want to understand how technology can reduce costs and drive growth — follow H.F. Tech Consulting.\n\nWe post weekly insights on automation, software, cloud, and IT strategy.\n\n#ITConsulting #B2BMarketing #HoustonBusiness #TechStrategy`,
      `42%.\n\nThat's the average cost reduction our healthcare clients see after we optimize their operations.\n\nNot through cuts — through smarter technology.\n\nWorkflow automation. Better systems. Less manual work.\n\nIf you run a healthcare facility, home care agency, or assisted living community in the Houston area — let's talk.\n\n📞 (281) 223-3570 | hftechconsulting.com\n\n#HealthcareIT #OperationalEfficiency #Houston #WorkflowAutomation`
    ],
    behind_scenes: [
      `A look at how we kick off every project at H.F. Tech Consulting:\n\nStep 1 — Discovery: We sit down and listen. What's slowing you down? Where are the gaps?\n\nStep 2 — Strategy: We design a solution tailored to your budget and your goals. No templates. No bloated proposals.\n\nStep 3 — Delivery: We build it, test it, launch it — and stay available 24/7 after.\n\nNo confusion. No handoffs to someone who doesn't know your project.\n\nJust one team, start to finish.\n\n→ hftechconsulting.com\n\n#ITConsulting #HowWeWork #Houston #SmallBusinessTech`
    ]
  },
  instagram: {
    thought_leadership: [
      `Your business runs on systems — whether you've built them intentionally or not. 🔧\n\nThe question isn't "do I need technology?" It's "is the technology I have actually working FOR me?"\n\nAt H.F. Tech Consulting, we help Houston businesses answer that question — and fix what's holding them back.\n\n📍 Houston, TX\n🌐 hftechconsulting.com\n\n#HoustonBusiness #ITConsulting #WorkflowAutomation #SmallBizTech #DigitalTransformation #HoustonTech #CloudSolutions #TechConsulting`
    ],
    edu_tip: [
      `5 tech tools every small business should be using in 2025 👇\n\n1. A cloud-based file storage system (Google Drive, SharePoint)\n2. Automated appointment or intake forms\n3. A simple CRM to track leads and clients\n4. A dashboard that shows business KPIs at a glance\n5. A reliable IT partner who knows your industry 😉\n\nNeed help setting any of these up?\n\n📞 (281) 223-3570\n🌐 hftechconsulting.com\n\n#TechTips #SmallBusiness #ITSupport #CloudSolutions #Houston #BusinessGrowth #Automation #HoustonEntrepreneur`
    ],
    stat_post: [
      `15+ hours saved per week. ⏱️\n\nThat's what one of our healthcare clients gained after we automated their document workflows.\n\nTime they now spend on patient care — not paperwork.\n\nSmart Solutions. Real Results.\n\n🌐 hftechconsulting.com\n📍 Houston, TX\n\n#HealthcareIT #WorkflowAutomation #ITConsulting #Houston #OperationalEfficiency #HealthcareTech #TimeSavings #HoustonHealth`
    ],
    service_spotlight: [
      `Need a website that actually works for your business? 💻\n\nWe don't just build sites — we manage them.\n\n✅ SSL certificates\n✅ Hosting & domains\n✅ Security updates\n✅ Ongoing maintenance\n\nYou focus on running your business. We keep the lights on.\n\n📞 (281) 223-3570 | hftechconsulting.com\n\n#WebsiteManagement #SmallBusiness #ITSupport #HoustonBusiness #WebDev #DigitalPresence #TechConsulting #Houston`
    ],
    case_study: [
      `From chaos to clarity. 📁➡️✅\n\nA Houston healthcare provider was buried in manual processes — intake forms, compliance docs, internal approvals.\n\nWe automated it all.\n\nResult: 42% cost reduction. 15+ hours saved weekly.\n\nThis is why we do what we do. 🙌\n\n🌐 hftechconsulting.com | (281) 223-3570\n\n#ClientWin #ITConsulting #HealthcareIT #Automation #Houston #SmallBusinessSuccess #TechTransformation`
    ],
    behind_scenes: [
      `Here's how we work 👇\n\n🔍 Discovery → We learn your business\n📋 Strategy → We build the plan\n🚀 Delivery → We launch & support\n\nNo confusion. No surprises. Just results.\n\n📍 H.F. Tech Consulting — Houston, TX\n🌐 hftechconsulting.com\n\n#HowWeWork #ITConsulting #HoustonTech #SmallBusiness #BehindTheScenes #TechConsulting #BusinessTech #Entrepreneur`
    ]
  },
  facebook: {
    thought_leadership: [
      `Is your business technology working FOR you — or just working?\n\nThere's a big difference.\n\nAt H.F. Tech Consulting, we help Houston-area businesses (especially healthcare providers and small businesses) transform their operations through smart technology.\n\n→ Workflow Automation\n→ Custom Software\n→ Cloud Solutions\n→ IT Support — 24/7\n\nWe're local, we're responsive, and we stay on after the project ends.\n\n📞 (281) 223-3570\n🌐 hftechconsulting.com\n📧 hftechconsulting@gmail.com\n\n#HoustonBusiness #ITConsulting #WorkflowAutomation #LocalBusiness`
    ],
    edu_tip: [
      `💡 Quick Tech Tip for Houston Business Owners:\n\nIf your team is manually copying information from one place to another — there's a better way.\n\nWorkflow automation can handle data transfers, notifications, approvals, and document management automatically — saving your team hours every week.\n\nWe've helped local businesses save 15+ hours per week through simple cloud-based automation tools.\n\nCurious what that could look like for you? Drop a comment or send us a message!\n\n🌐 hftechconsulting.com | (281) 223-3570\n\n#WorkflowAutomation #HoustonSmallBusiness #ITTips #CloudSolutions`
    ],
    stat_post: [
      `📊 Did you know?\n\nHealthcare organizations that implement digital workflow systems reduce operational costs by an average of 30-45%.\n\nOur clients at H.F. Tech Consulting have seen up to 42% cost reduction and 127% improvement in process efficiency.\n\nIf you run an assisted living facility, home care agency, or counseling practice in the Houston area — these numbers could apply to you.\n\nLet's have a conversation. No pressure.\n\n📞 (281) 223-3570 | 🌐 hftechconsulting.com\n\n#HealthcareIT #Houston #DigitalTransformation #OperationalEfficiency`
    ],
    service_spotlight: [
      `🔦 Service Spotlight: Custom Software Development\n\nOff-the-shelf software doesn't always fit the way your business works.\n\nWe design and build:\n• Web applications\n• Internal business tools\n• Custom dashboards\n• Mobile solutions\n\nAll tailored to YOUR specific needs — not someone else's template.\n\nBased in Houston. Serving businesses across Texas.\n\n📞 (281) 223-3570\n🌐 hftechconsulting.com\n\n#CustomSoftware #HoustonTech #SoftwareDevelopment #LocalBusiness`
    ],
    case_study: [
      `🏆 Real Results from a Real Client:\n\nA Houston healthcare provider came to us with a problem: their staff was spending over 15 hours a week on manual administrative tasks.\n\nWe assessed their workflows and built an automated system for:\n✔️ Document management\n✔️ Digital compliance forms\n✔️ Internal notifications & approvals\n\nOutcome: 15+ hours saved weekly. 42% reduction in operational costs.\n\nThat's the power of the right technology, built the right way.\n\nReady to see what's possible for your organization?\n\n📞 (281) 223-3570 | 🌐 hftechconsulting.com\n\n#CaseStudy #HealthcareIT #WorkflowAutomation #HoustonBusiness`
    ],
    behind_scenes: [
      `Ever wonder how a tech project actually gets done?\n\nHere's our 3-step process at H.F. Tech Consulting:\n\n1️⃣ DISCOVERY — We meet with you, learn your business, understand your goals and challenges.\n\n2️⃣ STRATEGY — We design a custom solution that fits your budget and your needs. No bloated proposals.\n\n3️⃣ DELIVERY — We build, test, and launch — then stay available 24/7 for ongoing support.\n\nWe treat every client like a long-term partner — because that's exactly what we are.\n\n📍 Houston, TX | 🌐 hftechconsulting.com\n\n#BehindTheScenes #ITConsulting #HoustonBusiness #TechPartner`
    ]
  },
  twitter: {
    thought_leadership: [
      `Most businesses automate AFTER they're overwhelmed.\n\nThe smart ones automate BEFORE.\n\nWorkflow automation isn't a luxury — it's how you scale without adding headcount.\n\n→ hftechconsulting.com\n\n#WorkflowAutomation #ITConsulting #HoustonTech`,
      `Healthcare IT truth:\n\nYour clinical staff is too valuable to spend hours on paperwork that a system could handle in seconds.\n\nWe fix that.\n\n📍 Houston, TX | hftechconsulting.com\n\n#HealthcareIT #Automation #Houston`
    ],
    edu_tip: [
      `3 signs you need workflow automation:\n\n→ You copy data between systems manually\n→ Approvals rely on someone remembering\n→ Onboarding takes longer than it should\n\nAll fixable. DM us or visit hftechconsulting.com\n\n#WorkflowAutomation #SmallBusiness #ITTips`,
      `Cloud migration checklist for small businesses:\n\n✅ Audit current tools\n✅ Identify what's redundant\n✅ Choose the right platform\n✅ Plan the data migration\n✅ Train the team\n✅ Have IT support on standby\n\nNeed help? That's literally what we do.\n\nhftechconsulting.com | #CloudSolutions #Houston`
    ],
    stat_post: [
      `42% cost reduction.\n15+ hrs saved weekly.\n98% client satisfaction.\n\nNot a pitch. Just what happens when technology is built right.\n\nhftechconsulting.com\n\n#ITConsulting #SmartSolutions #HoustonTech`,
    ],
    service_spotlight: [
      `Your data is telling you something.\n\nAre you listening?\n\nWe build custom dashboards that turn business data into real decisions.\n\n→ hftechconsulting.com\n\n#DataAnalytics #BusinessIntelligence #Houston #ITConsulting`
    ],
    case_study: [
      `A healthcare client was drowning in paperwork.\n\nWe automated their document management, forms, and approvals.\n\nResult: 42% cost reduction. 15+ hrs/week saved.\n\nThat's the difference the right technology makes.\n\nhftechconsulting.com\n\n#HealthcareIT #Automation #CaseStudy`
    ],
    behind_scenes: [
      `How we work:\n\nDiscover → Strategy → Deliver → Support\n\nNo handoffs to junior staff. No disappearing after launch.\n\nOne team. Start to finish.\n\nhftechconsulting.com | (281) 223-3570\n\n#ITConsulting #HowWeWork #Houston`
    ]
  }
};

const STRATEGY_DATA = [
  {
    platform: "LinkedIn",
    icon: "💼",
    color: "#0A66C2",
    frequency: "3–4x/week",
    best_times: "Tue–Thu, 8–10am or 12pm",
    top_formats: ["Long-form text posts", "Carousel PDFs", "Polls", "Article reposts"],
    key_insight: "73% of B2B decision-makers say thought leadership is more persuasive than traditional ads. LinkedIn is your #1 lead gen platform.",
    actions: ["Connect with healthcare admins & Houston business owners", "Engage in comments on industry posts", "Post case studies with real numbers"]
  },
  {
    platform: "Instagram",
    icon: "📸",
    color: "#E1306C",
    frequency: "4–5x/week",
    best_times: "Mon/Wed/Fri, 11am–1pm",
    top_formats: ["Infographic carousels", "Reels (tips & walkthroughs)", "Quote graphics", "Before/after stories"],
    key_insight: "Visual storytelling drives brand awareness. Use Reels to explain what you do in 30–60 seconds — IT doesn't have to be boring.",
    actions: ["Use local Houston hashtags", "Post Reels of tech tips or process walkthroughs", "Stories: polls, Q&As, behind-the-scenes"]
  },
  {
    platform: "Facebook",
    icon: "👥",
    color: "#1877F2",
    frequency: "3–4x/week",
    best_times: "Wed–Fri, 9am–11am",
    top_formats: ["Long educational posts", "Client testimonials", "Local community engagement", "Event announcements"],
    key_insight: "Facebook is ideal for reaching healthcare org admins and local Houston business communities. Join and post in local business groups.",
    actions: ["Join Houston business & healthcare Facebook groups", "Boost high-performing posts ($5–$20/day)", "Share blog posts and website content"]
  },
  {
    platform: "X (Twitter)",
    icon: "🐦",
    color: "#14171A",
    frequency: "1–2x/day",
    best_times: "Weekdays, 8–10am",
    top_formats: ["Short sharp takes", "Stat-driven posts", "Thread breakdowns", "Replies to IT conversations"],
    key_insight: "Twitter is for real-time positioning. Post short punchy takes on IT trends, automation, and healthcare tech to build an expert presence.",
    actions: ["Reply to posts from local Houston businesses", "Use trending IT/tech hashtags", "Thread your case studies and process breakdowns"]
  }
];

const CONTENT_CALENDAR = [
  { day: "Monday", theme: "Motivation / Mindset", type: "thought_leadership", platform: "LinkedIn + Facebook", tip: "Start the week with a bold take on technology or business growth" },
  { day: "Tuesday", theme: "Educational Tip", type: "edu_tip", platform: "LinkedIn + Instagram", tip: "Teach your audience something actionable — automation tips, cloud basics, IT security" },
  { day: "Wednesday", theme: "Service Spotlight", type: "service_spotlight", platform: "All platforms", tip: "Highlight one service with a clear CTA — rotate weekly through your 6 services" },
  { day: "Thursday", theme: "Stats / Data", type: "stat_post", platform: "LinkedIn + Twitter", tip: "Lead with a number that stops the scroll. Back it up with context and a CTA" },
  { day: "Friday", theme: "Client Win / Case Study", type: "case_study", platform: "LinkedIn + Facebook", tip: "End the week with social proof. Real results build trust faster than anything" },
  { day: "Saturday", theme: "Behind the Scenes", type: "behind_scenes", platform: "Instagram + Facebook", tip: "Humanize the brand. Show how you work, your process, your team" },
  { day: "Sunday", theme: "Rest or Repurpose", type: null, platform: "Optional", tip: "Repurpose a top post from the week as a Story or Tweet. Or take the day off." },
];

export default function HFTCSocialToolkit() {
  const [activeTab, setActiveTab] = useState("generator");
  const [selectedPlatform, setSelectedPlatform] = useState("linkedin");
  const [selectedType, setSelectedType] = useState("thought_leadership");
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiPost, setAiPost] = useState(null);
  const [customPrompt, setCustomPrompt] = useState("");

  const getTemplatePost = () => {
    const posts = CONTENT_TEMPLATES[selectedPlatform]?.[selectedType];
    if (!posts || posts.length === 0) return null;
    return posts[currentPostIndex % posts.length];
  };

  const currentPost = aiPost || getTemplatePost();

  const handleCopy = () => {
    if (currentPost) {
      navigator.clipboard.writeText(currentPost);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNextPost = () => {
    setAiPost(null);
    const posts = CONTENT_TEMPLATES[selectedPlatform]?.[selectedType] || [];
    setCurrentPostIndex((prev) => (prev + 1) % Math.max(posts.length, 1));
  };

  const generateAIPost = async () => {
    setLoading(true);
    setAiPost(null);
    const platform = PLATFORMS.find(p => p.id === selectedPlatform)?.label;
    const type = CONTENT_TYPES.find(t => t.id === selectedType)?.label;
    const prompt = `Write a single social media post for ${platform} for H.F. Tech Consulting, an IT consulting firm in Houston, TX. 
Services: Workflow Automation, Custom Software Development, Cloud Solutions, Data Analytics & Reporting, Website Management, IT Support.
They specialize in healthcare providers, assisted living facilities, and small businesses.
Key stats: 98% client satisfaction, 42% average cost reduction for clients, 15+ hrs/week saved, 24/7 support.
Website: hftechconsulting.com | Phone: (281) 223-3570
Post type: ${type}
${customPrompt ? `Additional context: ${customPrompt}` : ""}
Write ONLY the post text — no labels, no explanation. Include relevant hashtags for ${platform}. Make it feel human, specific, and results-driven. Match the tone and format appropriate for ${platform}.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }]
        })
      });
      const data = await response.json();
      const text = data.content?.find(b => b.type === "text")?.text;
      if (text) setAiPost(text.trim());
    } catch (e) {
      setAiPost("Error generating post. Please try again.");
    }
    setLoading(false);
  };

  const platformData = PLATFORMS.find(p => p.id === selectedPlatform);

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: "#0D0D0D", minHeight: "100vh", color: "#F0F0F0" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #0D0D0D 0%, #1A1A2E 100%)", borderBottom: "1px solid #222", padding: "20px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #00D4FF, #0066CC)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>⚡</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.3px", color: "#fff" }}>H.F. Tech Consulting</div>
              <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.5px", textTransform: "uppercase" }}>Social Media Toolkit</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#555", marginTop: 8 }}>Smart Solutions. Real Results. — Houston, TX</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid #1E1E1E", background: "#111" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 0 }}>
          {[
            { id: "generator", label: "📝 Post Generator" },
            { id: "strategy", label: "📊 Platform Strategy" },
            { id: "calendar", label: "📅 Content Calendar" },
          ].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              padding: "14px 20px", border: "none", background: "transparent", cursor: "pointer",
              color: activeTab === tab.id ? "#00D4FF" : "#666",
              borderBottom: activeTab === tab.id ? "2px solid #00D4FF" : "2px solid transparent",
              fontWeight: activeTab === tab.id ? 600 : 400, fontSize: 13, transition: "all 0.2s"
            }}>{tab.label}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 48px" }}>

        {/* POST GENERATOR */}
        {activeTab === "generator" && (
          <div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>Select Platform</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                {PLATFORMS.map(p => (
                  <button key={p.id} onClick={() => { setSelectedPlatform(p.id); setAiPost(null); setCurrentPostIndex(0); }} style={{
                    padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${selectedPlatform === p.id ? p.color : "#222"}`,
                    background: selectedPlatform === p.id ? `${p.color}18` : "#141414",
                    cursor: "pointer", textAlign: "left", transition: "all 0.2s"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 18 }}>{p.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, color: selectedPlatform === p.id ? "#fff" : "#aaa", fontSize: 13 }}>{p.label}</div>
                        <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{p.note}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>Content Type</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                {CONTENT_TYPES.map(t => (
                  <button key={t.id} onClick={() => { setSelectedType(t.id); setAiPost(null); setCurrentPostIndex(0); }} style={{
                    padding: "10px 14px", borderRadius: 8, border: `1.5px solid ${selectedType === t.id ? "#00D4FF" : "#222"}`,
                    background: selectedType === t.id ? "#00D4FF18" : "#141414",
                    cursor: "pointer", textAlign: "left", transition: "all 0.2s"
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ fontSize: 16, marginTop: 1 }}>{t.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, color: selectedType === t.id ? "#00D4FF" : "#aaa", fontSize: 12 }}>{t.label}</div>
                        <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{t.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* AI Custom Prompt */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 8, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>Custom Context (Optional)</div>
              <input
                value={customPrompt}
                onChange={e => setCustomPrompt(e.target.value)}
                placeholder="e.g. Focus on workflow automation for dental offices, mention free consultation..."
                style={{
                  width: "100%", padding: "10px 14px", borderRadius: 8, border: "1.5px solid #222",
                  background: "#141414", color: "#ddd", fontSize: 13, outline: "none", boxSizing: "border-box"
                }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
              <button onClick={generateAIPost} disabled={loading} style={{
                flex: 1, padding: "12px 20px", borderRadius: 8, border: "none",
                background: loading ? "#222" : "linear-gradient(135deg, #00D4FF, #0066CC)",
                color: "#fff", fontWeight: 700, fontSize: 13, cursor: loading ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}>
                {loading ? "✨ Generating..." : "✨ Generate AI Post"}
              </button>
              <button onClick={handleNextPost} style={{
                padding: "12px 16px", borderRadius: 8, border: "1.5px solid #333",
                background: "#141414", color: "#aaa", fontWeight: 600, fontSize: 13, cursor: "pointer"
              }}>Next Template →</button>
            </div>

            {/* Post Output */}
            <div style={{ background: "#141414", borderRadius: 12, border: "1px solid #222", overflow: "hidden" }}>
              <div style={{ padding: "14px 16px", borderBottom: "1px solid #1E1E1E", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{platformData?.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#aaa" }}>{platformData?.label} Post</span>
                  {aiPost && <span style={{ fontSize: 11, background: "#00D4FF22", color: "#00D4FF", padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>AI Generated</span>}
                </div>
                <button onClick={handleCopy} style={{
                  padding: "6px 14px", borderRadius: 6, border: "1.5px solid #333",
                  background: copied ? "#00D4FF22" : "#1E1E1E", color: copied ? "#00D4FF" : "#888",
                  fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.2s"
                }}>
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <div style={{ padding: "20px", whiteSpace: "pre-wrap", lineHeight: 1.7, fontSize: 14, color: currentPost ? "#D0D0D0" : "#444", minHeight: 200 }}>
                {currentPost || "Select a platform and content type above, then click Generate or browse templates."}
              </div>
            </div>
          </div>
        )}

        {/* PLATFORM STRATEGY */}
        {activeTab === "strategy" && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Platform Strategy for H.F. Tech Consulting</div>
              <div style={{ fontSize: 13, color: "#666" }}>Based on 2024–2025 data on what works for B2B IT consulting firms</div>
            </div>
            <div style={{ display: "grid", gap: 16 }}>
              {STRATEGY_DATA.map(s => (
                <div key={s.platform} style={{ background: "#141414", borderRadius: 12, border: "1px solid #1E1E1E", overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid #1E1E1E", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 22 }}>{s.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: "#fff", fontSize: 16 }}>{s.platform}</div>
                      <div style={{ fontSize: 12, color: "#555" }}>{s.best_times}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>Recommended</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: s.color }}>{s.frequency}</div>
                    </div>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ background: "#0D0D0D", borderLeft: `3px solid ${s.color}`, padding: "10px 14px", borderRadius: "0 6px 6px 0", marginBottom: 14, fontSize: 13, color: "#ccc", lineHeight: 1.6 }}>
                      {s.key_insight}
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <div style={{ fontSize: 11, color: "#555", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>Top Formats</div>
                        {s.top_formats.map(f => (
                          <div key={f} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                            <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, flexShrink: 0 }}></div>
                            <div style={{ fontSize: 12, color: "#999" }}>{f}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#555", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>Action Items</div>
                        {s.actions.map(a => (
                          <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: 6, marginBottom: 5 }}>
                            <div style={{ color: "#00D4FF", fontSize: 11, marginTop: 2, flexShrink: 0 }}>→</div>
                            <div style={{ fontSize: 12, color: "#999" }}>{a}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Stats */}
            <div style={{ marginTop: 24, background: "#141414", borderRadius: 12, border: "1px solid #1E1E1E", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: 16, fontSize: 15 }}>Your Social Proof — Use These Numbers</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {[
                  { stat: "42%", label: "Avg. Cost Reduction" },
                  { stat: "15+ hrs", label: "Saved Per Week" },
                  { stat: "98%", label: "Client Satisfaction" },
                  { stat: "+127%", label: "Process Efficiency" },
                  { stat: "24/7", label: "Support Available" },
                  { stat: "9+", label: "Projects Delivered" },
                ].map(s => (
                  <div key={s.stat} style={{ background: "#0D0D0D", borderRadius: 8, padding: "12px", textAlign: "center", border: "1px solid #1E1E1E" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#00D4FF" }}>{s.stat}</div>
                    <div style={{ fontSize: 11, color: "#666", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTENT CALENDAR */}
        {activeTab === "calendar" && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Weekly Content Calendar</div>
              <div style={{ fontSize: 13, color: "#666" }}>A repeatable posting rhythm for H.F. Tech Consulting — rotate service spotlights weekly</div>
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {CONTENT_CALENDAR.map(day => {
                const typeData = day.type ? CONTENT_TYPES.find(t => t.id === day.type) : null;
                return (
                  <div key={day.day} style={{ background: "#141414", borderRadius: 10, border: "1px solid #1E1E1E", padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 80, flexShrink: 0 }}>
                      <div style={{ fontWeight: 800, fontSize: 13, color: day.day === "Sunday" ? "#555" : "#fff" }}>{day.day}</div>
                      <div style={{ fontSize: 11, color: "#444", marginTop: 4 }}>{day.platform}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                        {typeData && <span style={{ fontSize: 14 }}>{typeData.icon}</span>}
                        <div style={{ fontWeight: 600, fontSize: 13, color: day.day === "Sunday" ? "#555" : "#ccc" }}>{day.theme}</div>
                        {typeData && (
                          <span style={{ fontSize: 11, background: "#00D4FF15", color: "#00D4FF", padding: "2px 8px", borderRadius: 20 }}>{typeData.label}</span>
                        )}
                      </div>
                      <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{day.tip}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 20, background: "#141414", borderRadius: 12, border: "1px solid #1E1E1E", padding: "20px" }}>
              <div style={{ fontWeight: 700, color: "#fff", marginBottom: 12, fontSize: 15 }}>Service Rotation Schedule</div>
              <div style={{ fontSize: 12, color: "#666", marginBottom: 14 }}>Rotate your Wednesday Service Spotlight through all 6 services. One full rotation = 6 weeks.</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                {BRAND.services.map((s, i) => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, background: "#0D0D0D", borderRadius: 8, padding: "10px 12px", border: "1px solid #1E1E1E" }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, background: "#00D4FF18", color: "#00D4FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>W{i + 1}</div>
                    <div style={{ fontSize: 12, color: "#ccc" }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 16, background: "#0A1628", borderRadius: 12, border: "1px solid #0066CC44", padding: "16px 20px" }}>
              <div style={{ fontWeight: 700, color: "#00D4FF", marginBottom: 8, fontSize: 14 }}>💡 Pro Tip: Repurpose, Don't Recreate</div>
              <div style={{ fontSize: 13, color: "#8BA8C7", lineHeight: 1.7 }}>
                One piece of content can live on every platform. Write a LinkedIn post → turn the insight into an Instagram carousel → compress it to a Twitter thread → turn it into a Facebook story. You create once, publish everywhere.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}