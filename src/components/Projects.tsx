import { ExternalLink, Github, Globe, Bot } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Student Management System',
    description: 'A web-based student management system designed to manage student records, attendance, and academic details efficiently. Built with a clean, responsive interface and backend logic to handle data securely, streamline workflows, and simplify administration for educational institutions.',
    tags: ['Python', 'Database Management', 'Web Development', 'CRUD Operations'],
    icon: Globe,
    gradient: 'from-primary to-accent',
  },
  {
    id: 2,
    title: 'AI Chatbot Assistant',
    description: 'An intelligent conversational AI assistant powered by advanced language models. Capable of understanding context, answering questions about skills and projects, and providing helpful guidance to visitors.',
    tags: ['NLP', 'Machine Learning', 'Python', 'API Integration'],
    icon: Bot,
    gradient: 'from-accent to-primary',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background shape */}
      <div className="floating-shape w-72 h-72 bg-primary/10 top-1/2 -right-36" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A showcase of my AI and development projects that demonstrate 
              creativity, technical skill, and problem-solving abilities.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project header with gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-20 h-20 text-white/80" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" />
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
