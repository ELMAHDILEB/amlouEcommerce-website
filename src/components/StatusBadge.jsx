import { useTranslation } from "react-i18next";

export function StatusBadge({ status }) {
  const { t } = useTranslation();

  const base =
    "px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap";

  const styles = {
    completed: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
    pending: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
    processing: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  };

  return (
    <span className={`${base} ${styles[status]}`}>
      {t(`adminOrders.status.${status}`)}
    </span>
  );
}
