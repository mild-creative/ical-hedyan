import Groom from '../assets/groom.png';
import Bride from '../assets/bride.png';
//
import BannerRight from '../assets/banner-right.jpg';
import BannerLeft from '../assets/banner-left.jpg';
import Banner from '../assets/banner.jpg';

import Gallery1 from '../assets/gallery1.jpg';
import Gallery2 from '../assets/gallery2.jpg';
import Gallery3 from '../assets/gallery3.jpg';
import Gallery4 from '../assets/gallery4.jpg';
import Gallery5 from '../assets/gallery5.jpg';
import Gallery6 from '../assets/gallery6.jpg';
import Gallery7 from '../assets/gallery7.jpg';
import Gallery8 from '../assets/gallery8.jpg';

export const opener = {
  brand: 'Powered by Mhd Creative',
  bride: 'Hedyan',
  groom: 'Rizal',
  description: `Tanpa mengurangi rasa hormat, dikarenakan keterbatasan kondisi pandemi Covid-19 saat ini. Mohon maaf kami hanya mengundang keluarga inti dan beberapa kerabat untuk menghadiri acara secara langsung. Semoga Bapak/Ibu/Saudara/i dan kerabat sekalian dapat memakluminya. Terima kasih atas do'anya`,
  top: 'Official Wedding Announcement'
};

export const weddingDetailTop = {
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم',
  artiAyat: `❝Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.❞`,
  surat: '(Ar-Rum: 21)'
};

class Person {
  constructor(name, fullName, img, kidPos, pop, mom) {
    this.name = name;
    this.fullName = fullName;
    this.img = img;
    this.kidPos = kidPos;
    this.pop = pop;
    this.mom = mom;
  }
}

export const bride = new Person(
  'Hedyan',
  'Letda Laut (S/W) Hedyan Sabila Ghaisani, S.E.',
  Bride,
  'Puteri Pertama dari',
  'Bapak Harjanto',
  'Ibu Letkol Cku (K) Nurmala'
);
export const groom = new Person(
  'Rizal',
  'Letda Laut (KH) Rizal Trytama Sukirno Putra, S.T.',
  Groom,
  'Putera Ketiga dari',
  'Bapak Letkol Caj (Purn) Drs. Sukirno (Alm)',
  'Ibu Hj. Enny Pujawati, S.E.'
);

export const navbar = {
  topWords: "The Wedding of",
  topName: "Hedyan and Rizal"
}

export const navbarMenu = [
  { name: 'Home' },
  { name: 'Quote' },
  { name: 'Wedding' },
  { name: 'Reception' },
  { name: 'Location' },
  { name: 'Guestbook' }
];

export const EVENT_INFO = {
  AKAD: {
    date: `Jum'at, 19 Maret 2021`,
    time: '15.00 WIB - selesai',
    venue: 'Kediaman Mempelai Wanita'
  },
  RESEPSI: {
    date: 'Minggu, 3 Januari 2021',
    time: '16.30 - 18.00 WIB',
    venue: 'Gedung Balai Komando' 
  },
  MAP_URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5921664053776!2d106.85198351449421!3d-6.317180763575668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed980e2ced83%3A0x4475bf3554adbe96!2sBalai%20Komando!5e0!3m2!1sid!2sid!4v1610530974710!5m2!1sid!2sid"
}

export const CODES = {
  ONE_GUEST_FIRST_SESSION: 'mr',
  TWO_GUESTS_FIRST_SESSION: 'r',
  ONE_GUEST_SECOND_SESSION: '1g2Ss',
  TWO_GUESTS_SECOND_SESSION: 'm'
}

export const galleryImgs = [ Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8 ];