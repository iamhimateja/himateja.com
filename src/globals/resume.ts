export type ResumeJob = {
  company: string
  companyNote?: string
  url: string
  logo: string
  title: string
  duration: string
  years: string
  location: string
  stack?: string[]
  note?: string
  points: string[]
}

type ResumeEducation = {
  degree: string
  institution: string
  duration: string
  years: string
}

export const resume = {
  name: 'Himateja Merlapaka',
  title: 'Senior Frontend Engineer / Frontend Lead',
  focus: 'React, TypeScript, design systems, frontend modernization',
  location: 'Bengaluru, India',
  availability: 'Open to remote or Chennai',
  status: 'Open for new opportunities',
  timezone: 'IST (UTC+5:30)',
  photo: '/images/headshot/latest.webp',
  pdf: '/files/Himateja - Resume.pdf',
  /* no email here: ContactEmail renders it, to keep it out of the HTML */
  links: [
    { label: 'linkedin.com/in/himateja', href: 'https://linkedin.com/in/himateja' },
    { label: 'github.com/iamhimateja', href: 'https://github.com/iamhimateja' },
  ],
  summary: [
    'Frontend lead with 10 years of experience. I lead frontend engineering, modernize legacy products, build shared frontend platforms, and ship security and AI products.',
    'At Arctic Wolf (10,000+ customers) I lead a 5-engineer team, own the endpoint console UI, replaced a 10-year-old jQuery and Kendo UI stack with React and TypeScript, and built the component library used by 20+ consoles. Shipped an internal AI assistant on AWS Bedrock.',
  ],
  skills: [
    {
      group: 'Frontend',
      items:
        'React, Next.js, TypeScript, JavaScript, HTML, CSS, Sass, Tailwind, Redux Toolkit, React Query, GraphQL, Apollo, REST',
    },
    {
      group: 'UI and quality',
      items:
        'Material UI, Radix UI, design systems, component libraries, Storybook, accessibility, performance optimization',
    },
    {
      group: 'Testing and tooling',
      items: 'Jest, Vitest, Playwright, React Testing Library, Vite, Webpack, CI/CD, Git, Docker, micro frontends',
    },
    {
      group: 'AI tooling',
      items:
        'LLM integration (AWS Bedrock, Anthropic and OpenAI APIs), agents (Claude Code, MCP), Cursor, GitHub Copilot, evals',
    },
    { group: 'Backend', items: 'Node.js, PostgreSQL, Prisma, Ruby on Rails, Django, MySQL' },
  ],
  experience: [
    {
      company: 'Arctic Wolf Networks',
      companyNote: 'formerly BlackBerry Cylance, via acquisition',
      url: 'https://arcticwolf.com',
      logo: '/images/awn.webp',
      title: 'Senior Frontend Engineer',
      duration: 'Sep 2023 - Present',
      years: "'23-",
      location: 'Bengaluru, India',
      stack: [
        'React',
        'TypeScript',
        'Next.js',
        'Material UI',
        'Radix UI',
        'Tailwind',
        'GraphQL',
        'Node.js',
        'AWS Bedrock',
        'PostgreSQL',
      ],
      note: 'Joined BlackBerry in Sep 2023. Moved to Arctic Wolf in Feb 2025 when it acquired Cylance. Same product, same team.',
      points: [
        'Lead a 5-engineer frontend team for the Cylance endpoint console, now Aurora Endpoint Security. Own frontend architecture, code review, and delivery across the product.',
        'Migrated 75% of a 10-year-old jQuery and Kendo UI (.NET) console into a separate React, TypeScript, and Material UI frontend. Now leading the plan to replace the remaining Kendo screens with open source components.',
        'Built and led the shared component library and design system adopted across 20+ security consoles and micro frontends, including the main Arctic Wolf dashboard.',
        'Established the shared UI primitives, unit testing, CI/CD pipelines, and code review standards for the frontend repos.',
        'After the acquisition, shipped the Arctic Wolf rebrand of the console, the Devices and Device Policies modules, and the Upsight anti-ransomware integration.',
        'Led the frontend upgrade and tech-debt work across the console.',
        'Owned the frontend of BlackBerry Assistant, an internal AI chat tool built with Next.js, Tailwind, Radix UI, AWS Bedrock, and PostgreSQL. Shipped in 2025 with a 4-person team. Used daily by managers and analysts across the company.',
        'Provided full-stack support for a 5-year-old on-prem product (PHP Laravel, Python Django, Docker) during its move from CentOS to Ubuntu LTS.',
        'Mentor junior developers and give technical guidance across teams.',
      ],
    },
    {
      company: 'Index',
      companyNote: 'now Mora',
      url: 'https://index.app',
      logo: '/images/index.webp',
      title: 'Full Stack Engineer',
      duration: 'Aug 2021 - May 2023',
      years: "'21-23",
      location: 'Remote (San Francisco, USA)',
      stack: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'PostgreSQL', 'SCSS', 'Prisma', 'TypeGraphQL'],
      note: 'Index is a platform for building dashboards from the data you already have.',
      points: [
        'Migrated the whole app from Ant Design to Radix UI: dashboard, settings, integrations, components, and analytics pages.',
        'Built onboarding, settings, filters, alerts, invites, and regex syntax highlighting.',
        'Integrated Stripe payments and invoicing.',
        'Built reusable React and GraphQL modules for onboarding, billing, and settings that sped up feature delivery.',
        'Worked with design and backend teams on API alignment and a consistent developer experience.',
      ],
    },
    {
      company: 'Feathery',
      url: 'https://feathery.io',
      logo: '/images/feathery.webp',
      title: 'Full Stack Engineer (Contract)',
      duration: 'May 2021 - Aug 2021',
      years: "'21",
      location: 'Remote (California, USA)',
      stack: ['React', 'TypeScript', 'SCSS', 'Django', 'PostgreSQL'],
      note: 'Feathery is a form builder for product teams. Three-month contract.',
      points: [
        'Built Live Edit for the form builder, so users see changes in the form as they make them.',
        'Improved the UI and responsiveness of the platform with React and SCSS.',
        'Worked with cross-functional teams to integrate new features.',
      ],
    },
    {
      company: 'Involvio',
      companyNote: 'acquired by Cisco',
      url: 'https://involvio.com',
      logo: '/images/involvio.webp',
      title: 'Software Engineer',
      duration: 'Jul 2019 - Apr 2021',
      years: "'19-21",
      location: 'Bengaluru, India',
      stack: ['React', 'Ruby on Rails', 'SCSS', 'Haml', 'JavaScript', 'PostgreSQL'],
      note: 'Involvio is a student engagement platform for schools and colleges.',
      points: [
        'Built the Safe Reopen module (COVID-19 exposure alerts and health passes) with Rails, Haml, and JavaScript. Schools used it to reopen during the pandemic.',
        'Cut page load times on the admin tools by 30%.',
        'Built the Sub-Admin Teams feature and its frontend in Haml and JavaScript.',
        'Built a PostgreSQL-based permissions system for admin staff.',
        'Integrated the CampusKit Semester/Classes API with Ellucian Banner v9 to sync class and student data.',
      ],
    },
    {
      company: 'Halemind',
      url: 'https://halemind.com',
      logo: '/images/halemind.webp',
      title: 'Sr. Software Engineer and Associate Product Manager',
      duration: 'Jul 2017 - Jun 2019',
      years: "'17-19",
      location: 'Tirupati, India',
      stack: ['Ruby on Rails', 'JavaScript', 'jQuery', 'HTML/CSS', 'MySQL'],
      note: 'Halemind is an electronic medical records and hospital management product. Promoted from Software Engineer in Jul 2017.',
      points: [
        'Led a 9-person cross-functional team, owning delivery and product scope.',
        'Built the Appointment Dashboard (Whiteboard), cutting patient wait times by 15 minutes.',
        'Built exam modules for Ophthalmology, Dental Restorative, and Orthodontics with Rails, HTML5, SCSS, SVG, and JavaScript. Raised test accuracy by 75%.',
      ],
    },
    {
      company: 'Halemind',
      url: 'https://halemind.com',
      logo: '/images/halemind.webp',
      title: 'Software Engineer',
      duration: 'Jun 2016 - Jul 2017',
      years: "'16-17",
      location: 'Tirupati, India',
      note: 'Joined as an intern in Dec 2015, while finishing my M.Tech. Full time from Jun 2016.',
      points: [
        'Built a central chat system for hospital staff with Rails, ActionCable, and JavaScript.',
        'Redesigned the dashboards for hospitals, doctors, and patients.',
      ],
    },
  ] as ResumeJob[],
  openSource: [
    {
      name: 'code.care',
      url: 'https://code.care',
      description: 'an open source AI code review platform I am building. Launching soon.',
    },
  ],
  education: [
    {
      degree: 'M.Tech, Computer Science',
      institution: 'Siddartha Institute of Science and Technology, Puttur',
      duration: '2014 - 2016',
      years: "'14-16",
    },
    {
      degree: 'B.Tech, Computer Science and Engineering',
      institution: 'Sri Venkatesa Perumal College of Engineering and Technology, Puttur',
      duration: '2010 - 2014',
      years: "'10-14",
    },
  ] as ResumeEducation[],
}
