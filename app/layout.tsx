// import '../index.css'

import Header from "./components/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
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
  <body>
    <Header/>
    <div id="root">{children}</div>

  </body>
</html>

    )
}