---
layout: ../../../src/layouts/MarkdownLayout.astro
title: Glosarium
---

# Glosarium

## RSS

RSS (_Really Simple Syndication_) adalah format berlangganan konten yang digunakan untuk mendistribusikan _update_ dari sebuah situs web, blog, atau platform secara otomatis ke pengguna. RSS memungkinkan pengguna untuk mendapatkan notifikasi tentang konten baru tanpa harus mengunjungi situs tersebut secara langsung.

Biasanya, RSS disediakan dalam bentuk file XML yang berisi ringkasan atau isi lengkap dari artikel atau posting terbaru. Pengguna bisa menggunakan aplikasi pembaca RSS (RSS _reader_) untuk mengumpulkan dan menampilkan _feed_ dari berbagai sumber dalam satu tempat, sehingga memudahkan dalam mengikuti _update_ dari banyak situs web sekaligus.

Kalau punya blog atau proyek pribadi, RSS bisa jadi fitur tambahan untuk memberi tahu pengunjung tentang update konten baru.

### RSS Feed

Dalam konteks RSS, "feed" adalah istilah yang merujuk pada kumpulan konten yang disediakan dalam format XML yang dapat diakses dan dibaca oleh aplikasi pembaca RSS atau _aggregator_. Feed ini berisi daftar artikel, postingan blog, atau konten terbaru dari sebuah situs web.

Setiap item dalam RSS feed biasanya mencakup beberapa elemen utama seperti:

- **Title**: Judul dari artikel atau postingan.
- **Description**: Ringkasan atau cuplikan dari artikel.
- **Link**: URL yang mengarah ke konten penuh di situs web.
- **Publication Date**: Waktu dan tanggal konten diterbitkan.
- **Author**: Penulis konten, meskipun ini opsional.

Jadi, RSS feed adalah file yang berisi informasi terbaru dari sebuah situs yang bisa digunakan oleh pengguna untuk mengikuti update tanpa harus mengunjungi situs tersebut secara manual. RSS feed juga memudahkan pengguna untuk mengelola banyak sumber konten dalam satu aplikasi atau dashboard.

## Viewport

Viewport adalah area tampilan yang terlihat dari sebuah halaman web pada perangkat pengguna, seperti layar komputer, tablet, atau smartphone. Ini mencakup ukuran layar yang tersedia untuk menampilkan konten situs web, tanpa memperhitungkan elemen-elemen seperti bilah alat (_toolbar_) atau bilah gulir (_scrollbar_).

Dalam konteks pengembangan web, viewport sering kali dikaitkan dengan _responsiveness_, di mana halaman web perlu menyesuaikan tata letak dan tampilannya agar sesuai dengan ukuran perangkat pengguna. Untuk mengontrol tampilan halaman pada berbagai perangkat, pengembang sering menggunakan `meta` tag `viewport`, contohnya:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Tag ini memberi tahu browser bahwa lebar halaman harus disesuaikan dengan lebar perangkat, dan `initial-scale=1.0` berarti tidak ada pembesaran atau pengecilan pada halaman saat pertama kali dimuat.
