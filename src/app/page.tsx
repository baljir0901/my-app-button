"use client"
import Button from "@/components/Button";


export default function HomePage() {
  const handleAdd = () => alert("Tovch daraglaa!");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold mb-8">Next.js + Tailwind +Typescript </h1>



      <Button label="Tovch1" onClick={handleAdd} type="button" />
      <Button label="Tovch2" onClick={handleAdd} type="button" />
      <Button label="Tovch3" onClick={handleAdd} type="button" />
      </div>
    </main>
  );
}