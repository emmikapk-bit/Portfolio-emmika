function Icon({ name, className = "" }) {
  // รวม class หลักของไอคอนกับ class ที่ส่งเข้ามาเพิ่มเติม
  const classes = `h-[36px] w-[36px] text-[#5b5056] ${className}`.trim();

  // ไอคอน GitHub สำหรับลิงก์โซเชียล
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.64-.2.64-.46v-1.7c-2.62.57-3.17-1.11-3.17-1.11a2.5 2.5 0 0 0-1.05-1.37c-.86-.58.07-.57.07-.57a1.99 1.99 0 0 1 1.46.98 2.05 2.05 0 0 0 2.8.8 2.06 2.06 0 0 1 .61-1.29c-2.09-.24-4.29-1.04-4.29-4.63a3.63 3.63 0 0 1 .97-2.53 3.37 3.37 0 0 1 .09-2.49s.79-.25 2.6.97a9.1 9.1 0 0 1 4.74 0c1.81-1.22 2.6-.97 2.6-.97a3.37 3.37 0 0 1 .1 2.49 3.63 3.63 0 0 1 .96 2.53c0 3.6-2.2 4.39-4.3 4.62a2.31 2.31 0 0 1 .66 1.79v2.66c0 .26.17.56.65.46A9.5 9.5 0 0 0 12 2.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // ไอคอน LinkedIn สำหรับลิงก์โซเชียล
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M6.73 8.44a1.47 1.47 0 1 1 0-2.94 1.47 1.47 0 0 1 0 2.94Zm1.26 10.05H5.48v-8.66H8Zm10.53 0h-2.5V14.3c0-1-.02-2.29-1.39-2.29-1.4 0-1.61 1.09-1.61 2.22v4.26H10.5v-8.66h2.39v1.18h.03c.33-.63 1.15-1.3 2.37-1.3 2.54 0 3.01 1.67 3.01 3.84v4.94ZM19.76 3H4.24A1.22 1.22 0 0 0 3 4.21v15.58A1.22 1.22 0 0 0 4.24 21h15.52A1.23 1.23 0 0 0 21 19.79V4.21A1.23 1.23 0 0 0 19.76 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // ไอคอนแบบตัวอักษรสำหรับ JavaScript
  if (name === "javascript") {
    return <MonogramIcon className={classes} letters="JS" />;
  }

  // ไอคอนแบบตัวอักษรสำหรับกลุ่ม HTML/CSS
  if (name === "htmlcss") {
    return <MonogramIcon className={classes} letters="<> " compact />;
  }

  // ไอคอนทรงวงโคจรสำหรับ React / Next.js
  if (name === "react") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.2"
          transform="rotate(60 12 12)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3.2"
          transform="rotate(120 12 12)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }

  // ไอคอนเส้นโค้งสไตล์ Tailwind
  if (name === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M7 9.5c1.3-2.5 3.18-3.75 5.64-3.75 3.69 0 4.15 2.77 6 3.2-1.3 2.5-3.18 3.75-5.64 3.75C9.3 12.7 8.85 9.93 7 9.5Zm-1.6 5c1.3-2.5 3.18-3.75 5.64-3.75 3.69 0 4.15 2.77 6 3.2-1.3 2.5-3.18 3.75-5.64 3.75-3.69 0-4.15-2.77-6-3.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // ไอคอนเรียบง่ายสำหรับ Node / Express
  if (name === "node") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="m12 3.5 6.5 3.75v9.5L12 20.5 5.5 16.75v-9.5L12 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M10 9.2v5.6m4-5.6v5.6m-4 0 4-5.6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // ไอคอนฐานข้อมูลสำหรับ PostgreSQL / MongoDB
  if (name === "database") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <ellipse
          cx="12"
          cy="6.5"
          rx="6.4"
          ry="2.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M5.6 6.5v5c0 1.55 2.86 2.8 6.4 2.8s6.4-1.25 6.4-2.8v-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M5.6 11.5v5c0 1.55 2.86 2.8 6.4 2.8s6.4-1.25 6.4-2.8v-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }

  // ไอคอนกิ่งก้านแบบย่อสำหรับ Git / GitHub
  if (name === "git") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M8 7.5a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 8 7.5Zm8 5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8 9.25v5m0 0 8 0m-4-5v5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // ไอคอนวงเล็บโค้ดสำหรับ API / JWT Auth
  if (name === "api") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M9 7 5 12l4 5m6-10 4 5-4 5m-4-8 2-4m-2 14 2-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // ไอคอน Docker แบบลดทอนรายละเอียดให้เข้ากับโทนเว็บ
  if (name === "docker") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M7.2 9.1h2.1v2H7.2zm2.35 0h2.1v2h-2.1zm2.35 0H14v2h-2.1zm-4.7 2.3h2.1v2H7.2zm2.35 0h2.1v2h-2.1zm2.35 0H14v2h-2.1zM6.5 14c.18 2.1 1.8 3.8 4.08 3.8h3.16c3.08 0 5.28-1.61 5.78-4.63-.77.2-1.54.08-2.08-.32-.3-1-.96-1.73-2.07-2.15.06 1.64-1 2.62-2.58 2.62H6.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // ไอคอนประกายสำหรับ Claude และ AI Tools
  if (name === "claude") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Zm-5.5 11 1 2.7L10.2 18l-2.7 1-1 2.7-1-2.7L2.8 18l2.7-1 1-2.7Zm11 0 1 2.7 2.7 1-2.7 1-1 2.7-1-2.7-2.7-1 2.7-1 1-2.7Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // ไอคอนทรงอัญมณีสำหรับ Obsidian
  if (name === "obsidian") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="m11.88 3.2 4.98 3.3 1.5 5.37-2.54 7.02-6.2 1.9-3.42-5.72 1.5-8.57 4.18-3.3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="m12 5.4 2.35 5.18L12 18.6l-2.35-8.02L12 5.4Z"
          fill="currentColor"
          opacity=".45"
        />
      </svg>
    );
  }

  // ไอคอนลูกศรวนสื่อถึง Agile / Scrum
  if (name === "agile") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="M17.5 8.5A6.5 6.5 0 0 0 6.7 6.4m10.8 2.1V5.1m0 3.4h-3.4M6.5 15.5A6.5 6.5 0 0 0 17.3 17.6m-10.8-2.1v3.4m0-3.4h3.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // ไอคอนสายฟ้าแบบย่อสำหรับ Vite
  if (name === "vite") {
    return (
      <svg viewBox="0 0 24 24" className={classes} aria-hidden="true">
        <path
          d="m13.1 3.5 5.6 1.1-4.18 12.34a1.2 1.2 0 0 1-1.02.8l-3.93.36a1.2 1.2 0 0 1-1.2-.77L5.2 8.42l3.72-.63 1.58 4.53L13.1 3.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // ไอคอนสำรอง ใช้กรณีไม่มีชื่อไอคอนที่ตรงกัน
  return <MonogramIcon className={classes} letters="•" compact />;
}

function MonogramIcon({ className, letters, compact = false }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect
        x="3.4"
        y="3.4"
        width="17.2"
        height="17.2"
        rx="5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <text
        x="12"
        y={compact ? "14" : "14.3"}
        textAnchor="middle"
        fontSize={compact ? "7" : "7.8"}
        fontWeight="700"
        fill="currentColor"
        fontFamily="inherit"
      >
        {letters}
      </text>
    </svg>
  );
}

export default Icon;
