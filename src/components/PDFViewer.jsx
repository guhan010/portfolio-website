import { Document, Page } from "react-pdf";

function PDFViewer() {
  const pdfURL = "public/pdfs/resume.pdf";
  // Replace this with your PDF URL

  return (
    <div>
      <h1>Resume</h1>
      <Document file={pdfURL}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFViewer;
