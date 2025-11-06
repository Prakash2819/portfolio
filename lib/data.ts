
import { FaAmazon,FaCloud, FaGithub, FaGraduationCap, FaLinkedin, FaTwitter,} from "react-icons/fa";
import { MdMail } from "react-icons/md";


export const experienceData = [
  {
    title: "Internship",
    company: "E2 InfoSystems",
    location: "Salem, India",
    description: [
      "Designed, Developed, and Maintained robust software applications, ensuring high performance and scalability.",
    ],
    date: "July 2025 - Present",
  },
  {
    title: "Freelancer",
    company: "Self-Employed",
    location: "Remote",
    description: [
      "Implemented CI/CD pipelines using Jenkins, GitHub Actions, and ArgoCD for automated build and deployment.",
      "Deployed and managed scalable cloud infrastructure using AWS, Azure, and Terraform for improved reliability and performance.",

    ],
    date: "Aug 2023 - Oct 2024",
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/prakash2819",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prakasherus/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:prakasherg@gmail.com",
    icon: MdMail,
  },
  {
    label: "Twitter",
    href: "https://x.com/PrakashE28",
    icon: FaTwitter,
  },
] as const;

export const projects = [
  {
    title: "Netflix DevSecOps",
    description:
      "Implemented a Netflix-inspired CI/CD pipeline integrating automated testing, security checks, and dynamic monitoring for reliable cloud delivery.",
    tags: ["Jenkins", "Kubernetes", "Docker", "Prometheus", "Grafana", "AWS EC2","ArgoCD","SonarQube"],
    github: "https://github.com/Prakash2819/Netflix-DevSecOps",
    image: "/images/thumbnail.gif", 
  },
  {
    title: "Swiggy DevSecOps",
    description:
      "A complete DevSecOps pipeline implementation for the Swiggy application, featuring automated CI/CD, security scanning, container orchestration, and monitoring.",
    tags: ["Kubernetes","SonarQube", "Docker", "Trivy", "Prometheus", "Grafana","Jenkins"],
    github: "https://github.com/Prakash2819/DevSecOps-Swiggy-Project",
    image: "/images/Swiggy-thumbnail.gif", 
  },
    {
    title: "Spotify Infrastructure Automation",
    description:
      "Automated Spotify infrastructure provisioning with modular, scalable IaC for cloud-native deployment.",
    tags: ["Terraform","Spotify API","AWS"],
    github: "https://github.com/Prakash2819/Terraform-Spotify",
    image: "/images/Spotify-thumbnail.gif", 
  },

] as const;

export const certificates = [
  {
    id: 1,
    title: "AWS:Cloud essentiaals",
    institution: "Amazon Web Services",
    duration: "Issued: March 2024",
    description: "Demonstrated proficiency in Git and GitHub by completing foundational training.",
    link: "https://www.credly.com/badges/2f430287-3563-45d0-a2ad-762be3d539ce/public_url",
    icon: FaAmazon,
  },
  {
    id: 2,
    title: "Zero Trust Certified Associate",
    institution: "Zscaler",
    duration: "Issued: Dec 2024",
    description: "Completed comprehensive training on Node.js, covering core concepts and advanced topics.",
    link: "http://verify.skilljar.com/c/rypznsace65x",
    icon: FaCloud,
  },
  {
    id: 3,
    title: "CI/CD with Jenkins and Docker",
    institution: "Udemy",
    duration: "Issued: Sep 2025",
    description: "Completed advanced training on building microservices with Node.js and Express.",
    link: "http://ude.my/UC-00caa480-e75c-497b-8575-22ae59a8d4ce",
    icon: FaGraduationCap,
  },
  {
    id: 4,
    title: "Advanced Kubernetes",
    institution: "Udemy",
    duration: "Issued: Sep 2025",
    description: "Completed comprehensive training on React.js, covering core concepts and advanced topics.",
    link: "http://ude.my/UC-518c4f94-a9d0-43d2-be80-fbe34c5f7748",
    icon: FaGraduationCap,
  },
  {
    id: 5,
    title: "Linux",
    institution: "Udemy",
    duration: "Issued: Oct 2025",
    description: "Completed advanced training on securing Node.js applications and APIs.",
    link: "http://ude.my/UC-387074be-5024-4a51-80f9-af1ab24d66a8",
    icon: FaGraduationCap,
  },
];

type EducationItem = {
  id: number;
  title: string;
  institution: string;
  duration: string;
  description: string;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Technology (Hons.) in Information Technology",
    institution: "Sri Shanmugha College of Engineering and Technology",
    duration: "2022 - 2026",
    cgpa:"CGPA : 8.5",
    description:
      "Pursuing in-depth studies in information technology, software engineering, and modern computing systems with a strong emphasis on practical projects and innovative solutions.",
  },
  {
    id: 2,
    title: "Higher Secondary School",
    institution: "Government Higher Secondary School Chittor",
    duration: "2016 - 2022",
    hsc:"SSLC : 86%" ,
    sslc:"HSLC : 80%",
    description: "Completed Higher Secondary education in the Maths-Biology group, building a strong foundation in Mathematics, Physics, Chemistry, and Biology.",
  },
];
