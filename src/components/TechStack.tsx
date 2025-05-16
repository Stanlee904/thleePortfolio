interface TechStackProps {
  skills: string[];
}

export default function TechStack({ skills }: TechStackProps) {
  return (
    <div className="bg-zinc-900 rounded-lg p-8 shadow-md border border-zinc-800">
      <h2 className="text-xl font-semibold border-b border-cyan-500 pb-2 mb-6 text-cyan-400 tracking-wide">Tech Skill</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-zinc-800 rounded-md text-gray-300 text-sm border border-zinc-700 hover:border-cyan-500 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
} 