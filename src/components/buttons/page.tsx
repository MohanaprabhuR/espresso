import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-xl text-center font-bold text-gray-900 dark:text-white pb-10">
          Button Solid Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="solid" size="sm">
              Discover
            </Button>
            <Button variant="solid" size="sm" disabled>
              Discover
            </Button>
            <Button variant="solid" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="solid" size="md">
              Discover
            </Button>
            <Button variant="solid" size="md" disabled>
              Discover
            </Button>
            <Button variant="solid" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="solid" size="lg">
              Discover
            </Button>
            <Button variant="solid" size="lg" disabled>
              Discover
            </Button>
            <Button variant="solid" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="solid" size="xl">
              Discover
            </Button>
            <Button variant="solid" size="xl" disabled>
              Discover
            </Button>
            <Button variant="solid" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="solid" size="xxl" loading>
              Discover
            </Button>
            <Button variant="solid" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="solid" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Button Subtle Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="subtle" size="sm">
              Discover
            </Button>
            <Button variant="subtle" size="sm" disabled>
              Discover
            </Button>
            <Button variant="subtle" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="subtle" size="md">
              Discover
            </Button>
            <Button variant="subtle" size="md" disabled>
              Discover
            </Button>
            <Button variant="subtle" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="subtle" size="lg">
              Discover
            </Button>
            <Button variant="subtle" size="lg" disabled>
              Discover
            </Button>
            <Button variant="subtle" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="subtle" size="xl">
              Discover
            </Button>
            <Button variant="subtle" size="xl" disabled>
              Discover
            </Button>
            <Button variant="subtle" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="subtle" size="xxl" loading>
              Discover
            </Button>
            <Button variant="subtle" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="subtle" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Button Outline Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="outline" size="sm">
              Discover
            </Button>
            <Button variant="outline" size="sm" disabled>
              Discover
            </Button>
            <Button variant="outline" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="outline" size="md">
              Discover
            </Button>
            <Button variant="outline" size="md" disabled>
              Discover
            </Button>
            <Button variant="outline" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="outline" size="lg">
              Discover
            </Button>
            <Button variant="outline" size="lg" disabled>
              Discover
            </Button>
            <Button variant="outline" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="outline" size="xl">
              Discover
            </Button>
            <Button variant="outline" size="xl" disabled>
              Discover
            </Button>
            <Button variant="outline" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="outline" size="xxl" loading>
              Discover
            </Button>
            <Button variant="outline" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="outline" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
