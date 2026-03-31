import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div>
          <h1>Fhenix Docs</h1>

          <div style={{ display: "flex" }}>

            {/* LEFT SIDEBAR */}
            <div style={{ width: "30%" }}>
              <Sidebar />
            </div>

            {/* MAIN CONTENT */}
            <div style={{ width: "70%" }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}