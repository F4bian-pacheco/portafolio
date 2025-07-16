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
    "Ingeniero de software apasionado por la tecnología, siempre en búsqueda de formas innovadoras para mejorar y ampliar mis habilidades en programación. Mi enfoque está en construir soluciones eficientes y sostenibles, adaptándome a las últimas tendencias y retos tecnológicos.",
  summary:
    "Desde que recibí mi primera computadora, la curiosidad por la tecnología ha sido una constante en mi vida. Me apasiona explorar, aprender y experimentar, lo que me llevó a convertirme en un desarrollador backend con aspiraciones de fullstack. Aunque el diseño frontend no es mi fuerte, disfruto del desafío que representa. Me considero un líder empático, proactivo y con capacidad de aprendizaje rápido. Mi mayor logro hasta ahora ha sido desempeñarme como ayudante de laboratorio, impartiendo clases de PHP a más de 85 alumnos en la asignatura de bases de datos durante mi carrera universitaria.",
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
    "Golang",
    "Linux",
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
      company: "Universidad Católica del Maule",
      badges: [],
      href: "",
      location: "Talca, Chile",
      title: "Desarrollador FullStack – Proyecto de Título",
      logoUrl: "/Escudo_UCM.png", // Asumiendo que tienes el logo, si no, puedes agregar uno genérico.
      start: "Mar 2024",
      end: "Ago 2024",
      description:
        "Desarrollé una plataforma SaaS educativa para estudiantes técnicos electricistas. Implementé ejercicios interactivos que mejoraron la comprensión de cálculos eléctricos y diseñé un sistema escalable siguiendo metodologías ágiles para modernizar métodos de enseñanza.",
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
        "Desarrolle integraciones para e-commerce y configuraciones relacionadas a procesos de pago con plataformas como webpay y linkify.",
    },
    {
      company: "Universidad Catolica del Maule",
      href: "#",
      badges: [],
      location: "Hibrido",
      title: "Desarrollador FullStack - Beca Laboral",
      logoUrl: "/Escudo_UCM.png",
      start: "Mar 2023",
      end: "Jun 2023",
      description:
        "Dirigí el proyecto desde su concepción hasta el desarrollo de una plataforma multifuncional destinada a gestionar tanto la programación de citas con el jefe de carrera como consultas más informales. Esta iniciativa culminó en una transformación de nuestros flujos de trabajo internos, agilizando la asignación de horarios y simplificando el proceso de consulta, lo que resultó en una optimización general de la administración académica en la Escuela de Informática",
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
        "Me desenvolví como ayudante para ejercer los laboratorios de base de datos, en los cuales se trabajó sobre 3 ejes temáticos(consultas SQL, PL/SQL y PHP), para el proyecto final me dedique a guiar a los alumnos en la realización de una app crud usando todo lo visto del semestre, las tecnologías usadas fueron PHP y Oracle database, mi mayor logro en frente a esta responsabilidad fue entregar la orientación necesaria para el correcto uso del modelo MVC y poder responder de forma adecuada y personalizada a los 85 alumnos de la asignatura, además de la nota máxima que recibí del profesor de la asignatura.",
    }

  ],
  education: [
    {
      school: "Universidad Catolica del Maule",
      href: "https://portal.ucm.cl/",
      degree: "Ingeniero Civil en Informática",
      logoUrl: "/Escudo_UCM.png",
      start: "Mar 2019",
      end: "Ago 2024",
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
      title: "Avista Wine Imports Web App",
      href: "https://www.avistawines.com/",
      dates: "Sept 2024 - July 2025",
      active: true,
      description:
        "Desarrollo multiplataforma para la gestion de visitas de degustacion de vinos, la cual incluye la reserva de la visita por el lado web y una app movil para los vendedores, la cual les permite gestionar las visitas, los pagos y la entrega de los vinos",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "Tailwind",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.avistawines.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://cicgjbpjgfnnwpypnfeg.supabase.co/storage/v1/object/public/portafolioblog//Avistawines.png",
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
      image: "https://cicgjbpjgfnnwpypnfeg.supabase.co/storage/v1/object/public/portafolioblog//proyecto3.png",
      video: "",
    },
    {
      title: "Ping Pong Game",
      href: "https://github.com/F4bian-pacheco/ping_pong",
      dates: "Nov 2024",
      active: true,
      description:
        "Este proyecto corresponde a un juego de ping pong desarrollado en React. Para lograr la mejor versión del juego, integré y comparé elementos de código proporcionados por distintos modelos de IA, como Claude, Mistral y GPT. A través de un proceso iterativo, fui corrigiendo y optimizando cada propuesta para mejorar la jugabilidad, el rendimiento y la estructura del código. Este enfoque me permitió combinar lo mejor de cada modelo y obtener un producto final más refinado.",
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
      image: "https://cicgjbpjgfnnwpypnfeg.supabase.co/storage/v1/object/public/portafolioblog//proyecto2.png",
      video: "",
    },
    {
      title: "Shortest Path",
      href: "#",
      dates: "May 2022 - Sept 2022",
      active: true,
      description:
        "Este proyecto corresponde al curso de diseño y analisis de algoritmos. Consiste en una aplicacion web de la cual se puede obtener la ruta mas corta en un mapa.Le tengo cariño por que es mi primer acercamiento a un proyecto web, en el cual aprendi a usar flask y a trabajar con mapas",
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
      image: "https://cicgjbpjgfnnwpypnfeg.supabase.co/storage/v1/object/public/portafolioblog//proyecto1.jpg",
      video:
        "",
    },
    {
      title: "K-means Parallel Implementation",
      href: "https://github.com/F4bian-pacheco/k_means_implementation",
      dates: "Abril 2023",
      active: true,
      description:
        "Este repositorio contiene una implementación del algoritmo K-means con 20 dimensiones tanto en su versión secuencial como en su versión paralela utilizando OpenMP. El objetivo de este proyecto es proporcionar una comparación de rendimiento entre ambas implementaciones y permitir a los usuarios evaluar cuál es la mejor opción según sus necesidades.",
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
        "Mini 'Framework' PHP MVC es un proyecto que tiene como objetivo crear un marco de trabajo básico y ligero para aplicaciones web en PHP utilizando el patrón de arquitectura Modelo-Vista-Controlador (MVC). Este fue usado para guiar a los alumnos en mi ayudantia para el ramo de base de datos de mi universidad",
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
        "Api rest creada con java y spring boot para el manejo de una tienda de cafes para el electivo de desarrollo web de mi universidad",
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
