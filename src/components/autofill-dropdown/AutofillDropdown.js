import { useState, useEffect } from "react";
import { IoIosArrowDropdownCircle, IoMdCloseCircle } from "react-icons/io";
import { ClickOutside } from "../";
import "./AutofillDropdown.scss";

const AutofillDropdown = ({ items, value, name, onSelect }) => {
  const [display, setDisplay] = useState(false);
  const [displayClear, setDisplayClear] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const upateInputValue = (e) => {
    const val = e.target.value || "";
    setInputValue(val);
    if (val.length) {
      setDisplay(true);
      setDisplayClear(true);
      setFilteredItems(() => items.filter((i) => i.name.includes(val)));
    } else {
      setDisplayClear(false);
    }
  };

  const selectItem = (itemValue) => {
    setInputValue(itemValue);
    setDisplay(false);
    onSelect(name, itemValue);
  };

  const clear = () => {
    setInputValue("");
    setDisplayClear(false);
    setFilteredItems(items);
  };

  const clickOutside = () => {
    setDisplay(false);
  };

  const inputClick = () => {
    if (inputValue.length) {
      setDisplayClear(true);
    }
  };

  return (
    <ClickOutside onOutsideClick={clickOutside}>
      <div className="Autofill__container">
        <div className="Autofill__input_container">
          <input
            type="text"
            size="25"
            name={name}
            onChange={(e) => upateInputValue(e)}
            value={inputValue}
            onClick={inputClick}
          />
          <span className="Autofill__clear">
            {displayClear && <IoMdCloseCircle onClick={() => clear()} />}
          </span>
        </div>
        <div>
          <IoIosArrowDropdownCircle onClick={() => setDisplay(!display)} />
        </div>
        {display && (
          <div className="Autofill__dropdown">
            {filteredItems &&
              filteredItems.map((item) => (
                <span key={item.name} onClick={() => selectItem(item.name)}>
                  {item.name}
                </span>
              ))}
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default AutofillDropdown;
