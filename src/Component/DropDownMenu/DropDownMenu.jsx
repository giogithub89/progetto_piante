import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownMenu() {
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="dropdownMenu">
            <div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Città</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>TORINO</MenuItem>
                            <MenuItem value={20}>ASTI</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                            <MenuItem value={30}>ALESSANDRIA</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div>
            </div>

        </div>
    );
}