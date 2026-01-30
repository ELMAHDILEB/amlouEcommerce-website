// src/pages/dashboard/UserOrders.jsx
import { useTranslation } from "react-i18next";

export default function Orders() {
  const { t } = useTranslation();

  // Example orders data
  const orders = [
    { id: "#1001", product: "Amlou Jar", date: "2026-01-25", status: "Delivered" },
    { id: "#1002", product: "Argan Oil", date: "2026-01-28", status: "Processing" },
    { id: "#1003", product: "Cashew Nuts", date: "2026-01-30", status: "Pending" },
  ];

  // Status color mapping
  const statusColor = {
    Delivered: "bg-green-100 text-green-800",
    Processing: "bg-blue-100 text-blue-800",
    Pending: "bg-orange-100 text-orange-800",
  };

  return (
    <div className="min-h-screen bg-[var(--colorBody)] font-[var(--font-poppins)] p-4 md:p-6">
      <h1 className="text-2xl font-bold text-[var(--primary)] mb-6">
        {t("userOrders.title")}
      </h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder={t("userOrders.searchPlaceholder")}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-[var(--cardColor)] rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead className="bg-[var(--primary)]/10">
            <tr>
              <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">{t("userOrders.table.orderId")}</th>
              <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">{t("userOrders.table.product")}</th>
              <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">{t("userOrders.table.date")}</th>
              <th className="py-2 px-4 font-medium">{t("userOrders.table.status")}</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10 transition">
                <td className="py-2 px-4 border-r">{order.id}</td>
                <td className="py-2 px-4 border-r">{order.product}</td>
                <td className="py-2 px-4 border-r">{order.date}</td>
                <td className="py-2 px-4">
                  <span className={`${statusColor[order.status]} px-2 py-1 rounded-full text-sm font-semibold`}>
                    {t(`userOrders.status.${order.status.toLowerCase()}`)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer: Showing data + pagination */}
        <div className="flex justify-between items-center mt-4 flex-col md:flex-row gap-2">
          <div className="text-sm text-[var(--SubColor)]">
            {t("userOrders.showing", { from: 1, to: orders.length, total: 50 })}
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[var(--primary)] text-white rounded hover:opacity-90 cursor-pointer">
              {t("userOrders.prev")}
            </button>
            <button className="px-4 py-2 bg-[var(--primary)] text-white rounded hover:opacity-90 cursor-pointer">
              {t("userOrders.next")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
