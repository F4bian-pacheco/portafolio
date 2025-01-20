import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fabian Pacheco",
  title: "Fabian Pacheco - Software Engineer",
  initials: "FP",
  url: "https://pachecodev.com/",
  location: "Talca, CL",
  locationLink: "https://www.google.com/maps/place/talca",
  description:
    "Ingeniero de software, apasionado por la tecnología, siempre en busqueda de nuevas formas de innovar y mejorar mis habilidades en el mundo de la programación.",
  summary:
    "Cuando recibí mi primer PC, me gustaba instalar y desinstalar cosas; la curiosidad en el mundo de la tecnología es algo que me fascina y siempre lo hará 🥰. Me considero un desarrollador backend que está en vías de convertirse en fullstack, aunque me falta creatividad para el frontend 😅. Tengo buen liderazgo, empatía, proactividad y un aprendizaje rápido. Hasta el momento, mi logro más destacado ha sido ser alumno ayudante y dar clases de laboratorio a 85 alumnos en PHP para la asignatura de bases de datos de mi carrera universitaria.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "Typescript",
    "Tailwind",
    "Node.js",
    "Python",
    "Django",
    "PHP",
    "Java",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
    "Linux",
    "C",
    "AWS",
    "Supabase",
    "Firebase",
    "Fast Learning",
    "Teamwork",
    "English",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "fabian.pacheco.zelada@gmail.com",
    tel: "+56975325736",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/F4bian-pacheco",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fabian-andres-pacheco-zelada/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Codewars: {
        name: "Codewars",
        url: "https://www.codewars.com/users/F4bian-pacheco",
        icon: Icons.Codewars,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      Email: {
        name: "Send Email",
        url: "mailto:fabian.pacheco.zelada@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Desarrollador FullStack",
      logoUrl: "",
      start: "Sep 2024",
      end: "Actualidad",
      description:
        "Desarrollo multiplataforma para la gestion de visitas de degustacion de vinos, la cual incluye la reserva de la visita por el lado web y una app movil para los vendedores, la cual les permite gestionar las visitas, los pagos y la entrega de los vinos",
    },
    {
      company: "Universidad Catolica del Maule",
      href: "#",
      badges: [],
      location: "Hibrido",
      title: "Desarrollador FullStack",
      logoUrl: "/Escudo_UCM.png",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "Dirigí el proyecto de concepción y desarrollo de una plataforma multifuncional destinada a gestionar tanto la programación de citas con el jefe de carrera como consultas más informales. Esta iniciativa culminó en una transformación de nuestros flujos de trabajo internos, agilizando la asignación de horarios y simplificando el proceso de consulta, lo que resultó en una optimización general de la administración académica en la Escuela de Informática",
    },
    {
      company: "Universidad Catolica del Maule",
      badges: [],
      href: "#",
      location: "Prescencial",
      title: "Ayudante Asignatura Base de Datos",
      logoUrl: "/Escudo_UCM.png",
      start: "Jul 2022",
      end: "Dic 2023",
      description:
        "Me desenvolví como ayudante para ejercer los laboratorios de base de datos, en los cuales se trabajó sobre 3 ejes temáticos(consultas SQL, pl/sql y php), para el proyecto final me dedique a guiar a los alumnos en la realización de una app crud usando todo lo visto del semestre, las tecnologías usadas fueron php y Oracle database, mi mayor logro en frente a esta responsabilidad fue entregar la orientación necesaria para el correcto uso del modelo mvc y poder responder de forma adecuada y personalizada a los 85 alumnos de la asignatura, además de la nota máxima que recibí del profesor de la asignatura.",
    },
    {
      company: "Haulmer",
      badges: [],
      href: "https://www.haulmer.com/",
      location: "Remoto",
      title: "Practicante Ingeniero de Software",
      logoUrl: "/haulmer_logo.png",
      start: "Ene 2024",
      end: "Mar 2024",
      description:
        "Desarrolle integraciones para ecommerce y configuraciones relacionadas a procesos de pago con plataformas como webpay y linkify.",
    },


  ],
  education: [
    {
      school: "Universidad Catolica del Maule",
      href: "https://portal.ucm.cl/",
      degree: "Ingeniero Civil en Informática",
      logoUrl: "/Escudo_UCM.png",
      start: "2019",
      end: "2024",
    },
    {
      school: "ONE - Oracle Next Education",
      href: "https://www.oracle.com/cl/education/oracle-next-education/",
      degree: "Backend Developer",
      logoUrl: "/oracle-logo.jpg",
      start: "Ene 2023",
      end: "Jun 2024",
    },
  ],
  projects: [
    {
      title: "Shortest Path",
      href: "#",
      dates: "May 2022 - Sept 2022",
      active: true,
      description:
        "Este proyecto corresponde al curso de diseño y analisis de algoritmos. Consiste en una aplicacion web de la cual se puede obtener la ruta mas corta en un mapa.",
      technologies: [
        "Python",
        "Javascript",
        "Flask",
        "Jquery",
        "Bootstrap",
        "Leaflet",
        "Networkx",
        "Ajax",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/F4bian-pacheco/Flask-Shortest-Path-Project",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/projects/proyecto1.jpg",
      video:
        "",
    },
    {
      title: "Web Scraping ",
      href: "#",
      dates: "Oct 2022 - Nov 2022",
      active: true,
      description:
        "Este proyecto consiste en la obtención y comparación de datos de compra y venta de automóviles entre dos paginas reconocidas en chile",
      technologies: [
        "Python",
        "PoweBi",
        "Selenium"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/F4bian-pacheco/Web-Scraping-KPIs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/proyecto3.png",
      video: "",
    },
    {
      title: "Ping Pong Game",
      href: "https://github.com/F4bian-pacheco/ping_pong",
      dates: "Nov 2024",
      active: true,
      description:
        "Este proyecto corresponde a un juego de ping pong desarrollado en React",
      technologies: [
        "React",
        "Javascript",
        "Tailwind",
      ],
      links: [
        {
          type: "Website",
          href: "https://ping-pong-zeta-silk.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/F4bian-pacheco/ping_pong",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/proyecto2.png",
      video: "",
    },
    {
      title: "K-means Parallel Implementation",
      href: "https://github.com/F4bian-pacheco/k_means_implementation",
      dates: "Abril 2023",
      active: true,
      description:
        "Este repositorio contiene una implementación del algoritmo K-means tanto en su versión secuencial como en su versión paralela utilizando OpenMP. El objetivo de este proyecto es proporcionar una comparación de rendimiento entre ambas implementaciones y permitir a los usuarios evaluar cuál es la mejor opción según sus necesidades.",
      technologies: [
        "C",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/F4bian-pacheco/k_means_implementation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Mini Framework PHP MVC",
      href: "#",
      dates: "Dic 2022",
      active: true,
      description:
        "Mini Framework PHP MVC es un proyecto que tiene como objetivo crear un marco de trabajo básico y ligero para aplicaciones web en PHP utilizando el patrón de arquitectura Modelo-Vista-Controlador (MVC). Este fue usado para guiar a los alumnos en mi ayudantia para el ramo de base de datos de mi universidad",
      technologies: [
        "PHP",
        "Oracle",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/F4bian-pacheco/MVC-AppNotes-Ayudantia",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://www.youtube.com/playlist?list=PLgORL7zW0KaaiRttOknSsNh-r--Pu0j09",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Java Api Rest",
      href: "https://github.com/F4bian-pacheco/coffee-back",
      dates: "Julio 2024",
      active: true,
      description:
        "Api rest creada con java y spring boot para el manejo de una tienda de cafes par el electivo de desarrollo web de mi universidad",
      technologies: [
        "Java",
        "Spring Boot",
        "Mysql"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/F4bian-pacheco/coffee-back",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    // {
    //   title: "Stimate",
    //   href: "#",
    //   dates: "Marzo 2024 - Actualidad",
    //   active: true,
    //   description:
    //     "Aplicación del tipo Sass correspondiente a mi proyecto de titulo, la cual consiste en una app para el cálculo de variables en proyectos eléctricos",
    //   technologies: [
    //     "NextJs",
    //     "Supabase",
    //     "Tailwind",
    //     "Typescript",
    //     "Clerk"

    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "#",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "",
    // },
  ],
} as const;
