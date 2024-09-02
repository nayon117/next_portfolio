export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I value working closely with clients and communicating openly to build strong partnerships and achieve great results.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "I'm very flexible with time zone communications",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A tech lover who's passionate about creating innovative solutions .",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning React-Native",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "InnovatED",
    des: "InnovateED is an advanced e-learning platform offering a seamless learning experience for students and teachers.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://innavated.web.app/",
  },
  {
    id: 2,
    title: "DevForge",
    des: "DevForge is an open-source, collaborative platform empowering developers by fostering knowledge sharing and community engagement.'",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://devforge117.vercel.app/",
  },
  {
    id: 3,
    title: "Automotive Gearup",
    des: "Explore car brands, view details, update listings, and shop for your dream car on our automotive website",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://automotive-gearup.web.app/",
  },
  {
    id: 4,
    title: "FitZen",
    des: "FitZen is a dynamic Yoga and Fitness Retreats event management website for discovering, booking, and reviewing wellness retreats.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://bespoke-tulumba-33a298.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Hasibul was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Hasibul's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Hasibul is the ideal partner.",
    name: "Emily Davis",
    title: "CEO of Innovix Solutions",
  },
  {
    quote:
      "Hasibul's technical expertise and creative problem-solving skills were invaluable to our project. He consistently delivered high-quality work and went above and beyond to ensure our satisfaction. Hasibul's commitment to excellence and attention to detail make him a top-notch developer.",
    name: "Robert Thompson",
    title: "CTO of Quantum Dynamics",
  },
  {
    quote:
      "Working with Hasibul was a game-changer for our company. His ability to understand our unique requirements and translate them into a stunning, functional website was impressive. Hasibul's proactive communication and willingness to go the extra mile made the entire process seamless and enjoyable.",
    name: "Sophia Anderson",
    title: "Marketing Manager at Nexus Innovations",
  },
  {
    quote:
      "Hasibul's passion for his craft is contagious. He approached our project with enthusiasm and a keen eye for detail, resulting in a website that exceeded our expectations. Hasibul's technical prowess, combined with his friendly and professional demeanor, makes him an exceptional collaborator.",
    name: "Daniel Wilson",
    title: "Founder of Apex Enterprises",
  },
  {
    quote:
      "Hasibul's ability to transform complex ideas into elegant, user-friendly solutions is truly remarkable. His deep understanding of the latest web technologies and best practices ensured that our website was not only visually appealing but also performant and secure. We couldn't be happier with the results.",
    name: "Olivia Thompson",
    title: "Product Manager at Solaris Systems",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
