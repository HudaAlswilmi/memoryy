import React, { useState ,useEffect } from "react";
import "./Geme.css";
export default function Geme() {
  const [memoryArr, setmemoryAarr] = useState([
    { id: 1, name: "1", url: "https://2u.pw/IZ1e3", hide: false },
    { id: 2, name: "1", url: "https://2u.pw/IZ1e3", hide: false },
    { id: 3, name: "2", url: "https://2u.pw/VtL38", hide: false },
    { id: 4, name: "2", url: "https://2u.pw/VtL38", hide: false },
    { id: 5, name: "3", url: "https://2u.pw/xUXCM", hide: false },
    { id: 6, name: "3", url: "https://2u.pw/xUXCM", hide: false },
    { id: 7, name: "4", url: "https://2u.pw/KaaNB", hide: false },
    { id: 8, name: "4", url: "https://2u.pw/KaaNB", hide: false },
    { id: 9, name: "5", url: "https://2u.pw/uD1zc", hide: false },
    { id: 10, name: "5", url: "https://2u.pw/uD1zc", hide: false },
    { id: 11, name: "6", url: "https://2u.pw/iLQRr", hide: false },
    { id: 12, name: "6", url: "https://2u.pw/iLQRr", hide: false },
    { id: 13, name: "7", url: "https://2u.pw/FcfuL", hide: false },
    { id: 14, name: "7", url: "https://2u.pw/FcfuL", hide: false },
    { id: 15, name: "8", url: "https://2u.pw/jEEpV", hide: false },
    { id: 16, name: "8", url: "https://2u.pw/jEEpV", hide: false },
    { id: 17, name: "9", url: "https://2u.pw/QCqYo", hide: false },
    { id: 18, name: "9", url: "https://2u.pw/QCqYo", hide: false },

  ]);
  const [counter, setCounter] = useState(1);
  const [currentOptions, setcurrentOptions] = useState(null);

  const handleCilick = (obj) => {
    const id = obj.id;
    let newArr = [...memoryArr];
    for (let i = 0; i < memoryArr.length; i++) {
      if (memoryArr[i].id === id) {
        newArr[i].hide = true;
      }
    }

    setmemoryAarr(newArr);

    if (counter % 2 === 1) {
      setcurrentOptions(obj);
    } else if (counter % 2 === 0) {
      if (obj.name === currentOptions.name) {
       
      }else{
        setTimeout(() => {
          
        let newArr = [...memoryArr];
    for (let i = 0; i < memoryArr.length; i++) {
      if (memoryArr[i].id === id || currentOptions.id === memoryArr[i].id) {
        newArr[i].hide = false;
      }
    }    setmemoryAarr(newArr);

  }, 400);


      }
    }



    setCounter(counter + 1);

  };
  const  cancelIdleCallback =()=>{
window.location.reload()
  }

  useEffect(() => {
    let newArr = [...memoryArr];
    const gemeArr=[]
    for(let i=0;i<memoryArr.length;i++){
        let rend= Math.floor(Math.random()*newArr.length)
            gemeArr.push(newArr[rend])
            newArr.splice(rend,1)
    }
    setmemoryAarr(gemeArr)
}, [])


  return (
    <>
      <h1 className="h1">Game Memory</h1>
      <div className="memory">
        {memoryArr.map((ele, i) => {
          if (ele.hide === true) {
            return (
              <div>
                <img className="cardimg" src={ele.url} />
              </div>
            );
          } else {
            return (
              <div  onClick={() => {
                handleCilick(ele);
              }}>
                <img
                  className="cardimg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBJ7Hpx3LuxDemMTPz2imAyfBpOeU2iZJVg&usqp=CAU"
                />
              </div>
            );
          }
        })}
      
      </div>
      <button className="but" onClick={()=>{cancelIdleCallback()}}> NEW GEME </button>
    </>
  );
}
