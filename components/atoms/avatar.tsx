import Image from 'next/image';

interface AvatarProps {
  src?: string | null;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xlg';
  isOnline: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-lg',
  xlg: 'w-18 h-18 text-lg',
};

export default function Avatar({ src, name, size = 'md', isOnline }: AvatarProps) {

  return (
    <div className='absolute'>
    <div className={`relative items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold ${sizeClasses[size]} overflow-hidden`}>
        <Image
          src={src ?? "http://github.com/shadcn.png"}
          alt={name ?? "user"}
          fill
          className="rounded-full object-cover"
        />
    </div>
        <span className={
            `absolute bottom-0
            ${size === "sm" ? "size-2 right-1" : "size-3 right-2"}
            ${ isOnline ? "bg-green-600" : "bg-red-700"}
            rounded-full border-white`
        } />

    </div>
  );
}