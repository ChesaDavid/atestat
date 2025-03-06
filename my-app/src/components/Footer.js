import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 rounded-t-lg bottom-0 shadow-lg w-full abslute">
            <div className="max-w-md mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} StudyIt. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        GitHub
                    </a>
                    <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        Portfolio
                    </a>
                    <a href="mailto:david.chesa.it@gmail.com?subject=StudyIt%20Inquiry&body=Hello%20there!" className="hover:text-blue-400">
                        Email Us
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
