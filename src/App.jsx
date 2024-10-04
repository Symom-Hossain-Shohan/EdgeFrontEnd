import FirstComponent from "./components/FirstComponent";
import SecondComponetn from "./components/SecondComponetn";
import ThirdComponent from "./components/ThirdComponent";

function sum(a, b) {
  return a + b;
}

function App() {
  // const array = ["Apple", "Banana", "Orange"];
  // const student={
  //   name:"Shohan",
  //   roll:"1904048",
  //   emoji:"🙌",
  //   fav_foods:["Biriani", "Kacchi", "Chicken Chap"],
  //   fav_color:'red '
  // }

  // const products = [
  //   {
  //     product_id: 1,
  //     name: "Bag",
  //     color:["red ", "green "]
  //   },
  //   {
  //     product_id:2,
  //     name:"shirt",
  //     color:["yellow ", "blue "]
  //   },
  // ];

  const studentDetails = [
    {
      id: 1,
      name: "Shohan",
      age: 24,
    },
    {
      id: 2,
      name: "Anik",
      age: 25,
    },
    {
      id: 3,
      name: "Sajjad",
      age: 25,
    },
  ];
  return (
    <>
      {/* <FirstComponent studentInfo = {student}/> */}
      {/* <SecondComponetn passProduct = {products}/>
       */}

      <ThirdComponent studentDetails={studentDetails} />
    </>
  );
}

export default App;
