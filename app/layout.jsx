import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Product Showcase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
          <Link href="/">Home</Link> | <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
