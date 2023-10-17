import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-2 bg-[#ffc93c]" src="logo/wingman.svg" />
    </Avatar>
  );
};

export default BotAvatar;
