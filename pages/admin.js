import React, { useEffect, useState } from "react";
import { TextareaAutosize } from "@mui/material";
import Link from "next/link";
import { Button, Box, boxDefault } from "@mui/material";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";

const Admin = () => {
  const [question, setQuestion] = useState("");
  const router = useRouter();
  const userType = router.query.value;
  useEffect(() => {
    console.log("Router Query: ", userType);
    if (userType !== "premium") {
      router.push("/");
    }
  }, []);
  const submit = () => {
    router.push({
      pathname: "/ide",
      query: {
        value: question,
      },
    });
  };
  return (
    <>
      <div
        className="title"
        style={{
          display: "flex",
          marginBottom: "45px",
          justifyContent: "center",
          background: "#3e3535",
          color: "white",
        }}
      >
        <Link href="/">
          <h3 style={{fontSize:22}}>Tide</h3>
          <br />
        </Link>
        <br />
      </div>
      <Grid item sm={6} style={{ margin: "20px" }}>
        <div>
          <h4 style={{ margin: "10px" }}>Post your question here</h4>
          {/* <TextareaAutosize label="Post your question here." value={question} onChange={(e)=> setQuestion(e.target.value)} floatingLabel={true} /> */}
          <TextField
            style={{ margin: "10px" }}
            fullWidth
            multiline
            label="Post your question here."
            InputProps={{
              inputComponent: TextareaAutosize,
              rows: 3,
            }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <Button style={{ margin: "10px" }} onClick={submit} variant="contained">
          Post
        </Button>
      </Grid>
    </>
  );
};

export default Admin;
