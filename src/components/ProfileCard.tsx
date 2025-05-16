'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProfileCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  sns?: string;
  github?: string;
  imageUrl?: string;
}

export default function ProfileCard({
  name,
  role,
  email,
  phone,
  sns,
  github,
  imageUrl = '/profile.jpg'
}: ProfileCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-lg p-8 shadow-md border border-zinc-800">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold border-b border-cyan-500 pb-2 text-cyan-400 tracking-wide">Profile : Title</h2>

        <div className="flex items-start gap-6">
          <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-zinc-700">
            {!imageError ? (
              <Image
                src={imageUrl}
                alt={`${name}의 프로필 사진`}
                width={128}
                height={128}
                className="object-cover"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                <span className="text-gray-400 text-sm">No Image</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div>
              <p className="text-lg font-medium text-white">I AM</p>
              <p className="text-gray-300">{name}</p>
            </div>
            <div>
              <p className="text-gray-400">{role}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-white">_Contact</h3>
          <div className="space-y-2 text-gray-300">
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-white">_Channel</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-300">SNS:</span>
              <div className="flex-1 border-b border-zinc-700"></div>
              {sns && <span className="text-gray-300">{sns}</span>}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-300">GitHub:</span>
              <div className="flex-1 border-b border-zinc-700"></div>
              {github && <span className="text-gray-300">{github}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 