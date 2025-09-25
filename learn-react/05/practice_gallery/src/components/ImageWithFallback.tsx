import { useState } from "react";

type ImageWithFallbackProps = React.ComponentPropsWithoutRef<"img">;

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { src, alt, className, ...rest } = props;

  // 에러 이미지 리소스가 필요하면 아래 리소스를 사용하세요
  const ERROR_IMG_SRC =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };
  return (
    <>
      {didError ? (
        <div
          className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
        >
          <div className="flex items-center justify-center w-full h-full">
            <img src={ERROR_IMG_SRC} alt={alt} {...rest} />
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          {...rest}
          onError={handleError}
        />
      )}
      {/* 에러가 발생한 경우 */}
      {/* <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt={alt} {...rest} />
        </div>
      </div> */}
      {/* 에러가 발생하지 않은 경우 */}
      {/* <img src={src} alt={alt} className={className} {...rest} /> */}
    </>
  );
}
