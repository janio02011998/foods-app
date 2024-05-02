import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-6 pt-6">
      <div className="relative h-[30px] w-[100px]">
        <Image src="/logo.png" alt="FSW Foods" fill className="object-cover" />
      </div>
      <Button
        size={"icon"}
        variant={"outline"}
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
