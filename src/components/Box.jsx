function Box({ text }) {
  return (
    <div className="rounded-full w-fit h-10 p-2 flex  uppercase border-black border-2">
      {text}
    </div>
  );
}

export default Box;
