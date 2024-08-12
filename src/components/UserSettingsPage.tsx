import React from 'react';
import { ChevronDown, Edit2, Bell, Shield } from 'lucide-react';

interface NavItemProps {
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, active = false }) => (
  <a
    href="#"
    className={`block py-2 px-4 rounded ${
      active ? 'bg-[#21262D]' : 'hover:bg-[#21262D]'
    }`}
  >
    {label}
  </a>
);

const UserSettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white font-sans">
      {/* ... остальной код ... */}
      <aside className="w-64 bg-[#161B22] p-4 border-r border-gray-700">
        {/* ... */}
        <nav className="space-y-2">
          <NavItem label="Главная" />
          <NavItem label="Настройки пользователя" active={true} />
          <NavItem label="Верификация" />
        </nav>
        {/* ... */}
      </aside>
      {/* ... остальной код ... */}
    </div>
  );
};

// ... остальные компоненты и экспорт ...

export default UserSettingsPage;