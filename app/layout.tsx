import "./globals.css";
import { SidebarProvider } from "@/components/SidebarContext";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Fhenix Docs — Fully Homomorphic Encryption for Blockchain",
  description:
    "Developer documentation for Fhenix, the FHE-powered confidential blockchain platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <main
            style={{
              marginLeft: 272,
              paddingTop: 60,
              minHeight: "100vh",
            }}
            className="main-content-area"
          >
            {children}
          </main>

          <style>{`
                        @media (max-width: 768px) {
                            .main-content-area {
                                margin-left: 0 !important;
                            }
                        }
                    `}</style>
        </SidebarProvider>
      </body>
    </html>
  );
}