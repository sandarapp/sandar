import type { Locale } from "@/components/i18n/LocaleProvider";
import { contactEmail } from "@/lib/site";

// Public legal documents. The Sandar API `policies` table points its
// content_url at these pages, and the version here must match the version
// members accept at sign-up. Any wording change needs a new version.
export const legalVersion = "2026-11-launch";
export const legalUpdated = { en: "Last updated 24 October 2026", id: "Terakhir diperbarui 24 Oktober 2026" };
export const privacyContact = contactEmail;

type Section = { h: string; p?: string[]; list?: string[] };
type Doc = { title: string; intro: string; sections: Section[] };
export type LegalType = "privacy" | "terms" | "guidelines";

export const legalDocs: Record<LegalType, Record<Locale, Doc>> = {
  privacy: {
    en: {
      title: "Privacy Notice",
      intro:
        "This notice explains what personal data Sandar collects, why we use it, and the choices you have. We follow Indonesia's Personal Data Protection Law (UU No. 27 of 2022).",
      sections: [
        {
          h: "What we collect",
          list: [
            "Account details: email address, a securely hashed password, and the language you use.",
            "Age confirmation: that you confirmed you are 18 or older. We do not ask for your date of birth.",
            "Onboarding choices: your city and country, the themes you pick, how you like to take part, and your privacy settings.",
            "Activity: spaces you join, reactions you send, reports you make and people you block.",
            "Security data: sign-in sessions, device type and IP address, used to keep accounts safe.",
          ],
        },
        {
          h: "What we never ask for",
          p: ["We do not ask for diagnoses, medication, mood logs or precise location. Please don't share health details you would rather keep private."],
        },
        {
          h: "Why we use it",
          list: [
            "To run your account and show spaces that fit the themes you chose.",
            "To keep people safe: reviewing reports, moderating spaces and preventing abuse.",
            "To send account emails, such as verification and password resets.",
            "To understand, in aggregate, how Sandar is used so we can improve it.",
          ],
        },
        {
          h: "Legal basis",
          p: ["We process your data based on your consent, which you give when you create an account, and to provide the service you asked for. You can withdraw consent at any time by deleting your account."],
        },
        {
          h: "Who we share it with",
          p: [
            "We do not sell your personal data. Communities see your display name, and never the identity behind an anonymous post.",
            "We use service providers for hosting and email, who process data only on our instructions. We may disclose data when the law requires it or to protect someone from serious harm.",
          ],
        },
        {
          h: "How long we keep it",
          p: ["We keep your data while your account is active. When you delete your account we remove or anonymise your personal data within 30 days, except where we must keep records for legal or safety reasons."],
        },
        {
          h: "Your rights",
          list: [
            "See the personal data we hold about you.",
            "Correct data that is wrong.",
            "Delete your account and personal data.",
            "Withdraw consent or object to processing.",
          ],
        },
        { h: "Contact", p: [`Questions or requests: ${privacyContact}. We reply within 3 x 24 hours as required by law.`] },
      ],
    },
    id: {
      title: "Kebijakan Privasi",
      intro:
        "Kebijakan ini menjelaskan data pribadi apa yang dikumpulkan Sandar, untuk apa kami menggunakannya, dan pilihan yang kamu punya. Kami mengikuti Undang-Undang Pelindungan Data Pribadi (UU No. 27 Tahun 2022).",
      sections: [
        {
          h: "Data yang kami kumpulkan",
          list: [
            "Data akun: alamat email, kata sandi yang di-hash dengan aman, dan bahasa yang kamu gunakan.",
            "Konfirmasi usia: bahwa kamu menyatakan berusia 18 tahun ke atas. Kami tidak meminta tanggal lahir.",
            "Pilihan onboarding: kota dan negara, tema yang kamu pilih, cara kamu ingin ikut serta, dan pengaturan privasi.",
            "Aktivitas: ruang yang kamu ikuti, reaksi yang kamu kirim, laporan yang kamu buat, dan orang yang kamu blokir.",
            "Data keamanan: sesi masuk, jenis perangkat, dan alamat IP, untuk menjaga keamanan akun.",
          ],
        },
        {
          h: "Yang tidak pernah kami minta",
          p: ["Kami tidak meminta diagnosis, obat, catatan suasana hati, atau lokasi persis. Mohon jangan membagikan detail kesehatan yang ingin kamu jaga."],
        },
        {
          h: "Untuk apa kami menggunakannya",
          list: [
            "Menjalankan akunmu dan menampilkan ruang yang sesuai dengan tema pilihanmu.",
            "Menjaga keselamatan: meninjau laporan, memoderasi ruang, dan mencegah penyalahgunaan.",
            "Mengirim email akun, seperti verifikasi dan atur ulang kata sandi.",
            "Memahami penggunaan Sandar secara agregat agar kami bisa memperbaikinya.",
          ],
        },
        {
          h: "Dasar pemrosesan",
          p: ["Kami memproses datamu berdasarkan persetujuanmu saat membuat akun, dan untuk menyediakan layanan yang kamu minta. Kamu bisa menarik persetujuan kapan saja dengan menghapus akun."],
        },
        {
          h: "Dengan siapa kami berbagi",
          p: [
            "Kami tidak menjual data pribadimu. Komunitas melihat nama tampilanmu, dan tidak pernah melihat identitas di balik postingan anonim.",
            "Kami memakai penyedia layanan untuk hosting dan email, yang hanya memproses data sesuai instruksi kami. Kami dapat mengungkapkan data jika diwajibkan hukum atau untuk melindungi seseorang dari bahaya serius.",
          ],
        },
        {
          h: "Berapa lama kami menyimpannya",
          p: ["Kami menyimpan datamu selama akunmu aktif. Saat kamu menghapus akun, data pribadimu dihapus atau dianonimkan dalam 30 hari, kecuali yang wajib kami simpan karena alasan hukum atau keselamatan."],
        },
        {
          h: "Hakmu",
          list: [
            "Melihat data pribadi yang kami simpan tentangmu.",
            "Memperbaiki data yang salah.",
            "Menghapus akun dan data pribadimu.",
            "Menarik persetujuan atau menolak pemrosesan.",
          ],
        },
        { h: "Kontak", p: [`Pertanyaan atau permintaan: ${privacyContact}. Kami membalas dalam 3 x 24 jam sesuai ketentuan hukum.`] },
      ],
    },
  },
  terms: {
    en: {
      title: "Terms of Service",
      intro: "These terms apply when you use Sandar. By creating an account you agree to them.",
      sections: [
        { h: "Who can use Sandar", p: ["You must be 18 or older. One person, one account. Keep your password private; you are responsible for activity on your account."] },
        {
          h: "What Sandar is, and isn't",
          p: [
            "Sandar is a platform for peer support communities. It is not therapy, medical care or an emergency service, and nothing on Sandar is professional advice.",
            "If you or someone else is in danger, call 119. For emotional crisis support call 119 ext. 8 or visit Healing119.id.",
          ],
        },
        { h: "Communities", p: ["Communities on Sandar are run by independent groups that we verify, plus spaces run by Sandar. Verification means we checked who runs a community; it is not an endorsement of every post or event."] },
        { h: "Your content", p: ["You own what you post. You give Sandar permission to show it in the spaces where you share it. We may remove content that breaks these terms or the Community Guidelines."] },
        { h: "Using Sandar well", p: ["Follow the Community Guidelines. Don't misuse the service, try to access other accounts, scrape data, or use Sandar to sell or advertise without permission."] },
        { h: "Suspension and closing accounts", p: ["We may limit or suspend accounts that break these terms, and you can appeal. You can delete your account at any time."] },
        { h: "Changes and liability", p: ["Sandar is provided as is. We aren't liable for what members or communities say or do, to the extent the law allows. When these terms change we will tell you before the change takes effect."] },
        { h: "Governing law", p: ["These terms are governed by the laws of the Republic of Indonesia."] },
      ],
    },
    id: {
      title: "Syarat Layanan",
      intro: "Syarat ini berlaku saat kamu menggunakan Sandar. Dengan membuat akun, kamu menyetujuinya.",
      sections: [
        { h: "Siapa yang bisa menggunakan Sandar", p: ["Kamu harus berusia 18 tahun ke atas. Satu orang, satu akun. Jaga kerahasiaan kata sandimu; kamu bertanggung jawab atas aktivitas di akunmu."] },
        {
          h: "Apa itu Sandar, dan apa yang bukan",
          p: [
            "Sandar adalah platform untuk komunitas dukungan sebaya. Sandar bukan terapi, layanan medis, atau layanan darurat, dan tidak ada konten di Sandar yang merupakan saran profesional.",
            "Jika kamu atau orang lain dalam bahaya, hubungi 119. Untuk dukungan krisis emosional hubungi 119 ext. 8 atau kunjungi Healing119.id.",
          ],
        },
        { h: "Komunitas", p: ["Komunitas di Sandar dikelola kelompok independen yang kami verifikasi, ditambah ruang yang dikelola Sandar. Verifikasi berarti kami sudah memeriksa pengelolanya; bukan berarti kami menyetujui setiap postingan atau acara."] },
        { h: "Kontenmu", p: ["Kamu memiliki apa yang kamu posting. Kamu memberi izin kepada Sandar untuk menampilkannya di ruang tempat kamu membagikannya. Kami dapat menghapus konten yang melanggar syarat ini atau Pedoman Komunitas."] },
        { h: "Menggunakan Sandar dengan baik", p: ["Ikuti Pedoman Komunitas. Jangan menyalahgunakan layanan, mencoba mengakses akun lain, mengambil data secara otomatis, atau berjualan dan beriklan tanpa izin."] },
        { h: "Penangguhan dan penutupan akun", p: ["Kami dapat membatasi atau menangguhkan akun yang melanggar syarat ini, dan kamu dapat mengajukan banding. Kamu dapat menghapus akunmu kapan saja."] },
        { h: "Perubahan dan tanggung jawab", p: ["Sandar disediakan sebagaimana adanya. Sejauh diizinkan hukum, kami tidak bertanggung jawab atas ucapan atau tindakan member maupun komunitas. Jika syarat ini berubah, kami akan memberi tahu sebelum perubahan berlaku."] },
        { h: "Hukum yang berlaku", p: ["Syarat ini tunduk pada hukum Republik Indonesia."] },
      ],
    },
  },
  guidelines: {
    en: {
      title: "Community Guidelines",
      intro: "Sandar works when people feel safe to read, react and, later, share. These guidelines apply in every space.",
      sections: [
        { h: "Be kind", list: ["Listen before you respond.", "Support people, don't judge them.", "Respect that everyone takes part at their own pace."] },
        { h: "Share experience, not advice", list: ["Talk about what helped you, not what others should do.", "No medication, dosage or diagnosis advice.", "Don't present yourself as a professional unless the space says so."] },
        { h: "Keep each other safe", list: ["No content that encourages self-harm or suicide, or describes methods.", "Use a content note for heavy topics.", "If someone may be in danger, report the post so our safety team can see it."] },
        { h: "Protect privacy", list: ["Don't share anyone's personal details or screenshots from a space.", "Never try to find out who is behind an anonymous post."] },
        { h: "Not allowed", list: ["Harassment, hate speech or threats.", "Selling, spam or recruiting for other services.", "Sexual content, or anything involving minors."] },
        { h: "What happens when rules are broken", p: ["Moderators may hide content, give a warning, or remove someone from a space. Serious cases go to Sandar's safety team and can lead to account suspension. You can appeal any decision."] },
      ],
    },
    id: {
      title: "Pedoman Komunitas",
      intro: "Sandar berjalan baik saat orang merasa aman untuk membaca, memberi reaksi, dan nantinya bercerita. Pedoman ini berlaku di setiap ruang.",
      sections: [
        { h: "Bersikap baik", list: ["Dengarkan sebelum menanggapi.", "Dukung, jangan menghakimi.", "Hargai bahwa setiap orang ikut serta sesuai ritmenya."] },
        { h: "Bagikan pengalaman, bukan nasihat", list: ["Ceritakan apa yang membantumu, bukan apa yang harus dilakukan orang lain.", "Tidak ada saran obat, dosis, atau diagnosis.", "Jangan mengaku sebagai profesional kecuali ruang tersebut menyatakannya."] },
        { h: "Saling menjaga", list: ["Tidak ada konten yang mendorong menyakiti diri atau bunuh diri, atau menjelaskan caranya.", "Gunakan catatan konten untuk topik berat.", "Jika seseorang mungkin dalam bahaya, laporkan postingannya agar tim keamanan kami bisa melihatnya."] },
        { h: "Lindungi privasi", list: ["Jangan membagikan data pribadi orang lain atau tangkapan layar dari sebuah ruang.", "Jangan pernah mencoba mencari tahu siapa di balik postingan anonim."] },
        { h: "Tidak diperbolehkan", list: ["Pelecehan, ujaran kebencian, atau ancaman.", "Berjualan, spam, atau merekrut untuk layanan lain.", "Konten seksual, atau apa pun yang melibatkan anak di bawah umur."] },
        { h: "Jika aturan dilanggar", p: ["Moderator dapat menyembunyikan konten, memberi peringatan, atau mengeluarkan seseorang dari ruang. Kasus serius diteruskan ke tim keamanan Sandar dan dapat berujung penangguhan akun. Kamu dapat mengajukan banding atas setiap keputusan."] },
      ],
    },
  },
};
