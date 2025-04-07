

export const metadata = {
  title: 'next js course app !',
  description: ' your first next.js app'
};


export default function PageLayout({ Children }) {
  return (
    <html lang="en">
      <body>{Children}</body>
    </html>
  );
}