import { 
  MessageSquare, 
  Brain, 
  Languages, 
  Code, 
  Network, 
  Settings, 
  Zap, 
  BarChart3 
} from 'lucide-react';

const skills = [
  {
    icon: MessageSquare,
    name: 'Prompt Engineering',
    description: 'Crafting precise prompts for optimal AI responses',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Brain,
    name: 'Machine Learning',
    description: 'Building and training intelligent ML models',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Languages,
    name: 'Natural Language Processing',
    description: 'Processing and understanding human language',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Code,
    name: 'Python Programming',
    description: 'Advanced Python for AI and data science',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Network,
    name: 'Deep Learning',
    description: 'Neural networks and deep learning architectures',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Settings,
    name: 'Model Fine-Tuning',
    description: 'Optimizing pre-trained models for specific tasks',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Zap,
    name: 'AI Automation',
    description: 'Automating workflows with AI solutions',
    color: 'from-fuchsia-500 to-violet-600',
  },
  {
    icon: BarChart3,
    name: 'Data Analysis',
    description: 'Extracting insights from complex datasets',
    color: 'from-lime-500 to-green-600',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background shapes */}
      <div className="floating-shape w-80 h-80 bg-accent/10 -top-40 left-1/4" />
      <div className="floating-shape w-48 h-48 bg-primary/10 bottom-20 right-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Skills & Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Technical{' '}
              <span className="gradient-text">Proficiencies</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit of AI and development skills 
              that I bring to every project.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-card rounded-2xl border border-border card-hover overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
