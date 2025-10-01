import React, { useState, useRef } from 'react';
import './FileUpload.css';

function FileUpload() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setSelectedFile(file);
    // File processing will be added later
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <div className="file-upload-container">
      <form
        className={`upload-form ${dragActive ? "drag-active" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="file-input"
          onChange={handleChange}
          ref={fileInputRef}
        />
        <label htmlFor="file-upload" className="upload-label">
          <div className="upload-content">
            <div className="upload-icon">📁</div>
            <p className="upload-text">
              {selectedFile 
                ? `Selected: ${selectedFile.name}`
                : "Drag and drop your file here or click to select"}
            </p>
            {!selectedFile && (
              <button 
                type="button" 
                className="upload-button"
                onClick={handleButtonClick}
              >
                Choose File
              </button>
            )}
            {selectedFile && (
              <div className="file-info">
                <p>Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                <p>Type: {selectedFile.type || 'Unknown'}</p>
              </div>
            )}
          </div>
        </label>
      </form>
    </div>
  );
}

export default FileUpload;