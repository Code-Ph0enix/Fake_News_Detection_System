import { useState } from "react";
import axios from "axios";

// Define interfaces
interface PredictionResult {
  [model: string]: string;
}

const FakeNewsChecker = () => {
    const [text, setText] = useState<string>("");
    const [result, setResult] = useState<PredictionResult | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCheckNews = async () => {
        if (!text.trim()) return;
        setLoading(true);
        try {
            const response = await axios.post<PredictionResult>("http://127.0.0.1:5000/predict", { text });
            setResult(response.data);
        } catch (error) {
            console.error("Error checking news:", error);
        }
        setLoading(false);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Fake News Detector</h1>
            <textarea
                className="w-full md:w-2/3 p-3 border rounded-lg shadow-sm"
                rows={4}
                placeholder="Enter news text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-6 py-2 mt-3 rounded-lg hover:bg-blue-700"
                onClick={handleCheckNews}
                disabled={loading}
            >
                {loading ? "Checking..." : "Check News"}
            </button>

            {result && (
                <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold">Prediction Results:</h2>
                    <ul className="mt-2">
                        {Object.entries(result).map(([model, prediction]) => (
                            <li key={model} className="text-gray-700">
                                <strong>{model}:</strong> {prediction}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FakeNewsChecker;