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
    <section className="mx-auto grid h-[70vh] max-w-[1200px] grid-cols-2 dark:text-white">
      <div className="flex flex-col justify-center p-4">
        <p className="mb-[-12.5px] text-[24px]">Namaste!</p>
        <p className="mb-[-10px] text-[24px]">I Like</p>
        <p className="mb-[-15px] text-[48px] font-bold">
          Web Development <span className="text-[18px]">&</span>
        </p>
        <p className="text-right text-[48px] font-bold">Machine Learning </p>
        <button
          onClick={handleDownload}
          className="inline w-fit rounded-xl bg-black p-3 text-[18px] text-white dark:bg-white dark:text-black"
        >
          Download Resume
        </button>
      </div>
      <div>
        <img src="DevImage.JPG" alt="dev" className="devImage h-[500px]" />
      </div>
    </section>
  );
}

export default Homepage;
