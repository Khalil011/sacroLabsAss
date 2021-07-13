import React from "react";
const Settings = () => {
  //const [item, setItem] = useState(0);
  var sel = document.getElementById("demo1");
  var checklColumn = document.getElementById("flexChecklColumn");
  var checkrColumn = document.getElementById("flexCheckrColumn");
  var checkfWidth = document.getElementById("flexCheckfWidth");
  var checkljustify = document.getElementById("flexCheckljustify");
  var checkrjustify = document.getElementById("flexCheckrjustify");
  var checkcjustify = document.getElementById("flexCheckcjustify");
  /* const increment = () => {
    if (checklColumn.checked === true) {
      //setItem(item + 1);
      sel.style.fontSize = "80px";
    } else {
      sel.style.fontSize = "20px";
    }
  };*/
  //<p id="demo1">hi baby there</p>

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <div className="control-1">
        <p>Text Layout</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexChecklColumn"
            //onClick={increment}
          />
          <label class="form-check-label" for="flexChecklColumn">
            left Column
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckrColumn"
          />
          <label class="form-check-label" for="flexCheckrColumn">
            Right Column
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckfWidth"
          />
          <label class="form-check-label" for="flexCheckfWidth">
            Full width
          </label>
        </div>
      </div>
      <div className="control-2">
        <p>Text Justification</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckljustify"
          />
          <label class="form-check-label" for="flexCheckljustify">
            left justified
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckrJustify"
          />
          <label class="form-check-label" for="flexCheckrJustify">
            Right justified
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckcJustify"
          />
          <label class="form-check-label" for="flexCheckcJustify">
            center justified
          </label>
        </div>
      </div>
    </div>
  );
};
export default Settings;
