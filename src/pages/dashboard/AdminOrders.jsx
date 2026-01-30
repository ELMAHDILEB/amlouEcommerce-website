import { useTranslation } from "react-i18next";

export default function AdminOrders() {
  const { t } = useTranslation();

  const orders = [
    { id: "#1021", customer: "Ahmed", status: "Completed" },
    { id: "#1022", customer: "Sara", status: "Pending" },
    { id: "#1023", customer: "Khalid", status: "Processing" },
  ];

  return (
    <div className="min-h-screen bg-[var(--colorBody)] font-[var(--font-poppins)] p-4 md:p-6">
    <h1 className="text-2xl font-bold text-[var(--primary)] mb-4">Recent Orders</h1>
  
    {/* Search */}
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search orders..."
        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
      />
    </div>
  
    {/* Table */}
    <div className="bg-[var(--cardColor)] rounded-2xl shadow p-4 md:p-6 overflow-x-auto">
      <table className="min-w-[600px] w-full text-left border-collapse">
        <thead className="bg-[var(--primary)]/10">
          <tr>
            <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">Order ID</th>
            <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">Customer</th>
            <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">Product</th>
            <th className="py-2 px-4 font-medium border-r border-[var(--SubColor)]">Date</th>
            <th className="py-2 px-4 font-medium">Status</th>
          </tr>
        </thead>
  
        <tbody>
          <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10 transition">
            <td className="py-2 px-4 font-mono border-r border-[var(--SubColor)]">#1021</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">Ahmed</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">Amlou Jar</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">2026-01-25</td>
            <td className="py-2 px-4">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">Completed</span>
            </td>
          </tr>
          <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10 transition">
            <td className="py-2 px-4 font-mono border-r border-[var(--SubColor)]">#1022</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">Sara</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">Argan Oil</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">2026-01-28</td>
            <td className="py-2 px-4">
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">Pending</span>
            </td>
          </tr>
          <tr className="border-b border-[var(--SubColor)] hover:bg-[var(--primary)]/10 transition">
            <td className="py-2 px-4 font-mono border-r border-[var(--SubColor)]">#1023</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">Karim</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">Noix de Cajou</td>
            <td className="py-2 px-4 border-r border-[var(--SubColor)]">2026-01-29</td>
            <td className="py-2 px-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold">Processing</span>
            </td>
          </tr>
        </tbody>
      </table>
  
      {/* Footer: Data showing left, Pagination right */}
      <div className="flex justify-between mt-4 items-center">
        {/* Data showing */}
        <div className="text-sm text-[var(--SubColor)]">
          Showing 1-3 of 50 orders
        </div>
  
        {/* Pagination buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[var(--primary)] text-white rounded hover:opacity-90 cursor-pointer">Prev</button>
          <button className="px-4 py-2 bg-[var(--primary)] text-white rounded hover:opacity-90 cursor-pointer">Next</button>
        </div>
      </div>
    </div>
  </div>
  
  );
}
