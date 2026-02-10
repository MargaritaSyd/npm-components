"use client";

import React from 'react';

interface HeaderProps {
  logo?: React.ReactNode;
  actions?: React.ReactNode;
  userName?: string;
  sticky?: boolean;
}

export const Header = ({ 
  logo, 
  actions, 
  userName, 
  sticky = true 
}: HeaderProps) => {
  return (
    <header className={`
      w-full bg-white border-b border-slate-200 px-6 py-3 
      flex items-center justify-between z-50
      ${sticky ? 'sticky top-0' : 'relative'}
    `}>
      {/* Lado Izquierdo: Logo o Marca */}
      <div className="flex items-center gap-2 font-bold text-xl text-slate-800">
        {logo || <span>MyBrand</span>}
      </div>

      {/* Lado Derecho: Usuario y Acciones */}
      <div className="flex items-center gap-4">
        {userName && (
          <span className="text-sm text-slate-600 hidden sm:block">
            Hola, <span className="font-semibold">{userName}</span>
          </span>
        )}
        <div className="flex items-center gap-2">
          {actions}
        </div>
      </div>
    </header>
  );
}