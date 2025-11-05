import Box from "./Box.jsx";
function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b pb-20">
        <h1 className="text-7xl font-['NeueMontreal'] tracking-tight">
          Featured Projects:
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full mt-10 flex gap-10">
          <div className="cardcontainer w-1/2   h-[80vh] ">
            <h1 className="mb-2">
              {" "}
              <li className="ml-6">FYDE</li>
            </h1>

            <img className="card w-full h-full bg-cover rounded-xl overflow-hidden bg-[url('src/assets/fyde.png')]"></img>
            <div className="mt-3 flex  gap-5">
              <Box text={"BRAND IDENTITY"} />

              <Box text={"pitch deck"} />
            </div>
          </div>
          <div className="cardcontainer w-1/2  h-[80vh] ">
            <h1 className="mb-2">
              <li className="ml-6">Meddalia Experience</li>
            </h1>
            <div className="card w-full h-full bg-cover rounded-xl overflow-hidden bg-[url('src/assets/meddalia.png')]"></div>
            <div className="mt-3 flex  gap-5">
              <Box text={"brand identity"} />

              <Box text={"Executive keynote "} />
              <Box text={"product launch"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
