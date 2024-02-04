interface MainLayoutProps {
   children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
   return (
      <main className="mx-auto max-w-4xl px-5 py-8 text-white min-h-screen grid place-items-center  font-anek">
         {children}
      </main>
   );
};

export default MainLayout;
