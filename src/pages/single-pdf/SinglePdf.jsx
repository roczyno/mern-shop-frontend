import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const SinglePdf = () => {
  const [pdf, setPdf] = useState([]);
  const PF = "https://file-server-api.onrender.com/";
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getPdf = async () => {
      const res = await axios.get(
        "https://file-server-api.onrender.com/api/pdf/find/" + id,
        {
          headers: {
            token: "Bearer " + localStorage.getItem("user").accessToken,
          },
        }
      );
      setPdf(res.data);
    };
    getPdf();
  }, [id]);
  const docs = [
    {
      uri: PF + pdf.file,
    },
  ];

  return (
    <div>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
    </div>
  );
};

export default SinglePdf;
