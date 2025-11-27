
import { AppData, SectionId } from './types';

const AVATAR_URL = "https://github.com/SaikySu/Code-Example/blob/main/Img_for_Project/Screenshot%202025-11-27%20115627.png?raw=true";
const SOCIALS = [
  { platform: "GitHub", url: "https://github.com/SaikySu", iconName: "github" as const },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/dpn-b6a5262a4/", iconName: "linkedin" as const },
  { platform: "Email", url: "saikysu2k2@gmail.com", iconName: "mail" as const }
];

export const VI_DATA: AppData = {
  profile: {
    name: "Nguyễn Phước Đại",
    title: "AI Engineer & AI Researcher",
    about: "Xin chào! Tôi là một kỹ sư Trí Tuệ Nhân Tạo đam mê xây dựng, tối ưu các mô hình cho các thiết bị biên và nghiên cứu về Trí tuệ nhân tạo. Tôi thích biến những ý tưởng phức tạp thành trải nghiệm người dùng đơn giản và chính xác.",
    avatarUrl: AVATAR_URL,
    skills: ["React", "TypeScript", "Node.js", "Python", "TensorFlow", "AWS"],
    socials: SOCIALS
  },
  experience: [
    {
      id: "exp1",
      role: "AI Researcher",
      company: "Đại học Văn Lang",
      period: "2025 - Hiện tại",
      description: "Dẫn dắt nhóm nghiên cứu về Machine Learning, Deep Learning và Quantum Computing."
    },
    {
      id: "exp2",
      role: "AI Engineer Intern",
      company: "Thế Giới Di Động (MWG)",
      period: "5/2025 - 8/2025",
      description: "Phát triển dự án Computer Vision và NLP trên thiết bị Edge (Hailo8). Chuyển đổi các mô hình AI gốc sang phù hợp với phần cứng và tối ưu CI/CD cho kiểm thử."
    },
    {
      id: "exp3",
      role: "AI Engineer Intern",
      company: "Công ty CP Quản lý Thiên Minh",
      period: "9/2024 - 12/2024",
      description: "Tham gia phát triển dự án đô thị thông minh về Thị giác máy tính, cải thiện độ chính xác mô hình Edge AI từ 95.3% lên 98.2%"
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "Cử Nhân Công Nghệ Thông Tin",
      school: "Đại học Văn Lang",
      year: "2022 - 2026",
      description: "GPA: 3.36, Chuyên ngành Trí Tuệ Nhân Tạo"
    },
  ],
  blog: [
    {
      id: "1",
      title: "Tối ưu hóa React App với Hooks",
      excerpt: "Khám phá cách sử dụng useMemo và useCallback để cải thiện hiệu năng ứng dụng React của bạn, tránh việc re-render không cần thiết.",
      date: "15/10/2023",
      imageUrl: "https://picsum.photos/800/600?random=1",
      tags: ["React", "Performance", "Frontend"],
      readTime: "5 phút"
    },
    {
      id: "2",
      title: "Nhập môn Machine Learning cho Web Dev",
      excerpt: "Làm thế nào để tích hợp các mô hình học máy vào ứng dụng web sử dụng TensorFlow.js? Bài viết này sẽ hướng dẫn bạn từ con số 0.",
      date: "20/09/2023",
      imageUrl: "https://picsum.photos/800/600?random=2",
      tags: ["AI", "JavaScript", "Tutorial"],
      readTime: "8 phút"
    },
    {
      id: "3",
      title: "Cuộc sống của một Digital Nomad",
      excerpt: "Chia sẻ về trải nghiệm làm việc từ xa tại Đà Lạt. Những thuận lợi, khó khăn và cách cân bằng giữa công việc và cuộc sống.",
      date: "05/08/2023",
      imageUrl: "https://picsum.photos/800/600?random=3",
      tags: ["Lifestyle", "Remote Work"],
      readTime: "6 phút"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Ứng dụng Phát hiện Người và Ước tính Độ sâu",
      description: "Dự án này dùng để xác định và ước lượng độ sâu của đối tượng trong ảnh/video",
      technologies: ["YOLO", "Pytorch", "Depth Pro", "Streamlit"],
      imageUrl: "https://github.com/SaikySu/Code-Example/blob/main/Img_for_Project/img1.png?raw=true",
      demoUrl: "https://huggingface.co/spaces/Saiky2k/DepthPro_CVProject",
      repoUrl: "https://huggingface.co/spaces/Saiky2k/DepthPro_CVProject/tree/main"
    },
    {
      id: "p2",
      title: "ViText",
      description: "Dự án này chuyển đổi các kí tự từ những dạng khác nhau sang một dạng thống nhất để các mô hình LLM xử lý.",
      technologies: ["Python", "FastAPI"],
      imageUrl: "https://github.com/SaikySu/Code-Example/blob/main/Img_for_Project/img3.jpg?raw=true",
      repoUrl: "https://github.com/SaikySu/ViText"
    },
    {
      id: "p3",
      title: "Xóa nền + Vector hóa trên Hailo-8",
      description: "Dự án này chuyển đổi định dạng mô hình từ .pt sang .hef phù hợp với Edge Hailo8.",
      technologies: ["Deep Learning", "Edge AI", "Computer Vision"],
      imageUrl: "https://github.com/SaikySu/Code-Example/blob/main/Img_for_Project/img4-1.jpg?raw=true",
      repoUrl: "https://github.com/SaikySu/Remove_Background_and_Vector_Convert_in_Hailo8"
    }
  ],
  research: [
    {
      id: "r1",
      title: "Improving Transformer Efficiency in Low-Resource Languages",
      conference: "ACL 2023",
      abstract: "Nghiên cứu này đề xuất một phương pháp mới để tinh chỉnh các mô hình Transformer cho các ngôn ngữ ít tài nguyên, đạt được độ chính xác cao hơn 15% so với baseline.",
      year: "2023",
      imageUrl: "https://picsum.photos/800/600?random=7",
      paperUrl: "#",
      authors: ["Nguyen Van A", "Le Thi B", "Smith J."]
    },
    {
      id: "r2",
      title: "Real-time Object Detection on Edge Devices",
      conference: "IEEE IoT Journal",
      abstract: "Tối ưu hóa mô hình YOLOv5 để chạy real-time trên các thiết bị Raspberry Pi với độ trễ dưới 50ms.",
      year: "2022",
      imageUrl: "https://picsum.photos/800/600?random=8",
      paperUrl: "#",
      authors: ["Nguyen Van A", "Tran Van C"]
    }
  ],
  ui: {
    nav: {
      [SectionId.HOME]: 'Trang Chủ',
      [SectionId.CV]: 'Sơ Yếu Lý Lịch',
      [SectionId.PROJECTS]: 'Dự Án',
      [SectionId.RESEARCH]: 'Nghiên Cứu',
      [SectionId.BLOG]: 'Blog',
    },
    buttons: {
      viewProjects: 'Xem Dự Án',
      viewCV: 'Xem CV',
      readMore: 'Đọc thêm',
      viewDemo: 'Xem Demo',
      viewCode: 'Xem Code',
      readPaper: 'Đọc toàn văn',
      techStack: 'Công nghệ sử dụng:',
      experience: 'Kinh Nghiệm',
      education: 'Học Vấn',
      skillsTitle: 'Kỹ Năng Chuyên Môn'
    },
    sections: {
      [SectionId.CV]: { title: 'Sơ Yếu Lý Lịch', subtitle: 'Tóm tắt quá trình làm việc và nền tảng học vấn.' },
      [SectionId.PROJECTS]: { title: 'Dự Án Cá Nhân', subtitle: 'Các sản phẩm thực tế tôi đã xây dựng để giải quyết vấn đề hoặc học hỏi công nghệ mới.' },
      [SectionId.RESEARCH]: { title: 'Thành Tựu Nghiên Cứu', subtitle: 'Các bài báo khoa học và công trình nghiên cứu đã được công bố.' },
      [SectionId.BLOG]: { title: 'Blog Cá Nhân', subtitle: 'Nơi tôi chia sẻ kiến thức, kinh nghiệm và những câu chuyện về công nghệ.' },
    },
    hero: {
      greeting: 'Xin chào, tôi là'
    }
  }
};

