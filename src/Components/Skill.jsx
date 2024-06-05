function Skill({ imagePath, text }) {
  return (
    <div className="skill flex h-[150px] w-[125px] flex-col items-center gap-2 rounded-2xl border-4 border-dashed border-black p-6 shadow-xl md:h-[250px] md:w-[200px]">
      <img src={imagePath} alt="html"></img>
      <h1 className="text-center font-mono text-base text-black">{text}</h1>
    </div>
  );
}

export default Skill;

// #1f2937
