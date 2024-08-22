
export const dataEnglish = {
    work: [
        {
          company: "Restaurant management system",
          badges: [],
          href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
          location: "Remote",
          alt: "no logo",
          title: "Full stack developer",
          logoUrl: "/No_Logo_logo.svg",
          start: "Jan 2021",
          end: "Apr 2021",
          background: "#000",
          description:
            "I developed a web application for restaurant management, including functionalities for order creation, stock management, user role authentication, and invoice generation. I implemented a user authentication and authorization system using Node.js with JWT, using middlewares to verify identity and roles (admin, waiter, cook, delivery person) and more funcionalities.",
        },
        {
          company: "La Ragazza Riccia",
          href: "https://test-la-ragazza-riccia.vercel.app/",
          badges: [],
          alt: "logo la ragazza riccia",
          location: "Corropoli, Italia",
          title: "Frontend developer",
          logoUrl: "https://i0.wp.com/laragazzariccia.com/wp-content/uploads/2023/09/La-Ragazza-Riccia-350-x-100-px.png?w=350&ssl=1",
          start: "Jul 2024",
          end: "Aug 2024",
          background: "#fff",
          description:
            "I developed a test to recommend products for the company La Ragazza Riccia. The application is being developed in React.js with TypeScript, and is using Zustand as the global state provider for the app, CSS is the primary tool for styling the page, the test consists of a series of questions, and based on the answers, which are weighted and follow patterns provided by the company, a product recommendation is made to the users of the application and is send a email with the reseult.",
        },
        {
          company: "Pinturas PVC Color's",
          href: "https://pinturaspvccolors.com/",
          badges: [],
          location: "Remote",
          alt: "logo pvc colors",
          title: "Frontend developer",
          logoUrl: "/logo-pvc.webp",
          start: "Jan 2024",
          end: "Feb 2024",
          background: "#fff",
          description:
            "I Developed a website using React and CSS to display products and company information for PVC Color’s. I designed an attractive and responsive user interface, highlighting the variety of products offere.",
        }
    ],
    education: [
      {
        school: "Fundación de Estudios Superiores Comfanorte",
        href: "https://www.fesc.edu.co/portal/",
        degree: "Currently studying - Software Engineering",
        logoUrl: "https://www.fesc.edu.co/portal/images/logo.png",
        start: "2022",
        end: "2024",
        background: "#fff"
      }
    ],
    projects: [
      {
        title: "Restaurant management system",
        href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
        dates: "Jan 2024 - Aug 2024",
        active: true,
        description:
          "I developed a web application for restaurant management, featuring order creation, stock management, user role authentication, and invoice generation. I implemented a user authentication and authorization system with Node.js using JWT, utilizing middleware to verify identities and roles (admin, waiter, cook, delivery person), along with additional functionalities.",
        technologies: [
          "react",
          "node",
          "css",
          "mysql"
        ],
        links: [
          {
            type: "Website",
            href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
          },
          {
            type: "Source",
            href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
          },
        ],
        video:
          "/managementSystemVideo.mp4",
      },
      {
        title: "Pinturas PVC Color's",
        href: "https://pinturaspvccolors.com/",
        dates: "Dec 2024 - Jan 2024",
        active: true,
        description:
          "I Developed a website using React and CSS to display products and company information for PVC Color’s. I designed an attractive and responsive user interface, highlighting the variety of products offere.",
        technologies: [
          "react",
          "css"
        ],
        links: [
          {
            type: "Website",
            href: "https://pinturaspvccolors.com/",
          },
          {
            type: "Source",
            href: "https://github.com/HugoOrielso/pinturasPVCColorsProduction",
          },
        ],
        video: "/pvcVideo.mp4",
      },
      {
        title: "La Ragazza Riccia",
        href: "https://test-la-ragazza-riccia.vercel.app/",
        dates: "Jul 2024 - Aug 2024",
        active: true,
        description:
          "I developed a product recommendation test for La Ragazza Riccia using React.js with TypeScript. The app utilizes Zustand for global state management and CSS for styling. The test involves a series of weighted questions, and based on the user's answers, the app provides a product recommendation. The result is also sent to the user via email",
        technologies: [
          "react",
          "ts",
          "css"
        ],
        links: [
          {
            type: "Website",
            href: "https://test-la-ragazza-riccia.vercel.app/",
          },
          {
            type: "Source",
            href: "https://github.com/HugoOrielso/Test-La-Ragazza-Riccia",
          },
        ],
        video: "/testVideo.mp4",
      }
    ],
    skills: [
      {
        name: "React",
        level: null
      },
      {
        name: "Node",
        level: null
      },
      {
        name: "Css",
        level: null
      },
      {
        name: "Tailwind",
        level: null
      },
      {
        name: "Mysql",
        level: null
      },
      {
        name: "Git",
        level: null
      },
      {
        name: "Mongo",
        level: null
      },
      {
        name: "Express",
        level: null
      },
      {
        name: "Java",
        level: "Learning"
      },
      {
        name: "Spring",
        level: "Learning"
      }
    ],
    languages:["Spanish", "English"],
    links: [
      {name:"About", section:"about"}, {name:"Experience", section: "experience"}, {name:"Projects",section:"projects"}, {name:"Education",section:"education"}, {name:"Skills",section:"skills"}]
} as const

