import { redirectToSignIn } from "@clerk/nextjs";

import { currentProfile } from "@/lib/current-profile";
import { ServerSidebar } from "@/components/server/server-sidebar";

const ServerLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  if (!profile) {
    redirectToSignIn();
  }
  return (
    <div className="h-full relative">
      <div className="hidden md:flex h-full fixed w-60 z-20 flex-col inset-y-0">
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className="h-full md:pl-60 ">{children}</main>
    </div>
  );
};

export default ServerLayout;
