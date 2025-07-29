import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-xl text-center font-bold text-gray-900 dark:text-white pb-4">
          Solid Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="primary" size="sm">
              Discover
            </Button>
            <Button variant="primary" size="sm" disabled>
              Discover
            </Button>
            <Button variant="primary" size="sm" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="primary" size="md">
              Discover
            </Button>
            <Button variant="primary" size="md" disabled>
              Discover
            </Button>
            <Button variant="primary" size="md" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="primary" size="lg">
              Discover
            </Button>
            <Button variant="primary" size="lg" disabled>
              Discover
            </Button>
            <Button variant="primary" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="primary" size="xl">
              Discover
            </Button>
            <Button variant="primary" size="xl" disabled>
              Discover
            </Button>
            <Button variant="primary" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="primary" size="xxl" loading>
              Discover
            </Button>
            <Button variant="primary" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="primary" size="xxl" loading iconOnly disabled>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Secondary Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="secondary" size="sm">
              Discover
            </Button>
            <Button variant="secondary" size="sm" disabled>
              Discover
            </Button>
            <Button variant="secondary" size="sm" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="secondary" size="md">
              Discover
            </Button>
            <Button variant="secondary" size="md" disabled>
              Discover
            </Button>
            <Button variant="secondary" size="md" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="secondary" size="lg">
              Discover
            </Button>
            <Button variant="secondary" size="lg" disabled>
              Discover
            </Button>
            <Button variant="secondary" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="secondary" size="xl">
              Discover
            </Button>
            <Button variant="secondary" size="xl" disabled>
              Discover
            </Button>
            <Button variant="secondary" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="secondary" size="xxl">
              Discover
            </Button>
            <Button variant="secondary" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="secondary" size="xxl" iconOnly>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Outline Button Component
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
            <Button variant="outline" size="xxl">
              Discover
            </Button>
            <Button variant="outline" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="outline" size="xxl" iconOnly>
              Discover
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          destructive Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="destructive" size="sm">
              Discover
            </Button>
            <Button variant="destructive" size="sm" disabled>
              Discover
            </Button>
            <Button variant="destructive" size="sm" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="destructive" size="md">
              Discover
            </Button>
            <Button variant="destructive" size="md" disabled>
              Discover
            </Button>
            <Button variant="destructive" size="md" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="destructive" size="lg">
              Discover
            </Button>
            <Button variant="destructive" size="lg" disabled>
              Discover
            </Button>
            <Button variant="destructive" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="destructive" size="xl">
              Discover
            </Button>
            <Button variant="destructive" size="xl" disabled>
              Discover
            </Button>
            <Button variant="destructive" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="destructive" size="xxl">
              Discover
            </Button>
            <Button variant="destructive" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="destructive" size="xxl" iconOnly>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-4">
          Ghost Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="sm">
              Discover
            </Button>
            <Button variant="ghost" size="sm" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="sm" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="md">
              Discover
            </Button>
            <Button variant="ghost" size="md" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="md" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="lg">
              Discover
            </Button>
            <Button variant="ghost" size="lg" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="xl">
              Discover
            </Button>
            <Button variant="ghost" size="xl" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="xxl">
              Discover
            </Button>
            <Button variant="ghost" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="xxl" iconOnly>
              Discover
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Outline Button Component
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
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Ghost Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="sm">
              Discover
            </Button>
            <Button variant="ghost" size="sm" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="md">
              Discover
            </Button>
            <Button variant="ghost" size="md" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="lg">
              Discover
            </Button>
            <Button variant="ghost" size="lg" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="xl">
              Discover
            </Button>
            <Button variant="ghost" size="xl" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="ghost" size="xxl" loading>
              Discover
            </Button>
            <Button variant="ghost" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="ghost" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Red Soild Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="red-solid" size="sm">
              Discover
            </Button>
            <Button variant="red-solid" size="sm" disabled>
              Discover
            </Button>
            <Button variant="red-solid" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-solid" size="md">
              Discover
            </Button>
            <Button variant="red-solid" size="md" disabled>
              Discover
            </Button>
            <Button variant="red-solid" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-solid" size="lg">
              Discover
            </Button>
            <Button variant="red-solid" size="lg" disabled>
              Discover
            </Button>
            <Button variant="red-solid" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-solid" size="xl">
              Discover
            </Button>
            <Button variant="red-solid" size="xl" disabled>
              Discover
            </Button>
            <Button variant="red-solid" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-solid" size="xxl" loading>
              Discover
            </Button>
            <Button variant="red-solid" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="red-solid" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Red Subtle Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="red-subtle" size="sm">
              Discover
            </Button>
            <Button variant="red-subtle" size="sm" disabled>
              Discover
            </Button>
            <Button variant="red-subtle" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-subtle" size="md">
              Discover
            </Button>
            <Button variant="red-subtle" size="md" disabled>
              Discover
            </Button>
            <Button variant="red-subtle" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-subtle" size="lg">
              Discover
            </Button>
            <Button variant="red-subtle" size="lg" disabled>
              Discover
            </Button>
            <Button variant="red-subtle" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-subtle" size="xl">
              Discover
            </Button>
            <Button variant="red-subtle" size="xl" disabled>
              Discover
            </Button>
            <Button variant="red-subtle" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-subtle" size="xxl" loading>
              Discover
            </Button>
            <Button variant="red-subtle" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="red-subtle" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Red Outline Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="red-outline" size="sm">
              Discover
            </Button>
            <Button variant="red-outline" size="sm" disabled>
              Discover
            </Button>
            <Button variant="red-outline" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-outline" size="md">
              Discover
            </Button>
            <Button variant="red-outline" size="md" disabled>
              Discover
            </Button>
            <Button variant="red-outline" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-outline" size="lg">
              Discover
            </Button>
            <Button variant="red-outline" size="lg" disabled>
              Discover
            </Button>
            <Button variant="red-outline" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-outline" size="xl">
              Discover
            </Button>
            <Button variant="red-outline" size="xl" disabled>
              Discover
            </Button>
            <Button variant="red-outline" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-outline" size="xxl" loading>
              Discover
            </Button>
            <Button variant="red-outline" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="red-outline" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-10 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white pb-10">
          Red ghost Button Component
        </h1>
        <div className="flex flex-col justify-center items-center gap-[10px_0]">
          <div className="flex gap-[0_20px]">
            <Button variant="red-ghost" size="sm">
              Discover
            </Button>
            <Button variant="red-ghost" size="sm" disabled>
              Discover
            </Button>
            <Button variant="red-ghost" size="sm" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-ghost" size="md">
              Discover
            </Button>
            <Button variant="red-ghost" size="md" disabled>
              Discover
            </Button>
            <Button variant="red-ghost" size="md" iconOnly>
              Discover
            </Button>
          </div>

          <div className="flex gap-[0_20px]">
            <Button variant="red-ghost" size="lg">
              Discover
            </Button>
            <Button variant="red-ghost" size="lg" disabled>
              Discover
            </Button>
            <Button variant="red-ghost" size="lg" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-ghost" size="xl">
              Discover
            </Button>
            <Button variant="red-ghost" size="xl" disabled>
              Discover
            </Button>
            <Button variant="red-ghost" size="xl" iconOnly>
              Discover
            </Button>
          </div>
          <div className="flex gap-[0_20px]">
            <Button variant="red-ghost" size="xxl" loading>
              Discover
            </Button>
            <Button variant="red-ghost" size="xxl" disabled>
              Discover
            </Button>
            <Button variant="red-ghost" size="xxl" iconOnly loading>
              Discover
            </Button>
          </div>
        </div>
      </div> */}
    </>
  );
}
