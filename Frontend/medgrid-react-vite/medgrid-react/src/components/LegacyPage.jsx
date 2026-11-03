
import { useEffect, useState } from "react";

export default function LegacyPage({ file }) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Reset loading and error whenever the page changes
    useEffect(() => {

        document.title = "MedGrid";

        setLoading(true);
        setError(false);

    }, [file]);

    return (

        <main className="legacy-page">

            {/* Loading message */}
            {loading && !error && (
                <div className="legacy-loading">
                    Loading MedGrid...
                </div>
            )}

            {/* Error message */}
            {error && (
                <div className="legacy-error">
                    <h2>Page Not Found</h2>

                    <p>
                        Unable to load {file}.
                        Please check whether the HTML file exists
                        inside public/legacy/.
                    </p>

                    <button onClick={() => window.location.reload()}>
                        Reload Page
                    </button>
                </div>
            )}

            {/* Original HTML page */}
            <iframe
                key={file}
                className="legacy-frame"
                src={`/legacy/${file}`}
                title={`MedGrid ${file.replace(".html", "").replaceAll("-", " ")}`}
                onLoad={() => setLoading(false)}
                onError={() => {
                    setLoading(false);
                    setError(true);
                }}
                allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            />

        </main>

    );

}
