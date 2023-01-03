import React, { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import Link from "next/link";
import { Button, Box, boxDefault } from "@mui/material";
import { useRouter } from "next/router";

const Admin = () => {

    const [question, setQuestion] = useState("");
    const router = useRouter();

    const submit = () => {
        router.push({
            pathname: "/ide",
            query: {
                value: question
            }
        })
    }
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
          <h3>Tide</h3><br/>
        </Link>
        <br />
      </div>
      <Box
        m={10}
        //margin
        display="grid"
        justifyContent="center"
        alignItems="column"
        sx={boxDefault}
      >
      <div>
      <h4>Post your question here</h4>
        <TextareaAutosize label="Post your question here." value={question} onChange={(e)=> setQuestion(e.target.value)} floatingLabel={true} />
      </div>
      <Button onClick={submit} variant="contained">Post</Button></Box>
    </>
  );
};

export default Admin;
