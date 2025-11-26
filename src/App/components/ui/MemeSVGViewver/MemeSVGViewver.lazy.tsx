import React, { lazy, Suspense } from 'react';

const LazyMemeSVGViewver = lazy(() => import('./MemeSVGViewver'));

const MemeSVGViewver = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMemeSVGViewver {...props} />
  </Suspense>
);

export default MemeSVGViewver;
