import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import { Button, TextField, TextareaAutosize } from "@mui/material";
import { connect } from "react-redux";

const Submit = (props) => {
  const router = useRouter();
  const code = router.query.value;
  const link = window.location.href;
  const [copied, setCopied] = useState(false);
  const [comment, setComment] = useState("");

  const sendComment = () => {
    router.push({
      pathname: "comment",
      query: {value: comment}
    })
  }

  return (
    <>
      <div className="container mt-20">
        {props.auth.user.userType !== "company" ?
        <div>
        <div className="text-green-700 text-center">
          <div className="font-bold text-xl">Thank You!</div>
          <div className="font-bold text-xl">
            Your progress has been submitted!
          </div>
        </div>
        <div className="text-green-700 text-center">
          Copy the link below to share with your interviewer.
        </div>
        <p
          style={{
            marginLeft: "600px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "block",
            overflow: "hidden",
            width: "20em",
          }}
          className="text-center"
        >
          {link}
        </p>
        <CopyToClipboard text={link} onCopy={() => setCopied({ copied: true })}>
          <button
            style={{
              marginLeft: "750px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px solid green",
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-10 mb-2 rounded"
          >
            {!copied ? <p>Copy to clipboard</p> : <p>Copied</p>}
          </button>
        </CopyToClipboard>
        <div style={{ padding: "20px" }}>
          <div className="font-bold text-xl">Your code:</div></div></div>: <div className="text-green-700 text-center">
          <div className="font-bold text-xl">The Developer's progress has been submitted</div> <h4>Their Code: </h4> </div>}
          <div>
          <pre className="font-sans hover:font-serif">{code}</pre>
        </div>
        {props.auth.user.userType == "company"? 
        <div>
        <h4 style={{ margin: "10px" }}>Type your Comment here</h4>
          {/* <TextareaAutosize label="Post your question here." value={question} onChange={(e)=> setQuestion(e.target.value)} floatingLabel={true} /> */}
          <TextField
            style={{ margin: "10px" }}
            fullWidth
            multiline
            label="Type your comment here."
            InputProps={{
              inputComponent: TextareaAutosize,
              rows: 3,
            }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button style={{ margin: "10px" }} onClick={sendComment} variant="contained">
          Post
        </Button>
        </div> : <div></div>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  server: state.server,
});

export default connect(mapStateToProps)(Submit);