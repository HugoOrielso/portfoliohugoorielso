
export const data = {
    work: [
        {
          company: "Pinturas PVC Color's",
          href: "https://pinturaspvccolors.com/",
          badges: [],
          location: "Remote",
          alt: "logo pvc colors",
          title: "Frontend developer",
          logoUrl: "./src/assets/logo-pvc.webp",
          start: "January 2024",
          end: "February 2024",
          background: "#fff",
          description:
            "I Developed a website using React and CSS to display products and company information for PVC Color’s. I designed an attractive and responsive user interface, highlighting the variety of products offere.",
        },
        {
          company: "Restaurant management system",
          badges: [],
          href: "https://github.com/HugoOrielso/aplicationAdministrationRestaurants",
          location: "Remote",
          alt: "no logo",
          title: "Full stack developer",
          logoUrl: "./src/assets/No_Logo_logo.svg",
          start: "January 2021",
          end: "April 2021",
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
          start: "July 2024",
          end: "August 2024",
          background: "#fff",
          description:
            "I developed a test to recommend products for the company La Ragazza Riccia. The application is being developed in React.js with TypeScript, and is using Zustand as the global state provider for the app, CSS is the primary tool for styling the page, the test consists of a series of questions, and based on the answers, which are weighted and follow patterns provided by the company, a product recommendation is made to the users of the application and is send a email with the reseult.",
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
        image: "./src/assets/managementRestaurant.webp",
        video:
          "./managementSystemVideo.mp4",
      },
      {
        title: "Pinturas PVC Color's",
        href: "https://pinturaspvccolors.com/",
        dates: "Jan 2024 - Feb 2024",
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
        image: "./src/assets/webPvcColors.webp",
        video: "./pvcVideo.mp4",
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
        image: "./src/assets/laRagazzaTest.webp",
        video: "./testVideo.mp4",
      }
    ]
} as const