function Skill({ imagePath, text }) {
  return (
    <div className="skill flex h-[250px] w-[200px] flex-col items-center gap-2 rounded-2xl border-4 border-dashed border-black p-4 shadow-xl">
      <img src={imagePath} alt="html"></img>
      <h1 className="text-center font-mono text-3xl text-black">{text}</h1>
    </div>
  );
}

export default Skill;

// #1f2937
