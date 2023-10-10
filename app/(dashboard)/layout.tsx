interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-full relative">
      <aside className="hidden h-full md:flex md:w-72  md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div>Hello sidebar</div>
      </aside>
      <main className="md:pl-72">
        Hello Content
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
