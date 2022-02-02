import "./App.css";

export default function App() {
  const truck = [
    {
      name: "pandi",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuM_Jrc-6O5Ir90QLxK2ydF9pH4GcjBtuqw&usqp=CAU"
    },
    {
      name: "durai",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGKCnnswy93bYFPnJBKrJKX6xVbYZeOkAPg&usqp=CAU"
    }
  ];
  return (

    <div className="App">
     
      {truck.map((nm) => (
        <Welcome name={nm.name} src={nm.img} />
      ))}
    
    </div>

  );
}
 
// Welcome
function Welcome({ name, src }) {
  return (
    <div>
      <img src={src} />
      <h1>Hello {name}👀</h1>
    </div>
  );
}

//  this not html
// className
// jsx->
