import React, { useEffect, useState } from "react";
import { apiSerice, username } from "../utils/Axios"
import { DetectRes } from "../utils/DetectClasses";
import DetectionOutput from "./Detection";
import { Navigate, useNavigate } from "react-router-dom";
import { log } from "console";
import { plainToInstance } from "class-transformer";
import { FertilizerRecommendModel } from "../utils/FertilizerClsses";
import FertilizerRec from "./Fertilizer"
import { CropRecommend } from "../utils/RecommendationClases";
import CropRec from "./Recommendation";

interface NavItem {
    title: string;
    component: React.ReactNode;
    icon: string;
}



// Components for each section
const HomeSection = () => (
    <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Welcome to the Home Section</h2>
            <p className="text-xl text-green-600">
                Explore the features that will help enhance your farming practices, improve crop health, and offer expert insights.
            </p>
        </div>

        {/* Section 1: Crop Disease Detection */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg mb-8 hover:bg-green-100 transition ease-in-out duration-300">
            <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/60" alt="Disease Detection Icon" className="w-16 h-16 object-cover" />
                <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Crop Disease Detection</h3>
                    <p className="text-green-700">
                        Use deep learning algorithms to detect crop diseases through images, enabling timely intervention and protection.
                    </p>
                </div>
            </div>
        </div>

        {/* Section 2: Insights */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg mb-8 hover:bg-green-100 transition ease-in-out duration-300">
            <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/60" alt="Insights Icon" className="w-16 h-16 object-cover" />
                <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Farm Insights</h3>
                    <p className="text-green-700">
                        Receive real-time insights based on weather patterns, soil health, and crop data to improve farm productivity.
                    </p>
                </div>
            </div>
        </div>

        {/* Section 3: Crop Recommendations */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg mb-8 hover:bg-green-100 transition ease-in-out duration-300">
            <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/60" alt="Crop Recommendations Icon" className="w-16 h-16 object-cover" />
                <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Crop Recommendations</h3>
                    <p className="text-green-700">
                        Get personalized crop suggestions based on your climate, soil type, and location to optimize yields.
                    </p>
                </div>
            </div>
        </div>

        {/* Section 4: Fertilizer Recommendations */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg mb-8 hover:bg-green-100 transition ease-in-out duration-300">
            <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/60" alt="Fertilizer Recommendations Icon" className="w-16 h-16 object-cover" />
                <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Fertilizer Recommendations</h3>
                    <p className="text-green-700">
                        Based on your soil's NPK values, get recommendations for the best fertilizers to optimize crop growth.
                    </p>
                </div>
            </div>
        </div>

        {/* Section 5: Educational Resources */}
        <div className="bg-green-50 p-6 rounded-lg shadow-lg mb-8 hover:bg-green-100 transition ease-in-out duration-300">
            <div className="flex items-center space-x-4">
                <img src="https://via.placeholder.com/60" alt="Educational Resources Icon" className="w-16 h-16 object-cover" />
                <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-2">Educational Resources</h3>
                    <p className="text-green-700">
                        Access videos, articles, and tutorials on best agricultural practices, pest management, and sustainable farming.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const InsightsSection = () => (
    <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Insights: Learn and Grow</h2>
            <p className="text-xl text-green-600">
                Stay updated with the latest trends in farming, best practices, and expert advice through videos and articles.
            </p>
        </div>

        {/* YouTube Videos Section */}
        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Educational YouTube Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video 1 */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* Video 2 */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* Video 3 */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video 3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* Video 4 */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video 4"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* Video 5 */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video 5"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                {/* Video 6 */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video 6"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

        {/* Articles Section */}
        <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Farming Articles</h3>
            <div className="space-y-6">
                {/* Article 1 */}
                <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition ease-in-out duration-300">
                    <h4 className="text-xl font-semibold text-green-800 mb-2">How to Improve Soil Fertility</h4>
                    <ul className="text-green-700 space-y-2">
                        <li>1. Use organic matter such as compost and manure to enrich the soil.</li>
                        <li>2. Practice crop rotation to maintain nutrient balance in the soil.</li>
                        <li>3. Use cover crops like clover to fix nitrogen and improve soil structure.</li>
                        <li>4. Apply organic fertilizers like bone meal and fish emulsion.</li>
                        <li>5. Avoid overworking the soil to maintain its natural structure.</li>
                        <li>6. Regularly test soil to understand its nutrient needs.</li>
                        <li>7. Use mulching to retain moisture and prevent soil erosion.</li>
                        <li>8. Minimize the use of chemical pesticides and fertilizers.</li>
                        <li>9. Incorporate green manures such as legumes to enhance soil fertility.</li>
                        <li>10. Implement no-till or reduced tillage methods to protect soil structure.</li>
                    </ul>
                </div>

                {/* Article 2 */}
                <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition ease-in-out duration-300">
                    <h4 className="text-xl font-semibold text-green-800 mb-2">Sustainable Farming Practices</h4>
                    <ul className="text-green-700 space-y-2">
                        <li>1. Use water-efficient irrigation methods like drip irrigation.</li>
                        <li>2. Avoid overuse of chemical fertilizers and pesticides.</li>
                        <li>3. Promote biodiversity by planting a variety of crops and maintaining natural habitats.</li>
                        <li>4. Focus on soil conservation to prevent erosion and degradation.</li>
                        <li>5. Utilize organic farming methods to reduce reliance on synthetic chemicals.</li>
                        <li>6. Practice integrated pest management (IPM) to control pests sustainably.</li>
                        <li>7. Use renewable energy sources like solar power for farm operations.</li>
                        <li>8. Reduce food waste by optimizing crop production and distribution.</li>
                        <li>9. Implement agroforestry practices to create diverse ecosystems.</li>
                        <li>10. Support fair trade practices and local farming communities.</li>
                    </ul>
                </div>

                {/* Article 3 */}
                <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition ease-in-out duration-300">
                    <h4 className="text-xl font-semibold text-green-800 mb-2">Dealing with Pest Infestation</h4>
                    <ul className="text-green-700 space-y-2">
                        <li>1. Identify pests early using regular crop monitoring.</li>
                        <li>2. Use natural predators like ladybugs to control pest populations.</li>
                        <li>3. Apply organic pest control methods such as neem oil.</li>
                        <li>4. Practice crop rotation to break pest cycles.</li>
                        <li>5. Introduce resistant crop varieties to minimize pest damage.</li>
                        <li>6. Use pheromone traps to monitor and control pest outbreaks.</li>
                        <li>7. Use physical barriers such as netting to prevent pest access.</li>
                        <li>8. Implement trap cropping to divert pests away from main crops.</li>
                        <li>9. Reduce pesticide use and focus on precision application techniques.</li>
                        <li>10. Educate farmers about proper pest management strategies and biological control methods.</li>
                    </ul>
                </div>

                {/* Article 4 */}
                <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition ease-in-out duration-300">
                    <h4 className="text-xl font-semibold text-green-800 mb-2">Best Irrigation Techniques</h4>
                    <ul className="text-green-700 space-y-2">
                        <li>1. Use drip irrigation to deliver water directly to plant roots.</li>
                        <li>2. Implement rainwater harvesting systems to reduce reliance on mains water.</li>
                        <li>3. Use soaker hoses to water plants evenly and deeply.</li>
                        <li>4. Consider sprinkler irrigation for large areas with even water distribution.</li>
                        <li>5. Invest in moisture sensors to automate irrigation based on soil moisture levels.</li>
                        <li>6. Water early in the morning or late in the evening to minimize evaporation.</li>
                        <li>7. Group plants with similar water requirements together for efficient irrigation.</li>
                        <li>8. Mulch around plants to retain moisture and reduce water usage.</li>
                        <li>9. Avoid over-watering to prevent root rot and water wastage.</li>
                        <li>10. Monitor weather forecasts and adjust irrigation schedules accordingly.</li>
                    </ul>
                </div>

                {/* Article 5 */}
                <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 transition ease-in-out duration-300">
                    <h4 className="text-xl font-semibold text-green-800 mb-2">Climate Change and Farming</h4>
                    <ul className="text-green-700 space-y-2">
                        <li>1. Understand how shifting weather patterns impact crop growth cycles.</li>
                        <li>2. Adapt to climate variability by diversifying crop production.</li>
                        <li>3. Implement water conservation practices to cope with changing rainfall patterns.</li>
                        <li>4. Invest in drought-resistant crop varieties to withstand extreme weather events.</li>
                        <li>5. Use precision agriculture technologies to optimize resource use.</li>
                        <li>6. Consider agroforestry to increase climate resilience and reduce emissions.</li>
                        <li>7. Promote sustainable land management practices to preserve soil health.</li>
                        <li>8. Educate farmers about the impacts of climate change on agriculture.</li>
                        <li>9. Advocate for policies that support climate adaptation and sustainable farming.</li>
                        <li>10. Monitor carbon footprints and implement measures to reduce them on farms.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);



const DetectSection = () => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [result, setResult] = useState<DetectRes | null>(null)
    const [language, setLanguage] = useState("en")
    const [cropType, setCropType] = useState<string>("");
    const [types, setTypes] = useState<string[]>([])

    useEffect(() => {
        getTypes()
    }, [])


    const getTypes = async () => {
        try {
            let res = await apiSerice.get('/getTypes')
            console.log(res);
            setTypes(res.data.types)
        } catch { }
    }


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFile(file);
            setPreview(URL.createObjectURL(file)); // Set preview of the file
        }
    };

    // Handle file drag-and-drop
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        const file = event.dataTransfer.files[0];
        console.log(file, event)
        if (file) {
            setFile(file);
            setPreview(URL.createObjectURL(file)); // Set preview of the file
        }
    };

    const getResults = async () => {
        let form = new FormData()
        if (file)
            form.append('image', file)
        const jsonBlob = new Blob(
            [JSON.stringify({ imageName: file?.name, imageSize: file?.size, cropType: cropType === "" ? null : cropType })],
            { type: "application/json" }
        );
        form.append("data", jsonBlob);
        try {
            let res = await apiSerice.post("/detect", form, {
                headers: { 'Content-Type': "multipart/form-data" }
            })
            setResult(plainToInstance(DetectRes, res.data, {}))
        } catch { }
    }

    // Prevent default behavior for drag events (to allow dropping)
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleCropTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCropType(event.target.value);
    };

    return (
        <div className="container mx-auto p-6">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-green-800 mb-4">Crop Disease Detection</h2>
                <p className="text-xl text-green-600">
                    Upload a crop image to detect potential diseases.
                </p>
            </div>
            <div className="flex  items-center justify-center space-y-6 space-x-4">
                <button
                    onClick={() => setLanguage("en")}
                    className={`px-4 py-2 rounded-md ${language === "en" ? "bg-green-600 text-white" : "bg-white text-green-600"}`}
                >
                    English
                </button>
                <button
                    onClick={() => setLanguage("kn")}
                    className={`px-4 py-2 rounded-md ${language === "kn" ? "bg-green-600 text-white" : "bg-white text-green-600"}`}
                >
                    ಕನ್ನಡ
                </button>

            </div>

            {/* File Upload and Preview Section */}
            <div className="flex flex-col items-center justify-center space-y-6">
                <div
                    className="border-2 border-dashed border-green-500 p-10 w-full max-w-lg text-center rounded-lg cursor-pointer hover:border-green-700 transition"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <h3 className="text-xl font-semibold text-green-800">Drag and Drop or Select an Image</h3>
                    <p className="text-green-600 mb-4">Click or drag your crop image here</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileInput"
                    />
                    <label htmlFor="fileInput" className="bg-green-600 text-white p-2 rounded-md cursor-pointer">
                        Choose File
                    </label>
                </div>
                {/* Crop Type Dropdown */}
                <div className="flex justify-center mb-6">
                    <select
                        value={cropType}
                        onChange={handleCropTypeChange}
                        className="p-3 border-2 border-green-500 rounded-md"
                    >
                        <option value="">Select Crop Type</option>
                        {types.map((val) => {
                            return <option value={val}>{val}</option>
                        })}
                    </select>
                </div>

                {/* Image Preview */}
                {preview && (
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">Image Preview</h3>
                        <img src={preview} alt="Crop Preview" className="w-52 h-auto rounded-lg" />
                        <p className="text-green-600 mt-4">This is the uploaded crop image.</p>
                    </div>
                )}

                {/* Button to Submit for Detection */}
                {file && (
                    <div className="mt-6">
                        <button
                            className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
                            onClick={getResults}
                        >
                            Detect Disease
                        </button>
                    </div>
                )}
                {result == null ? <p></p> : <DetectionOutput detectionResult={result} language={language} />}
            </div>
        </div>
    );
}


const RecommendSection = () => {
    const [formData, setFormData] = useState({
        n: "",
        p: "",
        k: "",
        temperature: "",
        humidity: "",
        ph: "",
        rainfall: "",
    });

    const [result, setResult] = useState<CropRecommend | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAuto=async()=>{
        setLoading(true);
        try {
            // Replace with actual API call
            const response = await apiSerice.post("predict/crop", {
                params:false,
                data:formData
            });
            console.log(response);
            let data =plainToInstance(CropRecommend,response.data.recommend)
            setResult(data);
        } catch (error) {
            console.error("Error fetching recommendation:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async () => {
        setLoading(true);
        try {
            // Replace with actual API call
            const response = await apiSerice.post("predict/crop", {
                params:true,
                data:formData
            });
            console.log(response);
            let data =plainToInstance(CropRecommend,response.data.recommend)
            setResult(data);
        } catch (error) {
            console.error("Error fetching recommendation:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg space-y-6">
            {/* Section Header */}
            <h3 className="text-2xl font-semibold text-green-800">
                Crop Recommendation
            </h3>

            {/* Input Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { label: "Nitrogen (N)", name: "n", placeholder: "Enter Nitrogen value" },
                    { label: "Phosphorus (P)", name: "p", placeholder: "Enter Phosphorus value" },
                    { label: "Potassium (K)", name: "k", placeholder: "Enter Potassium value" },
                    { label: "Temperature (°C)", name: "temperature", placeholder: "Enter Temperature in Celsius" },
                    { label: "Humidity (%)", name: "humidity", placeholder: "Enter Humidity percentage" },
                    { label: "Soil pH", name: "ph", placeholder: "Enter Soil pH value" },
                    { label: "Rainfall (mm)", name: "rainfall", placeholder: "Enter Rainfall in mm" },
                ].map((field, index) => (
                    <div key={index}>
                        <label
                            htmlFor={field.name}
                            className="block text-green-700 font-semibold"
                        >
                            {field.label}
                        </label>
                        <input
                            type="number"
                            id={field.name}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="mt-1 p-2 w-full border border-green-500 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                        />
                    </div>
                ))}
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex">
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Get Recommendation"}
                </button>
                <button
                    className="bg-green-600 text-white px-4 py-2 mr-4 rounded-md hover:bg-green-700 transition"
                    onClick={handleAuto}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Auto Recommend"}
                </button>
            </div>

            {/* Result Section */}
            {result && (
                <CropRec crop={result} language="en"></CropRec>
            )}
        </div>
    );
}



const FertilizerSection = () => {
    const [nValue, setNValue] = useState<number | string>("");
    const [pValue, setPValue] = useState<number | string>("");
    const [kValue, setKValue] = useState<number | string>("");
    const [fertilizerRecommendation, setFertilizerRecommendation] = useState<FertilizerRecommendModel | null>(null);

    // Handle form submission
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            let res = await apiSerice.post("predict/fertilizer", {
                n: Number(nValue),
                p: Number(pValue),
                k: Number(kValue)
            })
            console.log(res);
            setFertilizerRecommendation(res.data.recommend)
        } catch { }
    };

    // Simple logic to recommend fertilizers based on N, P, K values (can be replaced with an API call)


    return (
        <div className="container mx-auto p-6">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-green-800 mb-4">Fertilizer Recommendation</h2>
                <p className="text-xl text-green-600">
                    Enter the N, P, and K values for fertilizer recommendation.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6">
                {/* Fertilizer Form */}
                <form onSubmit={handleFormSubmit} className="w-full max-w-lg flex flex-col space-y-6">
                    <div className="space-y-4">
                        {/* Nitrogen Input */}
                        <div className="flex flex-col">
                            <label htmlFor="nitrogen" className="text-green-800 font-semibold">Nitrogen (N)</label>
                            <input
                                id="nitrogen"
                                type="number"
                                value={nValue}
                                onChange={(e) => setNValue(e.target.value)}
                                placeholder="Enter Nitrogen value"
                                className="border-2 border-green-500 rounded-lg p-3 text-green-600"
                            />
                        </div>

                        {/* Phosphorus Input */}
                        <div className="flex flex-col">
                            <label htmlFor="phosphorus" className="text-green-800 font-semibold">Phosphorus (P)</label>
                            <input
                                id="phosphorus"
                                type="number"
                                value={pValue}
                                onChange={(e) => setPValue(e.target.value)}
                                placeholder="Enter Phosphorus value"
                                className="border-2 border-green-500 rounded-lg p-3 text-green-600"
                            />
                        </div>

                        {/* Potassium Input */}
                        <div className="flex flex-col">
                            <label htmlFor="potassium" className="text-green-800 font-semibold">Potassium (K)</label>
                            <input
                                id="potassium"
                                type="number"
                                value={kValue}
                                onChange={(e) => setKValue(e.target.value)}
                                placeholder="Enter Potassium value"
                                className="border-2 border-green-500 rounded-lg p-3 text-green-600"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
                    >
                        Get Fertilizer Recommendation
                    </button>
                </form>

                {/* Recommendation Display */}
                {fertilizerRecommendation && (
                    <FertilizerRec fertilizer={fertilizerRecommendation} language="en"></FertilizerRec>
                )}
            </div>
        </div>
    );
}

// Main Home Page
const HomePage: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("Home");
    const navigate = useNavigate()
    const navItems: NavItem[] = [
        { title: "Home", component: <HomeSection />, icon: "🏠" },
        { title: "Insights", component: <InsightsSection />, icon: "📊" },
        { title: "Detect", component: <DetectSection />, icon: "🔍" },
        { title: "Recommend", component: <RecommendSection />, icon: "💡" },
        { title: "Fertilizer", component: <FertilizerSection />, icon: "🌱" },
    ];

    const currentComponent = navItems.find((item) => item.title === activeSection)?.component;

    useEffect(() => {
        if (username == '') {
            navigate("/")
        }
    })
    return (
        <div className="bg-green-100 min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <nav className="bg-green-500 text-white p-4 flex justify-between items-center shadow-lg">
                <h1 className="text-xl font-bold">{username}</h1>
                <div className="flex space-x-4">
                    {navItems.map((item) => (
                        <button
                            key={item.title}
                            onClick={() => setActiveSection(item.title)}
                            className={`flex items-center space-x-1 hover:bg-green-600 px-3 py-2 rounded transition ${activeSection === item.title ? "bg-green-700" : ""
                                }`}
                        >
                            <span>{item.icon}</span>
                            <span className="hidden sm:inline">{item.title}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Dynamic Content Rendering */}
            <main className="flex-grow p-4">
                <section className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
                    {currentComponent}
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-green-500 text-white text-center p-4">
                <p>© 2024 Krishi App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
