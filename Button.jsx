/**
 * Button Component
 *
 * Props:
 * - children
 * - variant (primary, secondary, outline)
 * - size (sm, md, lg)
 * - disabled
 * - onClick
 */

export default function Button({ children }) {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
      {children}
    </button>
  );
}