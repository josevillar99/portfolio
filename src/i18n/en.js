// Website copy in English. Every key matches es.js.
const en = {
  meta: {
    htmlLang: 'en',
    title: 'Jose Villar · Portfolio',
    description: 'Portfolio of Jose Villar, full-stack developer (Java, Spring Boot, Angular and React).',
  },

  nav: {
    links: {
      inicio: 'Home',
      'sobre-mi': 'About',
      proyectos: 'Projects',
      contacto: 'Contact',
    },
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    switchTo: { es: 'Ver en español', en: 'View in English' },
  },

  hero: {
    eyebrow: 'const developer = "available";',
    greeting: "Hi, I'm",
    subtitle:
      'Full-stack developer focused on the backend: APIs, integrations and business logic with Java and Spring Boot. From idea to deploy, without unnecessary frills.',
    ctaProjects: 'See projects',
    ctaContact: 'Get in touch',
    scrollLabel: 'Scroll down',
    scrollText: 'scroll',
  },

  about: {
    kicker: '01. About me',
    title: 'Who I am',
    downloadCv: 'Download CV',
    downloadCvTitle: 'Download my CV as PDF (English)',
    paragraphs: [
      "I'm Jose, a full-stack developer from Galicia (Spain) with more than five years of experience. I work mostly with Java and Spring Boot on the backend, and with Angular and React on the frontend.",
      'Much of my career has been in healthcare. At Bahía Software I designed and built an ophthalmology application almost from scratch (clinical records and tests for cataract surgery), working directly with the client and the ophthalmologists. At Minsait I developed an application that connects the medical devices patients have at home, including its integration channels in Mirth Connect. I now work at Babel, on an application for the banking sector.',
      'I use Claude Code every day, at work and in my personal projects: a bot that filters job offers, a booking app for a hair salon and an AI race engineer for iRacing. I like small teams and products that are built with care, where what matters is what you build.',
    ],
    skills: [
      'Java', 'Spring Boot', 'Hibernate', 'Angular', 'React', 'TypeScript',
      'Oracle', 'SQL Server', 'PostgreSQL', 'Mirth Connect', 'Docker', 'Jenkins',
      'Git', 'Claude Code',
    ],
    stats: [
      { value: '5+', label: 'Years of experience' },
      { value: '3', label: 'Sectors: healthcare, banking and public sector' },
      { value: 'B2', label: 'English' },
    ],
  },

  projects: {
    kicker: '02. Projects',
    title: "Things I've built",
    lead:
      'Personal projects I own end to end: I choose the architecture and the stack, define every feature, test them against real cases and fix what breaks. Claude Code is my tool to write the code faster; the decisions are mine. The code of the published ones is on GitHub.',
    wipBadge: 'In progress',
    demo: 'Demo',
    demoOnDemand: 'Demo · on request',
    demoSoon: 'Coming soon',
    code: 'Code',
    codeSoon: 'Code · coming soon',
    codeSoonTitle: 'Coming soon to GitHub',
    items: [
      {
        name: 'Job alert bot',
        description:
          'Home Assistant automation that reads job-alert emails over IMAP and scores each offer with Claude against each person\'s profile: my partner and I both use it, each with our own list and phone. It only notifies the offers worth applying to, and flags great ones that miss a non-essential requirement as negotiable.',
        tags: ['Home Assistant', 'Claude API', 'YAML', 'IMAP', 'JavaScript', 'Prompt engineering'],
      },
      {
        name: 'Castor Barber Shop',
        description:
          'Appointment booking app for a hair salon with several workers. Services with waiting times (like hair colouring), a calendar per worker, admin panel, daily cash closing, statistics and an audit log. Next step: integrating it with Verifactu, so invoicing meets the Spanish tax agency\'s rules.',
        tags: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
      },
      {
        name: 'AI race engineer',
        description:
          'Radio race engineer for iRacing that runs locally: it reads live telemetry, works out fuel, tyres and pit stops, keeps an eye on rivals and answers your questions by voice during the race.',
        tags: ['Python', 'Telemetry', 'Whisper', 'Piper TTS', 'Local LLM'],
      },
      {
        name: 'Digital frame dashboard',
        description:
          'Dashboard for a screen at home, served as a Home Assistant add-on: calendar, weather, music and sports and gaming stats, with integrations such as Spotify, Strava or Riot.',
        tags: ['JavaScript', 'Node.js', 'HTML / CSS', 'Home Assistant', 'Docker'],
      },
    ],
    modal: {
      title: 'Demo on request',
      close: 'Close',
      intro:
        "This app isn't deployed on any server, so I set up the demo when someone asks for it. Write to me by email or LinkedIn and tell me how you'd like to see it:",
      options: [
        { title: 'On a call:', text: "I'll show it to you live and explain how it's built." },
        { title: 'Deployed on a server:', text: "I'll put it online for a few days so you can try it yourself." },
      ],
      email: 'Request by email',
      linkedin: 'Message me on LinkedIn',
      mailSubject: (project) => `Demo of ${project}`,
      mailBody: (project) =>
        `Hi Jose,\n\nI'd like to see a demo of ${project}.\n\n` +
        "I'd prefer:\n[ ] A call, where you show it to me live\n[ ] A server deployment, so I can try it myself\n\n" +
        'Name:\nCompany:\n',
    },
  },

  contact: {
    kicker: '03. Contact',
    title: "Let's talk",
    lead: "Have a job offer, a project in mind or just want to say hi? Write to me by email or LinkedIn and I'll get back to you.",
    labels: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    open: { email: 'Send an email', github: 'Open GitHub', linkedin: 'Open LinkedIn' },
    copy: 'Copy',
    copyLabel: (what) => `Copy ${what}`,
    copied: 'Copied!',
  },
}

export default en
