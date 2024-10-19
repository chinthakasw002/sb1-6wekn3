import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ConversionOptions from './components/ConversionOptions';
import ConvertButton from './components/ConvertButton';
import { Download } from 'lucide-react';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [targetFormat, setTargetFormat] = useState<string>('');
  const [convertedImageUrl, setConvertedImageUrl] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setConvertedImageUrl(null);
  };

  const handleFormatChange = (format: string) => {
    setTargetFormat(format);
    setConvertedImageUrl(null);
  };

  const handleConvert = () => {
    if (selectedFile && targetFormat) {
      // Simulate conversion process
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          
          // Convert to the selected format (in this case, we're just changing the file extension)
          const convertedImageUrl = canvas.toDataURL(`image/${targetFormat}`);
          setConvertedImageUrl(convertedImageUrl);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Image Converter</h1>
        <FileUpload onFileSelect={handleFileSelect} />
        {selectedFile && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Selected file: {selectedFile.name}</p>
            <ConversionOptions onFormatChange={handleFormatChange} />
            <ConvertButton onClick={handleConvert} disabled={!targetFormat} />
          </div>
        )}
        {convertedImageUrl && (
          <div className="mt-4">
            <a
              href={convertedImageUrl}
              download={`converted_image.${targetFormat}`}
              className="flex items-center justify-center w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Converted Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;