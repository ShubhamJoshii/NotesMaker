import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

function App() {
  const [Data ,setData] = useState([]);
 const dateShare = (data) =>{
  //  alert('Hello Jii');
  //  setData(data);
  //  alert(Data)
  setData((preValue)=>{
    return[
      ...preValue, data
    ]
  })
 }
 const Delete = (noteDID) => {
  // alert(noteDID);
  setData((oldData)=>{
    oldData.filter((Curr , index)=>{
        // return ((index !== noteDID)?console.log(Curr):console.log("Error"))
        return index !== noteDID;
      }       
    )
    })
 }
  return (
    <>
      <Header />
      <CreateNote tranfer={dateShare}/>
    <div className="allNotes">
      {
        Data.map((curr,index)=>{
          // return(<div><h1>{curr.Title}</h1> <p>{curr.WriteNote}</p></div>)
          return(
            <div>
              <Notes
              key={index}
              id={index}
              Title={curr.Title}
              Notes={curr.WriteNote}
              NoteDelete={Delete}
              />
            </div>
          )
        })
      }
    </div>
    {/* <Notes /> */}
      {/* <h1>{Data.Title}</h1>
      <h1>{Data.WriteNote}</h1> */}

      {/* <Notes /> */}
      <Footer />
    </>
  );
}

export default App;
