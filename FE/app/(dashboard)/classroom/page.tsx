import { Classroom } from "@/components/classroom";
import { title } from "@/components/primitives";

export default function ClassroomPage() {
  return (
    <div>
      <h1 className={title()}>Classroom</h1>
      <div className="min-h-screen flex flex-col items-center py-10">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md mb-6">
          Create Class
        </button>
        <Classroom/>
      </div>
    </div>
  );
}
