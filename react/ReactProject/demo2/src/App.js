import Delete from "./components/axios/Delete";
import FetchUsingAxios from "./components/axios/FetchUsingAxios";
import Put from "./components/axios/Put";
import FetchData from "./components/fetch/FetchData";
import Form from "./components/form/Form";
import UseEffectHook from "./components/hooks/useEffect/UseEffectHook";
import UseRefHook from "./components/hooks/UseRefHook";

function App() {
  return (
    <div className="App">
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <FetchData /> */}
      {/* <FetchUsingAxios /> */}
      {/* <Form /> */}
      {/* <Put /> */}
      <Delete />
    </div>
  );
}

export default App;