export const EN_DATA: AppData = {
  profile: {
    name: "Nguyen Phuoc Dai",
    title: "AI Engineer & AI Researcher",
    about: "Hello! I am an AI Engineer passionate about building and optimizing models for edge devices and researching Artificial Intelligence. I love turning complex ideas into simple and precise user experiences.",
    avatarUrl: AVATAR_URL,
    skills: ["React", "TypeScript", "Node.js", "Python", "TensorFlow", "AWS"],
    socials: SOCIALS
  },
  experience: [
    {
      id: "exp1",
      role: "AI Researcher",
      company: "Van Lang University",
      period: "2025 - Present",
      description: "Leading a research group on Machine Learning, Deep Learning, and Quantum Computing."
    },
    {
      id: "exp2",
      role: "AI Engineer Intern",
      company: "Mobile World Group",
      period: "May 2025 - Aug 2025",
      description: "Developing Computer Vision and NLP projects on Edge devices (Hailo8). Converting original AI models to hardware-compatible formats and optimizing CI/CD for testing."
    },
    {
      id: "exp3",
      role: "AI Engineer Intern",
      company: "Thien Minh Management JSC",
      period: "Sep 2024 - Dec 2024",
      description: "Participated in developing a Smart City Computer Vision project, improving Edge AI model accuracy from 95.3% to 98.2%."
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "Bachelor of Information Technology",
      school: "Van Lang University",
      year: "2022 - 2026",
      description: "GPA: 3.36, Major in Artificial Intelligence"
    },
  ],
  blog: [
    {
      id: "1",
      title: "Optimizing React Apps with Hooks",
      excerpt: "Discover how to use useMemo and useCallback to improve your React application performance and avoid unnecessary re-renders.",
      date: "Oct 15, 2023",
      imageUrl: "https://picsum.photos/800/600?random=1",
      tags: ["React", "Performance", "Frontend"],
      readTime: "5 min read"
    },
    {
      id: "2",
      title: "Intro to Machine Learning for Web Devs",
      excerpt: "How to integrate machine learning models into web applications using TensorFlow.js? This article will guide you from scratch.",
      date: "Sep 20, 2023",
      imageUrl: "https://picsum.photos/800/600?random=2",
      tags: ["AI", "JavaScript", "Tutorial"],
      readTime: "8 min read"
    },
    {
      id: "3",
      title: "Life of a Digital Nomad",
      excerpt: "Sharing experiences about working remotely in Da Lat. The pros, cons, and how to balance work and life.",
      date: "Aug 05, 2023",
      imageUrl: "https://picsum.photos/800/600?random=3",
      tags: ["Lifestyle", "Remote Work"],
      readTime: "6 min read"
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Human Detection and Depth Estimation Application",
      description: "This project is used to determine and estimate the depth of objects in images/videos.",
      technologies: ["YOLO", "Pytorch", "Depth Pro", "Streamlit"],
      imageUrl: "https://github.com/SaikySu/Code-Example/blob/main/Img_for_Project/img1.png?raw=true",
      demoUrl: "https://huggingface.co/spaces/Saiky2k/DepthPro_CVProject",
      repoUrl: "https://huggingface.co/spaces/Saiky2k/DepthPro_CVProject/tree/main"
    },
    {
      id: "p2",
      title: "ViText",
      description: "This project converts characters from different formats to a unified format for LLM models to process.",
      technologies: ["Python", "FastAPI"],
      imageUrl: "https://github.com/SaikySu/Code-Example/blob/main/Img_for_Project/img3.jpg?raw=true",
      repoUrl: "https://github.com/SaikySu/ViText"
    },
    {
      id: "p3",
      title: "Remove Background and Vector Convert in Hailo8",
      description: "Personal task management app focused on user experience and Offline-first capability.",
      technologies: ["Deep Learning", "Edge AI", "Computer Vision"],
      imageUrl: "https://github.com/SaikySu/Code-Example/blob/main/Img_for_Project/img4-1.jpg?raw=true",
      repoUrl: "https://github.com/SaikySu/Remove_Background_and_Vector_Convert_in_Hailo8"
    }
  ],
  // research: [
  //   {
  //     id: "r1",
  //     title: "Improving Transformer Efficiency in Low-Resource Languages",
  //     conference: "ACL 2023",
  //     abstract: "This research proposes a new method to fine-tune Transformer models for low-resource languages, achieving 15% higher accuracy than baseline.",
  //     year: "2023",
  //     imageUrl: "https://picsum.photos/800/600?random=7",
  //     paperUrl: "#",
  //     authors: ["Nguyen Van A", "Le Thi B", "Smith J."]
  //   },
  //   {
  //     id: "r2",
  //     title: "Real-time Object Detection on Edge Devices",
  //     conference: "IEEE IoT Journal",
  //     abstract: "Optimizing YOLOv5 models to run real-time on Raspberry Pi devices with latency under 50ms.",
  //     year: "2022",
  //     imageUrl: "https://picsum.photos/800/600?random=8",
  //     paperUrl: "#",
  //     authors: ["Nguyen Van A", "Tran Van C"]
  //   }
  // ],
  ui: {
    nav: {
      [SectionId.HOME]: 'Home',
      [SectionId.CV]: 'Resume',
      [SectionId.PROJECTS]: 'Projects',
      [SectionId.RESEARCH]: 'Research',
      [SectionId.BLOG]: 'Blog',
    },
    buttons: {
      viewProjects: 'View Projects',
      viewCV: 'View Resume',
      readMore: 'Read More',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      readPaper: 'Read Full Paper',
      techStack: 'Tech Stack:',
      experience: 'Experience',
      education: 'Education',
      skillsTitle: 'Professional Skills'
    },
    sections: {
      [SectionId.CV]: { title: 'Curriculum Vitae', subtitle: 'Summary of work history and educational background.' },
      [SectionId.PROJECTS]: { title: 'Personal Projects', subtitle: 'Real-world products I built to solve problems or learn new technologies.' },
      [SectionId.RESEARCH]: { title: 'Research Achievements', subtitle: 'Scientific papers and research works published.' },
      [SectionId.BLOG]: { title: 'Personal Blog', subtitle: 'Where I share knowledge, experiences, and stories about technology.' },
    },
    hero: {
      greeting: 'Hello, I am'
    }
  }
};
