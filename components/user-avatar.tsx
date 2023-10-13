import { useUser } from "@clerk/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  avatar?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ avatar }) => {
  const { user } = useUser();

  return (
    <Avatar className="h-8 w-8 ">
      <AvatarImage src={user?.imageUrl} />
      <AvatarFallback className="text-purple-500">
        {user?.firstName?.charAt(0) || avatar}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
