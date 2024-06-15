function Homepage() {
  const handleDownload = () => {
    fetch("resume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(blob);

        anchor.download = "Lokesh-Kudipudi-Resume.pdf";

        anchor.click();

        URL.revokeObjectURL(anchor.href);
      })
      .catch((error) => {
        console.error("Error fetching PDF file:", error);
      });
  };

  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-center sm:flex-row sm:justify-around xl:justify-between">
      <div className="mobile">
        <img src="DevImage.JPG" alt="dev" className="devImage h-[300px]" />
      </div>
      <div className="flex flex-col justify-center p-4 sm:text-xl xl:text-2xl">
        <p>Namaste!</p>
        <p>I Like</p>
        <p className="text-[22px] font-bold sm:text-3xl xl:text-5xl">
          Web Development <span className="text-sm sm:text-xs">&</span>
        </p>
        <p className="mb-5 text-right text-[22px] font-bold sm:text-3xl xl:text-5xl">
          Machine Learning
        </p>
        <button
          onClick={handleDownload}
          className="inline w-fit rounded-xl border-2 border-dashed border-black bg-black p-2 text-base text-white hover:bg-white hover:text-black sm:p-3"
        >
          Download Resume
        </button>
      </div>
      <div className="desktop">
        <img src="DevImage.JPG" alt="dev" className="devImage h-[500px]" />
      </div>
    </section>
  );
}

export default Homepage;
