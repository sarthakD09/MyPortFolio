
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useState } from "react";

const FloatingBox = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed w-full">
              <p>
                I’m an Electronics Engineering student with a passion for software development. I love building things — whether it’s a chat app, automation tool, or a website like this one.
              </p>
              <p>
                Currently exploring web development, Flutter, and AI projects <br />
Enjoy solving real-world problems through code
Inspired by clean UI/UX, secure systems, and open-source contributions. <br />
Outside coding, I enjoy chess, anime, and automating small life tasks just for fun.

              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">10+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">2+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div className={`h-96 ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <FloatingBox position={[-2, 1, 0]} color="#3b82f6" />
              <FloatingBox position={[2, -1, 0]} color="#8b5cf6" />
              <FloatingBox position={[0, 0, -2]} color="#ec4899" />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};
