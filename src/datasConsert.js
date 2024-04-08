let datasConsert = {
    tehran: [
        { id: 1, nameSinger: 'گروه آوای موج', location: "برج آزادی", date: '30 بهمن', time: '22:00', day: 'دوشنبه', img: '/images/Tehran/avaymoj.jpg', img2: '/images/Tehran/avaymoj2.jpg' },
        { id: 2, nameSinger: 'میثم ابراهیمی', location: "سالن نمایشگاه ", date: '30 بهمن', time: '19:00', day: 'سه شنبه', img: '/images/Tehran/meysam.jpg', img2: '/images/Tehran/meysam2.jpg' },
        { id: 3, nameSinger: 'حسن ریوندی ', location: " هتل اسپیناس پالاس ", date: '30 بهمن', time: '22:00', day: 'دوشنبه', img: '/images/Tehran/hasan.jpg', img2: '/images/Tehran/hasan2.jpg' },
        { id: 4, nameSinger: 'میلاد درخشانی ', location: "سالن نمایشگاه ", date: '30 بهمن', time: '18:30', day: 'شنبه', img: '/images/Tehran/milad.jpg', img2: '/images/Tehran/milad2.jpg' },
    ],
    fajr: [
        { id: 5, nameSinger: 'مهدی احمدوند', location: "برج آزادی", date: '24 بهمن', time: '22:00', day: 'دوشنبه', img: '/images/Fajr/fajr.jpg', img2: '/images/Fajr/fajr2.jpg' },
        { id: 6, nameSinger: 'حجت اشرف زاده ', location: "سالن نمایشگاه ", date: '24 بهمن', time: '19:00', day: 'سه شنبه', img: '/images/Fajr/fajr.jpg', img2: '/images/Fajr/fajr2.jpg' },
        { id: 7, nameSinger: 'اشوان  ', location: " تالار وحدت   ", date: '25 بهمن', time: '22:00', day: 'دوشنبه', img: '/images/Fajr/fajr.jpg', img2: '/images/Fajr/fajr2.jpg' },
    ],
    sonati: [
        { id: 8, nameSinger: 'رمیک هوانسیان ', location: "تالار رودکی ", date: ' 5 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Sonati/remic.jpg', img2: '/images/Sonati/remic2.jpg' },
        { id: 9, nameSinger: 'ناصر وحدتی   ', location: "سالن نمایشگاه ", date: ' 5 اسفند', time: '19:00', day: 'سه شنبه', img: '/images/Sonati/naser.jpg', img2: '/images/Sonati/naser2.jpg' },
        { id: 10, nameSinger: 'ارکستر میترا  ', location: " تالار وحدت   ", date: ' 7 اسفند', time: '22:00', day: 'شنیه', img: '/images/Sonati/mitra.jpg', img2: '/images/Sonati/mitra2.jpg' },
        { id: 11, nameSinger: 'فریدون ناصحی  ', location: " تالار رودکی   ", date: ' 10 اسفند', time: '19:00', day: 'دوشنبه', img: '/images/Sonati/feri.jpg', img2:  '/images/Sonati/feri2.jpg' },
        { id: 12, nameSinger: 'آواکوب  ', location: "  برج آزادی   ", date: ' 6 اسفند', time: '18:00', day: 'یکشنبه', img: '/images/Sonati/ava.jpg', img2: '/images/Sonati/ava2.jpg' },
        { id: 13, nameSinger: 'نجوای عشق  ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Sonati/eshgh.jpg', img2:'/images/Sonati/eshgh2.jpg' },
    // ],   shahrestan: [
    //     { id: 14, nameSinger: ' زیبا کنار اشوان ', location: "سالن آرش مارکت  ", date: ' 24 بهمن', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/ashvan.jpg', img2: '/images/Shahrestan/ashvan2.jpg' },
    //     { id: 15, nameSinger: ' رشت میلاد معاف   ', location: "سالن نمایشگاه ", date: ' 5 اسفند', time: '19:00', day: 'سه شنبه', img: '/images/Shahrestan/milad.jpg', img2: '/images/Shahrestan/milad2.jpg' },
    //     { id: 16, nameSinger: ' اصفهان هوروش  ', location: " تالار وحدت   ", date: ' 7 اسفند', time: '22:00', day: 'شنیه', img: '/images/Shahrestan/horosh.jpg', img2: '/images/Shahrestan/horosh2.jpg' },
    //     { id: 17, nameSinger: ' لاهیجان گروه دیلمون  ', location: " تالار رودکی   ", date: ' 10 اسفند', time: '19:00', day: 'دوشنبه', img: '/images/Shahrestan/mahmod.jpg', img2:  '/images/Shahrestan/mahmod2.jpg' },
    //     { id: 18, nameSinger: 'ارومیه هوروش  ', location: "  برج آزادی   ", date: ' 6 اسفند', time: '18:00', day: 'یکشنبه', img: '/images/Shahrestan/horosh.jpg', img2: '/images/Shahrestan/horosh2.jpg' },
    //     { id: 19, nameSinger: ' آمل فرهاد ناصری  ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/farhad.jpg', img2:'/images/Shahrestan/farhad2.jpg' },
    //     { id: 20, nameSinger: ' آمل پرواز همای  ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/parvaz.jpg', img2:'/images/Shahrestan/parvaz2.jpg' },
    //     { id: 21, nameSinger: ' مهاباد هوروش', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/horosh.jpg', img2:'/images/Shahrestan/horosh2.jpg' },
    //     { id: 22, nameSinger: 'تبریز حجت اشرف زاده ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/hojat.jpg', img2:'/images/Shahrestan/hojat2.jpg' },
    //     { id: 23, nameSinger: ' ارومیه رحیم شهریاری', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/rahim.jpg', img2:'/images/Shahrestan/rahim2.jpg' },
    //     { id: 24, nameSinger: ' الوند گروه کاکوند', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/kaka.jpg', img2:'/images/Shahrestan/kaka2.jpg' },
    //     { id: 25, nameSinger: 'خمینی شهر گروه شاراز ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/sharaz.jpg', img2:'/images/Shahrestan/sharaz2.jpg' },
    //     { id: 26, nameSinger: ' الوند حامد طاووسی', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/hamed.jpg', img2:'/images/Shahrestan/hamed2.jpg' },
    //     { id: 27, nameSinger: ' کنگان گروه نونوا', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/nono.jpg', img2:'/images/Shahrestan/nono2.jpg' },
    //     { id: 28, nameSinger: ' اردبیل حسن ریوندی', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/hasan.jpg', img2:'/images/Shahrestan/hasan2.jpg' },
    //     { id: 29, nameSinger: ' اصفهان آرمان گرشاسبی', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/arman.jpg', img2:'/images/Shahrestan/arman2.jpg' },
    //     { id: 30, nameSinger: ' بوکان هوروش', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/horosh.jpg', img2:'/images/Shahrestan/horosh2.jpg' },
    //     { id: 31, nameSinger: ' همدان داود آزاد', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/davod.jpg', img2:'/images/Shahrestan/davod2.jpg' },
    //     { id: 32, nameSinger: 'رشت گروه کرال باروک ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/keral.jpg', img2:'/images/Shahrestan/keral2.jpg' },
    //     { id: 33, nameSinger: 'ملایر داود آزاد ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/davodi.jpg', img2:'/images/Shahrestan/davodi2.jpg' },
    //     { id: 34, nameSinger: 'کرج اشوان ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/ashvan.jpg', img2:'/images/Shahrestan/ashvan2.jpg' },
    //     { id: 35, nameSinger: 'خرم آباد فرج علیپور ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/faraj.jpg', img2:'/images/Shahrestan/faraj2.jpg' },
    //     { id: 36, nameSinger: ' یاسوج هوروش', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/horosh.jpg', img2:'/images/Shahrestan/horosh2.jpg' },
    //     { id: 37, nameSinger: 'رشت در هوای بی چگونگی ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/darhava.jpg', img2:'/images/Shahrestan/darhava2.jpg' },
    //     { id: 38, nameSinger: ' گچساران هوروش', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/horosh.jpg', img2:'/images/Shahrestan/horosh2.jpg' },
    //     { id: 39, nameSinger: 'شهریار امیدحاجیلی ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/omid.jpg', img2:'/images/Shahrestan/omid2.jpg' },
    //     { id: 40, nameSinger: 'دهدشت هوروش ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/horosh.jpg', img2:'/images/Shahrestan/horosh2.jpg' },
    //     { id: 41, nameSinger: 'تبریز آرمان گرشاسبی ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/arman.jpg', img2:'/images/Shahrestan/arman2.jpg' },
    //     { id: 42, nameSinger: 'رشت محمدعذرخواه ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/mohammad.jpg', img2:'/images/Shahrestan/mohammad2.jpg' },
    //     { id: 43, nameSinger: ' فولادشهر گروه آما', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/ama.jpg', img2:'/images/Shahrestan/ama2.jpg' },
    //     { id: 44, nameSinger: 'یاسوج موسیقی بختیاری ', location: " تالار وحدت   ", date: ' 6 اسفند', time: '22:00', day: 'دوشنبه', img: '/images/Shahrestan/bakhtiari.jpg', img2:'/images/Shahrestan/bakhtiari2.jpg' },
    ],


}








export default datasConsert