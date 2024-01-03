import Experience from "@/components/main/Experience";
import ResumeMain from "@/components/main/ResumeMain";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <ResumeMain />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
