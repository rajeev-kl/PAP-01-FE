import React, { useState, useEffect } from 'react';
import Flag from 'react-flagkit';

const Autocomplete = ({ options = [], onChange = () => { }, selected = {}, clearVlaue, ...props }) => {
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [showOptions, setShowOptions] = useState(false)
  const [inputVal, setinputVal] = useState("")

  useEffect(() => {
    setinputVal("")
  }, [clearVlaue])


  const onInputChange = (e) => {
    const userInput = e.currentTarget.value;
    setFilteredOptions(options.filter(
      (optionName) =>
        optionName.country.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    ));
    setinputVal(e.currentTarget.value)
    setShowOptions(!e.currentTarget.value ? false : true)
  }

  const onClick = (option) => {
    setinputVal(option.country)
    setShowOptions(false)
    setFilteredOptions([])
    onChange(option)
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onChange(filteredOptions[0])
      setShowOptions(false)
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={inputVal}
        placeholder={props.placeholder}
      />
      {showOptions && selected &&
        <div className='options-list'>
          {filteredOptions.length && showOptions ?
            <ul className="options">
              {filteredOptions.map((option) => {
                let className;
                return (
                  <li className={className} key={option.country} onClick={() => onClick(option)}>
                    <Flag country={option.country_code} size={26} />
                    {option.country}
                  </li>
                );
              })}
            </ul>
            :
            <div className="no-options">
              <em>No Option!</em>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Autocomplete
