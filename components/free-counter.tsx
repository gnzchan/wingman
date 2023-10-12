import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MAX_FREE_COUNTS } from "@/constants";
import { useStore } from "@/hooks/use-store";
import { useProModal } from "@/hooks/use-pro-modal";

const FreeCounter = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { count, isPro } = useStore();
  const { onOpen } = useProModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {count} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress className="h-3" value={(count / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button onClick={onOpen} className="w-full" variant="premium">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
