function ContactField({ src, text, href }) {
  return (
    <div className="flex items-center gap-3 dark:text-white">
      <img className="h-[40px] md:h-[65px]" src={src} alt="email"></img>
      <a href={href} className="text-sm" target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  );
}

export default ContactField;
