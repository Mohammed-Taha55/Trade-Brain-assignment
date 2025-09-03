export default function LoadingStockPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6"></div>

      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <div className="h-4 w-64 bg-gray-200 rounded mb-3"></div>
        <div className="h-4 w-40 bg-gray-200 rounded"></div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="h-64 w-full bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
