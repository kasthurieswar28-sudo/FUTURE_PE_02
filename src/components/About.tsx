import { Brain, Code, Lightbulb, Target } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Deep passion for artificial intelligence and machine learning technologies.',
  },
  {
    icon: Code,
    title: 'Problem Solver',
    description: 'Transforming complex challenges into elegant technical solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinker',
    description: 'Innovative approach to prompt engineering and AI model optimization.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Focused on delivering impactful results that exceed expectations.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background shape */}
      <div className="floating-shape w-64 h-64 bg-primary/10 top-20 -right-32" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Passionate About{' '}
              <span className="gradient-text">AI Innovation</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As an AI and Prompt Engineering Intern, I am dedicated to exploring the 
                frontiers of artificial intelligence. My journey involves mastering the art 
                of communicating with AI models to achieve precise, useful, and innovative outputs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I specialize in developing intelligent solutions using Python, machine learning 
                frameworks, and natural language processing techniques. My goal is to bridge 
                the gap between complex AI capabilities and real-world applications that benefit 
                users and businesses alike.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in deep learning and model fine-tuning, I am constantly 
                learning and adapting to stay at the cutting edge of AI technology. I am eager 
                to collaborate on projects that push boundaries and create meaningful impact.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 bg-card rounded-2xl border border-border card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
