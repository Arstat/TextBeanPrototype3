import {
  Home,
  Search,
  User,
  Grid2X2,
  Hash,
  Users,
  ChevronDown,
  Plus,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

const servers = [
  {
    id: 1,
    name: 'Chat',
    image: '/src/img/whatsapp.png',
  },
  {
    id: 2,
    name: 'Gaming',
    image: '/src/img/telegram.png',
  },
  {
    id: 3,
    name: 'Music',
    image: '/src/img/insta.png',
  },
  {
    id: 4,
    name: 'Art',
    image: '/src/img/messenger.png',
  },
];

const channels = [
  {
    name: 'SERVER INFO',
    items: [
      { name: 'Serve Time: 0.05 UTC', icon: <Hash size={16} /> },
      { name: 'Members 69', icon: <Users size={16} /> },
    ],
  },
];

function ServerIcon({ image, active }: { image?: string; active?: boolean }) {
  return (
    <div className={cn('server-icon', active && 'active')}>
      {image ? (
        <img src={image} alt="server" />
      ) : (
        <Plus className="w-6 h-6 text-green-500" />
      )}
    </div>
  );
}

function ChannelSection({ name, items }: { name: string; items: any[] }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between px-4 mb-1">
        <span className="text-xs font-semibold text-gray-400 flex items-center gap-1">
          {name} <ChevronDown size={12} />
        </span>
      </div>
      {items.map((item) => (
        <div key={item.name} className="channel-section">
          {item.icon}
          <span className="text-sm">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <div className="servers-sidebar">
        <ServerIcon image="/src/img/home.png" />
        <div className="w-8 h-[2px] bg-white/10 rounded-full my-2" />
        {servers.map((server) => (
          <ServerIcon key={server.id} image={server.image} />
        ))}
        <ServerIcon />
      </div>

      <div className="main-content">
        <ScrollArea className="flex-1 px-2">
          <div className="py-4">
            {channels.map((section) => (
              <ChannelSection key={section.name} {...section} />
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="bottom-nav">
        <NavIcon icon={<Home size={24} />} active />
        <NavIcon icon={<Search size={24} />} />
        <NavIcon icon={<User size={24} />} />
        <NavIcon icon={<Grid2X2 size={24} />} />
      </div>
    </div>
  );
}

function NavIcon({
  icon,
  active,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return <div className={cn('nav-icon', active && 'active')}>{icon}</div>;
}
