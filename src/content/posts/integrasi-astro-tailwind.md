---
title: Integrasi Astro dan Tailwind
tags: ["astro", "tailwind"]
publishDate: 2024-09-26
---

Jalankan perintah berikut untuk menyiapkan paket yang diperlukan, lalu ikuti instruksi yang ada di terminal.

```sh
bunx astro add tailwind
```

Pastikan paket tersebut telah diintegrasikan dengan Astro. Umumnya tidak perlu menambahkan secara manual, sebab akan ditambahkan otomatis setelah perintah di atas dijalankan.

```js
export default defineConfig({
  integrations: [tailwind()],
});
```

Selain itu, fail `tailwind.config.js` di folder _root_ juga akan dibuatkan otomatis.

## Integrasi Prettier

Ada beberapa langkah tambahan supaya Prettier bisa bekerja di fail `*.astro`.

Pertama instal dependensi pengembangan dengan perintah berikut.

```sh
bun add --dev prettier prettier-plugin-astro prettier-plugin-tailwindcss
```

Sesuaikan konfigurasi Prettier di dalam fail `.prettierrc.mjs`.

```js
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,
  // ...
};
```

Dari sumber informasi yang saya baca, dari sini Prettier sudah siap digunakan.

## Prettier Tidak Bekerja

Jangan panik, mungkin kasus kamu sama seperti saya. Setelah beberapa jam mencari informasi yang cocok tapi tidak ada yang cocok dan setelah beberapa kali melakukan eksperimen, saya menemukan solusinya yaitu dengan memberlakukan aturan _workspace_ pada VS Code.

Kita buat agar Prettier dijalankan otomatis pada saat menyimpan fail `*.astro`.

Buatlah fail `settings.json` di dalam folder `.vscode` di dalam folder _root_ yang berisi:

```json
{
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

Oke, seharusnya Prettier sudah bisa bekerja dengan baik.
