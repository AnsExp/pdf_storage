import {useState} from 'react';
import {Document, Page} from 'react-pdf';

function PdfComponent({path_file}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file={path_file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}/>
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default PdfComponent;
