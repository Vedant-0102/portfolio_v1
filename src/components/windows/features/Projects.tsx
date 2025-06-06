import React, { useState } from 'react';
import { FolderOpen, Code, FileText, Hash, Globe, Github } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  screenshots?: string[];
  features?: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  about?: string;
}

const ProjectFolder = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'demo'>('overview');
  
  const projects: Project[] = [
    {
      id: 'Proj',
      name: 'LimeAI',
      description: 'LimeAI is an AI-powered learning platform designed to provide personalized education.',
      tech: ['React', 'TailwindCSS', 'NodeJS'],
      about: 'LimeAI is an AI-powered platform that makes studying easy and interactive.',
      screenshots: [],
      features: [
        'Whiteboard – Take notes and save them as PNG images.',
        'AI Note Summarization – Get concise summaries of your notes.',
        'AI Chatbot – Ask doubts from your notes and get instant answers.',
        'Diagram Visualizer AI – Uses Mermaid.js to generate concept diagrams.',
        'Podcast AI – Converts notes into audio for better retention.'
      ],
      links: {
        demo: 'https://www.thelimeai.xyz/',
        github: 'https://github.com/Om-Thanage/LimeAi'
      }
    },
    {
      id: 'Proj',
      name: 'Trello ',
      description: 'Trello built with React, TypeScript, and Tailwind CSS, featuring a clean and responsive design with dark mode support.',
      tech: ['React', 'TypeScript', 'TailwindCSS'],
      about: 'A feature-rich Trello Project with modern UI/UX,card management, and responsive design.',
      screenshots: [],
      features: [
        'Board & List Management – Create, edit, and delete boards and lists with customizable titles and colors. Reorder lists using drag-and-drop and collapse them for better organization.',
        'Card System – Add, edit, delete, and move cards between lists. Cards support detailed descriptions, comments, and real-time updates for seamless collaboration.',
        'Modern UI/UX – Clean design with dark mode, collapsible sidebar, custom scrollbars, and toast notifications—built using shadcn/ui components.',
        'Dark Mode Support – Toggle between light and dark themes for a comfortable user experience.',
      ],
      links: {
        demo: 'https://trello-beryl-ten.vercel.app/',
        github: 'https://github.com/Vedant-0102/Trello'
      }
    },    
    {
      id: 'Proj',
      name: 'AI Model to Predict winner of Game',
      description: 'CS-GO Global Offensive a popular first person Shooter game.',
      tech: ['Python', 'Jupyter Notebook'],
      about: 'Predicts the outcome of rounds in the game Counter-Strike: Global Offensive (CS:GO) using machine learning techniques.',
      features: [
        'Data extraction and preprocessing from a custom dataset.',
        'Exploratory data analysis and visualization.',
        'Machine learning model training and evaluation (using scikit-learn and TensorFlow).',
        'Interactive charts and visualizations',      
      ],
      links: {
        demo: 'https://colab.research.google.com/drive/1hsSQyvfLFvYu0a9MfM8Sq7kzm8upF5iz?usp=sharing',
        github: 'https://github.com/Vedant-0102/CS-GO-Round-Win-ML'
      }
    },
    {
      id: 'Proj',
      name: 'DJ Studio',
      description: 'A modern web application designed for DJs to mix, play, and control music tracks in real time using dual decks and advanced audio controls.',
      tech: ['React', 'CSS Modules', 'Web Audio API', 'Media Session API'],
      about: 'DJ Studio is a feature-rich web app that lets users explore and mix music using dual decks. It includes real-time tempo, pitch, and volume adjustments, smart playlist management, and seamless transitions for a professional DJ experience.',
      features: [
        'Intuitive music playback controls (play, pause, seek, volume, mute)',
        'Smart music library with playlist and search functionality',
        'Real-time audio visualization and equalizer presets',
        'Dual-deck system with tempo, pitch, and volume control',
        'Seamless crossfading and performance-optimized interface'
      ],
      links: {
        demo: 'https://dj-studio.vercel.app/',
        github: 'https://github.com/Vedant-0102/DJ-Studio'
      }
    },    
    {
      id: 'Proj',
      name: 'Audio Visualizer',
      description: 'A project to visualize audio in real-time from audio files. This application provides graphical representations of audio signals, making it easier to understand and analyze sound.',
      tech: ['TypeScript', 'Tailwind CSS', 'Three.js', 'React', 'React Three Fiber'],
      about: 'Audio Visualizer is a modern web app built using React and Three.js that allows users to upload and visualize audio files in real-time. It supports multiple visualization modes and formats, offering an engaging way to interact with sound.',
      features: [
        'Real-time audio visualization',
        'Support for various audio formats',
        'Multiple visualization styles (waveform, spectrum, etc.)',
        'User-friendly interface'
      ],
      links: {
        demo: 'https://audio-visualizer-gules.vercel.app/',
        github: 'https://github.com/Vedant-0102/Audio-Visualizer'
      }
    },  
    {
      id: 'Proj',
      name: 'To Do Mobile App',
      description: 'Cross-platform mobile app using Flutter',
      tech: ['Flutter', 'Hive'],
      about: 'This cross-platform mobile application allowing user to track their daily tasks.',
      features: [
        'Cross-platform (iOS & Android)',
        'Add, edit, and delete tasks',
        'Mark tasks as completed',
        'Persistent storage using Hive database',
        'Interactive UI with a modern design'
      ],
      links: {
        github: 'https://github.com/Vedant-0102/To-Do-App-flutter'
      }
    },
    {
      id: 'Proj',
      name: 'Route Optimizer Waylign',
      description: 'An intelligent route optimization tool with interactive visualizations, powered by Dijkstras algorithm.',
      tech: ['TypeScript', 'React', 'Tailwind'],
      about: 'Route Optimizer is an intelligent trip planning platform that helps you find the most efficient route between multiple destinations.',
      features: [
        'Interactive Map-Based UI: Search for and add multiple real-world locations with an intuitive interface',
        'Location Search: Integrated with OpenStreetMaps Nominatim API for global location search',
        'Custom Network Creation: Design your own network of nodes and connections',
        'Step-by-Step Visualization: Watch how the algorithm explores the graph to find the optimal solution'
      ],
      links: {
        demo: 'https://waylign.vercel.app/',
        github: 'https://github.com/Vedant-0102/Route-Optimiser'
      }
    },
    {
      id: 'Proj',
      name: 'Sorting Visualizer',
      description: 'Visually demonstrates how various sorting algorithms work through real-time animated bar charts. Ideal for students, educators, and developers to understand sorting logic.',
      tech: ['Python', 'Matplotlib'],
      about: 'Sorting Visualizer is a Python-based desktop application that showcases the working of popular sorting algorithms. It uses Matplotlib to animate the sorting process, making complex logic easier to grasp through interactive visuals.',
      features: [
        'Real-time animated bar chart visualizations',
        'Supports multiple sorting algorithms like Bubble, Merge, and Quick Sort',
        'Live stats including time taken and number of swaps'
      ],
      links: {
        demo: 'https://sorting-algo.streamlit.app/',
        github: 'https://github.com/Vedant-0102/Sorting-Algo-Web'
      }
    },
    {
      id: 'Proj',
      name: 'Charts Generator',
      description: 'An intuitive web app for creating interactive charts and visualizations with ease.',
      tech: ['React', 'CSS'],
      about: 'Charts Generator is a simple yet powerful tool that enables users to visualize their data through a variety of customizable chart types with just a few clicks.',
      features: [
        'Multiple Chart Types: Line, Bar, Pie, and Doughnut charts',
        'Customizable Labels and Titles: Personalize your charts for clarity and impact',
        'Interactive Legends: Easily interpret data points by toggling chart elements',
        'User-Friendly Interface: Designed for quick and effortless chart creation'
      ],
      links: {
        demo: 'https://charts-gen.vercel.app/',
        github: 'https://github.com/Vedant-0102/Charts-Gen' 
      }
    },
      {
        id: 'Proj',
        name: 'Text Editor',
        description: 'A modern, lightweight text editor built with React that offers a clean interface and powerful editing capabilities.',
        tech: ['React', 'Vite', 'CSS Modules'],
        about: 'This project provides an intuitive writing environment with essential text manipulation features, making it perfect for note-taking, coding, or general writing tasks.',
        features: [
          'Clean, Minimalist Interface',
          'Real-time Text Formatting',
          'Auto-save Functionality',
          'Customizable Themes',
          'Export Options',
          'Responsive Design'
        ],
        links: {
          demo: 'https://text-editor-lovat-nine.vercel.app/',
          github: 'https://github.com/Vedant-0102/Text-Editor'
        }
      },      
      {
        id: 'Proj',
        name: 'Pixel Art Generator',
        description: 'A modern, interactive Pixel Art Generator built with React. Create stunning pixel art with customizable grid sizes and color palettes.',
        tech: ['React', 'CSS'],
        about: 'Users can draw pixel art on a grid canvas, select colors, switch between paint and erase modes, and export their artwork.',
        features: [
          'Custom Grid Sizing (Up to 35×35)',
          'Color Picker with Hex Code Support',
          'Paint & Erase Modes',
          'Save as PNG',
          'Responsive Design'
        ],
        links: {
          demo: 'https://pixel-art-ko6s.vercel.app/',
          github: 'https://github.com/Vedant-0102/Pixel-Art'
        }
      },
      {
        id: 'Proj',
        name: '2D Raycasting Maze',
        description: 'This project simulates a raycasting-based rendering in a maze environment using a first-person perspective.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        about: 'Navigate a procedurally generated maze using raycasting to simulate depth. Includes mini-map and replay functionality.',
        features: [
          'First-person raycasting view',
          'Maze generation algorithm',
          'Real-time mini-map',
          'Play Again and Restart options'
        ],
        links: {
          demo: 'https://ray-casting-maze.vercel.app/',
          github: 'https://github.com/Vedant-0102/RayCasting-Maze'
        }
      },
      {
        id: 'Proj',
        name: 'Sudoku Solver',
        description: 'An interactive web-based Sudoku puzzle solver built with React and Vite.',
        tech: ['React', 'CSS'],
        about: 'Solve or generate Sudoku puzzles with visualized steps, smooth animations, and a responsive modern interface.',
        features: [
          'Interactive 9×9 grid with real-time validation',
          'Step-by-step backtracking solver visualization',
          'Difficulty-based puzzle generator',
          'Modern UI with 3×3 highlighting and animations',
          'Responsive design with keyboard and touch support'
        ],
        links: {
          demo: 'https://sudoku-solver-pearl.vercel.app/',
          github: 'https://github.com/Vedant-0102/Sudoku-Solver'
        }
      },
      {
        id: 'Proj',
        name: 'Colour Picker',
        description: 'A simple and intuitive colour picker built with React.',
        tech: ['React', 'CSS'],
        about: 'Pick colors from a palette or image, view their RGB values, and copy them to your clipboard with ease.',
        features: [
          'Upload an image to extract colors',
          'Choose from a wide range of colors or create custom ones',
          'Real-time RGB value display',
          'One-click RGB copy to clipboard',
          'Clean and user-friendly interface'
        ],
        links: {
          demo: 'https://colour-picker-flax.vercel.app/',
          github: 'https://github.com/Vedant-0102/Colour-Picker'
        }
      },         
      {
        id: 'Proj',
        name: 'Box Shadow Generator',
        description: 'This application allows web developers and designers to visually craft perfect box shadows and easily copy the generated CSS code.',
        tech: ['React', 'CSS'],
        about: 'Interactive tool for creating and customizing CSS box shadows with real-time preview.',
        features: [
          'Interactive Controls : Adjust all box shadow properties with intuitive sliders',
          'Horizontal and vertical shadow positioning',
          'Blur and spread radius',
          'Border radius control, Shadow opacity settings',
          'Real-time Preview : See your changes instantly reflected in the preview box',
          'Copy to Clipboard : One-click copy functionality for the generated CSS code'
        ],
        links: {
          demo: 'https://box-shadow-gen.vercel.app/',
          github: 'https://github.com/Vedant-0102/Box-Shadow-Gen'
        }
      },
      {
        id: 'Proj',
        name: 'Gradient Generator',
        description: 'A modern, interactive tool for creating beautiful CSS gradients with real-time preview. Built with React.',
        tech: ['React', 'CSS'],
        about: 'Interactive tool for generating and customizing linear CSS gradients with live preview and easy copy functionality.',
        features: [
          'Interactive Color Pickers: Choose start and end colors with a visual color picker',
          'Multiple Gradient Directions: Select from 8 gradient directions (Top-Bottom, Bottom-Top, Left-Right, Right-Left, Diagonals)',
          'Real-time Preview: Instantly see how your gradient looks',
          'One-Click Copy: Copy the generated CSS code to clipboard',
          'Responsive Design: Optimized for desktop and mobile use',
          'Modern UI: Smooth transitions and clean layout'
        ],
        links: {
          demo: 'https://gradient-gen-ten.vercel.app/',
          github: 'https://github.com/Vedant-0102/Gradient-Gen'
        }
      },
      {
        id: 'Proj',
        name: 'Glassmorphism Generator',
        description: 'A sleek tool for crafting customizable glassmorphism effects with live preview and instant CSS output. Built with React.',
        tech: ['React', 'CSS'],
        about: 'Glassmorphism Generator is a tool for creating customizable glassmorphism effects with real-time preview and easy CSS code copy functionality.',
        features: [
          'Real-time Preview: Live visualization of glassmorphism effect as you adjust parameters',
          'Customizable Properties: Adjust blur (0–60px), background opacity (0–50%), tint color, and border width (0–8px)',
          'CSS Code Generation: Instantly generates cross-browser compatible CSS code',
          'One-Click Copy: Easy copy-to-clipboard functionality for the generated CSS',
          'Responsive Design: Optimized for desktop and mobile use',
          'Modern UI: Clean interface with smooth animations and transitions'
        ],
        links: {
          demo: 'https://glassmorphism-gen.vercel.app/',
          github: 'https://github.com/Vedant-0102/Glassmorphism-Gen'
        }
      },
      {
        id: 'Proj',
        name: 'Delivery Route Optimization',
        description: 'A Streamlit app that finds the optimal delivery route using the Traveling Salesperson Problem approach.',
        tech: ['Python'],
        about: 'Users can input delivery points and distances to get the shortest route and total distance calculated.',
        features: [
          'Add multiple locations',
          'Input custom distances',
          'Optimal route calculation',
          'Starting point selection'
        ],
        links: {
          demo: 'https://delivery-optimiser.streamlit.app/',
          github: 'https://github.com/Vedant-0102/Delivery-Optimiser'
        }
      },
      {
        id: 'Proj',
        name: 'Falling Sand Simulator',
        description: 'A simple interactive falling sand simulation using real-time physics.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        about: 'Particles fall and interact with the environment based on gravity and properties. Supports visual changes on interaction.',
        features: [
          'Real-time physics updates',
          'Customizable sand behavior',
          'Interactive environment'
        ],
        links: {
          demo: 'https://sand-falling-sim.vercel.app/',
          github: 'https://github.com/Vedant-0102/Sand-Falling-Sim'
        }
      },
      {
        id: 'Proj',
        name: 'Minesweeper Game',
        description: 'A modern version of Minesweeper built with React, featuring animations and game state tracking.',
        tech: ['React', 'CSS'],
        about: 'Click tiles to reveal numbers or mines. Use logic to win and track your time and score.',
        features: [
          '9×9 grid with 10 mines',
          'Flagging and real-time feedback',
          'Win/loss detection with animations',
          'Restart and new game support'
        ],
        links: {
          demo: 'https://mine-sweeper-liart.vercel.app/',
          github: 'https://github.com/Vedant-0102/MineSweeper'
        }
      },
      {
        id: 'Proj',
        name: '15 Puzzle Game',
        description: 'Slide tiles in a 4×4 grid to arrange numbers in order. Track moves and time to solve the puzzle.',
        tech: ['React', 'CSS'],
        about: 'An elegant version of the classic 15 puzzle with smooth animations and real-time tracking.',
        features: [
          'Interactive sliding tiles',
          'Move counter and timer',
          'Win detection and feedback',
          'Smooth tile transitions'
        ],
        links: {
          demo: 'https://15-puzzle-two.vercel.app/',
          github: 'https://github.com/Vedant-0102/15Puzzle'
        }
      },
      {
        id: 'Proj',
        name: 'Tetris',
        description: 'A classic Tetris game built with React and Vite, featuring modern visuals and responsive design.',
        tech: ['React', 'CSS'],
        about: 'Stack blocks, clear lines, and earn points in this responsive and fast-paced Tetris implementation.',
        features: [
          'Touch and keyboard controls',
          'Level progression with speed increase',
          'Preview of next tetromino',
          'Game stats tracking'
        ],
        links: {
          demo: 'https://tetris-lovat-sigma.vercel.app/',
          github: 'https://github.com/Vedant-0102/Tetris'
        }
      },
      {
        id: 'Proj',
        name: 'Breakout Game',
        description: 'Classic Breakout arcade game built with React.',
        tech: ['React', 'CSS'],
        about: 'Implementation of the classic Breakout arcade game built with React. This game features smooth animations, responsive controls, and an engaging user interface.',
        features: [
          'Responsive Controls – Smooth paddle movement via mouse, touch, and keyboard for seamless gameplay across devices.',
          'Dynamic Game Mechanics – Realistic ball physics, brick collision detection and win condition.',
          'Modern UI/UX – Gradient backgrounds, animated elements, game control buttons, and responsive layout with pop-up feedback.'
        ],
        links: {
          demo: 'https://breakout-plum.vercel.app/',
          github: 'https://github.com/Vedant-0102/Breakout'
        }
      },      
      {
        id: 'Proj',
        name: 'Connect 4',
        description: 'Fun Connect 4 Game.',
        tech: ['React'],
        about: 'A modern, visually appealing Connect 4 game built with React.',
        features: [
          ' Retro Pixel Art Theme (Inspired by arcade games)',
          ' Smooth Disc Drop Animation',    
        ],
        links: {
          demo: 'https://connect-4-sigma.vercel.app/',
          github: 'https://github.com/Vedant-0102/Connect-4'
        }
      },
      {
        id: 'Proj',
        name: 'T-Rex Runner',
        description: 'A recreation of Chrome\'s offline dinosaur game with increasing difficulty and score tracking.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        about: 'Dodge obstacles by jumping over them in this endless runner. Mobile-ready with growing speed challenge.',
        features: [
          'Endless runner with increasing speed',
          'Jump to avoid obstacles',
          'Score and high score tracking',
          'Responsive layout'
        ],
        links: {
          demo: 'https://trex-kappa.vercel.app/',
          github: 'https://github.com/Vedant-0102/Trex'
        }
      },
      {
        id: 'Proj',
        name: 'Maze Generator',
        description: 'Interactive maze generator using DFS with real-time visualization.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        about: 'Watch the depth-first search algorithm create a perfect maze step-by-step. Supports reset and new generation.',
        features: [
          'Real-time generation with animation',
          'DFS with recursive backtracking',
          'Interactive controls',
          'Visual feedback during generation'
        ],
        links: {
          demo: 'https://maze-gen-mocha.vercel.app/',
          github: 'https://github.com/Vedant-0102/Maze-Gen'
        }
      },
      {
        id: 'Proj',
        name: 'Student Report Card',
        description: 'A web app to manage students, courses, grades, and generate GPA-based report cards.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        about: 'Add students and courses, assign grades, and calculate GPA. Supports graduate and undergraduate types.',
        features: [
          'Add students and courses',
          'Assign grades and attendance',
          'GPA calculation with weighting',
          'Report generation with student details'
        ],
        links: {
          demo: 'https://student-report-card-sand.vercel.app/',
          github: 'https://github.com/Vedant-0102/Student-Report'
        }
      }
    ]

  return (
    <div className="p-4 h-full">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-2rem)]">
        {/* Project List */}
        <div className="bg-white/50 rounded-lg overflow-y-auto">
          <div className="p-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <FolderOpen size={18} className="text-yellow-600" />
              <span className="font-medium">Projects</span>
            </div>
          </div>
          <div className="p-2">
            {projects.map(project => (
              <div 
                key={project.id} 
                className={`flex items-center p-3 hover:bg-gray-200/50 rounded-md cursor-pointer ${selectedProject?.id === project.id ? 'bg-gray-200/70' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                <FolderOpen size={18} className="mr-3 text-yellow-600 flex-shrink-0" />
                <div>
                  <div className="font-medium">{project.name}</div>
                  <div className="text-xs text-gray-600 line-clamp-1">{project.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {}
        <div className="col-span-2 bg-white/50 rounded-lg overflow-hidden flex flex-col">
          {selectedProject ? (
            <div className="h-full flex flex-col">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'overview' ? 'border-b-2 border-blue-500' : ''}`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('tech')}
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'tech' ? 'border-b-2 border-blue-500' : ''}`}
                  >
                    Tech & Features
                  </button>
                  <button
                    onClick={() => setActiveTab('demo')}
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'demo' ? 'border-b-2 border-blue-500' : ''}`}
                  >
                    Demo
                  </button>
                </div>
              </div>
              
              <div className="p-6 overflow-auto flex-1">
                {activeTab === 'overview' && (
                  <>
                    <h2 className="text-2xl font-bold mb-3">{selectedProject.name}</h2>
                    <p className="text-gray-600 mb-4">{selectedProject.description}</p>
                    
                    {selectedProject.about && (
                      <div className="bg-white/60 p-4 rounded-lg mb-4">
                        <h3 className="font-medium mb-2">About This Project</h3>
                        <p className="text-sm">{selectedProject.about}</p>
                      </div>
                    )}
                  </>
                )}
                
                {activeTab === 'tech' && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/60 p-4 rounded-lg">
                        <h3 className="font-medium flex items-center gap-2 mb-3">
                          <Code size={18} />
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {selectedProject.features && (
                        <div className="bg-white/60 p-4 rounded-lg">
                          <h3 className="font-medium flex items-center gap-2 mb-3">
                            <Hash size={18} />
                            Key Features
                          </h3>
                          <ul className="list-disc pl-5 text-sm space-y-1">
                            {selectedProject.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </>
                )}
                
                {activeTab === 'demo' && (
                  <>
                    <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                    
                    <div className="bg-white/60 p-6 rounded-lg text-center">
                      <h3 className="font-medium mb-4">Project Links</h3>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        {selectedProject.links?.demo && (
                          <a 
                            href={selectedProject.links.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            <Globe size={18} />
                            Live Demo
                          </a>
                        )}
                        {selectedProject.links?.github && (
                          <a 
                            href={selectedProject.links.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                          >
                            <Github size={18} />
                            Source Code
                          </a>
                        )}
                      </div>
                      
                      {!selectedProject.links?.demo && !selectedProject.links?.github && (
                        <p className="text-gray-500">No demo or source code links available for this project.</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-500">
              <FolderOpen size={48} className="mb-4 opacity-40" />
              <p>Select a project to view its details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFolder;
