function Skill({ imagePath, text, invert }) {
  return (
    <div className="skill flex h-[150px] w-[125px] flex-col items-center gap-2 rounded-2xl border-4 border-dashed border-black from-[#ffdfb4a4] to-[#95aabbae] p-6 shadow-xl md:h-[250px] md:w-[200px] dark:border-white">
      <img
        src={imagePath}
        alt="html"
        className={invert ? "dark:invert" : ""}
      ></img>
      <h1 className="text-center font-mono text-lg text-black dark:text-white">
        {text}
      </h1>
    </div>
  );
}

export default Skill;

// #1f2937

// #19335A , #697A98 Gradient

// #ffdfb4 , #e6d9c6 , #dbdbd0 , #cbd5db , #95aabb Gradient
