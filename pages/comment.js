import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CopyToClipboard from "react-copy-to-clipboard";

const Comment = () => {
  const router = useRouter();
  const comment = router.query.value;
  const link = window.location.href;
  const [copied, setCopied] = useState(false);
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
          <h3 style={{ fontSize: 22 }}>Tide</h3>
          <br />
        </Link>
        <br />
      </div>
      <div className="container mt-20">
        <h3 className="text-center">Comments from the interviewer:</h3>
        <br />
        <div className="text-green-700 text-center">
          <pre>{comment}</pre>
        </div>
      </div>
      <div className="text-green-700 m-10 text-center">
          Copy the link below to share.
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
    </>
  );
};

export default Comment;
