import "./globals.sass";

export const metadata = {
  title: "Many Papers",
  description: "Developed by Muhammad Jazib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