export const dataSpanish = {
  work: [
      {
        company: "Sistema de gestión de restaurantes",
        badges: [],
        href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
        location: "Remote",
        alt: "no logo",
        title: "Full stack developer",
        logoUrl: "/No_Logo_logo.svg",
        start: "Jan 2021",
        end: "Abr 2021",
        background: "#000",
        description:"Desarrollé una aplicación web para la gestión de restaurantes, incluyendo funcionalidades para la creación de pedidos, gestión de inventarios, autenticación de roles de usuario y generación de facturas. Implementé un sistema de autenticación y autorización de usuarios utilizando Node.js con JWT, empleando middlewares para verificar la identidad y roles (admin, mesero, cocinero, repartidor) y más funcionalidades."
      },
      {
        company: "La Ragazza Riccia",
        href: "https://test-la-ragazza-riccia.vercel.app/",
        badges: [],
        alt: "logo la ragazza riccia",
        location: "Corropoli, Italia",
        title: "Frontend developer",
        logoUrl: "https://i0.wp.com/laragazzariccia.com/wp-content/uploads/2023/09/La-Ragazza-Riccia-350-x-100-px.png?w=350&ssl=1",
        start: "Jul 2024",
        end: "Ago 2024",
        background: "#fff",
        description: "Desarrollé una prueba para recomendar productos para la empresa La Ragazza Riccia. La aplicación fue desarrollada en React.js con TypeScript, y utiliza Zustand como proveedor de estado global para la aplicación. CSS es la herramienta principal para el diseño de la página. La prueba consiste en una serie de preguntas, y basado en las respuestas, que están ponderadas y siguen patrones proporcionados por la empresa, se realiza una recomendación de productos a los usuarios de la aplicación y se envía un correo electrónico con el resultado."
      },
      {
        company: "Pinturas PVC Color's",
        href: "https://pinturaspvccolors.com/",
        badges: [],
        location: "Remote",
        alt: "logo pvc colors",
        title: "Frontend developer",
        logoUrl: "/logo-pvc.webp",
        start: "Dic 2023",
        end: "Ene 2024",
        background: "#fff",
        description:"Desarrollé un sitio web usando React y CSS para mostrar productos e información de la empresa PVC Color’s. Diseñé una interfaz de usuario atractiva y receptiva, destacando la variedad de productos ofrecidos."
      }
  ],
  education: [
    {
      school: "Fundación de Estudios Superiores Comfanorte",
      href: "https://www.fesc.edu.co/portal/",
      degree: "Actualmente estudiando - Ingeniería de Software",
      logoUrl: "https://www.fesc.edu.co/portal/images/logo.png",
      start: "2022",
      end: "2024",
      background: "#fff"
    }
  ],
  projects: [
    {
      title: "Sistema de gestión de restaurantes",
      href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
      dates: "Ene 2024 - Ago 2024",
      active: true,
      description: "Desarrollé una aplicación web para la gestión de restaurantes, con funcionalidades como creación de pedidos, gestión de inventarios, autenticación de roles de usuario y generación de facturas. Implementé un sistema de autenticación y autorización de usuarios con Node.js usando JWT, utilizando middlewares para verificar identidades y roles (admin, mesero, cocinero, repartidor), junto con funcionalidades adicionales.",
      technologies: [
        "react",
        "node",
        "css",
        "mysql"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
        },
        {
          type: "Source",
          href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
        },
      ],
      video:
        "/managementSystemVideo.mp4",
    },
    {
      title: "Pinturas PVC Color's",
      href: "https://pinturaspvccolors.com/",
      dates: "Dic 2024 - Ene 2024",
      active: true,
      description: "Creé un sitio web utilizando React y CSS para exhibir los productos y la información de la empresa PVC Color's. Diseñé una interfaz de usuario atractiva y adaptable, resaltando la amplia gama de productos disponibles categorizados por líneas.",
      technologies: [
        "react",
        "css"
      ],
      links: [
        {
          type: "Website",
          href: "https://pinturaspvccolors.com/",
        },
        {
          type: "Source",
          href: "https://github.com/HugoOrielso/pinturasPVCColorsProduction",
        },
      ],
      video: "/pvcVideo.mp4",
    },
    {
      title: "La Ragazza Riccia",
      href: "https://test-la-ragazza-riccia.vercel.app/",
      dates: "Jul 2024 - Ago 2024",
      active: true,
      description: "Desarrollé una prueba de recomendación de productos para la empresa La Ragazza Riccia utilizando React.js con TypeScript. La aplicación consiste en una serie de preguntas ponderadas y, según las respuestas del usuario, la aplicación proporciona una recomendación de productos. El resultado también se envía al usuario por correo electrónico.",
      technologies: [
        "react",
        "ts",
        "css"
      ],
      links: [
        {
          type: "Website",
          href: "https://test-la-ragazza-riccia.vercel.app/",
        },
        {
          type: "Source",
          href: "https://github.com/HugoOrielso/Test-La-Ragazza-Riccia",
        },
      ],
      video: "/testVideo.mp4",
    }
  ],
  skills: [
    {
      name: "React",
      level: null
    },
    {
      name: "Node",
      level: null
    },
    {
      name: "Css",
      level: null
    },
    {
      name: "Tailwind",
      level: null
    },
    {
      name: "Mysql",
      level: null
    },
    {
      name: "Git",
      level: null
    },
    {
      name: "Mongo",
      level: null
    },
    {
      name: "Express",
      level: null
    },
    {
      name: "Java",
      level: "Aprendiendo"
    },
    {
      name: "Spring",
      level: "Aprendiendo"
    }
  ],
  languages:["Español", "Inglés"],
  links: [
    {name:"Sobre mí", section:"about"}, {name:"Experiencia", section: "experience"}, {name:"Proyectos",section:"projects"}, {name:"Educación",section:"education"}, {name:"Habilidades",section:"skills"}
  ]
} as const