export default function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800
text-black dark:text-white border rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}