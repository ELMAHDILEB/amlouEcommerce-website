import { useTranslation } from "react-i18next";
import useLogout from "../../../hooks/useLogout";

export default function UserDashboard() {
  const { t } = useTranslation();
  const logout = useLogout();

  const orders = [
    { id: "#1001", product: "Amlou Jar", date: "2026-01-25", status: "Delivered" },
    { id: "#1002", product: "Argan Oil", date: "2026-01-28", status: "Processing" },
  ];

  return (
    <div className="min-h-screen bg-[var(--colorBody)] font-[var(--font-poppins)] p-4 md:p-6">
      {/* Header */}
      <header className="bg-[var(--cardColor)] shadow rounded-xl px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-[var(--primary)]">{t("userDashboard.title")}</h1>
        <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition cursor-pointer" onClick={logout}>
          {t("userDashboard.logout")}
        </button>
      </header>

      {/* Profile + Favorites grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Profile Card */}
        <div className="bg-[var(--cardColor)] p-4 md:p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">{t("userDashboard.profile")}</h2>
          <p><span className="font-semibold">{t("userDashboard.username")}:</span> amlou_user</p>
          <p><span className="font-semibold">{t("userDashboard.email")}:</span> user@example.com</p>
        </div>

        {/* Favorites / Wishlist */}
        <div className="bg-[var(--cardColor)] p-4 md:p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-2">{t("userDashboard.favorites")}</h2>
          <p>{t("userDashboard.noFavorites")}</p>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-[var(--cardColor)] p-4 md:p-6 rounded-2xl shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">{t("userDashboard.orders")}</h2>
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--SubColor)]">
              <th className="py-2">{t("userDashboard.orderId")}</th>
              <th className="py-2">{t("userDashboard.product")}</th>
              <th className="py-2">{t("userDashboard.date")}</th>
              <th className="py-2">{t("userDashboard.status")}</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-[var(--SubColor)]">
                <td className="py-2">{order.id}</td>
                <td className="py-2">{order.product}</td>
                <td className="py-2">{order.date}</td>
                <td className={`py-2 ${order.status === "Delivered" ? "text-green-600" : "text-orange-500"}`}>
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
