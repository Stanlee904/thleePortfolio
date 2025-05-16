import ProfileCard from '@/components/ProfileCard';
import TechStack from '@/components/TechStack';
import Introduction from '@/components/Introduction';

export default function Home() {
  const skills = ['VisualBasic', 'TS', 'React', 'C#', 'JAVA', 'SQL'];

  return (
    <main className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <ProfileCard
            name="이태희"
            role="Software Developer(jr)"
            email="thl3725@naver.com"
            phone="010-2126-3725"
            imageUrl="/profile.jpg"
          />

          <Introduction />

          <TechStack skills={skills} />
        </div>
      </div>
    </main>
  );
}
