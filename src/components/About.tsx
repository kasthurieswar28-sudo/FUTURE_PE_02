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
            <h2 className="font-display text-5xl md:text-6xl font-bold gradient-text">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Kasthuri Eswar, an AI and Prompt Engineering enthusiast passionate about building intelligent and practical solutions. I focus on designing effective prompts that help AI models generate accurate, useful, and creative outputs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I work with Python and C++, using Python for AI workflows, automation, and machine learning, while C++ strengthens my programming fundamentals and problem-solving skills. I have experience with machine learning concepts and natural language processing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm also exploring cloud computing to understand how AI applications are deployed and scaled in real-world environments. I'm actively seeking internship or freelance opportunities to learn, contribute, and grow in the AI field.
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
