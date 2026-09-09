import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export const TicketPreview = ({ file }: { file: string }) => {
    return (
        <section aria-label="Ticket preview" className="mt-5">
            <Document file={file}>
                <Page pageNumber={1} width={520}></Page>
            </Document>
        </section>
    );
};
