import React from "react";
import {Backdrop,CircularProgress} from "@mui/material";

export default function Loading() {
  return (
    <div>
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
