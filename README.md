# Next.js + TypeScript + Tailwind CSS Төсөл

Энэхүү төсөл нь орчин үеийн веб хөгжүүлэлтийн хамгийн алдартай технологиудыг ашиглан бүтээгдсэн юм.

## 🚀 Технологиуд

### Next.js

Next.js бол React-д суурилсан full-stack веб фреймворк юм. Энэ нь:

- **Server-Side Rendering (SSR)** - Сервер талд HTML үүсгэх
- **Static Site Generation (SSG)** - Статик сайт үүсгэх
- **File-based routing** - Файлын бүтцээр route тодорхойлох
- **API Routes** - Backend API бичих боломж
- **Image Optimization** - Зураг автомат оптимайз хийх

### TypeScript

TypeScript бол JavaScript-д төрөл (type) нэмсэн хэл юм:

- **Type Safety** - Алдаанаас урьдчилан сэргийлэх
- **Better IDE Support** - Илүү сайн код бичих орчин
- **Refactoring** - Кодыг аюулгүй өөрчлөх
- **IntelliSense** - Автомат код санал болгох

### Tailwind CSS

Tailwind CSS бол utility-first CSS фреймворк:

- **Utility Classes** - Бэлэн CSS классууд
- **Responsive Design** - Хариуцлагатай дизайн
- **Dark Mode** - Харанхуй горим
- **Component-Based** - Компонент хэв маягаар ажиллах

## 📦 Суулгах заавар

### Шаардлага

```bash
# Node.js хувилбар шалгах
node -v  # 18.0.0 ба түүнээс дээш

# npm хувилбар шалгах
npm -v   # 8.0.0 ба түүнээс дээш
```

### Төслийг татаж авах

```bash
# GitHub-ээс clone хийх
git clone https://github.com/baljir0901/my-app-button.git

# Төслийн фолдер руу орох
cd my-app-button

# Dependencies суулгах
npm install
```

### Хөгжүүлэлтийн сервер ажиллуулах

```bash
# Development server эхлүүлэх
npm run dev

# Браузерт http://localhost:3000 нээх
```

## 🛠️ Скрипт командууд

```bash
# Хөгжүүлэлтийн сервер
npm run dev

# Production build хийх
npm run build

# Production сервер ажиллуулах
npm start

# Код шалгах (Linting)
npm run lint
```

## 📁 Төслийн бүтэц

```
my-app/
├── src/
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── page.tsx        # Үндсэн хуудас
│   │   ├── layout.tsx      # Ерөнхий layout
│   │   └── globals.css     # Global CSS
│   └── components/         # React компонентууд
│       └── Button.tsx      # Товчлуур компонент
├── public/                 # Статик файлууд
├── package.json           # Төслийн тохиргоо
├── tsconfig.json          # TypeScript тохиргоо
├── tailwind.config.js     # Tailwind тохиргоо
└── next.config.ts         # Next.js тохиргоо
```

## 🎨 Tailwind CSS Cheat Sheet

### Layout & Spacing

```css
/* Container */
.container          /* Төв рүү байрлуулах */
/* Төв рүү байрлуулах */
.mx-auto            /* Хөндлөн дундуур байрлуулах */

/* Padding */
.p-4                /* padding: 1rem; */
.px-6               /* padding-left: 1.5rem; padding-right: 1.5rem; */
.py-2               /* padding-top: 0.5rem; padding-bottom: 0.5rem; */

/* Margin */
.m-4                /* margin: 1rem; */
.mt-8               /* margin-top: 2rem; */
.mb-4               /* margin-bottom: 1rem; */

/* Width & Height */
.w-full             /* width: 100%; */
.h-screen           /* height: 100vh; */
.max-w-md; /* max-width: 28rem; */
```

### Colors

```css
/* Background */
.bg-blue-500        /* Цэнхэр өнгийн дэвсгэр */
/* Цэнхэр өнгийн дэвсгэр */
.bg-red-600         /* Улаан өнгийн дэвсгэр */
.bg-gray-100        /* Саарал өнгийн дэвсгэр */

/* Text */
.text-white         /* Цагаан текст */
.text-black         /* Хар текст */
.text-blue-700; /* Цэнхэр текст */
```

### Typography

```css
/* Font Size */
.text-sm            /* font-size: 0.875rem; */
/* font-size: 0.875rem; */
.text-lg            /* font-size: 1.125rem; */
.text-xl            /* font-size: 1.25rem; */
.text-2xl           /* font-size: 1.5rem; */

/* Font Weight */
.font-normal        /* font-weight: 400; */
.font-bold          /* font-weight: 700; */
.font-extrabold     /* font-weight: 800; */

/* Text Align */
.text-center        /* text-align: center; */
.text-left          /* text-align: left; */
.text-right; /* text-align: right; */
```

### Flexbox & Grid

```css
/* Flexbox */
.flex               /* display: flex; */
/* display: flex; */
.flex-col           /* flex-direction: column; */
.justify-center     /* justify-content: center; */
.items-center       /* align-items: center; */
.space-x-4          /* Хооронд 1rem зай */

/* Grid */
.grid               /* display: grid; */
.grid-cols-3        /* 3 багана */
.gap-4; /* gap: 1rem; */
```

### Responsive Design

