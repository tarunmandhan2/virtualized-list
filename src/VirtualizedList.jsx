import { useState , useRef} from "react";

const VirtualizedList = ({ data = ["Data not found"] }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const viewportRef = useRef(null);
  const height = 500;
  const itemHeight = 50;
  const totalHeight = data.length * itemHeight;
  console.log(scrollTop);

  const handleScroll = () => {
    setScrollTop(viewportRef.current.scrollTop);
  };

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(data.length - 1, startIndex + Math.ceil(height / itemHeight));

  const visibleData = data
    ?.slice(startIndex, endIndex)
    ?.map((item, i) => <h3 key={i}>🦋{item}</h3>);

  return <>
  <div ref={viewportRef} onScroll={handleScroll} style={{ height, overflowY: 'auto', position: 'relative' }}>
    <div style={{ height: totalHeight, position: 'relative' }}>
      <div style={{ position: 'absolute', top: startIndex * itemHeight, width: '100%' }}>
        {visibleData}
      </div>
    </div>
  </div>
  </>;
};
export default VirtualizedList;
