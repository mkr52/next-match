import { Button, Link } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-500 text-ellipsis font-bold">Hello app!</h1>
      <Button
        as={Link}
        href="/members" 
        color="secondary" variant="bordered" startContent={<FaRegSmile size={20} />}>
        Clicke Me!
      </Button>
    </div>
  );
}
