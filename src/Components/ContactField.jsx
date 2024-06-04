function ContactField({ src, text, href }) {
  return (
    <div className="flex items-center gap-3">
      <img className="h-[65px]" src={src} alt="email"></img>
      <a href={href} target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  );
}

export default ContactField;
