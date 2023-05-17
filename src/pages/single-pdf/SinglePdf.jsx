import axios from "axios";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import { useLocation } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const SinglePdf = () => {
  const [pdf, setPdf] = useState([]);
  const PF = "http://localhost:5000/";
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getPdf = async () => {
      const res = await axios.get("http://localhost:5000/api/pdf/find/" + id);
      console.log(res.data);
      setPdf(res.data);
    };
    getPdf();
  }, [id]);
  const docs = [
    {
      url: PF + pdf.file,
      fileType: pdf.file_mimetype,
    },
  ];

  return (
    <div>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
    </div>
  );
};

export default SinglePdf;
