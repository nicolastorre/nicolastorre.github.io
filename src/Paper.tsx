import "./Paper.css";

function Paper() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="a4-paper w-full max-w-[210mm] h-[297mm] mx-auto p-8">
        <h1 className="text-2xl font-bold">A4 Paper Simulation</h1>
        <p className="mt-4">
          This is a simulated A4 paper with a gray background that adjusts with
          the viewport.
        </p>
      </div>
    </div>
  );
}

export default Paper;
