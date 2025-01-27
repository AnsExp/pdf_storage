import './resource/css/file-index.css';
import {pdfjs} from 'react-pdf';
import PdfComponent from "./resource/components/PdfComponent";
import {useState} from "react";
import pdf01 from './resource/files/01.pdf'
import pdf02 from './resource/files/02.pdf'
import pdf03 from './resource/files/03.pdf'
import pdf04 from './resource/files/04.pdf'
import pdf05 from './resource/files/05.pdf'
import pdf06 from './resource/files/06.pdf'
import pdf07 from './resource/files/07.pdf'
import pdf08 from './resource/files/08.pdf'
import pdf09 from './resource/files/09.pdf'
import pdf10 from './resource/files/10.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function App() {

    const [file_path, setFile_path] = useState('');

    function load_pdf(path) {
        if (path)
            setFile_path(path);
    }

    for (const item of document.getElementsByClassName('item-pdf')) {
        item.addEventListener('click', () => {
            for (const i of document.getElementsByClassName('item-pdf')) {
                if (i === item)
                    i.classList.add('link-selected');
                else
                    i.classList.remove('link-selected');
            }
        })
    }

    return (
        <div className="container my-5">
            <h1>PDF Storage</h1>
            <hr/>
            <div className={'items-container'}>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf01)}>File 01</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf02)}>File 02</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf03)}>File 03</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf04)}>File 04</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf05)}>File 05</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf06)}>File 06</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf07)}>File 07</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf08)}>File 08</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf09)}>File 09</a>
                <a href={'#'} className='item-pdf' onClick={() => load_pdf(pdf10)}>File 10</a>
            </div>
            <div className="col-10">
                <PdfComponent path_file={file_path}/>
            </div>
        </div>
    );
}

export default App;
