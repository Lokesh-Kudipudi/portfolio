function Label({ text, color }) {
  return (
    <span
      style={{ backgroundColor: color }}
      className={`ml-1 rounded-full px-2 py-1 text-sm font-bold`}
    >
      {text}
    </span>
  );
}

export default Label;
