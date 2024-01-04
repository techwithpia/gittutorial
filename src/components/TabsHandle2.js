import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Box, Grid } from '@mui/material';

function FilterCriteria() {
  const [profileName, setProfileName] = useState('');
  const [filters, setFilters] = useState([]);

  const addFilter = () => {
    setFilters([...filters, { fieldName: '', operation: '', value1: '', value2: '' }]);
  };

  const removeFilter = (index) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  const updateFilter = (index, field, value) => {
    const newFilters = [...filters];
    newFilters[index][field] = value;
    setFilters(newFilters);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Profile Name"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
          />
        </Grid>
      </Grid>

      <Box sx={{ my: 2 }}>
        <Button variant="contained" onClick={addFilter} color="primary">Add Filter</Button>
      </Box>

      {filters.map((filter, index) => (
        <Grid container spacing={2} key={index} alignItems="center">
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Field Name"
              value={filter.fieldName}
              onChange={(e) => updateFilter(index, 'fieldName', e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel>Operation</InputLabel>
              <Select
                value={filter.operation}
                label="Operation"
                onChange={(e) => updateFilter(index, 'operation', e.target.value)}
              >
                <MenuItem value={'='}>Equal</MenuItem>
                <MenuItem value={'!='}>Not equal</MenuItem>
                <MenuItem value={'<'}>Less than</MenuItem>
                <MenuItem value={'>'}>Greater than</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Value 1"
              value={filter.value1}
              onChange={(e) => updateFilter(index, 'value1', e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Value 2"
              value={filter.value2}
              onChange={(e) => updateFilter(index, 'value2', e.target.value)}
            />
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" color="secondary" onClick={() => removeFilter(index)}>Delete</Button>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default FilterCriteria;
