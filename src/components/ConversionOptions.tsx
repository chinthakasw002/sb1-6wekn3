import React from 'react';

interface ConversionOptionsProps {
  onFormatChange: (format: string) => void;
}

const ConversionOptions: React.FC<ConversionOptionsProps> = ({ onFormatChange }) => {
  const formats = [
    'JPEG', 'PNG', 'GIF', 'BMP', 'TIFF', 'SVG', 'WEBP', 'HEIF', 'ICO', 'PSD', 'PDF',
    'PBM', 'PGM', 'PNM', 'PPM', 'DNG', 'XCF', 'TGA', 'JPE', 'AVIF', 'HEIC', 'CPT',
    'INDD', 'APNG', 'MNG', 'RLE', 'SRW', 'ORF', 'NEF', 'CRW', 'ARW', 'KDC', 'PCT',
    'XBM', 'SVGZ', 'PAM'
  ];

  return (
    <div className="mt-4">
      <label htmlFor="format-select" className="block text-sm font-medium text-gray-700 mb-2">
        Select target format:
      </label>
      <select
        id="format-select"
        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => onFormatChange(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>Choose a format</option>
        {formats.map((format) => (
          <option key={format} value={format.toLowerCase()}>
            {format}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ConversionOptions;