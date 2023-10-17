import { UserButton, currentUser } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async () => {
  const user = await currentUser();
  const limitCount = await getApiLimitCount(user?.id);
  const isPro = await checkSubscription(user?.id);

  return (
    <div className="flex items-center p-4">
      <MobileSidebar limitCount={limitCount} isPro={isPro} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
