import FirstComponent from "./components/FirstComponent";
import SecondComponetn from "./components/SecondComponetn";

function sum(a, b) {
  return a+b; 
}

function App() {
  const array = ["Apple", "Banana", "Orange"];
  const student={
    name:"Shohan", 
    roll:"1904048", 
    emoji:"🙌", 
    fav_foods:["Biriani", "Kacchi", "Chicken Chap"], 
    fav_color:'red '
  }

  const products = [
    {
      product_id: 1, 
      name: "Bag", 
      color:["red ", "green "]
    },
    {
      product_id:2, 
      name:"shirt", 
      color:["yellow ", "blue "]
    },
  ];
  return (
    <>
      {/* <FirstComponent studentInfo = {student}/> */}
      <SecondComponetn passProduct = {products}/>
    </>
  );
}

export default App;
