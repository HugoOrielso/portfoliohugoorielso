export const dataEnglish = {
  work: [
    {
      company: "IkiDev",
      href: "https://movilytics.com/",
      projectId: 1,
      badges: ["Mobility analytics", "Big data", "Geospatial platforms"],
      location: "Remote",
      alt: "IkiDev / Movilytics logo",
      title: "Full Stack Developer",
      logoUrl: "/movilytics.png",
      start: "2024",
      end: "Present",
      background: "#fff",
      summary:
        "Full stack development for Movilytics and CityRed, two urban mobility products built for transport planning, operations and analytics.",
      description:
        "At IkiDev I work on the same mobility ecosystem behind Movilytics and CityRed. I build dashboards, maps, APIs, data flows and production features for platforms that process public transport data at scale. These products support real operational decisions and are used by organizations such as the Santiago Ministry of Transport and universities.",
      highlights: [
        "Built operational, financial and planning dashboards for mobility teams.",
        "Developed interactive maps, heatmaps, routes and geospatial layers with Mapbox GL.",
        "Integrated BigQuery pipelines for large public transport datasets.",
        "Improved filters, sidebars, reusable UI components and reporting flows.",
        "Implemented CSV exports, authentication, permissions and organization management.",
        "Supported production deployments and CI/CD workflows with GitHub Actions."
      ],
      technologies: [
        "React",
        "Next.js",
        "Vue.js",
        "NestJS",
        "PostgreSQL",
        "BigQuery",
        "Mapbox GL",
        "Tailwind CSS",
        "GitHub Actions"
      ]
    },
    {
      company: "DIMCULTURA",
      href: "https://dimcultura.com",
      projectId: 3,
      badges: ["Digital signature", "Document management", "Fintech"],
      location: "Remote",
      alt: "DIMCULTURA logo",
      title: "Full Stack Developer",
      logoUrl: "/dimcultura.png",
      start: "2026",
      end: "Present",
      background: "#fff",
      summary:
        "Full stack platform for digital signing, document workflows and identity verification.",
      description:
        "I am developing a document management and digital signature platform for contracts, promissory notes and financial documents. The system combines identity verification, OTP authentication, secure storage, PDF generation, role-based workflows and transactional audit logs.",
      highlights: [
        "Designed backend architecture with Express.js, Prisma ORM and PostgreSQL.",
        "Built an admin dashboard and a public signing portal.",
        "Implemented JWT, refresh tokens and HTTP-only cookies.",
        "Integrated Cloudinary, Resend, MASIV and Veriff.",
        "Generated PDF documents using Puppeteer.",
        "Configured automated deployments with GitHub Actions and CapRover."
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "Resend",
        "MASIV",
        "Veriff",
        "Puppeteer",
        "GitHub Actions",
        "CapRover"
      ]
    },
    {
      company: "PVC Color's",
      href: "https://www.pinturaspvccolors.com/",
      projectId: 4,
      badges: ["E-commerce", "Admin panel", "Payments"],
      location: "Remote",
      alt: "PVC Color's logo",
      title: "Full Stack Developer",
      logoUrl: "/logo-pvc.webp",
      start: "2024",
      end: "Present",
      background: "#fff",
      summary:
        "E-commerce and management platform for catalog, orders, inventory, payments and technical content.",
      description:
        "I led the evolution of PVC Color's from a corporate website into a complete e-commerce platform with public catalog, checkout, payments, backend services, product management, inventory, documents, CMS content and production infrastructure.",
      highlights: [
        "Built the public store with product catalog, filters, cart and Wompi payments.",
        "Developed an admin panel for products, categories, inventory, orders and content.",
        "Implemented Cloudinary for product images and technical PDF files.",
        "Created a Markdown-based CMS for technical articles.",
        "Integrated Google Maps for store locations.",
        "Configured Cloudflare, SSL, GitHub Actions and CapRover deployments."
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "Wompi",
        "Google Maps API",
        "GitHub Actions",
        "CapRover",
        "Cloudflare",
        "Tailwind CSS"
      ]
    },
    {
      company: "Ciscan.ca",
      href: "https://ciscan.ca/",
      projectId: 5,
      badges: ["Engineering software", "Corrosion analysis", "SaaS"],
      location: "Remote",
      alt: "Ciscan logo",
      title: "Full Stack Developer",
      logoUrl: "/ciscan.png",
      start: "2024",
      end: "Present",
      background: "#fff",
      summary:
        "Engineering SaaS that turns corrosion analysis spreadsheets into maintainable web software.",
      description:
        "I contribute to an engineering platform for industrial corrosion analysis, translating complex Excel-based calculation models into maintainable frontend and backend software with technical forms, MongoDB storage, PDF reports and Stripe subscriptions.",
      highlights: [
        "Built technical forms and result views with Angular.",
        "Implemented backend calculations with .NET and C#.",
        "Translated engineering Excel algorithms into scalable code.",
        "Generated technical PDF reports.",
        "Integrated Stripe payments and subscription plans.",
        "Designed MongoDB storage for configurations, results and users."
      ],
      technologies: ["Angular", ".NET", "C#", "MongoDB", "Stripe", "PDF Reports"]
    },
    {
      company: "Chamber of Commerce of Cucuta",
      href: "#",
      projectId: 6,
      badges: ["Public sector", "Government entity", "Enterprise platform"],
      location: "Remote",
      alt: "Chamber of Commerce logo",
      title: "Frontend Developer",
      logoUrl: "/camara.png",
      start: "2026",
      end: "Present",
      background: "#fff",
      summary:
        "Frontend for a Colombian public-sector business platform focused on characterization, segmentation and program recommendations.",
      description:
        "I work on the frontend of an institutional platform for the Chamber of Commerce of Cucuta, a public entity in Colombia that supports business registration, formalization and regional development. The product helps characterize companies, segment business profiles, recommend institutional programs and support administrative workflows for public-sector teams.",
      highlights: [
        "Built responsive interfaces using React and TypeScript.",
        "Developed dynamic forms with validations and conditional flows.",
        "Implemented protected navigation based on permissions and roles.",
        "Integrated frontend modules with REST APIs.",
        "Created reusable components with a modular architecture."
      ],
      technologies: ["React", "TypeScript", "CSS", "REST APIs"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Movilytics",
      href: "https://movilytics.com/",
      dates: "2024 - Present",
      active: true,
      role: "Full Stack Developer",
      company: "IkiDev",
      category: "Urban mobility analytics platform",
      summary:
        "Large-scale analytics platform for public transport data, maps, dashboards and strategic mobility indicators.",
      description:
        "Movilytics is one of IkiDev's urban mobility products. It turns public transport data into a decision-making workspace where technical teams can explore routes, stops, trajectories, indicators, reports and geospatial layers from one place. My work has focused on connecting the product experience with the data layer: building dashboards, map interactions, filters, exports, API integrations and performance improvements so the platform remains useful with high-volume datasets.",
      impact:
        "The platform supports mobility analysis used by transport institutions, including the Santiago Ministry of Transport, and academic teams that rely on geospatial and operational indicators.",
      details: [
        "IkiDev builds software for transport planning and mobility intelligence. Inside that ecosystem, Movilytics is the analytical product: it helps planners, operators and researchers understand how a transport system behaves over time, where demand concentrates and which operational indicators need attention.",
        "On the frontend I worked on reusable interfaces for dashboards, filters, navigation and geospatial views. On the backend and data side I integrated BigQuery workflows, optimized heavy queries and supported APIs that expose indicators without making the UI feel slow.",
        "The product combines strategic reporting with day-to-day exploration. That means the interface has to be clear enough for non-technical stakeholders, but also deep enough for technical teams that need routes, stops, trajectories, heatmaps and CSV exports."
      ],
      relatedProducts: [
        {
          title: "Movilytics",
          description:
            "The analytical layer of the IkiDev ecosystem: dashboards, indicators, BigQuery-backed reports and geospatial exploration for public transport planning."
        },
        {
          title: "CityRed",
          description:
            "The operational network layer: tools to inspect routes, stops, trajectories, heatmaps and the behavior of a transport network in more detail."
        }
      ],
      features: [
        "Operational and financial analytics dashboards.",
        "Interactive maps with Mapbox GL.",
        "Route, stop, trajectory and geospatial layer visualization.",
        "BigQuery integration for millions of mobility records.",
        "High-volume SQL query optimization.",
        "CSV report exports.",
        "Platform usage metrics.",
        "Automatic BigQuery consumption calculation by client.",
        "Authentication, permissions and organization management.",
        "Automated deployments with GitHub Actions."
      ],
      responsibilities: [
        "Frontend development with React and Next.js.",
        "Backend development with NestJS.",
        "BigQuery integration and query optimization.",
        "Geospatial visualization with Mapbox GL.",
        "Dashboard and KPI development.",
        "Production deployment support."
      ],
      technologies: [
        "react",
        "next",
        "nestjs",
        "postgresql",
        "bigquery",
        "mapbox",
        "tailwind",
        "githubactions"
      ],
      links: [{ type: "Website", href: "https://movilytics.com/" }],
      video: "/movilytics.mp4",
      images: ["/movilytics.png", "/cityred.png"]
    },
    {
      id: 2,
      title: "CityRed",
      href: "#",
      dates: "2024 - Present",
      active: true,
      role: "Full Stack Developer",
      company: "IkiDev",
      category: "Transportation network analysis platform",
      summary:
        "Operational platform for transport network analysis, geospatial visualization and route performance insights.",
      description:
        "CityRed is the network-analysis side of IkiDev's mobility ecosystem. While Movilytics concentrates on analytics and strategic indicators, CityRed focuses on how the transport network is structured and operated: routes, stops, trajectories, heatmaps, operational dashboards and interfaces that make network behavior easier to inspect and compare.",
      impact:
        "CityRed strengthens operational visibility for transport planning teams by making network behavior easier to inspect, compare and report.",
      details: [
        "The project required improving an existing operational product without losing the context that users already depended on. I worked on navigation, filters, reusable components and map-based interfaces so the platform could present complex transport information in a more organized way.",
        "A big part of the work was making geospatial information easier to use: route and stop visualization, heatmaps, trajectory layers and charts that help users move from a general overview to a specific operational question.",
        "CityRed and Movilytics belong to the same company and complement each other. Movilytics answers more analytical and planning questions, while CityRed helps teams inspect the transport network itself with more operational detail."
      ],
      relatedProducts: [
        {
          title: "Movilytics",
          description:
            "Analytics, indicators, reports and planning dashboards for public transport data."
        },
        {
          title: "CityRed",
          description:
            "Network inspection, operational visualization, routes, stops, trajectories and heatmaps."
        }
      ],
      features: [
        "Complete redesign of the sidebar navigation.",
        "Modernized filters, forms and reusable components.",
        "Interactive operational charts.",
        "Heatmaps with Mapbox GL.",
        "Route, stop and trajectory visualization.",
        "BigQuery data processing.",
        "Downloadable reports.",
        "Query and response time optimization.",
        "Continuous maintenance and platform evolution."
      ],
      responsibilities: [
        "Frontend development with Vue.js.",
        "UI and UX improvements.",
        "Reusable component development.",
        "Geospatial map development.",
        "Backend integration with NestJS.",
        "BigQuery data visualization."
      ],
      technologies: ["vue", "nestjs", "postgresql", "bigquery", "mapbox", "tailwind"],
      links: [],
      video: "/cityred.mp4",
      images: ["/cityred.png", "/movilytics.png"]
    },
    {
      id: 3,
      title: "DIMCULTURA",
      href: "https://dimcultura.com",
      dates: "2026 - Present",
      active: true,
      role: "Full Stack Developer",
      company: "DIMCULTURA",
      category: "Document management and digital signature platform",
      summary:
        "Digital signature platform with identity verification, OTP, PDF generation and transactional auditability.",
      description:
        "DIMCULTURA centralizes the lifecycle of contracts, promissory notes and financial documents. I designed and implemented core full stack flows for document creation, secure signing, identity verification, storage, audit logs and administrative operations.",
      impact:
        "The platform reduces manual document handling and gives teams a controlled, traceable signing process for sensitive financial workflows.",
      details: [
        "The product is built around a sensitive workflow: financial documents need to be created, reviewed, signed, verified and stored with traceability. Because of that, the architecture prioritizes authentication, permissions, audit logs and clear separation between public signing flows and internal administration.",
        "I worked on the backend architecture, document lifecycle, admin dashboard and public signing portal. The platform integrates identity verification, OTP delivery, email notifications, secure asset storage and automated PDF generation.",
        "The result is a workflow where operators can manage documents, clients can complete signing steps, and the system keeps a transactional history of the most important actions."
      ],
      features: [
        "Contract management workflow.",
        "Promissory notes, bills of exchange and receipt management.",
        "Digital document signing.",
        "Secure document storage with Cloudinary.",
        "Admin panel for operators, analysts and administrators.",
        "Automatic PDF generation.",
        "Operational and financial reports.",
        "Complete audit trail for the document lifecycle.",
        "JWT authentication with refresh tokens and HTTP-only cookies.",
        "Role-based authorization.",
        "OTP authentication via SMS.",
        "Automatic identity verification with Veriff webhooks."
      ],
      responsibilities: [
        "Full stack development with Next.js, Express.js and TypeScript.",
        "Backend architecture with Prisma ORM and PostgreSQL.",
        "Admin dashboard and public signing portal development.",
        "Authentication and authorization implementation.",
        "External service integrations.",
        "PDF generation with Puppeteer.",
        "Audit log development.",
        "Deployment automation with GitHub Actions and CapRover."
      ],
      technologies: [
        "next",
        "react",
        "typescript",
        "express",
        "prisma",
        "postgresql",
        "cloudinary",
        "resend",
        "masiv",
        "veriff",
        "puppeteer",
        "githubactions",
        "caprover",
        "tailwind"
      ],
      links: [
        { type: "Website", href: "https://dimcultura.com" },
        { type: "Frontend", href: "https://github.com/HugoOrielso/signing-frontend" },
        { type: "Backend", href: "https://github.com/HugoOrielso/signing-backend" }
      ],
      video: "/dimcultura.mp4",
      images: ["/dimcultura.png", "/dimcultura1.png"]
    },
    {
      id: 4,
      title: "PVC Color's E-commerce",
      href: "https://www.pinturaspvccolors.com/",
      dates: "2024 - Present",
      active: true,
      role: "Full Stack Developer",
      company: "PVC Color's",
      category: "E-commerce and business management platform",
      summary:
        "Complete e-commerce platform with public store, admin panel, payments, inventory, CMS and automated deployments.",
      description:
        "PVC Color's evolved from a corporate site into a complete digital sales and management platform. I built the public store, checkout, backend services, admin panel, inventory tools, technical content workflows and deployment infrastructure.",
      impact:
        "The platform gives the business a scalable digital sales channel and an internal system to manage products, orders, stock and technical content from one place.",
      details: [
        "This project started as the evolution of a business website into a real e-commerce and management system. The public side needed to make products easy to discover, while the admin side needed enough control for inventory, orders, content and technical documents.",
        "I built the main full stack architecture with product catalog, filters, cart, checkout, Wompi payments, authentication, product management, Cloudinary uploads and a Markdown-based CMS for technical articles.",
        "Beyond the storefront, the project included production infrastructure: Cloudflare, SSL, automated deployments with GitHub Actions and CapRover, and backend/database work to keep catalog and order operations stable."
      ],
      features: [
        "Product catalog with categories and filters.",
        "Optimized product images and technical PDF files.",
        "Shopping cart and checkout.",
        "Wompi payment integration.",
        "Technical article system.",
        "Store location visualization with Google Maps.",
        "Admin panel for products and categories.",
        "Inventory management.",
        "Order and invoice management.",
        "Image and document management with Cloudinary.",
        "Markdown-based CMS for technical articles.",
        "User management and access control.",
        "CI/CD with GitHub Actions.",
        "Production deployment with CapRover.",
        "Cloudflare CDN, SSL, caching and DDoS protection."
      ],
      responsibilities: [
        "Designed and implemented the full stack architecture.",
        "Developed REST APIs for the e-commerce.",
        "Implemented authentication with HTTP-only cookies.",
        "Developed checkout and Wompi payment flow.",
        "Implemented Cloudinary uploads for images and documents.",
        "Created the Markdown CMS.",
        "Integrated Google Maps for store locations.",
        "Optimized queries with Prisma and PostgreSQL.",
        "Configured production infrastructure and automated deployments."
      ],
      technologies: [
        "next",
        "react",
        "typescript",
        "express",
        "prisma",
        "postgresql",
        "cloudinary",
        "wompi",
        "googlemaps",
        "githubactions",
        "caprover",
        "cloudflare",
        "tailwind"
      ],
      links: [
        { type: "Website", href: "https://www.pinturaspvccolors.com/" },
        { type: "Frontend", href: "https://github.com/HugoOrielso/pvc-colors-frontend" },
        { type: "Backend", href: "https://github.com/HugoOrielso/pvc-colors-backend" }
      ],
      video: "/pvcVideo.mp4",
      images: ["/pvccolors1.png", "/pvcColors2.png"]
    },
    {
      id: 5,
      title: "Ciscan Corrosion Tool",
      href: "https://corrosiontool.ciscan.ca/login",
      dates: "2024 - Present",
      active: true,
      role: "Full Stack Developer",
      company: "Ciscan.ca",
      category: "Engineering calculation platform",
      summary:
        "Engineering software that translates complex corrosion calculations from Excel into a scalable web platform.",
      description:
        "Ciscan Corrosion Tool supports industrial corrosion analysis by evaluating material behavior under operational conditions. I helped move spreadsheet-based engineering logic into a maintainable SaaS experience with technical forms, backend calculations, reports and subscriptions.",
      impact:
        "The product helps engineering teams standardize technical analysis, preserve calculation history and generate consistent reports for maintenance and asset integrity decisions.",
      details: [
        "Ciscan Corrosion Tool is a technical product where precision matters more than decoration. The main challenge was translating complex Excel-based engineering models into a web application that could preserve calculation logic while improving usability, storage and reporting.",
        "I contributed to Angular interfaces for technical inputs and results, .NET/C# backend calculation logic, MongoDB storage and PDF report generation. The platform also includes Stripe-based subscriptions and access control by plan or functionality.",
        "The product helps industrial teams move away from isolated spreadsheets toward a more consistent workflow for corrosion analysis, historical records and technical decision support."
      ],
      features: [
        "Industrial corrosion simulation.",
        "Material behavior analysis.",
        "Temperature range and operating condition inputs.",
        "Complex technical forms.",
        "Backend calculation logic in .NET.",
        "MongoDB storage for configurations and results.",
        "Excel algorithm translation into maintainable software.",
        "Automatic technical PDF reports.",
        "Stripe payment integration.",
        "Subscription plan management.",
        "Feature-based access control."
      ],
      responsibilities: [
        "Frontend development with Angular.",
        "Backend development with .NET and C#.",
        "Translation of Excel algorithms into code.",
        "Mathematical calculation validation.",
        "MongoDB integration.",
        "PDF report generation.",
        "Stripe integration."
      ],
      technologies: ["angular", "dotnet", "csharp", "mongodb", "stripe"],
      links: [
        { type: "Company", href: "https://ciscan.ca/" },
        { type: "Tool", href: "https://corrosiontool.ciscan.ca/login" }
      ],
      video: "/ciscan.mp4",
      images: ["/ciscan.png", "/ciscan2.png"]
    },
    {
      id: 6,
      title: "Chamber of Commerce of Cucuta Platform",
      href: "#",
      dates: "2026 - Present",
      active: true,
      role: "Frontend Developer",
      company: "Chamber of Commerce of Cucuta",
      category: "Colombian public-sector business platform",
      summary:
        "Institutional platform for a Colombian public entity, focused on business characterization, segmentation and program recommendations.",
      description:
        "This platform supports the Chamber of Commerce of Cucuta, a public entity in Colombia that participates in business registration, formalization and regional economic development. The product helps organize company information, classify business profiles, recommend institutional programs and give internal teams a clearer way to manage administrative workflows.",
      impact:
        "The platform supports public-sector work by helping institutional teams understand local companies better, guide them toward relevant programs and manage business-service workflows with more structure.",
      details: [
        "The project sits in a public-sector context, so the interface needs to be clear, auditable and easy for different roles to understand. The goal is not only to display information, but to help institutional teams make better decisions about business support programs.",
        "I worked on responsive frontend modules with React and TypeScript, dynamic forms, conditional flows, permission-based navigation and integrations with REST APIs.",
        "A key part of the experience is business characterization: collecting structured information, segmenting companies and translating that profile into recommendations or administrative actions for the Chamber's internal teams."
      ],
      features: [
        "Business characterization forms.",
        "Company segmentation workflows.",
        "Personalized program recommendations.",
        "Role-based navigation and permissions.",
        "Administrative dashboards.",
        "Responsive frontend modules.",
        "REST API integrations.",
        "Reusable component architecture."
      ],
      responsibilities: [
        "Frontend development with React and TypeScript.",
        "Dynamic form implementation.",
        "Conditional UI flows and validations.",
        "Permission-based navigation.",
        "Integration with REST APIs.",
        "Reusable component development."
      ],
      technologies: ["react", "typescript", "css"],
      links: [],
      video: "/camara.mp4",
      images: ["/camara.png", "/rutafe.png"]
    }
  ],

  education: [
    {
      school: "Fundacion de Estudios Superiores Comfanorte",
      href: "https://www.fesc.edu.co/portal/",
      degree: "Software Engineering - Ninth semester",
      logoUrl: "https://www.fesc.edu.co/portal/images/logo.png",
      start: "2022",
      end: "Present",
      background: "#fff"
    }
  ],

  skills: [
    { name: "React", level: null },
    { name: "Next.js", level: null },
    { name: "Vue.js", level: null },
    { name: "Angular", level: null },
    { name: "TypeScript", level: null },
    { name: "JavaScript", level: null },
    { name: "Tailwind CSS", level: null },
    { name: "Node.js", level: null },
    { name: "Express.js", level: null },
    { name: "NestJS", level: null },
    { name: ".NET / C#", level: null },
    { name: "PostgreSQL", level: null },
    { name: "MySQL", level: null },
    { name: "MongoDB", level: null },
    { name: "Prisma ORM", level: null },
    { name: "BigQuery", level: null },
    { name: "Mapbox GL", level: null },
    { name: "Google Maps API", level: null },
    { name: "Docker", level: null },
    { name: "Git", level: null },
    { name: "GitHub Actions", level: null },
    { name: "CapRover", level: null },
    { name: "Cloudflare", level: null },
    { name: "Vercel", level: null },
    { name: "Cloudinary", level: null },
    { name: "Stripe", level: null },
    { name: "Wompi", level: null },
    { name: "Resend", level: null },
    { name: "Veriff", level: null },
    { name: "Puppeteer", level: null }
  ],

  languages: ["Spanish - Native", "English - B2-"],

  links: [
    { name: "About", section: "about" },
    { name: "Experience", section: "experience" },
    { name: "Projects", section: "projects" },
    { name: "Education", section: "education" },
    { name: "Skills", section: "skills" }
  ]
} as const

export const dataSpanish = {
  work: [
    {
      company: "IkiDev",
      href: "https://movilytics.com/",
      projectId: 1,
      badges: ["Analitica de movilidad", "Big data", "Plataformas geoespaciales"],
      location: "Remoto",
      alt: "Logo IkiDev / Movilytics",
      title: "Full Stack Developer",
      logoUrl: "/movilytics.png",
      start: "2024",
      end: "Actualidad",
      background: "#fff",
      summary:
        "Desarrollo full stack para Movilytics y CityRed, dos productos de movilidad urbana enfocados en planeacion, operacion y analitica.",
      description:
        "En IkiDev trabajo sobre el mismo ecosistema de movilidad que agrupa Movilytics y CityRed. Construyo dashboards, mapas, APIs, flujos de datos y funcionalidades productivas para plataformas que procesan informacion de transporte publico a gran escala. Estas soluciones apoyan decisiones reales de operacion y planeacion, y son usadas por organizaciones como el Ministerio de Transporte de Santiago y universidades.",
      highlights: [
        "Construccion de dashboards operacionales, financieros y de planeacion para equipos de movilidad.",
        "Desarrollo de mapas interactivos, mapas de calor, rutas y capas geoespaciales con Mapbox GL.",
        "Integracion de BigQuery para procesar grandes volumenes de datos de transporte publico.",
        "Mejora de filtros, barras laterales, componentes reutilizables y flujos de reportes.",
        "Implementacion de exportaciones CSV, autenticacion, permisos y gestion de organizaciones.",
        "Soporte a despliegues productivos y flujos CI/CD con GitHub Actions."
      ],
      technologies: [
        "React",
        "Next.js",
        "Vue.js",
        "NestJS",
        "PostgreSQL",
        "BigQuery",
        "Mapbox GL",
        "Tailwind CSS",
        "GitHub Actions"
      ]
    },
    {
      company: "DIMCULTURA",
      href: "https://dimcultura.com",
      projectId: 3,
      badges: ["Firma digital", "Gestion documental", "Fintech"],
      location: "Remoto",
      alt: "Logo DIMCULTURA",
      title: "Full Stack Developer",
      logoUrl: "/dimcultura.png",
      start: "2026",
      end: "Actualidad",
      background: "#fff",
      summary:
        "Plataforma full stack para firma digital, flujos documentales y verificacion de identidad.",
      description:
        "Desarrollo una plataforma de gestion documental y firma digital para contratos, pagares y documentos financieros. El sistema combina verificacion de identidad, autenticacion OTP, almacenamiento seguro, generacion de PDFs, flujos por roles y auditoria transaccional.",
      highlights: [
        "Diseno de arquitectura backend con Express.js, Prisma ORM y PostgreSQL.",
        "Construccion del dashboard administrativo y portal publico de firma.",
        "Implementacion de JWT, refresh tokens y cookies HTTP-only.",
        "Integracion con Cloudinary, Resend, MASIV y Veriff.",
        "Generacion de documentos PDF con Puppeteer.",
        "Configuracion de despliegues automatizados con GitHub Actions y CapRover."
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "Resend",
        "MASIV",
        "Veriff",
        "Puppeteer",
        "GitHub Actions",
        "CapRover"
      ]
    },
    {
      company: "PVC Color's",
      href: "https://www.pinturaspvccolors.com/",
      projectId: 4,
      badges: ["E-commerce", "Panel administrativo", "Pagos"],
      location: "Remoto",
      alt: "Logo PVC Color's",
      title: "Full Stack Developer",
      logoUrl: "/logo-pvc.webp",
      start: "2024",
      end: "Actualidad",
      background: "#fff",
      summary:
        "E-commerce y plataforma de gestion para catalogo, pedidos, inventario, pagos y contenido tecnico.",
      description:
        "Lidere la evolucion de PVC Color's desde un sitio corporativo hasta una plataforma e-commerce completa con catalogo publico, checkout, pagos, servicios backend, gestion de productos, inventario, documentos, CMS e infraestructura de produccion.",
      highlights: [
        "Construccion de la tienda publica con catalogo, filtros, carrito y pagos con Wompi.",
        "Desarrollo de panel administrativo para productos, categorias, inventario, pedidos y contenido.",
        "Implementacion de Cloudinary para imagenes de producto y documentos PDF.",
        "Creacion de un CMS basado en Markdown para articulos tecnicos.",
        "Integracion de Google Maps para visualizar sedes comerciales.",
        "Configuracion de Cloudflare, SSL, GitHub Actions y despliegues con CapRover."
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Express.js",
        "Prisma",
        "PostgreSQL",
        "Cloudinary",
        "Wompi",
        "Google Maps API",
        "GitHub Actions",
        "CapRover",
        "Cloudflare",
        "Tailwind CSS"
      ]
    },
    {
      company: "Ciscan.ca",
      href: "https://ciscan.ca/",
      projectId: 5,
      badges: ["Software de ingenieria", "Analisis de corrosion", "SaaS"],
      location: "Remoto",
      alt: "Logo Ciscan",
      title: "Full Stack Developer",
      logoUrl: "/ciscan.png",
      start: "2024",
      end: "Actualidad",
      background: "#fff",
      summary:
        "SaaS de ingenieria que convierte hojas de calculo de corrosion en software web mantenible.",
      description:
        "Contribuyo al desarrollo de una plataforma de ingenieria para analisis de corrosion industrial, traduciendo modelos complejos de calculo basados en Excel a software mantenible con formularios tecnicos, logica backend, almacenamiento en MongoDB, reportes PDF y suscripciones con Stripe.",
      highlights: [
        "Construccion de formularios tecnicos y vistas de resultados con Angular.",
        "Implementacion de calculos backend con .NET y C#.",
        "Traduccion de algoritmos de Excel a codigo escalable.",
        "Generacion de reportes tecnicos en PDF.",
        "Integracion de pagos y planes de suscripcion con Stripe.",
        "Diseno de almacenamiento en MongoDB para configuraciones, resultados y usuarios."
      ],
      technologies: ["Angular", ".NET", "C#", "MongoDB", "Stripe", "PDF Reports"]
    },
    {
      company: "Camara de Comercio de Cucuta",
      href: "#",
      projectId: 6,
      badges: ["Sector publico", "Entidad del gobierno", "Plataforma empresarial"],
      location: "Remoto",
      alt: "Logo Camara de Comercio",
      title: "Frontend Developer",
      logoUrl: "/camara.png",
      start: "2026",
      end: "Actualidad",
      background: "#fff",
      summary:
        "Frontend para una plataforma empresarial del sector publico colombiano, enfocada en caracterizacion, segmentacion y recomendacion de programas.",
      description:
        "Trabajo en el desarrollo frontend de una plataforma institucional para la Camara de Comercio de Cucuta, una entidad publica de Colombia orientada al registro, formalizacion y fortalecimiento empresarial. El producto permite caracterizar empresas, segmentar perfiles, recomendar programas institucionales y apoyar flujos administrativos para equipos del sector publico.",
      highlights: [
        "Construccion de interfaces responsivas con React y TypeScript.",
        "Desarrollo de formularios dinamicos con validaciones y flujos condicionales.",
        "Implementacion de navegacion protegida basada en permisos y roles.",
        "Integracion de modulos frontend con APIs REST.",
        "Creacion de componentes reutilizables bajo una arquitectura modular."
      ],
      technologies: ["React", "TypeScript", "CSS", "REST APIs"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Movilytics",
      href: "https://movilytics.com/",
      dates: "2024 - Actualidad",
      active: true,
      role: "Full Stack Developer",
      company: "IkiDev",
      category: "Plataforma de analitica de movilidad urbana",
      summary:
        "Plataforma de analitica a gran escala para datos de transporte publico, mapas, dashboards e indicadores estrategicos de movilidad.",
      description:
        "Movilytics es uno de los productos de movilidad urbana de IkiDev. Convierte datos de transporte publico en un espacio de decision donde equipos tecnicos pueden explorar rutas, paraderos, trayectorias, indicadores, reportes y capas geoespaciales desde un mismo lugar. Mi trabajo se ha enfocado en conectar la experiencia de producto con la capa de datos: dashboards, interacciones de mapas, filtros, exportaciones, integraciones con APIs y mejoras de rendimiento para que la plataforma siga siendo util con grandes volumenes de informacion.",
      impact:
        "La plataforma apoya analisis de movilidad usados por instituciones de transporte, incluyendo el Ministerio de Transporte de Santiago, y por equipos academicos que necesitan indicadores geoespaciales y operacionales.",
      details: [
        "IkiDev construye software para planeacion de transporte e inteligencia de movilidad. Dentro de ese ecosistema, Movilytics es el producto analitico: ayuda a planificadores, operadores e investigadores a entender como se comporta un sistema de transporte, donde se concentra la demanda y que indicadores operacionales necesitan atencion.",
        "En frontend trabaje en interfaces reutilizables para dashboards, filtros, navegacion y vistas geoespaciales. En backend y datos integre flujos con BigQuery, optimice consultas pesadas y apoye APIs que exponen indicadores sin volver lenta la interfaz.",
        "El producto combina reportes estrategicos con exploracion diaria. Por eso la interfaz tiene que ser clara para stakeholders no tecnicos, pero suficientemente profunda para equipos tecnicos que necesitan rutas, paraderos, trayectorias, mapas de calor y exportaciones CSV."
      ],
      relatedProducts: [
        {
          title: "Movilytics",
          description:
            "La capa analitica del ecosistema IkiDev: dashboards, indicadores, reportes con BigQuery y exploracion geoespacial para planeacion de transporte publico."
        },
        {
          title: "CityRed",
          description:
            "La capa operacional de red: herramientas para inspeccionar rutas, paraderos, trayectorias, mapas de calor y comportamiento de una red de transporte."
        }
      ],
      features: [
        "Dashboards analiticos operacionales y financieros.",
        "Mapas interactivos con Mapbox GL.",
        "Visualizacion de rutas, paraderos, trayectorias y capas geoespaciales.",
        "Integracion con BigQuery para millones de registros de movilidad.",
        "Optimizacion de consultas SQL de alto volumen.",
        "Exportacion de reportes en CSV.",
        "Metricas de uso de la plataforma.",
        "Calculo automatico del consumo de BigQuery por cliente.",
        "Autenticacion, permisos y gestion de organizaciones.",
        "Despliegues automatizados con GitHub Actions."
      ],
      responsibilities: [
        "Desarrollo frontend con React y Next.js.",
        "Desarrollo backend con NestJS.",
        "Integracion con BigQuery y optimizacion de consultas.",
        "Visualizacion geoespacial con Mapbox GL.",
        "Desarrollo de dashboards e indicadores KPI.",
        "Soporte en despliegues a produccion."
      ],
      technologies: [
        "react",
        "next",
        "nestjs",
        "postgresql",
        "bigquery",
        "mapbox",
        "tailwind",
        "githubactions"
      ],
      links: [{ type: "Sitio web", href: "https://movilytics.com/" }],
      video: "/movilytics.mp4",
      images: ["/movilytics.png", "/cityred.png"]
    },
    {
      id: 2,
      title: "CityRed",
      href: "#",
      dates: "2024 - Actualidad",
      active: true,
      role: "Full Stack Developer",
      company: "IkiDev",
      category: "Plataforma de analisis de redes de transporte",
      summary:
        "Plataforma operacional para analisis de redes de transporte, visualizacion geoespacial e indicadores de desempeno de rutas.",
      description:
        "CityRed es el lado de analisis de red dentro del ecosistema de movilidad de IkiDev. Mientras Movilytics se concentra en analitica e indicadores estrategicos, CityRed se enfoca en como esta estructurada y operando la red de transporte: rutas, paraderos, trayectorias, mapas de calor, dashboards operacionales e interfaces que facilitan inspeccionar y comparar el comportamiento de la red.",
      impact:
        "CityRed mejora la visibilidad operacional de equipos de planeacion de transporte al facilitar la inspeccion, comparacion y generacion de reportes sobre el comportamiento de la red.",
      details: [
        "El proyecto implico mejorar un producto operacional existente sin perder el contexto que los usuarios ya necesitaban. Trabaje en navegacion, filtros, componentes reutilizables e interfaces basadas en mapas para presentar informacion compleja de transporte de una forma mas organizada.",
        "Una parte importante fue hacer mas usable la informacion geoespacial: visualizacion de rutas y paraderos, mapas de calor, capas de trayectorias y graficos que permiten pasar de una vista general a una pregunta operacional especifica.",
        "CityRed y Movilytics pertenecen a la misma empresa y se complementan. Movilytics responde preguntas mas analiticas y de planeacion, mientras CityRed ayuda a inspeccionar la red de transporte con mayor detalle operacional."
      ],
      relatedProducts: [
        {
          title: "Movilytics",
          description:
            "Analitica, indicadores, reportes y dashboards de planeacion para datos de transporte publico."
        },
        {
          title: "CityRed",
          description:
            "Inspeccion de red, visualizacion operacional, rutas, paraderos, trayectorias y mapas de calor."
        }
      ],
      features: [
        "Rediseno completo de la navegacion lateral.",
        "Modernizacion de filtros, formularios y componentes reutilizables.",
        "Graficos interactivos para analisis operacional.",
        "Mapas de calor utilizando Mapbox GL.",
        "Visualizacion de rutas, paraderos y trayectorias.",
        "Procesamiento de datos desde BigQuery.",
        "Reportes descargables.",
        "Optimizacion de consultas y tiempos de respuesta.",
        "Mantenimiento y evolucion continua de la plataforma."
      ],
      responsibilities: [
        "Desarrollo frontend con Vue.js.",
        "Mejoras de UI y experiencia de usuario.",
        "Desarrollo de componentes reutilizables.",
        "Construccion de mapas geoespaciales.",
        "Integracion backend con NestJS.",
        "Visualizacion de datos provenientes de BigQuery."
      ],
      technologies: ["vue", "nestjs", "postgresql", "bigquery", "mapbox", "tailwind"],
      links: [] as { type: string; href: string }[],
      video: "/cityred.mp4",
      images: ["/cityred.png", "/movilytics.png"]
    },
    {
      id: 3,
      title: "DIMCULTURA",
      href: "https://dimcultura.com",
      dates: "2026 - Actualidad",
      active: true,
      role: "Full Stack Developer",
      company: "DIMCULTURA",
      category: "Plataforma de gestion documental y firma digital",
      summary:
        "Plataforma de firma digital con verificacion de identidad, OTP, generacion de PDFs y trazabilidad transaccional.",
      description:
        "DIMCULTURA centraliza el ciclo de vida de contratos, pagares y documentos financieros. Diseñé e implemente flujos full stack para creacion documental, firma segura, verificacion de identidad, almacenamiento, auditoria y operaciones administrativas.",
      impact:
        "La plataforma reduce procesos manuales de documentos y ofrece a los equipos un flujo de firma controlado y trazable para operaciones financieras sensibles.",
      details: [
        "El producto esta construido alrededor de un flujo sensible: los documentos financieros deben crearse, revisarse, firmarse, verificarse y almacenarse con trazabilidad. Por eso la arquitectura prioriza autenticacion, permisos, auditoria y separacion clara entre el portal publico de firma y la administracion interna.",
        "Trabaje en la arquitectura backend, el ciclo de vida documental, el dashboard administrativo y el portal publico de firma. La plataforma integra verificacion de identidad, envio de OTP, notificaciones por correo, almacenamiento seguro y generacion automatica de PDFs.",
        "El resultado es un flujo donde operadores pueden administrar documentos, clientes pueden completar pasos de firma y el sistema conserva historial transaccional de las acciones mas importantes."
      ],
      features: [
        "Flujo de gestion de contratos.",
        "Administracion de pagares, letras de cambio y recibos de conformidad.",
        "Firma digital de documentos.",
        "Almacenamiento seguro de documentos con Cloudinary.",
        "Panel administrativo para operadores, analistas y administradores.",
        "Generacion automatica de PDFs.",
        "Reportes operativos y financieros.",
        "Auditoria completa del ciclo documental.",
        "Autenticacion JWT con refresh tokens y cookies HTTP-only.",
        "Autorizacion basada en roles.",
        "Autenticacion OTP mediante SMS.",
        "Verificacion automatica de identidad con webhooks de Veriff."
      ],
      responsibilities: [
        "Desarrollo full stack con Next.js, Express.js y TypeScript.",
        "Arquitectura backend con Prisma ORM y PostgreSQL.",
        "Desarrollo del dashboard administrativo y portal publico de firma.",
        "Implementacion de autenticacion y autorizacion.",
        "Integracion con servicios externos.",
        "Generacion de PDFs con Puppeteer.",
        "Desarrollo de auditoria transaccional.",
        "Automatizacion de despliegues con GitHub Actions y CapRover."
      ],
      technologies: [
        "next",
        "react",
        "typescript",
        "express",
        "prisma",
        "postgresql",
        "cloudinary",
        "resend",
        "masiv",
        "veriff",
        "puppeteer",
        "githubactions",
        "caprover",
        "tailwind"
      ],
      links: [
        { type: "Sitio web", href: "https://dimcultura.com" },
        { type: "Frontend", href: "https://github.com/HugoOrielso/signing-frontend" },
        { type: "Backend", href: "https://github.com/HugoOrielso/signing-backend" }
      ],
      video: "/dimcultura.mp4",
      images: ["/dimcultura.png", "/dimcultura1.png"]
    },
    {
      id: 4,
      title: "PVC Color's E-commerce",
      href: "https://www.pinturaspvccolors.com/",
      dates: "2024 - Actualidad",
      active: true,
      role: "Full Stack Developer",
      company: "PVC Color's",
      category: "Plataforma e-commerce y gestion empresarial",
      summary:
        "E-commerce completo con tienda publica, panel administrativo, pagos, inventario, CMS y despliegues automatizados.",
      description:
        "PVC Color's evoluciono desde un sitio corporativo hacia una plataforma completa de ventas y gestion. Construi la tienda publica, checkout, servicios backend, panel administrativo, herramientas de inventario, flujos de contenido tecnico e infraestructura de despliegue.",
      impact:
        "La plataforma le da al negocio un canal digital de ventas escalable y un sistema interno para administrar productos, pedidos, inventario y contenido tecnico desde un solo lugar.",
      details: [
        "Este proyecto empezo como la evolucion de un sitio empresarial hacia un e-commerce y sistema de gestion real. La parte publica necesitaba facilitar el descubrimiento de productos, mientras que el panel administrativo necesitaba control sobre inventario, pedidos, contenido y documentos tecnicos.",
        "Construi la arquitectura full stack principal con catalogo de productos, filtros, carrito, checkout, pagos con Wompi, autenticacion, gestion de productos, cargas a Cloudinary y un CMS basado en Markdown para articulos tecnicos.",
        "Mas alla de la tienda, el proyecto incluyo infraestructura productiva: Cloudflare, SSL, despliegues automatizados con GitHub Actions y CapRover, y trabajo de backend/base de datos para mantener estables las operaciones de catalogo y pedidos."
      ],
      features: [
        "Catalogo de productos con categorias y filtros.",
        "Imagenes optimizadas y fichas tecnicas en PDF.",
        "Carrito de compras y checkout.",
        "Integracion de pagos con Wompi.",
        "Sistema de articulos tecnicos.",
        "Visualizacion de sedes con Google Maps.",
        "Panel administrativo para productos y categorias.",
        "Gestion de inventario.",
        "Gestion de pedidos y facturacion.",
        "Administracion de imagenes y documentos con Cloudinary.",
        "CMS basado en Markdown para articulos tecnicos.",
        "Gestion de usuarios y control de acceso.",
        "CI/CD con GitHub Actions.",
        "Despliegue en produccion con CapRover.",
        "Cloudflare CDN, SSL, cache y proteccion DDoS."
      ],
      responsibilities: [
        "Diseno e implementacion de la arquitectura full stack.",
        "Desarrollo de APIs REST para el e-commerce.",
        "Implementacion de autenticacion con cookies HTTP-only.",
        "Desarrollo del checkout e integracion con Wompi.",
        "Implementacion de carga de imagenes y documentos con Cloudinary.",
        "Creacion del CMS en Markdown.",
        "Integracion de Google Maps para sedes comerciales.",
        "Optimizacion de consultas con Prisma y PostgreSQL.",
        "Configuracion de infraestructura productiva y despliegues automatizados."
      ],
      technologies: [
        "next",
        "react",
        "typescript",
        "express",
        "prisma",
        "postgresql",
        "cloudinary",
        "wompi",
        "googlemaps",
        "githubactions",
        "caprover",
        "cloudflare",
        "tailwind"
      ],
      links: [
        { type: "Sitio web", href: "https://www.pinturaspvccolors.com/" },
        { type: "Frontend", href: "https://github.com/HugoOrielso/pvc-colors-frontend" },
        { type: "Backend", href: "https://github.com/HugoOrielso/pvc-colors-backend" }
      ],
      video: "/pvcVideo.mp4",
      images: ["/pvccolors1.png", "/pvcColors2.png"]
    },
    {
      id: 5,
      title: "Ciscan Corrosion Tool",
      href: "https://corrosiontool.ciscan.ca/login",
      dates: "2024 - Actualidad",
      active: true,
      role: "Full Stack Developer",
      company: "Ciscan.ca",
      category: "Plataforma de calculo para ingenieria",
      summary:
        "Software de ingenieria que transforma calculos complejos de corrosion hechos en Excel en una plataforma web escalable.",
      description:
        "Ciscan Corrosion Tool apoya el analisis de corrosion industrial evaluando el comportamiento de materiales bajo condiciones operacionales. Ayude a transformar logica de ingenieria basada en hojas de calculo en una experiencia SaaS mantenible con formularios tecnicos, calculos backend, reportes y suscripciones.",
      impact:
        "El producto ayuda a equipos de ingenieria a estandarizar analisis tecnicos, conservar historial de calculos y generar reportes consistentes para mantenimiento e integridad de activos.",
      details: [
        "Ciscan Corrosion Tool es un producto tecnico donde la precision pesa mas que la decoracion. El reto principal fue traducir modelos de ingenieria complejos basados en Excel hacia una aplicacion web que conservara la logica de calculo y mejorara la usabilidad, el almacenamiento y los reportes.",
        "Contribui en interfaces Angular para entradas tecnicas y resultados, logica backend de calculo con .NET/C#, almacenamiento en MongoDB y generacion de reportes PDF. La plataforma tambien incluye suscripciones con Stripe y control de acceso por plan o funcionalidad.",
        "El producto ayuda a equipos industriales a pasar de hojas de calculo aisladas a un flujo mas consistente para analisis de corrosion, historiales y soporte a decisiones tecnicas."
      ],
      features: [
        "Simulacion de corrosion industrial.",
        "Analisis del comportamiento de materiales.",
        "Entradas por rangos de temperatura y condiciones operacionales.",
        "Formularios tecnicos complejos.",
        "Logica de calculo backend en .NET.",
        "Almacenamiento en MongoDB para configuraciones y resultados.",
        "Traduccion de algoritmos de Excel a software mantenible.",
        "Generacion automatica de reportes tecnicos en PDF.",
        "Integracion de pagos con Stripe.",
        "Gestion de planes de suscripcion.",
        "Control de acceso basado en funcionalidades."
      ],
      responsibilities: [
        "Desarrollo frontend con Angular.",
        "Desarrollo backend con .NET y C#.",
        "Traduccion de algoritmos de Excel a codigo.",
        "Validacion de calculos matematicos.",
        "Integracion con MongoDB.",
        "Generacion de reportes PDF.",
        "Integracion con Stripe."
      ],
      technologies: ["angular", "dotnet", "csharp", "mongodb", "stripe"],
      links: [
        { type: "Empresa", href: "https://ciscan.ca/" },
        { type: "Herramienta", href: "https://corrosiontool.ciscan.ca/login" }
      ],
      video: "/ciscan.mp4",
      images: ["/ciscan.png", "/ciscan2.png"]
    },
    {
      id: 6,
      title: "Plataforma Camara de Comercio de Cucuta",
      href: "#",
      dates: "2026 - Actualidad",
      active: true,
      role: "Frontend Developer",
      company: "Camara de Comercio de Cucuta",
      category: "Plataforma empresarial del sector publico colombiano",
      summary:
        "Plataforma institucional para una entidad publica de Colombia, enfocada en caracterizacion empresarial, segmentacion y recomendacion de programas.",
      description:
        "Esta plataforma apoya a la Camara de Comercio de Cucuta, una entidad publica de Colombia que participa en el registro, formalizacion y desarrollo empresarial regional. El producto ayuda a organizar informacion de empresas, clasificar perfiles empresariales, recomendar programas institucionales y dar a los equipos internos una forma mas clara de gestionar flujos administrativos.",
      impact:
        "La plataforma apoya trabajo del sector publico al ayudar a equipos institucionales a entender mejor a las empresas locales, orientarlas hacia programas relevantes y gestionar servicios empresariales con mayor estructura.",
      details: [
        "El proyecto esta en un contexto de sector publico, por lo que la interfaz debe ser clara, auditable y facil de entender para diferentes roles. El objetivo no es solo mostrar informacion, sino ayudar a equipos institucionales a tomar mejores decisiones sobre programas de apoyo empresarial.",
        "Trabaje en modulos frontend responsivos con React y TypeScript, formularios dinamicos, flujos condicionales, navegacion basada en permisos e integraciones con APIs REST.",
        "Una parte clave de la experiencia es la caracterizacion empresarial: recolectar informacion estructurada, segmentar empresas y traducir ese perfil en recomendaciones o acciones administrativas para los equipos internos de la Camara."
      ],
      features: [
        "Formularios de caracterizacion empresarial.",
        "Flujos de segmentacion de empresas.",
        "Recomendaciones personalizadas de programas.",
        "Navegacion y permisos basados en roles.",
        "Dashboards administrativos.",
        "Modulos frontend responsivos.",
        "Integraciones con APIs REST.",
        "Arquitectura de componentes reutilizables."
      ],
      responsibilities: [
        "Desarrollo frontend con React y TypeScript.",
        "Implementacion de formularios dinamicos.",
        "Flujos condicionales y validaciones.",
        "Navegacion basada en permisos.",
        "Integracion con APIs REST.",
        "Desarrollo de componentes reutilizables."
      ],
      technologies: ["react", "typescript", "css"],
      links: [] as { type: string; href: string }[],
      video: "/camara.mp4",
      images: ["/camara.png", "/rutafe.png"]
    }
  ],

  education: [
    {
      school: "Fundacion de Estudios Superiores Comfanorte",
      href: "https://www.fesc.edu.co/portal/",
      degree: "Ingenieria de Software - Noveno semestre",
      logoUrl: "https://www.fesc.edu.co/portal/images/logo.png",
      start: "2022",
      end: "Actualidad",
      background: "#fff"
    }
  ],

  skills: [
    { name: "React", level: null },
    { name: "Next.js", level: null },
    { name: "Vue.js", level: null },
    { name: "Angular", level: null },
    { name: "TypeScript", level: null },
    { name: "JavaScript", level: null },
    { name: "Tailwind CSS", level: null },
    { name: "Node.js", level: null },
    { name: "Express.js", level: null },
    { name: "NestJS", level: null },
    { name: ".NET / C#", level: null },
    { name: "PostgreSQL", level: null },
    { name: "MySQL", level: null },
    { name: "MongoDB", level: null },
    { name: "Prisma ORM", level: null },
    { name: "BigQuery", level: null },
    { name: "Mapbox GL", level: null },
    { name: "Google Maps API", level: null },
    { name: "Docker", level: null },
    { name: "Git", level: null },
    { name: "GitHub Actions", level: null },
    { name: "CapRover", level: null },
    { name: "Cloudflare", level: null },
    { name: "Vercel", level: null },
    { name: "Cloudinary", level: null },
    { name: "Stripe", level: null },
    { name: "Wompi", level: null },
    { name: "Resend", level: null },
    { name: "Veriff", level: null },
    { name: "Puppeteer", level: null }
  ],

  languages: ["Espanol - Nativo", "Ingles - B2-"],

  links: [
    { name: "Sobre mi", section: "about" },
    { name: "Experiencia", section: "experience" },
    { name: "Proyectos", section: "projects" },
    { name: "Educacion", section: "education" },
    { name: "Habilidades", section: "skills" }
  ]
} as const
