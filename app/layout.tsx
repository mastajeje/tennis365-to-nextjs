import './global.scss';
import Footer from '../components/Footer/Footer';

import Header from '../components/Header/Header';
import NavBar from '../components/Navbar/NavBar';
import { AuthContext } from '../lib/Context';
import { useState } from 'react';




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [authState, setAuthState] = useState({    
        username: "",
        id: 0,
        isAdmin: 0,
        status: false,
      });

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        {/* <link rel="icon" href="%PUBLIC_URL%/tap-logo.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/localfood-icon.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}

        <title>Tennis365</title>
        {/* <!-- jQuery -->
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-1.12.4.min.js"
    ></script>
    <!-- iamport.payment.js -->
    <script
      type="text/javascript"
      src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
    ></script> */}
      </head>
      <body className="flex-container">
        <Header />

        <div id="root">
        <AuthContext.Provider value={{authState, setAuthState}}>
          <NavBar />
          {children}
          </AuthContext.Provider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
