import { Divider } from "@nextui-org/react";
import { AddTopicForm } from "./_components/add-topic-form";

export default function AdminAddTopicPage() {
  return (
    <main className="flex h-full flex-col gap-y-6">
      <div className="lg:max-w-2xl">
        <h1 className="text-2xl font-bold">Nombra el tema</h1>
        <p className="text-default-500">
          ¿Cómo quieres nombrar este tema? No te preocupes, puedes modificarlo
          después.
        </p>
        <Divider className="mt-2" />
      </div>
      <AddTopicForm />
    </main>
  );
}
