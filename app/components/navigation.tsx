import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "./ui/button";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <Button
        variant="ghost"
        size="lg"
        className="font-bold"
        onClick={() => navigate(-1)}
      >
        <ArrowBigLeft className="fill-foreground" />
        Back
      </Button>
    </nav>
  );
};
