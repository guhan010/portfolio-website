import resume from "../pdfs/resume.pdf";

function PDFViewer() {
  // Replace this with your PDF URL

  return (
    <div>
      <iframe src={resume} style={{ width: "100%", height: "100vh" }}></iframe>
    </div>
  );
}

export default PDFViewer;
