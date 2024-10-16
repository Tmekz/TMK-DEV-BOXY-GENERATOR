import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftContainer from "./components/LeftContainer";
import Visualisation from "./components/Visualisation/Visualisation";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap justify-center items-center flex-grow bg-gray-100 px-10 md:flex-nowrap">
        <LeftContainer />
        <Visualisation />
      </main>

      <Footer />
    </div>
  );
};

export default App;
