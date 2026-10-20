import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface ShimmerImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'className'> {
  className?: string
  imageClassName?: string
}

function ShimmerImage({
  className,
  imageClassName,
  onError,
  onLoad,
  src,
  ...imageProps
}: ShimmerImageProps) {
  const [loadedSource, setLoadedSource] = useState<string | undefined>()
  const isLoaded = loadedSource === src

  return (
    <span className={`shimmer-image ${isLoaded ? 'is-loaded' : ''} ${className ?? ''}`}>
      <span className="shimmer-image__placeholder" aria-hidden="true" />
      <img
        {...imageProps}
        src={src}
        className={`shimmer-image__img ${imageClassName ?? ''}`}
        onLoad={(event) => {
          setLoadedSource(src)
          onLoad?.(event)
        }}
        onError={(event) => {
          setLoadedSource(src)
          onError?.(event)
        }}
      />
    </span>
  )
}

export default ShimmerImage
