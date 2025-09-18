import Banner from "./Components/Banner";
import ChooseTrees from "./Components/ChooseTrees/ChooseTrees";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <ChooseTrees></ChooseTrees>
      </main>
    </>
  );
}

export default App;
