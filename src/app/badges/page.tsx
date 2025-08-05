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
          <Badge theme="blue" variant="default" size="sm">
            Badge
          </Badge>
          <Badge theme="blue" variant="secondary" size="md">
            Badge
          </Badge>
          <Badge theme="blue" variant="outline" size="lg">
            Badge
          </Badge>
          <Badge theme="blue" variant="ghost" size="lg">
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="green" variant="default" size="sm">
            Badge
          </Badge>
          <Badge theme="green" variant="secondary" size="md">
            Badge
          </Badge>
          <Badge theme="green" variant="outline" size="lg">
            Badge
          </Badge>
          <Badge theme="green" variant="ghost" size="lg">
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="amber" variant="default" size="sm">
            Badge
          </Badge>
          <Badge theme="amber" variant="secondary" size="md">
            Badge
          </Badge>
          <Badge theme="amber" variant="outline" size="lg">
            Badge
          </Badge>
          <Badge theme="amber" variant="ghost" size="lg">
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="red" variant="default" size="sm">
            Badge
          </Badge>
          <Badge theme="red" variant="secondary" size="md">
            Badge
          </Badge>
          <Badge theme="red" variant="outline" size="lg">
            Badge
          </Badge>
          <Badge theme="red" variant="ghost" size="lg">
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="violet" variant="default" size="sm">
            Badge
          </Badge>
          <Badge theme="violet" variant="secondary" size="md">
            Badge
          </Badge>
          <Badge theme="violet" variant="outline" size="lg">
            Badge
          </Badge>
          <Badge theme="violet" variant="ghost" size="lg">
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
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="blue" variant="default" size="sm" showIcon>
            Badge
          </Badge>
          <Badge theme="blue" variant="secondary" size="md" showIcon>
            Badge
          </Badge>
          <Badge theme="blue" variant="outline" size="lg" showIcon>
            Badge
          </Badge>
          <Badge theme="blue" variant="ghost" size="lg" showIcon>
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="green" variant="default" size="sm" showIcon>
            Badge
          </Badge>
          <Badge theme="green" variant="secondary" size="md" showIcon>
            Badge
          </Badge>
          <Badge theme="green" variant="outline" size="lg" showIcon>
            Badge
          </Badge>
          <Badge theme="green" variant="ghost" size="lg" showIcon>
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="amber" variant="default" size="sm" showIcon>
            Badge
          </Badge>
          <Badge theme="amber" variant="secondary" size="md" showIcon>
            Badge
          </Badge>
          <Badge theme="amber" variant="outline" size="lg" showIcon>
            Badge
          </Badge>
          <Badge theme="amber" variant="ghost" size="lg" showIcon>
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="red" variant="default" size="sm" showIcon>
            Badge
          </Badge>
          <Badge theme="red" variant="secondary" size="md" showIcon>
            Badge
          </Badge>
          <Badge theme="red" variant="outline" size="lg" showIcon>
            Badge
          </Badge>
          <Badge theme="red" variant="ghost" size="lg" showIcon>
            Badge
          </Badge>
        </div>
        <div className="flex  justify-center items-center gap-[10px_10px]">
          <Badge theme="violet" variant="default" size="sm" showIcon>
            Badge
          </Badge>
          <Badge theme="violet" variant="secondary" size="md" showIcon>
            Badge
          </Badge>
          <Badge theme="violet" variant="outline" size="lg" showIcon>
            Badge
          </Badge>
          <Badge theme="violet" variant="ghost" size="lg" showIcon>
            Badge
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Badges;
