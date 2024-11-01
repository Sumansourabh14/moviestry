import UserSidebar from "@/components/bars/UserSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <main>
        <SidebarTrigger />
        <section className="flex flex-col items-center justify-between px-12">
          <section className="flex flex-col md:flex-row py-8">
            <section className="flex flex-col gap-8">{children}</section>
          </section>
        </section>
      </main>
    </SidebarProvider>
  );
}
