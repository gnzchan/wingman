import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
  children,
}) => {
  const limitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72  md:flex-col md:fixed md:inset-y-0 z-[10] bg-gray-900">
          <Sidebar limitCount={limitCount} isPro={isPro} />
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
