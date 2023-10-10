import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

import { LayoutProps } from "@/types/layout";

const DashboardLayout = async ({ children }: LayoutProps) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
