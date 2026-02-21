const Resume = () => {
  return (
    <div className="h-full w-full bg-[#525659] flex flex-col">
      <iframe 
        src="/resume.pdf" 
        className="w-full h-full border-none" 
        title="Resume PDF"
      />
    </div>
  );
};

export default Resume;
