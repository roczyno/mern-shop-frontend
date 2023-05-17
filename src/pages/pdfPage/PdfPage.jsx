import "./pdf-page.scss";
import Navbar from "../../components/navbar/Navbar";
import SendIcon from "@mui/icons-material/Send";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "downloadjs";

const PdfPage = () => {
  const [pdf, setPdf] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const PF = "http://localhost:5000/";
  useEffect(() => {
    const getAllPdf = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/pdf/find?search=${searchQuery}`
        );
        console.log(res.data);
        setPdf(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPdf();
  }, [searchQuery]);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/pdf/download/${id}`,
        {
          responseType: "blob",
        }
      );
      console.log(res.data);
      const split = path.split("/");
      const filename = split[split.length - 1];
      setErrorMsg("");
      return download(res.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg("Error while downloading file. Try again later");
      }
      console.log(error);
    }
  };

  return (
    <div className="pdfs">
      <Navbar />
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="pdfContainer">
        {searchQuery && pdf.length === 0 && (
          <p
            style={{
              color: "lightgray",
            }}
          >
            No Pdf's found for "{searchQuery}"
          </p>
        )}
        {pdf.map((item) => (
          <div className="pdf" key={item._id}>
            <Link
              to={`/pdf/${item._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="link"
            >
              <iframe
                src={PF + item.file}
                width="100%"
                height="5px"
                style={{ cursor: "pointer" }}
              ></iframe>

              <span>{item.title}</span>
              <p>{item.desc}</p>
              <div className="actions">
                <span>
                  <DownloadIcon
                    className="download"
                    onClick={() =>
                      downloadFile(item._id, item.file, item.file_mimetype)
                    }
                  />
                </span>
                <span>
                  <SendIcon className="send" />
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfPage;
