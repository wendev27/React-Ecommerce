function SectionTitle({ title, mb }) {
  const margin = mb || "mb-0";
  return (
    <div className={`w-full flex items-center justify-center`}>
      <h3
        className={`text-3xl text-[#272343] font-semibold font-inter ${margin} `}
      >
        {title}
      </h3>
    </div>
  );
}

export default SectionTitle;
