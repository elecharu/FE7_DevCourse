import { useEffect, useState } from "react";
import Image from "./components/Image";
import { RotateCcw, Trash2 } from "lucide-react";

export default function App() {
  const DOG_IMAGE_ARR = [
    {
      src: "https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_640.jpg",
      caption: "CUTE_DOG_1",
      alt: "CUTE DOG IMAGE 1",
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg",
      caption: "CUTE_DOG_2",
      alt: "CUTE DOG IMAGE 2",
    },
    {
      src: "https://cdn.pixabay.com/photo/2023/11/10/17/10/jack-russell-8379770_640.jpg",
      caption: "CUTE_DOG_3",
      alt: "CUTE DOG IMAGE 3",
    },
    {
      src: "https://cdn.pixabay.com/photo/2020/05/03/13/09/puppy-5124947_640.jpg",
      caption: "CUTE_DOG_4",
      alt: "CUTE DOG IMAGE 4",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/05/30/19/53/playing-puppies-790638_640.jpg",
      caption: "CUTE_DOG_5",
      alt: "CUTE DOG IMAGE 5",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_640.jpg",
      caption: "CUTE_DOG_6",
      alt: "CUTE DOG IMAGE 6",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_640.jpg",
      caption: "CUTE_DOG_7",
      alt: "CUTE DOG IMAGE 7",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/09/02/08/54/golden-retriever-puppy-2706680_640.jpg",
      caption: "CUTE_DOG_8",
      alt: "CUTE DOG IMAGE 8",
    },
  ];

  const [deletedImage, setDeletedImage] = useState<number[]>([]);

  const removeImage = (id: number) => {
    if (!deletedImage.includes(id)) {
      setDeletedImage((prev) => [...prev, id]);
    }
  };

  const restoreImage = (id: number) => {
    setDeletedImage((prev) => prev.filter((deletedId) => deletedId !== id));
  };

  const restoreAllImage = () => {
    setDeletedImage([]);
  };

  useEffect(() => {
    console.log(deletedImage);
  }, [deletedImage]);

  return (
    <main className="min-h-screen bg-background">
      <header className="text-center py-8 sm:py-12 px-4 sm:px-6">
        {/* 복구 버튼 영역 추가 */}
        <div className="flex justify-between items-start max-w-7xl mx-auto mb-8">
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background hover:bg-accent transition-colors duration-200"
              onClick={restoreAllImage}
            >
              <RotateCcw className="w-4 h-4" />
              Restore All 0
            </button>
          </div>
        </div>
        <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl">Gallery Wall</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
          An art gallery inspired collection featuring natural landscapes in
          various scales and arrangements
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <article
          className="grid gap-2 sm:gap-3 md:gap-4 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          style={{
            gridAutoRows: "150px sm:180px md:200px",
          }}
        >
          {DOG_IMAGE_ARR &&
            DOG_IMAGE_ARR.map((v, index) => (
              <Image
                key={index}
                id={index}
                src={v.src}
                caption={v.caption}
                alt={v.alt}
                onRemove={removeImage}
                onRestore={restoreImage}
                isDeleted={deletedImage.includes(index)}
              />
            ))}
        </article>
      </section>

      <footer className="text-center py-6 sm:py-8 px-4 sm:px-6 border-t border-border bg-muted/30">
        <p className="text-muted-foreground text-sm sm:text-base">
          <span className="block sm:inline">
            Curated Photography Collection
          </span>
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">Gallery Wall Experience</span>
          <span className="block mt-2 text-xs sm:text-sm">
            {deletedImage.length} images hidden •{" "}
            {Number(DOG_IMAGE_ARR.length - deletedImage.length)} displayed
          </span>
        </p>
      </footer>
    </main>
  );
}
