import Image from 'next/image';

interface AvatarProps {
  src?: string | null;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-lg',
};

export default function Avatar({ src, name, size = 'md' }: AvatarProps) {

  return (
    <div className={`relative flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold ${sizeClasses[size]} overflow-hidden`}>
        <Image
          src={src ?? "http://github.com/shadcn.png"}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
    </div>
  );
}