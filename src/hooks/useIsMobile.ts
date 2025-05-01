import { useCallback, useState, useEffect } from 'react';

const useIsMobile = () => {
  // General states
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const [isCompatible, setIsCompatible] = useState<boolean>(false);

  // Handle window resize
  const handleWindowResize = useCallback(() => {
    setIsMobileDevice(window.innerWidth <= 767);
    setIsCompatible(window.innerWidth >= 350);
  }, []);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return { isMobileDevice, isCompatible };
};

export { useIsMobile };
