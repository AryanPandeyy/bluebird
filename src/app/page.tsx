export default function Home() {
  // bluebird !
  // Blue your thoughts in public
  // blah
  // blah
  return (
    <div className="flex flex-col justify-center px-6 py-12">
      {/* <p className="mx-auto text-center leading-3 rounded-lg px-7 py-2 ring-1 ring-slate-300 bg-gray-100">
        BlueBird!
      </p> */}
      <h1 className="text-2xl mx-auto py-2 font-bold">
        <span className="text-red-400">Blue</span> your thoughts in public
      </h1>
      <p className="mx-auto text-sm">
        Blue allows you to blued your thoughts in public. Say what you like.
      </p>
      <a
        className=" m-4 rounded-md ring-1 ring-black bg-black text-white mx-auto p-2"
        href="/signup"
      >
        Get Started ➡
      </a>
      ️
    </div>
  );
}
