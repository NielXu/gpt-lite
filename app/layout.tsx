import './globals.css';
import StyledJsxRegistry from './registry';

export const metadata = {
  title: 'GPT Lite',
  description: 'A lightweight version of ChatGPT',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body><StyledJsxRegistry>{children}</StyledJsxRegistry></body>
    </html>
  )
}

export default RootLayout;
