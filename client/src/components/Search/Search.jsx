import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { toggleFilterState, changeSearchData } from '../../redux/actions';

import './styles.css';

function Search() {
  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState('all');
  const [searchData, setSearchData] = useState('');

  const handleChange = ({ target: { value } }) => {
    setFilterType(value);
    dispatch(toggleFilterState(value));
  };

  const searchDataChange = ({ target: { value } }) => {
    setSearchData(value);
    dispatch(changeSearchData(value));
  };

  return (
    <div className="menu__search-area search-area">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        value={searchData}
        onKeyUp={searchDataChange}
      >
        <TextField label="Текст поиска" variant="outlined" />
      </Box>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel>Фильтр</InputLabel>
        <Select
          value={filterType}
          onChange={handleChange}
          autoWidth
          label="find filter"
        >
          <MenuItem value="all">
            <em>Везде</em>
          </MenuItem>
          <MenuItem value="tags">Поиск по тегам</MenuItem>
          <MenuItem value="user_id">Поиск по автору</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Search;
