import { TransitionPage } from "@/components/transition-page";

export default function TopicsPage() {
  return (
    <TransitionPage>
      <main className="flex h-full flex-col">
        <h1 className="container text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-primary">Temas</span>
        </h1>
      </main>
    </TransitionPage>
  );
}
