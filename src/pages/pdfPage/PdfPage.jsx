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
              <img
                src="data:image/png;base64,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"
                style={{ cursor: "pointer" }}
              />
            </Link>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfPage;
