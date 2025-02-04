import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "ASMR",
  description: "Do ASMR para o ASMR",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
