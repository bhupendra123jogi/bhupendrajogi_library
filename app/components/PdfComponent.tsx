'use client'

export const PDFViewer = ({ pdfUrl }: any) => {
  return (
    <div>
      <iframe src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`} width="99" height="100%" frameBorder="0" scrolling="auto"></iframe>
    </div>
  );
};