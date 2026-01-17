require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const connectDB = require('./config/db');

connectDB();

const myProfile = {
  name: "Abhinav Chauhan",
  email: "abhinavchauhan593@gmail.com",
  education: "B.Tech, NIT Delhi",
  skills: ["NEXT.js", "ExpressJs", "Typescript", "PostgresSql", "CSS","JavaScript", "React", "Node.js", "MongoDB", "Mongoose", "Turborepos", "Git", "Python", "C++", "C", "Postman", "Redis", "Skicit-learn", "Pytorch"],
  links: {
    github: "https://github.com/abhinavvv-chauhan",
    linkedin: "https://www.linkedin.com/in/abhinav-chauhan-15311b200/",
    portfolio: "https://abhinavchauhanportfolio.com"
  },
  projects: [
    {
      title: "Excalidraw",
      description: "Collaborative Diagramming Platform built with React and Node.js",
      links: { github: "https://github.com/abhinavvv-chauhan/excalidraw", demo: "https://excalidraw-ten-gamma.vercel.app/" }
    },
    {
      title: "Second Brain",
      description: "Personal Knowledge Manager using TypeScript and MongoDB",
      links: { github: "https://github.com/abhinavvv-chauhan/second-brain", demo: "https://secondbrain-frontend-8p87.onrender.com/" }
    },
    {
      title: "ChatFlow",
      description: "Real-time Chat Application with React and Socket.io",
      links: { github: "https://github.com/abhinavvv-chauhan/chat-room", demo: "https://chat-room-lac-eta.vercel.app/" }
    }
  ],
  work: [
    {
      company: "Labmentix",
      position: "Intern",
      duration: "June 2025 - Aug 2025",
      description: "Built APIs and fixed bugs."
    }
  ]
};

const importData = async () => {
  try {
    await User.deleteMany();
    await User.create(myProfile);
    console.log('Data Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

importData();