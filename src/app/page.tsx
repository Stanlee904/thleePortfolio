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
            phone="010-XXXX-XXXX"
            imageUrl="/profile.jpg"
            github="dkxoxo12@naver.com"
            sns='https://www.instagram.com/dailyworkout377/'
          />

          <Introduction />

          <TechStack skills={skills} />
        </div>
      </div>
    </main>
  );
}
