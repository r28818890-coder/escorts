import React, { useEffect, useState } from 'react';
import { SplashCursor } from '@/components/common/SplashCursor';

const FluidCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SplashCursor
      BACK_COLOR={{ r: 0.03, g: 0.22, b: 0.18 }}
      COLOR_UPDATE_SPEED={7}
      SPLAT_FORCE={4200}
      SPLAT_RADIUS={0.18}
      DENSITY_DISSIPATION={3}
      TRANSPARENT
    />
  );
};

export default FluidCursor;

