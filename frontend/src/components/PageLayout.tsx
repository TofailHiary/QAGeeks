import React, { ReactNode } from "react";
import { Header } from "components/Header";

export interface Props {
  children: ReactNode;
  title: string;
  subtitle?: string;
  transparentHeader?: boolean;
}

export const PageLayout = ({ children, title, subtitle, transparentHeader = false }: Props) => {
  return (
    <div className="min-h-screen pt-16">
      <Header transparent={transparentHeader} />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{title}</h1>
        {subtitle && <p className="text-center text-xl text-gray-600 mb-12">{subtitle}</p>}
        {children}
      </main>
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Al-Tofail Al-Hiary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
