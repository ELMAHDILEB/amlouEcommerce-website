import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[var(--colorBody)] font-[var(--font-poppins)] p-4 md:p-6">
      {/* Header */}
      <header className="bg-[var(--cardColor)] shadow rounded-xl px-4 md:px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-[var(--primary)]">
          {t("dashboard.title")}
        </h1>
        <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition cursor-pointer">
          {t("dashboard.logout")}
        </button>
      </header>

      {/* Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-[var(--cardColor)] p-4 md:p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">{t("dashboard.users")}</h3>
          <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">120</p>
        </div>
        <div className="bg-[var(--cardColor)] p-4 md:p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">{t("dashboard.orders")}</h3>
          <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">45</p>
        </div>
        <div className="bg-[var(--cardColor)] p-4 md:p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-2">{t("dashboard.products")}</h3>
          <p className="text-3xl md:text-4xl font-bold text-[var(--primary)]">32</p>
        </div>
      </main>

      {/* Recent Orders Table */}
      <div className="bg-[var(--cardColor)] rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
  <h3 className="text-lg font-semibold mb-4">{t("dashboard.recentOrders")}</h3>

  <table className="min-w-[600px] w-full text-left border-collapse">
    <thead className="bg-[var(--primary)]/10">
      <tr>
        <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">Order ID</th>
        <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">{t("dashboard.customer")}</th>
        <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">{t("dashboard.product")}</th>
        <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">{t("dashboard.date")}</th>
        <th className="py-2 px-4 font-medium">{t("dashboard.status")}</th>
      </tr>
    </thead>

    <tbody>
      <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10 transition">
        <td className="py-2 px-4 font-mono border-r border-[var(--SubColor)]">#1021</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">Ahmed</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">Amlou Jar</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">2026-01-25</td>
        <td className="py-2 px-4">
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
            {t("dashboard.completed")}
          </span>
        </td>
      </tr>

      <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10 transition">
        <td className="py-2 px-4 font-mono border-r border-[var(--SubColor)]">#1022</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">Sara</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">Argan Oil</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">2026-01-28</td>
        <td className="py-2 px-4">
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">
            {t("dashboard.pending")}
          </span>
        </td>
      </tr>

      <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10 transition">
        <td className="py-2 px-4 font-mono border-r border-[var(--SubColor)]">#1023</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">Karim</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">Noix de Cajou</td>
        <td className="py-2 px-4 border-r border-[var(--SubColor)]">2026-01-29</td>
        <td className="py-2 px-4">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">
            {t("dashboard.processing")}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>



    </div>
  );
}
