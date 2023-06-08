import { useState } from "react";
import {searchGiantBombCastByDate} from '../gb_searcher'

const options = ["2018-03", "2015-06", "2009-12"];


function DropdownForm() {
  const [selected, setSelected] = useState(options[0]);
  let previewText;
  const submit = () => {
    console.log(selected);
    console.log(searchGiantBombCastByDate(selected.split("-")[0],selected.split("-")[1]));
  };
  return (
    <form>
      <select 
       value={selected} 
       onChange={(e) => setSelected(e.target.value)}>
         {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
         ))}
      </select>
      <button type="button" onClick={submit}>
        Submit
      </button>
      <p>You selected {selected} </p>
      <p> {previewText}</p>
    </form>
  );
}
export default DropdownForm;