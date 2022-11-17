import React, { useState } from 'react'
import LazyLoad from 'react-lazy-load'

const LazyImage = ({
  width,
  height,
  debounce,
  offset,
  onContentVisible,
  threshold,
  className,
  loadingClassname,
  loadedClassName,
  src,
  alt
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <LazyLoad
      width={width}
      height={height}
      debounce={debounce}
      offset={offset}
      onContentVisible={onContentVisible}
      threshold={threshold}
    >
      <img
        className={className + ` ${isLoaded ? loadedClassName : loadingClassname}`}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
      />
    </LazyLoad>
  )
}

export default LazyImage
