import { useState } from 'react';
import { TicketPreview } from './TicketPreview';

export const TrainTicketPage = () => {
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);

    return (
        <main className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white max-w-[600px] w-full min-h-[600px] rounded-lg shadow">
                <div className="flex items-center gap-6 px-10 py-6 border-b border-gray-200">
                    <img
                        src="/oebb-logo.svg"
                        alt="ÖBB"
                        className="h-8 w-auto shrink-0"
                    />
                    <h1 className="text-2xl font-bold">Your train ticket</h1>
                </div>
                <div className="p-10">
                    <dl className="flex flex-col gap-1 my-2">
                        <div className="flex gap-2 text-lg text-[#222]">
                            <dt className="font-bold">Valid from:</dt>{' '}
                            <dd>August 19, 2026</dd>
                        </div>
                        <div className="flex gap-2 text-lg text-[#222]">
                            <dt className="font-bold">Directions:</dt>{' '}
                            <dd>Vienna, AT → Bratislava, SK</dd>
                        </div>
                        <div className="flex gap-2 text-lg text-[#222]">
                            <dt className="font-bold">Price:</dt>{' '}
                            <dd>€19.00</dd>
                        </div>
                    </dl>
                    <div className="mt-5 flex items-center gap-3">
                        <a
                            href="/ticket.pdf"
                            download="ticket.pdf"
                            aria-label="Download"
                            title="Download"
                            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                                aria-hidden="true"
                            >
                                <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                            </svg>
                        </a>
                        <button
                            aria-label="Preview"
                            title="Preview"
                            onClick={() =>
                                setIsPreviewVisible(!isPreviewVisible)
                            }
                            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 text-gray-500 shadow-sm hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                                aria-hidden="true"
                            >
                                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                                <circle cx="12" cy="12" r="2.5" />
                            </svg>
                        </button>
                    </div>
                    {isPreviewVisible && <TicketPreview file="/ticket.pdf" />}
                </div>
            </div>
        </main>
    );
};
