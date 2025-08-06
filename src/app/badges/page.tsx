import { Badge } from "@/components/ui/badge";

const Badges = () => {
  return (
    <div className="pt-10 text-center">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
        Badge Component
      </h1>
      <div className="flex flex-col gap-[20px_0]">
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge variant="default" size="sm">
            Badge
          </Badge>
          <Badge variant="secondary" size="md">
            Badge
          </Badge>
          <Badge variant="outline" size="lg">
            Badge
          </Badge>
          <Badge variant="ghost" size="lg">
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge variant="default" size="sm" showIcon>
            Badge
          </Badge>
          <Badge variant="secondary" size="md" showIcon>
            Badge
          </Badge>
          <Badge variant="outline" size="lg" showIcon>
            Badge
          </Badge>
          <Badge variant="ghost" size="lg" showIcon>
            Badge
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Badges;
