export default function FacebookFeed({
  href = "https://www.facebook.com/pidanalyzers",
  height = "525",
  width = "415",
}) {
  return (
    <div
      data-href={href}
      data-height={height}
      data-small-header="false"
      data-show-faces="false"
      data-stream="true"
      className="flex flex-col items-center justify-start flex-1 flex-shrink-0 h-full py-4 bg-white rounded-lg lg:shadow-lg md:bg-transparent md:p-0"
    >
      <iframe
        title="Facebook Feed"
        height={height}
        width={width}
        className="rounded-lg"
        allow="encrypted-media"
        src={`https://www.facebook.com/plugins/like_box.php?&height=${height}&width=${width}&href=https%3A%2F%2Fwww.facebook.com%2Fpidanalyzers&locale=en_US&stream=true`}
      ></iframe>
    </div>
  );
}
