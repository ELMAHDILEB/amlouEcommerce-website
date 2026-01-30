import { useTranslation } from "react-i18next";

export default function Orders() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[var(--colorBody)] font-[var(--font-poppins)] p-4 md:p-6">
      <h1 className="text-2xl font-bold text-[var(--primary)] mb-4">
        {t("adminOrders.title")}
      </h1>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder={t("adminOrders.search")}
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
      </div>

      {/* Table */}
      <div className="bg-[var(--cardColor)] rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
        <table className="min-w-[700px] w-full text-left border-collapse">
          <thead className="bg-[var(--primary)]/10">
            <tr>
              <th className="py-2 px-4 border-r border-[var(--SubColor)]">
                {t("adminOrders.table.orderId")}
              </th>
              <th className="py-2 px-4 border-r border-[var(--SubColor)]">
                {t("adminOrders.table.customer")}
              </th>
              <th className="py-2 px-4 border-r border-[var(--SubColor)]">
                {t("adminOrders.table.product")}
              </th>
              <th className="py-2 px-4 border-r border-[var(--SubColor)]">
                {t("adminOrders.table.date")}
              </th>
              <th className="py-2 px-4">
                {t("adminOrders.table.status")}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10">
              <td className="py-2 px-4 border-r">#1021</td>
              <td className="py-2 px-4 border-r">Ahmed</td>
              <td className="py-2 px-4 border-r">Amlou Jar</td>
              <td className="py-2 px-4 border-r">2026-01-25</td>
              <td className="py-2 px-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  {t("adminOrders.status.completed")}
                </span>
              </td>
            </tr>

            <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10">
              <td className="py-2 px-4 border-r">#1022</td>
              <td className="py-2 px-4 border-r">Sara</td>
              <td className="py-2 px-4 border-r">Argan Oil</td>
              <td className="py-2 px-4 border-r">2026-01-28</td>
              <td className="py-2 px-4">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm">
                  {t("adminOrders.status.pending")}
                </span>
              </td>
            </tr>

            <tr className="hover:bg-[var(--primary)]/10">
              <td className="py-2 px-4 border-r">#1023</td>
              <td className="py-2 px-4 border-r">Karim</td>
              <td className="py-2 px-4 border-r">Cashew Nuts</td>
              <td className="py-2 px-4 border-r">2026-01-29</td>
              <td className="py-2 px-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {t("adminOrders.status.processing")}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-[var(--SubColor)]">
          {t("adminOrders.showing")}
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[var(--primary)] text-white rounded cursor-pointer">
            {t("adminOrders.prev")}
          </button>
          <button className="px-4 py-2 bg-[var(--primary)] text-white rounded cursor-pointer">
            {t("adminOrders.next")}
          </button>
        </div>
      </div>
    </div>
  );
}
