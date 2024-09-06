import { Question } from "@/components/question";
import { title } from "@/components/primitives";

export default function ClassroomPage() {
  return (
    <div>
      <h1 className={title()}>Question</h1>
      <div className="flex flex-col items-center">
        <Question />
      </div>
    </div>
  );
}
