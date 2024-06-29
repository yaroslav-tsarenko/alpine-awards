import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({ className = "" }) => {
  return (
    <div className={`item-row ${className}`}>
      <div className="row-separator" />
      <div className="spotify-ukwebp-parent">
        <img
          className="spotify-ukwebp-icon"
          alt=""
          src="/spotifyukwebp1@2x.png"
        />
        <div className="spotify-parent">
          <b className="spotify">Spotify</b>
          <b className="worth-usd-400">Worth USD $400</b>
        </div>
        <div className="frame-parent5">
          <div className="parent">
            <b className="b3">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="frame-parent6">
            <div className="plus-button-parent">
              <div className="plus-button">
                <img className="icon-plus" alt="" src="/iconplus.svg" />
              </div>
              <b className="b4">3</b>
              <input className="frame-input" type="checkbox" />
            </div>
            <FormControl
              className="group"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#1d1d1d",
                borderRadius: "10px",
                width: "100%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "Archivo",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="success" />
              <Select
                color="success"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/frame-1000002972-1.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <b className="b5">$120.00</b>
      </div>
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
};

export default ItemRow;
