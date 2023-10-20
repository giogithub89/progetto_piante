import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDownMenu({ cities, selectedCity, cityId, nome }) {
  const [city, setCity] = React.useState("");

  const handleChange = (event, inputValue) => {
    setCity(event.target.value);
    selectedCity(event.target.value);

    const c = inputValue.key.replace(".$", "");
    //console.log(c);
    cityId(c);
  };

  return (
    <div className="dropdownMenu">
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{nome}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="Age"
              onChange={handleChange}>
              {cities.map((city, index) => (
                <MenuItem key={index} value={city.name ? city.name : city}>
                  {city.name ? city.name : city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div></div>
    </div>
  );
}
