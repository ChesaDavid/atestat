import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';

const tabs = [
  { id: 'tab1', title: 'ToDo', content: 'Do you want to see what want to accomplish' ,link:'todo'},
  { id: 'tab2', title: 'Accounting', content: 'Do you want to be financially knowledgable',link:'contabil' },
  { id: 'tab3', title: 'Calculator', content: 'Do you want to use the calculator for calculations ' ,link:'calculator'},
];

export default function SlideTabs({ isSlideOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg relative">
      <button
        onClick={onClose}  // Changed from directly modifying isSlideOpen
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-red-100 transition-colors duration-200"
        aria-label="Close menu"
      >
        <IoCloseOutline className="w-6 h-6 text-gray-600 hover:text-gray-800" />
      </button>

      <div className="flex justify-around mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="relative h-40 overflow-hidden">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-full h-full bg-blue-100 p-4 rounded-lg"
                >
                  <h2 className="text-xl font-bold">{tab.title}</h2>
                  <p>{tab.content}</p>
                  <a
                    href={tab.link}
                    ><button
                    className='w-full bg-green-500 text-white py-2 rounded hover:bg-green-600'
                    >Start using it</button></a>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
