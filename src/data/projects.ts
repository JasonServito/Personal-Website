import { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'Developed this personal portfolio website to showcase professional experience, projects, and skills.',
    image: '/images/projects/website1.webp?height=200&width=300',
    tags: ['React.js', 'HTML', 'CSS', 'Typescript', 'Bootstrap']
  },
  {
    title: 'Simulated Banking Application',
    description: 'Built a banking app with role-based authentication for secure account management.',
    image: '/images/projects/bank.jpeg?height=200&width=300',
    tags: ['Java']
  },
  {
    title: 'General-Purpose Processor Design',
    description: 'Designed and implemented a general-purpose processor using VHDL and FPGA technology.',
    image: '/images/projects/alu.png?height=200&width=300',
    tags: ['VHDL', 'Quartus II', 'FPGA']
  },
  {
    title: 'Starred Stocks Display Application (Ongoing)',
    description: 'Building a dynamic dashboard that displays real-time stock data for user-selected stocks.',
    image: '/images/projects/stocks.webp?height=200&width=300',
    tags: ['Next.js', 'Typescript', 'Yahoo Finance API', 'Firebase']
  }
]
