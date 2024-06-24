import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  const baseUrl = process.env.BASE_URL || "";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Home Page</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Cats are independent, playful, and affectionate creatures that bring joy
        to many households.
      </p>
      <div className="text-sm text-gray-500">ENV Status: {baseUrl}</div>
    </div>
  );
}
