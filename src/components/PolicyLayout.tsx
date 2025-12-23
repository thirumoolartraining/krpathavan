import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface PolicyLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const PolicyLayout = ({ children, title, description }: PolicyLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            {description && (
              <p className="text-xl text-muted-foreground mb-8">{description}</p>
            )}
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PolicyLayout;
