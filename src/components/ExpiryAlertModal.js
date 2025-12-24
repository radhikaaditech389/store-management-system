import { useEffect } from "react";

export default function ExpiryAlertModal({ open, onClose, alerts }) {
  // Close modal on ESC
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  function SeverityBadge({ level, days }) {
    const map = {
      danger: "bg-red-100 text-red-700",
      warning: "bg-yellow-100 text-yellow-700",
      info: "bg-blue-100 text-blue-700",
    };

    return (
      <span
        className={`px-2 py-1 rounded-full text-xl font-semibold ${map[level]}`}
      >
        {level.toUpperCase()} · {days} days
      </span>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-7xl mx-4
    bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h2 className="text-4xl font-semibold text-gray-800">
              Expiring Products
            </h2>
            <p className="text-xl text-gray-500 mt-6">
              Products nearing expiry across branches
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center
        rounded-full hover:bg-gray-100 text-gray-500 text-4xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[65vh] overflow-hidden">
          {alerts.length === 0 ? (
            <div className="py-20 text-center">
              <div className="text-5xl mb-4"></div>
              <p className="text-green-600 font-medium text-4xl">
                No expiring products
              </p>
            </div>
          ) : (
            <table className="w-[96%] text-sm ml-4">
              <thead className="sticky top-0 bg-gray-50 text-gray-800">
                <tr className="text-2xl">
                  <th className="px-4 py-3 text-left font-medium">Product</th>
                  <th className="px-4 py-3 text-center font-medium">Expiry</th>
                  <th className="px-4 py-3 text-center font-medium">
                    Days Left
                  </th>
                  <th className="px-4 py-3 text-center font-medium">Qty</th>
                  <th className="px-4 py-3 text-center font-medium">Branch</th>
                </tr>
              </thead>

              <tbody className="text-2xl">
                {alerts.map((a) => (
                  <tr key={a.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-lg text-gray-800">
                        {a.product_name}
                      </div>
                      <div className="text-xl text-gray-500 mt-2">
                        Batch: {a.batch_no}
                      </div>
                    </td>

                    <td className="px-4 py-3 text-center text-gray-700">
                      {a.expiry_date}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <SeverityBadge level={a.severity} days={a.days_left} />
                    </td>

                    <td className="px-4 py-3 text-center text-gray-700">
                      {a.qty}
                    </td>

                    <td className="px-4 py-3 text-center text-gray-600">
                      {a.branch_name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex justify-between items-center">
          <p className="text-xl text-gray-500">
            Showing {alerts.length} expiring items
          </p>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg
        bg-gray-900 text-white text-2xl
        hover:bg-black transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function DaysLeftBadge({ days }) {
  if (days <= 3) return <span className="text-red-600">{days}</span>;
  if (days <= 10) return <span className="text-yellow-600">{days}</span>;
  return <span className="text-green-600">{days}</span>;
}
