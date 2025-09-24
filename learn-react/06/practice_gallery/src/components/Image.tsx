import React from "react";
import { RotateCcw, Trash2 } from "lucide-react";

interface ImageProps {
  src?: string;
  id: number;
  caption?: string;
  alt?: string;
  onRemove?: (id: number) => void;
  onRestore?: (id: number) => void;
  isDeleted?: boolean;
}
export default function Image({
  src = "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  id,
  caption,
  alt,
  onRemove,
  onRestore,
  isDeleted,
}: ImageProps) {
  const ERROR_IMG_SRC =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

  return (
    <>
      {/* 이미지 1장 렌더링 */}
      <figure
        className={`
                  group bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 relative                 
                  col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2
                `}
        style={{
          borderWidth: "0.5px",
        }}
      >
        <section className="relative overflow-hidden h-full">
          {!isDeleted && (
            <button
              onClick={() => onRemove && onRemove(id)}
              className="absolute top-2 right-2 z-10 p-2 bg-red-600/70 rounded-md text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={18} />
            </button>
          )}

          {isDeleted && (
            <button
              onClick={() => onRestore && onRestore(id)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-4 py-2 bg-white rounded-md text-black font-bold transition-all duration-200 flex items-center gap-2"
            >
              <RotateCcw size={16} />
              <span>Restore</span>
            </button>
          )}

          <img
            // src={
            //   "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTcyNTk1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            // }
            src={src ? src : ERROR_IMG_SRC}
            alt={"Snow-capped mountains against a blue sky"}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isDeleted ? "opacity-40" : "opacity-100"}
                `}
          />
          <section className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></section>
          <figcaption
            className={`
                        absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                        text-white transform translate-y-full group-hover:translate-y-0 
                        transition-transform duration-300 p-3 sm:p-3 md:p-4
                      `}
          >
            {/* // caption 속성값 */}
            <h3 className="mb-1">{caption}</h3>
            {/* // alt 속성값 */}
            <p className="text-white/80 text-sm leading-relaxed">{alt}</p>
          </figcaption>
        </section>
      </figure>
    </>
  );
}
