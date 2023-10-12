import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import StoreInitializer from "@/components/store-initializer";
import { useApiLimitCount } from "@/hooks/use-api-limit-count";
import { getApiLimitCount } from "@/lib/api-limit";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
  children,
}) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <>
      <StoreInitializer count={apiLimitCount} />
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72  md:flex-col md:fixed md:inset-y-0 z-[10] bg-gray-900">
          <Sidebar />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
