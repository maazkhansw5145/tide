import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useRouter } from "next/router";
const Submit = () => {
  const router = useRouter();
  const code = router.query.value;
  const link = window.location.href;
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="container mt-20">
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
          <div className="font-bold text-xl">Your code:</div>
          <pre className="font-sans hover:font-serif">{code}</pre>
        </div>
      </div>
    </>
  );
};

export default Submit;
