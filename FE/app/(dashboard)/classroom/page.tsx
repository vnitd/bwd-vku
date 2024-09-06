import { Classroom } from "@/components/classroom";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function ClassroomPage() {
  return (
    <div>
      <h1 className={title()}>Classroom</h1>
      <div className="min-h-screen flex flex-col items-center py-10">
        <Button
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6"
          as={Link}
          href="/Class"
        >
          Create Class
        </Button>
        <Classroom />
      </div>
    </div>
  );
}
