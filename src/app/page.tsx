import Header from "@/components/header/page";
import Button from "@/components/buttons/page";
// import Avatar from "@/components/avatar/page";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center py-20">
        <Button />
        {/* <Avatar /> */}
      </div>
    </>
  );
}
