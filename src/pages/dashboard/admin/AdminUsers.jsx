// src/pages/dashboard/AdminUsers.jsx
import { useTranslation } from "react-i18next";

export default function AdminUsers() {
  const { t } = useTranslation();

  const users = [
    { id: 1, username: "admin01", firstName: "Ahmed", lastName: "Ali", email: "admin@amlou.com" },
    { id: 2, username: "user02", firstName: "Sara", lastName: "Hassan", email: "sara@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-[var(--colorBody)] font-[var(--font-poppins)] p-4 md:p-6">
      <h1 className="text-2xl font-bold text-[var(--primary)] mb-6">
        {t("adminUsers.title")}
      </h1>

      <div className="bg-[var(--cardColor)] p-6 rounded-2xl shadow overflow-x-auto">
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--SubColor)]">
              <th className="py-2">{t("adminUsers.username")}</th>
              <th className="py-2">{t("adminUsers.firstName")}</th>
              <th className="py-2">{t("adminUsers.lastName")}</th>
              <th className="py-2">{t("adminUsers.email")}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-[var(--SubColor)]">
                <td className="py-2">{user.username}</td>
                <td className="py-2">{user.firstName}</td>
                <td className="py-2">{user.lastName}</td>
                <td className="py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
