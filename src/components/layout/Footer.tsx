import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {

  return (
    <footer className="bg-cyan-800 border-t border-gray-200">
      <div className="sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-1.5">
          <div className='grid grid-cols-2 gap-20'>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Sleem Hashem
          </h2>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <GitHub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Twitter/>
            </a>
          </div>
          </div>
          <p className="text-blue-50 text-sm">
            © 2025 Sleem Hashem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 