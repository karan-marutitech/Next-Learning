import Link from 'next/link';

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        <nav>
          <strong>{process.env.NEXT_PUBLIC_APP_NAME} &emsp;</strong>
          <Link href="/">Home &nbsp;</Link>
          <Link href="/expenses">Expenses</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
