const VirtualizedList = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <h3 key={i}>{item}</h3>
      ))}
    </>
  );
};
export default VirtualizedList;
