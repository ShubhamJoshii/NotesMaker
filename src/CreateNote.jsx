import react, { useState } from "react";
const CreateNote = (props) => {
  const [data, setData] = useState({
    Title: "",
    WriteNote: ""
  });
  const [Alldata, setAllData] = useState([]);
  const Data = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setData((preValue) => {
      if (name === "Title"){
        return {
          Title: value,
          WriteNote: preValue.WriteNote
        };
      } else {
        return {
          Title: preValue.Title,
          WriteNote: value
        };
      }
    });
  };

  const alldata = () => {
    setAllData(data)
    console.log(data)
    props.tranfer(data);
  };

  return (
    <div className="createnote">
      <input
        type="text"
        placeholder="Title"
        name="Title"
        id="title"
        onChange={Data}
        autoComplete="off"
      />
      <br />
      <textarea
        type="text"
        placeholder="Write a note...."
        name="WriteNote"
        id="WriteNote"
        onChange={Data}
      ></textarea>
      {/* <input type="text" name="WriteNote" 
      placeholder="Write a note...."
      id="WriteNote"
      onChange={Data} /> */}
      <br />
      <button onClick={alldata}>+</button>
      {/* <h1>{data.Title}</h1>
      <p>{data.WriteNote}</p> */}

      {/* {Alldata.map((curr) => {
        return <h1>{curr.Title}</h1>;
      })} */}
      {/* <h1>{Alldata.Title}</h1>
      <p>{Alldata.WriteNote}</p> */}

    </div>
  );
};

export default CreateNote;
