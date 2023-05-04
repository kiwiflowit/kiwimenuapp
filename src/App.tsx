import { Categories } from "./components/Categories/Categories";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductsContainer } from "./components/ProductsContainer/ProductsContainer";
import { DetailPage } from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
      data-w-id="15fa5a54-6e25-e684-ea47-c5ac257db286"
      className="inner-container main center-element"
    >
      <Categories />
      <ProductsContainer />
<DetailPage />
    </div>
    </div>
  );
}

export default App;
