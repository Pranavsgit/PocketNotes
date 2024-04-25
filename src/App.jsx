import Mobile from "./pages/Mobile";
import Desktop from "./pages/Desktop";
import { useMediaQuery } from "@react-hook/media-query";

function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div>{isMobile ? <Mobile /> : <Desktop />}</div>
    </>
  );
}

export default App;
