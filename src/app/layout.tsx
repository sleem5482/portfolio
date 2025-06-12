
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={"bg-cyan-900"}
      >
       {children}
        
      </body>
    </html>
  );
}
