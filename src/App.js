import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FileUpload from './components/FileUpload';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <section className="hero-section">
            <h1>ATP File Processing</h1>
            <p>Upload your files for processing</p>
          </section>
          <section className="upload-section">
            <h2>Upload Your File</h2>
            <FileUpload />
          </section>
        </main>
        <ThemeToggle />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;