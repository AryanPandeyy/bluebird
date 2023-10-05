import CreateTweet from "./landing/CreateTweet";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-6 h-full">
      <div className="border-r-2 border-r-black">
        <CreateTweet />
      </div>
      <div className="col-start-2 col-end-5">{children}</div>
      <div className="border-l-2 border-l-black col-start-5 col-end-6"></div>
    </div>
  );
}
