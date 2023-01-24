import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { classnames } from "../utils/general.js";
import { languageOptions } from "../constants/languageOptions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { defineTheme } from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import { useRouter } from "next/router";

const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;

const Landing = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [status, setStatus] = useState(0);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);
  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");
  const [outputValue, setOutputValue] = useState("");
  const [error, setError] = useState("");

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log("enterPress", enterPress);
      console.log("ctrlPress", ctrlPress);
    }
  }, [ctrlPress, enterPress]);
  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };

  const handleCompile = () => {
    console.log("Code: ", code);
    setProcessing(true);
    // const formData = {
    //   language_id: language.id,
    //   // encode source code in base64
    //   source_code: btoa(code),
    //   stdin: btoa(customInput),
    // };
    const data = {
      code: code,
      language: language.valueC,
      input: customInput,
    };
    // const options = {
    //   method: "POST",
    //   url: "https://judge0-ce.p.rapidapi.com",
    //   params: { base64_encoded: "true", fields: "*" },
    //   headers: {
    //     "content-type": "application/json",
    //     "Content-Type": "application/json",
    //     "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    //     "X-RapidAPI-Key": "d32636057amsh9de6490e645c8cbp10691ejsn85d1159da3be",
    //   },
    //   data: formData,
    // };

    axios
      .post("https://api.codex.jaagrav.in", data)
      .then(function (response) {
        console.log("res.data", response.data);
        setOutputValue(response.data.output);
        setStatus(response.data.status);
        setError(response.data.error);
        const token = response.data.token;
        checkStatus(token);
        setProcessing(false);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);

          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  };

  const checkStatus = async (token) => {
    // const options = {
    //   method: "GET",
    //   url: "https://judge0-ce.p.rapidapi.com" + "/" + token,
    //   params: { base64_encoded: "true", fields: "*" },
    //   headers: {
    //     "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    //     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    //   },
    // };
    // try {
    //   let response = await  axios.get("https://api.codex.jaagrav.in")
    //   let statusId = response.data.status?.id;
    //   // Processed - we have a result
    //   if (statusId === 1 || statusId === 2) {
    //     // still processing
    //     setTimeout(() => {
    //       checkStatus(token);
    //     }, 2000);
    //     return;
    //   } else {
    //     setProcessing(false);
    //     setOutputDetails(response.data);
    //     showSuccessToast(`Compiled Successfully!`);
    //     console.log("response.data", response.data);
    //     return;
    //   }
    // } catch (err) {
    //   console.log("err", err);
    //   setProcessing(false);
    //   showErrorToast();
    // }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const submit = () => {
    router.push({
      pathname: "/submit",
      query: {
        value: code,
      },
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        <div className="right-container text-white flex flex-shrink-0 w-[30%] flex-col">
          <div style={{ margin: "10px" }}>
            <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
              Output
            </h1>
            <div className="w-full h-56 bg-[#1e293b] p-5 rounded-md text-white font-normal text-sm overflow-y-auto">
              {outputValue}
            </div>
          </div>
          <div className="flex text-black flex-col items-end">
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
             <button
              onClick={handleCompile}
              disabled={!code}
              className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>
          </div>
          <div className="w-full m-5 h-16 bg-[#1e293b] p-5 rounded-md text-white font-normal text-sm overflow-y-auto">
          {status == 200 ? <h3>Status: {status}</h3> : <h3>Error: {error}</h3> }
          </div>
          <button
              style={{
                backgroundColor: "#04AA6D",
                border: "none",
                color: "white",
                padding: "20px",
                marginBottom: "20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
              }}
              onClick={submit}
              disabled={!code}
              className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}
            >
              Submit
            </button>
        </div>
        
      </div>
    </>
  );
};
export default Landing;
