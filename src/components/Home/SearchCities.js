import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getOutocompleteList } from "../../services/services";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import "./SearchCities.css";

const SearchCities = ({ setChosenCity }) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [city, setCity] = useState("");
  const [err, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const fetchCities = async (curCity) => {
    const [options, error] = await getOutocompleteList(curCity);
    if (options && options.length > 0) {
      setOptions(options);
    } else if (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setError(false);
    if (city !== "") {
      setLoading(true);
      fetchCities(city);
    } else {
      setOptions([]);
    }
  }, [city]);

  return (
    <div className="search-wrapper">
      <Autocomplete
        id="city-search-field"
        className="auto-complete-field"
        onChange={(option, value) => {
          setOpen(false);
          setChosenCity(value);
        }}
        getOptionSelected={(option, value) => option.Key === value.Key}
        open={open && options.length > 0}
        getOptionLabel={(option) => option.LocalizedName}
        options={options}
        loading={loading}
        onInputChange={(event, input) => {
          setOpen(true);
          setCity(input);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a city"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      {err && <Alert severity="error">fetch failed!</Alert>}
    </div>
  );
};

export default SearchCities;
