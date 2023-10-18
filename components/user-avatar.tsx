import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  imageUrl?: string;
  avatar?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUrl, avatar }) => {
  return (
    <Avatar className="h-8 w-8 ">
      <AvatarImage src={imageUrl} />
      <AvatarFallback className="text-purple-500">{avatar}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
