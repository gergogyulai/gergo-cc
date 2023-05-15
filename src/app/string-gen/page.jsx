'use client'

import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { determineArticle } from "@/utils/articleDeterminator";
import toast, { Toaster } from 'react-hot-toast';


function Generator() {
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState(1);
    const [length, setLength] = useState(2);
    const [complexity, setComplexity] = useState({ lowercase: true, uppercase: false, numbers: false, specialChars: false });
    const [result, setResult] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    const copied = () => toast.success('Copied Successfully!')

    const generateString = () => {
      const charset = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        specialChars: '!@#$%^&*(){}[]=<>/,.'
      };

      let possibleChars = '';
      Object.keys(complexity).forEach((key) => {
        if (complexity[key]) {
          possibleChars += charset[key];
        }
      });

      let generatedString = '';
      for (let i = 0; i < length; i++) {
        generatedString += possibleChars[Math.floor(Math.random() * possibleChars.length)];
      }

      setResult(generatedString);
    };

    const handleNext = () => {
      if (step === 2) {
        generateString();
      }
      setStep(step + 1);
    };

    const handleBack = () => {
      setStep(step - 1);
    };

    return (
      
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div>
          {step === 1 && (
            <div>
              <h1 className="text-4xl mb-4">Step 1: String Length</h1>
                    <div className="flex flex-row text-6xl">
                        <div className="mt-2">I want </div>
                        <div className=" mt-2 mx-3 w-4 mr-14">{determineArticle(length)}</div>
                        <div className="flex items-center border-b-2 border-gray-500 py-2 mb-4 mr-12">
                        <input
                            type="number"
                            min="2"
                            max="512"
                            value={length}
                            onChange={(e) => setLength(parseInt(e.target.value))}
                            className=" bg-transparent text-center rounded w-32 text-white"
                        />
                    </div>
                    <div className="mt-2">character long string</div>
                </div>
            </div>
          )}

          {step === 2 && (
            <div>
            <h1 className="text-6xl mb-4">Step 2: Complexity</h1>
              <div className="flex flex-col gap-4">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={complexity.lowercase}
                      onChange={(e) => setComplexity({ ...complexity, lowercase: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-gray-900 dark:text-gray-300">Include lowercase letters(a-z)</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={complexity.uppercase}
                      onChange={(e) => setComplexity({ ...complexity, uppercase: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-gray-900 dark:text-gray-300">Include uppercase letters(A-Z)</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={complexity.numbers}
                      onChange={(e) => setComplexity({ ...complexity, numbers: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-gray-900 dark:text-gray-300">Include numbers(0-9)</span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                      <input
                      type="checkbox"
                      checked={complexity.specialChars}
                      onChange={(e) => setComplexity({ ...complexity, specialChars: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-gray-900 dark:text-gray-300">Include special characters</span>
                  </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <Toaster />
              <h1 className="text-6xl mb-4">Generated String:</h1>
              <CopyToClipboard text={result}>
                <div onClick={copied} className="mb-4 w-96 truncate underline cursor-pointer">{result}</div>
              </CopyToClipboard>

              <CopyToClipboard text={result}>
                <button onClick={copied} className="px-4 py-2 rounded bg-white text-black">Copy to Clipboard</button>
              </CopyToClipboard>
            </div>
          )}

          <div className="mt-4">
            {step > 1 && <button onClick={handleBack} className="px-4 py-2 rounded bg-white text-black mr-4">Back</button>}
            {step < 3 && <button onClick={handleNext} className="px-4 py-2 rounded bg-white text-black">Next</button>}
          </div>
        </div>
      </div>
    );
}

export default Generator;
