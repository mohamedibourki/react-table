import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Button asChild className="mb-4">
      <Link to="/add-user">Ajouter un utilisateur</Link>
    </Button>
  );
};
