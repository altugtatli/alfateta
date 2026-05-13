export const metadata = {
  title: "AlfaTeta",
  description:
    "AlfaTeta - Strategic Technology, AI and Digital Transformation",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}