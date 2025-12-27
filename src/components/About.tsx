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
                I am Kasthuri Eswar, an AI and Prompt Engineering enthusiast with a strong interest in building intelligent, practical, and scalable solutions. My work focuses on understanding how AI systems interpret instructions and designing effective prompts that produce accurate, meaningful, and creative outputs. I enjoy exploring artificial intelligence to solve real-world problems and continuously improve how humans interact with AI models.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I have hands-on experience with Python and C++, using Python extensively for AI workflows, automation, data analysis, and machine learning tasks, while C++ strengthens my core programming skills, logical thinking, and performance-oriented development. I actively work with concepts such as machine learning, natural language processing, and model fine-tuning to create reliable and efficient AI-driven solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alongside AI, I am learning cloud computing to understand how intelligent applications are deployed, managed, and scaled in production environments. My goal is to combine AI, prompt engineering, and cloud technologies to build end-to-end solutions that are not only innovative but also practical and impactful. I am eager to contribute through internships or freelance opportunities while continuously learning and growing in the AI domain.
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
