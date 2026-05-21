import React from 'react';
import '../Styles/docs.css';
import pdf from '../assets/letter_retirement.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;




const Docs = () => {

  const onButtonClick = () => {
      const pdfUrl = "../assets/letter_retirement.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "letter_retirement.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

  return (
    <div className='Docs'>
      <div className='test'>
          <h2 className='heading'> Retirement Letter </h2>
              <Document file={pdf} >
              <Page pageNumber={1} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              customTextRenderer={false}
              />
              <button className='button1' onClick={onButtonClick}>Download PDF</button>
              </Document>
      </div>

    
    </div>

  )
}

export default Docs
