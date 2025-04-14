
import { useState, useEffect } from "react";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    hero: false,
    pillars: false,
    education: false,
    acceleration: false,
    distribution: false,
    achievements: false,
    cta: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "pillars",
        "education",
        "acceleration",
        "distribution",
        "achievements",
        "cta",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isElementVisible = rect.top < window.innerHeight * 0.75;
          setIsVisible((prev) => ({ ...prev, [section]: isElementVisible }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#111827] text-white">
      <ScrollToTop />
      {/* Hero Section */}
      <section
        id="hero"
        className={cn(
          "min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 opacity-0",
          isVisible.hero && "opacity-100"
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(31,41,55,0.95) 100%), url('/lovable-uploads/af998847-53c1-47f6-8da5-7fe858cc9a68.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#f4f0f5] via-[#c084fc] to-[#60a5fa]">
            Think Better. Move Faster. Create Smarter.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 text-[#c084fc]">
            A Bangalore-based startup solving the small but crucial problems startups face.
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            Rethink Systems builds smart solutions across education, acceleration, and content creation — 
            helping professionals and teams build with clarity and speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-[#a78bfa] hover:bg-[#9061f9] text-white px-6 py-3 rounded-md text-lg"
              onClick={() => scrollToSection("education")}
            >
              Explore Our Work
            </Button>
            <Button 
              className="bg-transparent hover:bg-[#1f2937] text-[#60a5fa] border border-[#60a5fa] hover:text-white px-6 py-3 rounded-md text-lg"
              onClick={() => scrollToSection("cta")}
            >
              Join the Community
            </Button>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section
        id="pillars"
        className={cn(
          "py-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 opacity-0",
          isVisible.pillars && "opacity-100"
        )}
        style={{
          background:
            "linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(31,41,55,0.95) 100%), url('/lovable-uploads/1a0d6ad6-b790-41b7-b058-eb4345955bf2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]">
            Our Pillars: What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-t-4 border-[#a78bfa] transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-[#a78bfa]">Innovation</h3>
              <p className="text-gray-300">
                We're constantly rethinking how professionals learn, build, and grow — 
                designing tools and systems for the modern world.
              </p>
            </div>
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-t-4 border-[#c084fc] transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-[#c084fc]">Acceleration</h3>
              <p className="text-gray-300">
                We help ideas turn into real impact, faster. Our methods are lean, 
                pragmatic, and execution-first.
              </p>
            </div>
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-t-4 border-[#60a5fa] transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-[#60a5fa]">Integrity</h3>
              <p className="text-gray-300">
                We believe in doing the right thing — always. Transparency, honesty, 
                and care are embedded in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Vertical Section */}
      <section
        id="education"
        className={cn(
          "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111827] to-[#1f2937] transition-opacity duration-1000 opacity-0",
          isVisible.education && "opacity-100"
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#a78bfa]">
                Upskill with Cohort-Based Courses
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                We offer cohort-based courses (CBCs) for professionals who want to grow 
                as product managers or strategic generalists.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Our programs emphasize critical thinking, decision-making, and community learning, 
                with 4 successful cohorts completed and our 5th currently running.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#a78bfa] hover:bg-[#9061f9] text-white px-6 py-3 rounded-md"
                  onClick={() => scrollToSection("cta")}
                >
                  Join the Community
                </Button>
                <Button 
                  className="bg-transparent hover:bg-[#1f2937] text-[#60a5fa] border border-[#60a5fa] hover:text-white px-6 py-3 rounded-md"
                  onClick={() => scrollToSection("cta")}
                >
                  Upskill with Us
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/892ca05b-b760-45e8-8a06-d58887442468.png" 
                  alt="Education vertical" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acceleration Vertical Section */}
      <section
        id="acceleration"
        className={cn(
          "py-20 px-4 sm:px-6 lg:px-8 bg-[#1f2937] transition-opacity duration-1000 opacity-0",
          isVisible.acceleration && "opacity-100"
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#c084fc]">
                Acceleration That Moves You Forward
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                We provide hands-on mentorship and playbooks for founders moving from 0 to 1, 
                designed specifically for early-stage startups needing clarity, speed, and support.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Our acceleration programs include strategic design sprints, GTM strategies, 
                and lean methodologies tailored to your unique needs.
              </p>
              <Button 
                className="bg-[#c084fc] hover:bg-[#a855f7] text-white px-6 py-3 rounded-md"
                onClick={() => scrollToSection("cta")}
              >
                Accelerate with Us
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/af998847-53c1-47f6-8da5-7fe858cc9a68.png" 
                  alt="Acceleration vertical" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Vertical Section */}
      <section
        id="distribution"
        className={cn(
          "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1f2937] to-[#111827] transition-opacity duration-1000 opacity-0",
          isVisible.distribution && "opacity-100"
        )}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#60a5fa]">
                Supercharge Content Creation with AI
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                Our AI video generation tools are built specifically for content creators and marketers, 
                with a focus on B2B use cases — especially designers and editors.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                We help teams produce campaign content faster, without sacrificing creativity 
                or quality in the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-[#60a5fa] hover:bg-[#3b82f6] text-white px-6 py-3 rounded-md"
                  onClick={() => scrollToSection("cta")}
                >
                  Create Faster
                </Button>
                <Button 
                  className="bg-transparent hover:bg-[#111827] text-[#a78bfa] border border-[#a78bfa] hover:text-white px-6 py-3 rounded-md"
                  onClick={() => scrollToSection("cta")}
                >
                  Supercharge Your Content
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/1a0d6ad6-b790-41b7-b058-eb4345955bf2.png" 
                  alt="Distribution vertical" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className={cn(
          "py-20 px-4 sm:px-6 lg:px-8 bg-[#111827] transition-opacity duration-1000 opacity-0",
          isVisible.achievements && "opacity-100"
        )}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#60a5fa]">
            Our Impact So Far
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-l-4 border-[#a78bfa] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2 text-[#a78bfa]">4 Cohorts completed</h3>
              <p className="text-gray-300">
                Successfully ran four cohorts of our signature programs with measurable outcomes.
              </p>
            </div>
            
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-l-4 border-[#c084fc] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2 text-[#c084fc]">100+ professionals upskilled</h3>
              <p className="text-gray-300">
                Helped over 100 professionals advance their careers and develop new capabilities.
              </p>
            </div>
            
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-l-4 border-[#60a5fa] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2 text-[#60a5fa]">Vibrant learning community</h3>
              <p className="text-gray-300">
                Built an active community of learners who continue to support each other.
              </p>
            </div>
            
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-l-4 border-[#a78bfa] transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl mb-4">🔁</div>
              <h3 className="text-xl font-bold mb-2 text-[#a78bfa]">Weekly events & support</h3>
              <p className="text-gray-300">
                Regular events, peer support sessions, and guest speaker appearances.
              </p>
            </div>
            
            <div className="bg-[#1f2937] rounded-lg p-8 shadow-lg border-l-4 border-[#c084fc] transform hover:-translate-y-2 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl mb-4">❤️</div>
              <h3 className="text-xl font-bold mb-2 text-[#c084fc]">95% alumni satisfaction</h3>
              <p className="text-gray-300">
                Extremely high satisfaction rate with strong referrals driving organic growth.
              </p>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="mt-16 bg-[#1f2937] rounded-lg p-8 shadow-lg">
            <p className="text-xl italic text-gray-300 mb-4">
              "Rethink Systems helped us clarify our product strategy and accelerate our path to market. 
              The combination of structured methodology and hands-on mentorship was exactly what we needed."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#a78bfa] rounded-full flex items-center justify-center text-white font-bold">
                SK
              </div>
              <div className="ml-4">
                <p className="font-bold text-white">Startup Founder</p>
                <p className="text-gray-400">B2B SaaS Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        className={cn(
          "py-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 opacity-0",
          isVisible.cta && "opacity-100"
        )}
        style={{
          background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#60a5fa]">
            Ready to Rethink Your Growth?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Whether you're a founder, creator, or builder — we're here to help you think better,
            move faster, and create smarter.
          </p>
          <Button 
            className="bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] hover:from-[#9061f9] hover:to-[#3b82f6] text-white px-8 py-4 rounded-md text-lg font-bold shadow-lg"
            onClick={() => window.location.href = "mailto:design@naum.systems"}
          >
            Let's Talk
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#111827] border-t border-[#1f2937]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                Rethink Systems
              </h2>
              <div className="flex items-center mt-2">
                <a href="mailto:design@naum.systems" className="text-gray-400 hover:text-[#a78bfa] mr-2">
                  design@naum.systems
                </a>
                <span className="text-gray-600 mx-2">|</span>
                <a href="https://rethinksystems.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#60a5fa]">
                  rethinksystems.in
                </a>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#a78bfa] transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#c084fc] transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#60a5fa] transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="mailto:design@naum.systems" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-[#1f2937] text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Rethink Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
