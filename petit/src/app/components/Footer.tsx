'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, Map, MessageCircle, User } from 'lucide-react';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: '홈', href: '/', icon: Home },
    { label: '동네지도', href: '/map', icon: Map },
    { label: '채팅', href: '/chat', icon: MessageCircle },
    { label: '마이페이지', href: '/mypage', icon: User },
  ];

  return (
    <nav className="fixed max-w-[600px] mx-auto w-full bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center h-16 z-50">
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;
        const color = isActive ? '#EE9F44' : '#6B7280'; // Tailwind gray-500

        return (
          <button
            key={href}
            onClick={() => router.push(href)}
            className="flex flex-col items-center text-xs transition-colors duration-200"
          >
            <Icon color={color} size={24} />
            <span style={{ color }}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

    export default Footer;