```css
/* Mobile First Approach */
.sm:text-lg         /* 640px-ээс дээш скринд */
.md:p-6             /* 768px-ээс дээш скринд */
.lg:grid-cols-4     /* 1024px-ээс дээш скринд */
.xl:max-w-6xl       /* 1280px-ээс дээш скринд */
```

### Hover & Focus States

```css
/* Hover */
.hover:bg-blue-700  /* Хулгана тавихад */
.hover:scale-105    /* Хулгана тавихад томрох */

/* Focus */
.focus:outline-none /* Focus border арилгах */
.focus:ring-2       /* Focus ring нэмэх */
```

## 💡 TypeScript Заавар

### Үндсэн төрлүүд

```typescript
// Primitive types
let name: string = "Батбаяр";
let age: number = 25;
let isStudent: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Болд", "Дорж", "Сүх"];

// Object
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

const person: Person = {
  name: "Түмэн",
  age: 30,
};
```

### React компонентууд TypeScript-тэй

```typescript
// Functional Component with Props
interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {title}
    </button>
  );
};

// State with TypeScript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<Person | null>(null);
```

## 🔧 Хөгжүүлэлтийн заавар

### Шинэ компонент үүсгэх

```typescript
// src/components/Card.tsx
interface CardProps {
  title: string;
  content: string;
  image?: string;
}

export const Card: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};
```

### Шинэ хуудас үүсгэх

```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Бидний тухай</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Энэ бол манай компанийн тухай мэдээлэл...
      </p>
    </div>
  );
}
```

## 📚 Хичээллийн материал

### Tailwind CSS

- **Албан ёсны баримт:** https://tailwindcss.com/docs
- **Cheat Sheet:** https://tailwindcomponents.com/cheatsheet/
- **Playground:** https://play.tailwindcss.com/
- **UI Components:** https://tailwindui.com/

### TypeScript

- **Албан ёсны баримт:** https://www.typescriptlang.org/docs/
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/handbook/
- **React + TypeScript:** https://react-typescript-cheatsheet.netlify.app/

### Next.js

- **Албан ёсны баримт:** https://nextjs.org/docs
- **Learn Next.js:** https://nextjs.org/learn
- **Examples:** https://github.com/vercel/next.js/tree/canary/examples

## 🎯 Дасгал ажлууд

### Анхан шатны дасгалууд

1. **Button компонент:** Өөр өөр өнгө, хэмжээтэй товчлуур үүсгэх
2. **Card компонент:** Зураг, гарчиг, агуулгатай карт үүсгэх
3. **Navigation:** Header navigation menu үүсгэх
4. **Footer:** Хуудасний доод хэсэг үүсгэх

### Дунд шатны дасгалууд

1. **Contact Form:** Холбогдох форм үүсгэх (validation-тай)
2. **Product List:** Бүтээгдэхүүний жагсаалт үүсгэх
3. **Modal Dialog:** Popup цонх үүсгэх
4. **Image Gallery:** Зургийн цомог үүсгэх

### Ахисан шатны дасгалууд

1. **Authentication:** Нэвтрэх систем үүсгэх
2. **API Integration:** Backend API-тай холбох
3. **State Management:** Zustand/Redux ашиглах
4. **Database:** Prisma + Database холбох

## 🌟 Pro зөвлөмжүүд

### Performance

```typescript
// Dynamic imports ашиглах
const Chart = dynamic(() => import("./Chart"), { ssr: false });

// Image optimization
import Image from "next/image";
<Image src="/hero.jpg" width={800} height={600} alt="Hero" />;

// CSS-in-JS оронд Tailwind ашиглах
```

### Code Organization

```
src/
├── components/
│   ├── ui/           # Үндсэн UI компонентууд
│   ├── forms/        # Форм компонентууд
│   └── layout/       # Layout компонентууд
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
└── styles/           # Global styles
```

### Git Workflow

```bash
# Feature branch үүсгэх
git checkout -b feature/new-button

# Өөрчлөлт оруулах
git add .
git commit -m "feat: add new button component"

# Main branch-д merge хийх
git checkout main
git merge feature/new-button
```

## 🐛 Түгээмэл алдаанууд

### TypeScript алдаанууд

```typescript
// ❌ Буруу
const user = {};
user.name = "Батбаяр"; // Error: Property 'name' does not exist

// ✅ Зөв
interface User {
  name: string;
}
const user: User = { name: "Батбаяр" };
```

### Tailwind алдаанууд

```css
/* ❌ Буруу - custom CSS бичих */
.my-button {
  background-color: blue;
  padding: 10px;
}

/* ✅ Зөв - Tailwind utility classes ашиглах */
<button className="bg-blue-500 px-4 py-2">Button</button>
```

## 📞 Тусламж авах

### VS Code Extensions

- **Tailwind CSS IntelliSense** - Tailwind class санал болгох
- **TypeScript Importer** - Автомат import нэмэх
- **ES7+ React/Redux/React-Native snippets** - React snippet-үүд
- **Prettier** - Код форматлах
- **ESLint** - Код шалгах

### Хэрэгтэй командууд

```bash
# Package нэмэх
npm install package-name

# Dev dependency нэмэх
npm install -D package-name

# Cache цэвэрлэх
npm run build && rm -rf .next

# Type шалгах
npx tsc --noEmit
```



---

**Амжилт хүсье! 🚀**

_Асуулт байвал GitHub Issues-д бичээрэй эсвэл email илгээгээрэй._
