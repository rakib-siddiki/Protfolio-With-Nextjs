import ThemeSwitcher from "@/core/ThemeSwitcher";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 dark:bg-black ">
      <h1 className="text-3xl font-bold text-yellow-200 dark:text-white mb-5">hello</h1>
     <ThemeSwitcher/>
    </main>
  );
}
