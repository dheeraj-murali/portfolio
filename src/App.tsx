import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="default" onClick={() => setCount(count + 1)}>
        {count}
      </Button>
    </>
  );
}

export default App;
