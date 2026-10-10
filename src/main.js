import "./style.css";

const WA = "966500189392";

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-mobile-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.add("hidden")));

// current year in footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

// package buttons prefill the hours field
document.querySelectorAll("[data-hours]").forEach((el) =>
  el.addEventListener("click", () => {
    const sel = document.querySelector("#hours");
    if (sel) sel.value = el.dataset.hours;
  })
);

// booking form -> WhatsApp message
const form = document.querySelector("#booking");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const lines = [
    "السلام عليكم، أبغى أحجز عاملة نظافة من لمعة",
    `الاسم: ${d.get("name")}`,
    `نوع الخدمة: ${d.get("service")}`,
    `عدد الساعات: ${d.get("hours")}`,
    `عدد العاملات: ${d.get("workers")}`,
    `التاريخ: ${d.get("date")}`,
    `الفترة: ${d.get("period")}`,
    `الحي: ${d.get("district")}`,
  ];
  if (d.get("notes")) lines.push(`ملاحظات: ${d.get("notes")}`);
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank");
});

// min date = today
const date = document.querySelector("#date");
if (date) date.min = new Date().toISOString().split("T")[0];
