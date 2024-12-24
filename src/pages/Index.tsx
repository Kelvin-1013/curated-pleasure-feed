import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatButton } from "@/components/ChatButton";
import { FeedbackCarousel } from "@/components/FeedbackCarousel";
import { StartupCard } from "@/components/StartupCard";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

// Generate 100 virtual startup items
const startups = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Startup ${i + 1}`,
  description: `Innovative solution for ${['fintech', 'healthtech', 'edtech', 'AI', 'cleantech'][i % 5]} sector`,
  industry: ['Fintech', 'Healthtech', 'Edtech', 'AI', 'Cleantech'][i % 5],
  fundingStage: ['Seed', 'Series A', 'Series B', 'Growth'][i % 4],
  location: ['San Francisco', 'New York', 'London', 'Singapore', 'Berlin'][i % 5],
}));

const ITEMS_PER_PAGE = 12;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(startups.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentStartups = startups.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <Navbar>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </Navbar>
          <main className="flex-1 pt-16 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto py-8">
              <h1 className="text-4xl font-bold mb-8">Welcome to Unicorns Club</h1>
              <p className="text-xl text-muted-foreground mb-12">
                Connect with investors worldwide, build strong networks, and raise capital for your startup.
              </p>
              
              <FeedbackCarousel />

              <h2 className="text-3xl font-bold mt-16 mb-8">Featured Startups</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentStartups.map((startup) => (
                  <StartupCard key={startup.id} {...startup} />
                ))}
              </div>

              <div className="mt-8 mb-16">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {renderPaginationItems()}
                    
                    <PaginationItem>
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </main>
          <Footer />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <ChatButton />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <ChatWindow />
          </DialogContent>
        </Dialog>
      </div>
    </SidebarProvider>
  );
};

export default Index;