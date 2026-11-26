import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  VolumeX,
  Calendar,
  MapPin,
  Heart,
  Sparkles,
  Home,
  Users,
  ScrollText,
  Navigation,
  Clock,
  ChevronDown,
  Phone,
  MessageCircle,
  Flower2,
  X,
  ChevronLeft,
  ChevronRight,
  Map,
  Copy,
  Check,
  Link2,
  Send,
  Thermometer,
} from 'lucide-react';

/* ============================================================================
   SINGLE EDITABLE DATA HUB (Edit all names, dates, photos, links & text here)
   ============================================================================ */
const WEDDING_DATA = {
  meta: {
    shloka: '॥ श्री गणेशाय नमः ॥',
    dateDisplay: '05 • 12 • 2026',
    weddingISO: '2026-12-05T20:00:00+05:30',
    weddingDateKey: '2026-12-05',
    receptionDateKey: '2026-12-06',
    audioUrl: '',
    contactPhone: '+917091048449',
    whatsappNumber: '917091048449',
    showPortraitUploadButtons: false,
  },

  translations: {
    hi: {
      tapSeal: 'निमंत्रण खोलने के लिए मुहर पर स्पर्श करें',
      fullCoupleName: 'प्रवीण संग सुषमा',
      guestInvitePrefix: 'सादर आमंत्रण —',
      guestInviteSuffix: 'एवं सपरिवार',
      heroSubtitle: 'शुभ विवाह निमंत्रण',
      heroDateText: 'शनिवार, 05 दिसंबर 2026 • बोकारो, झारखंड',
      scrollHint: 'नीचे स्क्रॉल करें',
      flowerShowerLabel: 'पुष्प वर्षा करें',
      countdown: {
        days: 'दिन',
        hours: 'घंटे',
        minutes: 'मिनट',
        seconds: 'सेकंड',
        weddingDayTitle: 'आज शुभ विवाह का पावन दिवस है!',
        weddingDayDesc:
          'बारात संध्या 08:00 बजे भालसुन्धा से श्री श्री 108 नर्मदेश्वर धाम, मिश्रा साईड, जैनामोड़ के लिए प्रस्थान करेगी।',
        receptionDayTitle: 'आज प्रीतिभोज (स्वागत समारोह) है!',
        receptionDayDesc:
          'संध्या 07:00 बजे से हमारे निवास स्थान भालसुन्धा, चास (बोकारो) में आपका सादर स्वागत है।',
        liveMapBtn: 'विवाह स्थल का मार्ग देखें',
        postWeddingTitle: 'हार्दिक आभार एवं धन्यवाद',
        postWeddingDesc:
          'प्रवीण एवं सुषमा को अपना स्नेह व आशीर्वाद प्रदान करने के लिए समस्त महतो परिवार आपका हृदय से आभारी है।',
      },
      blessingEyebrow: 'पावन निमंत्रण',
      blessingHeading: 'मंगल आशीर्वाद',
      coupleEyebrow: 'शुभ परिणय बंधन',
      coupleHeading: 'वर-वधू परिचय',
      sangBadge: 'संग',
      galleryTitle: 'मधुर स्मृतियाँ',
      galleryHint: 'बड़ा देखने के लिए किसी भी फोटो पर स्पर्श करें',
      eventsEyebrow: 'वैवाहिक कार्यक्रम',
      eventsHeading: '॥ शुभ परिणयोत्सव ॥',
      baratRouteTitle: 'बारात प्रस्थान मार्ग',
      departureLabel: 'प्रस्थान स्थल',
      destinationLabel: 'विवाह स्थल',
      getDirections: 'गूगल मैप मार्ग',
      previewMap: 'नक्शा देखें',
      hideMap: 'नक्शा छिपाएँ',
      addToCalendar: 'कैलेंडर में जोड़ें',
      callForDirections: 'मार्ग हेतु कॉल करें',
      whatsappDirections: 'व्हाट्सएप',
      winterCard: {
        badge: 'दिसंबर संध्या मौसम एवं स्नेह संदेश',
        temp: '12°C – 15°C',
        location: 'बोकारो संध्या',
        title: 'शीतकालीन संध्या के लिए विशेष स्नेह सुझाव',
        message:
          'दिसंबर की रातों में बोकारो में हल्की ठंड रहती है। समारोह का आनंद आराम से लेने के लिए कृपया अपने साथ गरम शॉल, स्टोल या गरम पारंपरिक परिधान अवश्य रखें।',
        tipTag: 'गरम पारंपरिक परिधान एवं शॉल की सलाह',
      },
      footerInviteBadge: '॥ सादर आमंत्रण ॥',
      footerFamilyTitle: 'समस्त महतो परिवार',
      footerWelcomeText: 'आपका हार्दिक स्वागत एवं अभिनंदन करता है।',
      footerText: 'प्रवीण संग सुषमा • 05 एवं 06 दिसंबर 2026',
      nav: {
        home: 'होम',
        message: 'संदेश',
        couple: 'वर-वधू',
        events: 'कार्यक्रम',
      },
    },
    en: {
      tapSeal: 'Tap Seal to Open Invitation',
      fullCoupleName: 'Praveen & Sushma',
      guestInvitePrefix: 'Cordially Inviting',
      guestInviteSuffix: '& Family',
      heroSubtitle: ' Wedding Invitation',
      heroDateText: 'Saturday, 05 December 2026 • Bokaro, Jharkhand',
      scrollHint: 'Scroll to Explore',
      flowerShowerLabel: 'Shower Petals',
      countdown: {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Mins',
        seconds: 'Secs',
        weddingDayTitle: 'Today is the Auspicious Wedding Day!',
        weddingDayDesc:
          'Barat departs at 8:00 PM from Bhalsundha to Shri Shri 108 Narmadeshwar Dham, Mishra Site, Jenamore.',
        receptionDayTitle: 'Today is the Grand Pritibhoj!',
        receptionDayDesc:
          'Join us from 7:00 PM onwards at our Residence in Bhalsundha, Chas, Bokaro.',
        liveMapBtn: 'Open Live Venue Map',
        postWeddingTitle: 'With Heartfelt Gratitude',
        postWeddingDesc:
          'Thank you for gracing Praveen & Sushma’s wedding with your love, presence, and warm blessings.',
      },
      blessingEyebrow: 'DIVINE INVITATION',
      blessingHeading: 'Auspicious Blessings',
      coupleEyebrow: 'THE SACRED UNION',
      coupleHeading: 'Groom & Bride',
      sangBadge: '♥',
      galleryTitle: 'Cherished Moments',
      galleryHint: 'Tap any photo to view fullscreen',
      eventsEyebrow: 'WEDDING ITINERARY',
      eventsHeading: 'Auspicious Events',
      baratRouteTitle: 'Barat Procession Route',
      departureLabel: 'Departure',
      destinationLabel: 'Destination',
      getDirections: 'Get Directions',
      previewMap: 'Preview Map',
      hideMap: 'Hide Map',
      addToCalendar: 'Add to Calendar',
      callForDirections: 'Call for Directions',
      whatsappDirections: 'WhatsApp',
      winterCard: {
        badge: 'December Evening Weather & Care Note',
        temp: '12°C – 15°C',
        location: 'Bokaro Evening',
        title: 'A Warm Note for the Winter Evening',
        message:
          'Early December nights in Bokaro turn pleasantly chilly after sunset. To enjoy the celebrations comfortably, we kindly suggest bringing a warm shawl, stole, or cozy festive attire.',
        tipTag: 'Warm Ethnic Wear & Shawl Recommended',
      },
      footerInviteBadge: '॥ Cordial Invitation ॥',
      footerFamilyTitle: 'Mahto Family',
      footerWelcomeText: 'Warmly welcomes you and your family.',
      footerText: 'Praveen ♥ Sushma • 05 & 06 Dec 2026',
      nav: {
        home: 'Home',
        message: 'Message',
        couple: 'Couple',
        events: 'Events',
      },
    },
  },

  blessingMessage: {
    hi: [
      'परमपिता परमेश्वर एवं समस्त देवी-देवताओं के शुभाशीर्वाद से चिरंजीव प्रवीण एवं आयुष्मती सुषमा के शुभ विवाह का पावन अवसर हमारे परिवार के लिए अत्यंत हर्ष एवं सौभाग्य का विषय है।',
      'इस शुभ मंगल अवसर पर आपकी सपरिवार गरिमामयी उपस्थिति सादर प्रार्थनीय है। कृपया पधारकर नवदंपति को अपना स्नेह, आशीर्वाद एवं शुभकामनाएँ प्रदान करें तथा इस मांगलिक उत्सव की शोभा बढ़ाएँ।',
      'आपका आगमन हमारे लिए सौभाग्य एवं अपार हर्ष का विषय होगा।',
    ],
    en: [
      'With the divine blessings of the Almighty, we cordially invite you and your family to grace the auspicious wedding ceremony of Praveen & Sushma. Your gracious presence, love and blessings will make this joyous occasion truly memorable.',
    ],
  },

  couple: {
    groom: {
      portrait: '/photos/Groom.png',
      fallbackPortrait:
        'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&fit=crop&w=600&q=80',
      hi: {
        role: 'चिरंजीव (वर)',
        name: 'प्रवीण कुमार',
        parents: 'द्वितीय सुपुत्र : श्रीमती प्रतिमा देवी एवं श्री जेठू लाल महतो',
        grandparents: 'सुपौत्र : स्व० रिबनी देवी एवं स्व० गौरी लाल महतो',
        address: 'ग्राम : भालसुन्धा, पो० : चास - 827013, थाना : चिरा चास, जिला : बोकारो (झारखण्ड)',
      },
      en: {
        role: 'The Groom',
        name: 'Praveen Kumar',
        parents: '2nd Son of Smt. Pratima Devi & Shri Jethu Lal Mahto',
        grandparents: 'Grandson of Late Ribani Devi & Late Gouri Lal Mahto',
        address: 'Vill: Bhalsundha, P.O.: Chas - 827013, P.S.: Chira Chas, Bokaro (Jharkhand)',
      },
    },
    bride: {
      portrait: '/photos/Bride.png',
      fallbackPortrait:
        'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
      hi: {
        role: 'आयुष्मती (वधू)',
        name: 'सुषमा कुमारी',
        parents: 'तृतीय सुपुत्री : श्रीमती गुंजरी देवी एवं श्री तुलसी दास महतो',
        grandparents: 'सुपौत्री : स्व० सुभद्रा देवी एवं स्व० सोहन महतो',
        address: 'ग्राम+पो० : गांगजोरी, थाना : जरीडीह, जिला : बोकारो, पिन न० - 829301 (झारखण्ड)',
      },
      en: {
        role: 'The Bride',
        name: 'Sushma Kumari',
        parents: '3rd Daughter of Smt. Gunjari Devi & Shri Tulsi Das Mahto',
        grandparents: 'Granddaughter of Late Subhadra Devi & Late Sohan Mahto',
        address: 'Vill+P.O.: Gangjori, P.S.: Jaridih, Dist: Bokaro - 829301 (Jharkhand)',
      },
    },
  },

  gallery: [
    {
      url: '/photos/1.jpg',
      captionHi: 'शुभ परिणय',
      captionEn: 'Sacred Union',
    },
    {
      url: '/photos/2.jpg',
      captionHi: 'पावन बंधन',
      captionEn: 'Royal Traditions',
    },
    {
      url: 'https://www.google.com/imgres?q=groom%20and%20bride%20images%20ai%20generated&imgurl=https%3A%2F%2Fmedia.easy-peasy.ai%2F0474371c-580a-4702-a75c-678dcfab7cb7%2Fe479de11-4c4e-46c6-a68b-624f8e798d76_medium.webp&imgrefurl=https%3A%2F%2Feasy-peasy.ai%2Fai-image-generator%2Fimages%2Findian-bride-groom-wedding-vows-diverse-guests-decorations&docid=wKiYG_I6uaYSLM&tbnid=5oa2fGu6xMv-iM&vet=12ahUKEwj5wsGyjKaYAxWLzDgGHckFJBAQnPAOegUIkAEQAA..i&w=800&h=800&hcb=2&ved=2ahUKEwj5wsGyjKaYAxWLzDgGHckFJBAQnPAOegUIkAEQAA',
      captionHi: 'मंगल उत्सव',
      captionEn: 'Festive Joy',
    },
    {
      url: '/photos/4.jpg',
      captionHi: 'अटूट स्नेह',
      captionEn: 'Forever Together',
    },
  ],

  events: [
    {
      id: 'vivah',
      hasBaratRoute: true,
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Narmadeshwar+Dham+Mishra+Side+Jenamore+Bokaro+Jharkhand',
      embedMapUrl:
        'https://maps.google.com/maps?q=Narmadeshwar+Dham+Jenamore+Bokaro+Jharkhand&t=&z=13&ie=UTF8&iwloc=&output=embed',
      calendarUrl:
        'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Shubh+Vivah+-+Praveen+%26+Sushma&dates=20261205T143000Z/20261205T203000Z&details=Barat+departs+at+8:00+PM+from+Bhalsundha+to+Shri+Shri+108+Narmadeshwar+Dham,+Mishra+Site,+Jenamore.&location=Shri+Shri+108+Narmadeshwar+Dham,+Mishra+Site,+Jenamore,+Bokaro',
      hi: {
        title: 'शुभ विवाह',
        banglaDate: 'बंगला 18 अघन',
        date: 'शनिवार, 05 दिसंबर 2026',
        time: 'संध्या 08:00 बजे प्रस्थान',
        venueName: 'श्री श्री 108 नर्मदेश्वर धाम, मिश्रा साईड, जैनामोड़',
        venueAddress:
          'शुभ विवाह हेतु बारात हमारे निवास स्थान भालसुन्धा से संध्या 08:00 बजे प्रस्थान करेगी।',
        routeFrom: 'निवास स्थान, भालसुन्धा',
        routeTo: 'नर्मदेश्वर धाम, मिश्रा साईड, जैनामोड़',
      },
      en: {
        title: 'Shubh Vivah',
        banglaDate: 'Bangla 18 Aghan',
        date: 'Saturday, 05 December 2026',
        time: '8:00 PM Barat Departure',
        venueName: 'Shri Shri 108 Narmadeshwar Dham, Mishra Site, Jenamore',
        venueAddress:
          'Barat departs at 8:00 PM from our Residence in Bhalsundha towards Narmadeshwar Dham, Mishra Site, Jenamore.',
        routeFrom: 'Residence, Bhalsundha',
        routeTo: 'Narmadeshwar Dham, Mishra Site, Jenamore',
      },
    },
    {
      id: 'pritibhoj',
      hasBaratRoute: false,
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=Bhalsundha+Chas+Bokaro+Jharkhand+827013',
      embedMapUrl:
        'https://maps.google.com/maps?q=Bhalsundha+Chas+Bokaro+Jharkhand+827013&t=&z=13&ie=UTF8&iwloc=&output=embed',
      calendarUrl:
        'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pritibhoj+(Reception)+-+Praveen+%26+Sushma&dates=20261206T133000Z/20261206T173000Z&details=Pritibhoj+at+Residence+Bhalsundha,+Chas,+Bokaro+from+7:00+PM+onwards.&location=Bhalsundha,+Chas,+Bokaro,+Jharkhand+827013',
      hi: {
        title: 'प्रीतिभोज',
        banglaDate: 'बंगला 19 अघन',
        date: 'रविवार, 06 दिसंबर 2026',
        time: 'संध्या 07:00 बजे से आपके आगमन तक',
        venueName: 'निवास स्थान — ग्राम भालसुन्धा',
        venueAddress: 'पो० : चास - 827013, थाना : चिरा चास, जिला : बोकारो (झारखण्ड)',
      },
      en: {
        title: 'Pritibhoj (Reception)',
        banglaDate: 'Bangla 19 Aghan',
        date: 'Sunday, 06 December 2026',
        time: '7:00 PM Onwards',
        venueName: 'Residence — Bhalsundha, Chas',
        venueAddress: 'P.O.: Chas - 827013, P.S.: Chira Chas, Dist: Bokaro, Jharkhand',
      },
    },
  ],
};

/* ============================================================================
   UTILITIES: IST DATE KEY, MOBILE HAPTIC FEEDBACK & TEMPLE BELL CHIME
   ============================================================================ */
function getIstDateKey(ms) {
  const istDate = new Date(ms + 5.5 * 60 * 60 * 1000);
  const y = istDate.getUTCFullYear();
  const m = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const d = String(istDate.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function triggerHaptic(pattern = 15) {
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(pattern);
    }
  } catch {
    // Ignore on unsupported devices
  }
}

function playTempleBellChime(pitchMultiplier = 1) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const partials = [
      { freq: 880 * pitchMultiplier, gain: 0.14, dur: 2.1 },
      { freq: 1760 * pitchMultiplier, gain: 0.08, dur: 1.5 },
      { freq: 2637 * pitchMultiplier, gain: 0.045, dur: 1.0 },
      { freq: 3520 * pitchMultiplier, gain: 0.025, dur: 0.7 },
    ];

    partials.forEach(({ freq, gain, dur }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      g.gain.setValueAtTime(0.001, now);
      g.gain.exponentialRampToValueAtTime(gain, now + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
      osc.connect(g);
      g.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.05);
    });

    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 2400);
  } catch {
    // Ignore audio errors on restricted devices
  }
}

function SplitFlapTile({ value, label, lang }) {
  const formatted = String(value).padStart(2, '0');
  return (
    <div
      style={{ perspective: '600px' }}
      className="relative flex flex-col items-center justify-center py-3.5 sm:py-5 px-2 rounded-2xl bg-white/85 backdrop-blur-md border border-[#C8A253]/40 shadow-[0_10px_28px_rgba(91,20,29,0.08)] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-[1px] bg-[#C8A253]/20" />
      <span
        key={formatted}
        className="font-editorial text-3xl sm:text-4xl font-bold text-[#5B141D] leading-none animate-split-flap"
      >
        {formatted}
      </span>
      <span
        className={`mt-1.5 text-[11px] sm:text-xs font-semibold text-[#C8A253] ${
          lang === 'hi' ? 'font-devanagari' : 'uppercase tracking-[0.14em]'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/* ============================================================================
   CUSTOM HOOKS: IN-VIEW, URL PARAMS (?guest= & ?host=1), SMART AUDIO
   ============================================================================ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function useUrlParams() {
  const [params, setParams] = useState({ guestName: '', isHostMode: false });

  useEffect(() => {
    try {
      const search = new URLSearchParams(window.location.search);
      const rawGuest = (search.get('guest') || search.get('to') || '').trim().slice(0, 60);
      const isHost = search.get('host') === '1' || search.get('host') === 'true';
      setParams({ guestName: rawGuest, isHostMode: isHost });
    } catch {
      // Ignore URL parse errors
    }
  }, []);

  return params;
}

function useWeddingAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const isPlayingRef = useRef(false);
  const wasPlayingBeforeHideRef = useRef(false);
  const externalAudioRef = useRef(null);
  const ctxRef = useRef(null);
  const intervalRef = useRef(null);
  const masterGainRef = useRef(null);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const startSynthChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!ctxRef.current) {
        ctxRef.current = new AudioCtx();
      }
      const ctx = ctxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (masterGainRef.current) {
        masterGainRef.current.gain.setTargetAtTime(0.06, ctx.currentTime, 0.35);
        return;
      }

      const master = ctx.createGain();
      master.gain.setValueAtTime(0.001, ctx.currentTime);
      master.gain.setTargetAtTime(0.06, ctx.currentTime, 0.4);
      master.connect(ctx.destination);
      masterGainRef.current = master;

      const notes = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];
      let step = 0;

      const playNote = () => {
        if (!ctxRef.current || !masterGainRef.current || document.hidden) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[step % notes.length], now);
        step += 1;

        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.45, now + 0.35);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + 2.4);

        osc.connect(noteGain);
        noteGain.connect(masterGainRef.current);
        osc.start(now);
        osc.stop(now + 2.5);
      };

      playNote();
      intervalRef.current = setInterval(playNote, 2100);
    } catch {
      // Ignore audio errors on restricted devices
    }
  }, []);

  const pauseAudioEngine = useCallback(() => {
    if (externalAudioRef.current) {
      externalAudioRef.current.pause();
    }
    if (ctxRef.current && masterGainRef.current) {
      masterGainRef.current.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.18);
    }
  }, []);

  const resumeAudioEngine = useCallback(() => {
    if (externalAudioRef.current && externalAudioRef.current.readyState >= 2) {
      externalAudioRef.current.muted = false;
      externalAudioRef.current.volume = 0.35;
      externalAudioRef.current.play().catch(() => startSynthChime());
    } else {
      startSynthChime();
    }
  }, [startSynthChime]);

  const startAudio = useCallback(() => {
    setIsPlaying(true);
    if (externalAudioRef.current) {
      externalAudioRef.current.volume = 0.35;
      externalAudioRef.current.play().catch(() => {
        startSynthChime();
      });
    } else {
      startSynthChime();
    }
  }, [startSynthChime]);

  const toggleAudio = useCallback(() => {
    triggerHaptic(12);
    setIsPlaying((prev) => {
      const next = !prev;
      if (next) {
        resumeAudioEngine();
      } else {
        pauseAudioEngine();
      }
      return next;
    });
  }, [resumeAudioEngine, pauseAudioEngine]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        wasPlayingBeforeHideRef.current = isPlayingRef.current;
        if (isPlayingRef.current) {
          pauseAudioEngine();
        }
      } else if (wasPlayingBeforeHideRef.current && isPlayingRef.current) {
        resumeAudioEngine();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (ctxRef.current) ctxRef.current.close().catch(() => {});
    };
  }, [pauseAudioEngine, resumeAudioEngine]);

  return { isPlaying, startAudio, toggleAudio, externalAudioRef };
}

/* ============================================================================
   SECRET HOST WHATSAPP LINK GENERATOR (?host=1)
   ============================================================================ */
function HostLinkGenerator({ isHostMode, lang }) {
  const [open, setOpen] = useState(false);
  const [guestInput, setGuestInput] = useState('');
  const [msgLang, setMsgLang] = useState(lang);
  const [copied, setCopied] = useState(false);

  if (!isHostMode) return null;

  const baseUrl =
    typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '';
  const cleanName = guestInput.trim();
  const inviteUrl = cleanName ? `${baseUrl}?guest=${encodeURIComponent(cleanName)}` : baseUrl;

  const whatsappMessage =
    msgLang === 'hi'
      ? `॥ श्री गणेशाय नमः ॥\n\nसादर नमस्ते ${cleanName ? `${cleanName} ` : ''}एवं सपरिवार,\nपरमपिता परमेश्वर की असीम अनुकंपा से चिरंजीव प्रवीण एवं आयुष्मती सुषमा के शुभ विवाह (05 दिसंबर 2026) एवं प्रीतिभोज (06 दिसंबर 2026) के पावन अवसर पर आपकी गरिमामयी उपस्थिति सादर प्रार्थनीय है।\n\nकृपया डिजिटल निमंत्रण पत्रिका यहाँ देखें:\n${inviteUrl}\n\n— समस्त महतो परिवार, भालसुन्धा (चास, बोकारो)`
      : `॥ Shri Ganeshaya Namah ॥\n\nDear ${cleanName || 'Guest'} & Family,\nWith the divine blessings of the Almighty, we cordially invite you to the auspicious wedding of Praveen & Sushma (05 Dec 2026) and Pritibhoj (06 Dec 2026).\n\nView your personal digital invitation here:\n${inviteUrl}\n\n— Mahto Family, Bhalsundha (Chas, Bokaro)`;

  const handleCopy = async () => {
    triggerHaptic(15);
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-40">
      {open ? (
        <div className="w-[calc(100vw-2rem)] max-w-sm rounded-3xl bg-[#FAF7F2] border-2 border-[#C8A253] shadow-[0_20px_60px_rgba(91,20,29,0.35)] p-5 animate-lang-fade">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#5B141D]">
              <Link2 size={14} className="text-[#C8A253]" />
              Host Invite Generator
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full text-[#5B141D]/70 hover:bg-[#5B141D]/10 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          <input
            type="text"
            value={guestInput}
            onChange={(e) => setGuestInput(e.target.value)}
            placeholder="Guest Name (e.g. अमित जी / Sharma Ji)"
            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#C8A253]/50 text-sm text-[#22201E] focus:outline-none focus:border-[#5B141D] font-devanagari"
          />

          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-[#22201E]/70">Message Language:</span>
            <div className="flex gap-1 bg-white p-0.5 rounded-full border border-[#C8A253]/40">
              <button
                onClick={() => setMsgLang('hi')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer ${
                  msgLang === 'hi' ? 'bg-[#5B141D] text-[#DFBE76]' : 'text-[#5B141D]'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setMsgLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer ${
                  msgLang === 'en' ? 'bg-[#5B141D] text-[#DFBE76]' : 'text-[#5B141D]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-white/80 border border-[#C8A253]/25 text-[11px] text-[#22201E]/80 max-h-28 overflow-y-auto whitespace-pre-line font-devanagari">
            {whatsappMessage}
          </div>

          <div className="mt-3 flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-[#5B141D] text-[#DFBE76] text-xs font-semibold hover:bg-[#721A26] transition cursor-pointer"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Message'}
            </button>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:opacity-95 transition"
            >
              <Send size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            triggerHaptic(12);
            setOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#5B141D] text-[#DFBE76] border border-[#DFBE76]/60 shadow-xl text-xs font-semibold hover:scale-105 transition cursor-pointer"
        >
          <Link2 size={14} />
          Host Link Tool
        </button>
      )}
    </div>
  );
}

/* ============================================================================
   EFFECTS: FLOWER SHOWER, CONFETTI, TAP SPARKLES, BOKEH, GOLDEN THREAD, DIYAS
   ============================================================================ */
function CelebrationCanvas({ confettiTrigger, showerTrigger }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);

  const runLoop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const list = particlesRef.current;
      let aliveCount = 0;

      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        p.x += p.vx + (p.sway ? Math.sin(p.age * p.swayFreq) * p.sway : 0);
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.rot += p.vrot;
        p.age += 1;
        p.life -= p.decay;

        if (p.life <= 0 || p.y > canvas.height + 40) {
          list.splice(i, 1);
          continue;
        }

        aliveCount++;
        ctx.save();
        ctx.globalAlpha = Math.min(1, Math.max(0, p.life));
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;

        if (p.type === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 0.58, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size * 0.55);
        }
        ctx.restore();
      }

      if (aliveCount > 0) {
        rafRef.current = requestAnimationFrame(render);
      } else {
        rafRef.current = null;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(render);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!confettiTrigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const colors = ['#C8A253', '#DFBE76', '#5B141D', '#E8A838', '#FAF7F2'];

    for (let i = 0; i < 80; i++) {
      particlesRef.current.push({
        type: 'confetti',
        x: canvas.width * (0.2 + Math.random() * 0.6),
        y: canvas.height * 0.4,
        vx: (Math.random() - 0.5) * 11,
        vy: -Math.random() * 11 - 4,
        gravity: 0.27,
        drag: 0.99,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.22,
        life: 1.1,
        decay: 0.011,
        sway: 0,
        swayFreq: 0,
        age: 0,
      });
    }
    runLoop();
  }, [confettiTrigger, runLoop]);

  useEffect(() => {
    if (!showerTrigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const petalColors = ['#F59E0B', '#FBBF24', '#EA580C', '#E11D48', '#FB7185', '#DFBE76'];

    for (let i = 0; i < 65; i++) {
      particlesRef.current.push({
        type: 'petal',
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 180,
        vx: (Math.random() - 0.5) * 1.4,
        vy: Math.random() * 2.2 + 1.8,
        gravity: 0.02,
        drag: 0.998,
        size: Math.random() * 7 + 6,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        rot: Math.random() * Math.PI * 2,
        vrot: (Math.random() - 0.5) * 0.09,
        life: 1.4,
        decay: 0.0045,
        sway: Math.random() * 1.6 + 0.6,
        swayFreq: Math.random() * 0.05 + 0.03,
        age: Math.random() * 40,
      });
    }
    runLoop();
  }, [showerTrigger, runLoop]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-40 pointer-events-none w-full h-full"
    />
  );
}

function TapSparkleLayer() {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const handlePointerDown = (e) => {
      const id = Date.now() + Math.random();
      const x = e.clientX;
      const y = e.clientY;
      const stars = Array.from({ length: 5 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 5 + (Math.random() - 0.5) * 0.5;
        const dist = 22 + Math.random() * 20;
        return {
          dx: Math.cos(angle) * dist,
          dy: Math.sin(angle) * dist,
          size: 8 + Math.random() * 5,
        };
      });

      setBursts((prev) => [...prev.slice(-6), { id, x, y, stars }]);
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 700);
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {bursts.map((b) => (
        <div key={b.id} className="absolute" style={{ left: b.x, top: b.y }}>
          {b.stars.map((s, idx) => (
            <svg
              key={idx}
              viewBox="0 0 24 24"
              className="absolute -translate-x-1/2 -translate-y-1/2 text-[#DFBE76] animate-tap-sparkle"
              style={{
                width: `${s.size}px`,
                height: `${s.size}px`,
                '--dx': `${s.dx}px`,
                '--dy': `${s.dy}px`,
              }}
              fill="currentColor"
            >
              <path d="M12 0 L14.8 9.2 L24 12 L14.8 14.8 L12 24 L9.2 14.8 L0 12 L9.2 9.2 Z" />
            </svg>
          ))}
        </div>
      ))}
    </div>
  );
}

function ScrollGoldenThread({ activeSection, scrollProgress }) {
  const sections = ['home', 'message', 'couple', 'events'];
  return (
    <div className="hidden lg:flex fixed left-7 top-1/2 -translate-y-1/2 z-30 flex-col items-center pointer-events-none">
      <div className="relative flex flex-col items-center justify-between h-52">
        <span className="absolute inset-y-2 w-[1.5px] bg-[#C8A253]/25 rounded-full" />
        <span
          className="absolute top-2 w-[1.5px] bg-gradient-to-b from-[#C8A253] via-[#DFBE76] to-[#5B141D] rounded-full transition-all duration-200"
          style={{ height: `${Math.max(8, (scrollProgress / 100) * 192)}px` }}
        />

        {sections.map((id) => {
          const active = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={id}
              className="pointer-events-auto relative flex items-center justify-center w-5 h-5"
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  active
                    ? 'w-3 h-3 bg-[#5B141D] ring-4 ring-[#C8A253]/35 shadow-[0_0_12px_rgba(200,162,83,0.8)]'
                    : 'w-2 h-2 bg-[#C8A253]/60 hover:bg-[#5B141D]'
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function SacredDiyaLamp({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center w-11 h-11 ${className}`}>
      <span className="absolute -top-1 w-7 h-7 rounded-full bg-[#FBBF24]/35 blur-md animate-diya-glow" />
      <svg viewBox="0 0 48 48" className="relative w-10 h-10" fill="none">
        <g className="animate-diya-flicker" style={{ transformOrigin: '24px 23px' }}>
          <path
            d="M24 6 C28.5 13, 30 18.5, 24 23 C18 18.5, 19.5 13, 24 6 Z"
            fill="#F59E0B"
          />
          <path
            d="M24 11 C26.5 15, 27 18.5, 24 21.5 C21 18.5, 21.5 15, 24 11 Z"
            fill="#FEF08A"
          />
        </g>
        <path
          d="M10 25 C12 34, 18 37, 24 37 C30 37, 36 34, 38 25 C33 27, 29 27.5, 24 27.5 C19 27.5, 15 27, 10 25 Z"
          fill="#8C6B23"
          stroke="#DFBE76"
          strokeWidth="1.4"
        />
        <ellipse cx="24" cy="25.5" rx="13" ry="2.2" fill="#DFBE76" fillOpacity="0.45" />
        <path d="M18 39 H30" stroke="#C8A253" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function WinterMoonCrest() {
  return (
    <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
      <span className="absolute inset-0 rounded-full bg-[#DFBE76]/25 blur-md animate-pulse" />
      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FAF7F2]/10 border border-[#DFBE76]/45 shadow-inner">
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
          <path
            d="M29.5 11.5 C22.5 12.2 17 18.1 17 25.3 C17 32.9 23.1 39 30.7 39 C33.4 39 35.9 38.2 38 36.8 C36.2 37.3 34.4 37.5 32.5 37.2 C26.3 36.3 21.7 31 21.7 24.6 C21.7 19 25.4 14.2 30.5 12.6 C30.2 12.2 29.8 11.8 29.5 11.5 Z"
            fill="#F3DB99"
            stroke="#DFBE76"
            strokeWidth="1.2"
          />
          <path
            d="M14 13 L15.2 16.2 L18.4 17.4 L15.2 18.6 L14 21.8 L12.8 18.6 L9.6 17.4 L12.8 16.2 Z"
            fill="#FDE68A"
            className="animate-pulse"
          />
          <circle cx="34" cy="18" r="1.6" fill="#FDE68A" className="animate-pulse" />
          <circle cx="36" cy="25" r="1.2" fill="#DFBE76" />
        </svg>
      </div>
    </div>
  );
}

function AuraSealRing({ sizeClass = 'w-20 h-20', colorClass = 'text-[#DFBE76]/70' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none animate-spin-slow ${sizeClass} ${colorClass}`}
      fill="none"
    >
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.6" />
      {Array.from({ length: 8 }).map((_, i) => (
        <circle
          key={i}
          cx="50"
          cy="4"
          r="1.8"
          fill="currentColor"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  );
}

function WarmBokehOrbs({ tone = 'gold', count = 8 }) {
  const orbs = Array.from({ length: count }, (_, i) => ({
    left: `${8 + ((i * 13) % 86)}%`,
    size: 28 + (i % 4) * 22,
    delay: `${(i * 1.3).toFixed(1)}s`,
    duration: `${9 + (i % 5) * 2.5}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <span
          key={i}
          className="absolute -bottom-16 rounded-full blur-xl animate-bokeh-rise"
          style={{
            left: orb.left,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background:
              tone === 'light'
                ? 'radial-gradient(circle, rgba(243,219,153,0.42), rgba(200,162,83,0) 70%)'
                : 'radial-gradient(circle, rgba(223,190,118,0.28), rgba(200,162,83,0) 70%)',
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}
    </div>
  );
}

function MusicEqualizer({ isPlaying, light = false }) {
  if (!isPlaying) {
    return <VolumeX size={16} />;
  }
  const barColor = light ? 'bg-[#DFBE76]' : 'bg-current';
  return (
    <span className="inline-flex items-end justify-center gap-[2.5px] w-4 h-4 py-[1px]">
      <span className={`w-[2.5px] rounded-full ${barColor} animate-eq-1`} />
      <span className={`w-[2.5px] rounded-full ${barColor} animate-eq-2`} />
      <span className={`w-[2.5px] rounded-full ${barColor} animate-eq-3`} />
    </span>
  );
}

function MarigoldToran() {
  const swags = [0, 1, 2, 3, 4];
  const [ringingBells, setRingingBells] = useState({});

  const handleRingBell = (idx) => {
    triggerHaptic([12, 25, 10]);
    const pitches = [0.92, 1.0, 1.08];
    playTempleBellChime(pitches[idx % pitches.length]);
    setRingingBells((prev) => ({ ...prev, [idx]: (prev[idx] || 0) + 1 }));
  };

  return (
    <div className="absolute top-0 inset-x-0 z-20 pointer-events-none overflow-visible">
      <svg
        viewBox="0 0 1000 102"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-16 sm:h-24 drop-shadow-[0_4px_8px_rgba(91,20,29,0.12)]"
        fill="none"
      >
        <line x1="0" y1="6" x2="1000" y2="6" stroke="#C8A253" strokeWidth="2.5" />

        {swags.map((idx) => {
          const x0 = idx * 200;
          const xm = x0 + 100;
          const x1 = x0 + 200;
          return (
            <g
              key={idx}
              className="animate-toran-sway"
              style={{
                transformOrigin: `${xm}px 6px`,
                animationDelay: `${idx * 0.35}s`,
              }}
            >
              {[x0 + 35, x0 + 70, xm, x0 + 130, x0 + 165].map((lx, li) => (
                <path
                  key={li}
                  d={`M ${lx} 8 C ${lx - 9} 22, ${lx - 7} 36, ${lx} 46 C ${lx + 7} 36, ${lx + 9} 22, ${lx} 8 Z`}
                  fill={li % 2 === 0 ? '#2F6F4E' : '#3E885B'}
                  fillOpacity="0.88"
                  stroke="#1E4D34"
                  strokeWidth="0.6"
                />
              ))}

              <path
                d={`M ${x0} 8 Q ${xm} 68 ${x1} 8`}
                stroke="#C8A253"
                strokeWidth="1.5"
                strokeOpacity="0.6"
              />
              {[0.12, 0.24, 0.37, 0.5, 0.63, 0.76, 0.88].map((t, fi) => {
                const bx = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * xm + t * t * x1;
                const by = (1 - t) * (1 - t) * 8 + 2 * (1 - t) * t * 68 + t * t * 8;
                return (
                  <g key={fi}>
                    <circle
                      cx={bx}
                      cy={by}
                      r={fi === 3 ? 8.5 : 7}
                      fill={fi % 2 === 0 ? '#F59E0B' : '#FBBF24'}
                      stroke="#D97706"
                      strokeWidth="1"
                    />
                    <circle cx={bx} cy={by} r={2.2} fill="#FEF3C7" />
                  </g>
                );
              })}

              <line x1={xm} y1="46" x2={xm} y2="74" stroke="#C8A253" strokeWidth="1.5" />
              <circle cx={xm} cy="77" r="4.5" fill="#5B141D" stroke="#DFBE76" strokeWidth="1.4" />
            </g>
          );
        })}
      </svg>

      {/* Interactive Brass Temple Bells (घंटी) tucked under the Toran */}
      <div className="absolute top-11 sm:top-16 inset-x-0 flex items-start justify-center gap-24 sm:gap-48 md:gap-64 pointer-events-none">
        {[0, 1, 2].map((bellIdx) => {
          const ringKey = ringingBells[bellIdx] || 0;
          return (
            <button
              key={bellIdx}
              type="button"
              onClick={() => handleRingBell(bellIdx)}
              aria-label="Ring Temple Bell"
              title="Tap to ring sacred bell"
              className="pointer-events-auto group relative flex flex-col items-center cursor-pointer focus:outline-none p-1"
            >
              {ringKey > 0 && (
                <span
                  key={`wave-${ringKey}`}
                  className="absolute top-5 w-10 h-10 rounded-full border border-[#DFBE76] animate-bell-wave pointer-events-none"
                />
              )}
              <svg
                key={`bell-${ringKey}`}
                viewBox="0 0 36 44"
                className={`w-7 h-9 sm:w-8 sm:h-10 drop-shadow-[0_3px_6px_rgba(91,20,29,0.28)] transition-transform group-hover:scale-110 ${
                  ringKey > 0 ? 'animate-bell-ring' : ''
                }`}
                style={{ transformOrigin: '18px 2px' }}
                fill="none"
              >
                <line x1="18" y1="0" x2="18" y2="9" stroke="#C8A253" strokeWidth="2" />
                <circle cx="18" cy="10" r="2.6" fill="#DFBE76" stroke="#8C6B23" strokeWidth="1" />
                <path
                  d="M18 12 C12 12, 10 21, 7 29 C6.5 30.5, 7.5 32, 9 32 H27 C28.5 32, 29.5 30.5, 29 29 C26 21, 24 12, 18 12 Z"
                  fill="url(#brassBellGrad)"
                  stroke="#8C6B23"
                  strokeWidth="1.2"
                />
                <path d="M11 26 H25" stroke="#FEF3C7" strokeWidth="1" strokeOpacity="0.6" />
                <circle cx="18" cy="35" r="3" fill="#5B141D" stroke="#DFBE76" strokeWidth="1.2" />
                <defs>
                  <linearGradient id="brassBellGrad" x1="7" y1="12" x2="29" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#F3DB99" />
                    <stop offset="50%" stopColor="#C8A253" />
                    <stop offset="100%" stopColor="#8C6B23" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function HangingKandils() {
  const renderLantern = (side) => (
    <div
      className={`absolute top-12 sm:top-16 z-20 pointer-events-none ${
        side === 'left'
          ? 'left-1.5 sm:left-7 md:left-14 animate-kandil-left'
          : 'right-1.5 sm:right-7 md:right-14 animate-kandil-right'
      }`}
      style={{ transformOrigin: 'top center' }}
    >
      <div className="relative flex flex-col items-center">
        <span
          className={`absolute ${
            side === 'left' ? 'top-20 sm:top-28' : 'top-24 sm:top-32'
          } w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#FBBF24]/30 blur-xl animate-diya-glow`}
        />
        <svg
          viewBox="0 0 64 170"
          className={`${
            side === 'left' ? 'w-10 sm:w-14 md:w-16 h-28 sm:h-40 md:h-44' : 'w-10 sm:w-14 md:w-16 h-32 sm:h-44 md:h-48'
          } drop-shadow-[0_8px_16px_rgba(91,20,29,0.18)]`}
          fill="none"
        >
          <line x1="32" y1="0" x2="32" y2="48" stroke="#C8A253" strokeWidth="1.8" strokeDasharray="3 2" />
          <circle cx="32" cy="50" r="4" stroke="#C8A253" strokeWidth="1.8" fill="#FAF7F2" />

          {/* Lantern Dome */}
          <path
            d="M20 72 C20 58, 44 58, 44 72 Z"
            fill="#5B141D"
            stroke="#DFBE76"
            strokeWidth="1.6"
          />
          <rect x="16" y="72" width="32" height="5" rx="2" fill="#C8A253" />

          {/* Glowing Glass Body */}
          <path
            d="M19 77 L15 114 L23 124 H41 L49 114 L45 77 Z"
            fill="url(#kandilGlow)"
            stroke="#C8A253"
            strokeWidth="1.8"
          />
          <path d="M26 77 L24 124 M38 77 L40 124" stroke="#8C6B23" strokeWidth="1.1" strokeOpacity="0.7" />
          <path
            d="M32 90 C36 96, 36.5 103, 32 108 C27.5 103, 28 96, 32 90 Z"
            fill="#FEF08A"
            className="animate-diya-flicker"
            style={{ transformOrigin: '32px 104px' }}
          />

          {/* Base & Tassel */}
          <rect x="21" y="124" width="22" height="5" rx="2" fill="#5B141D" stroke="#DFBE76" strokeWidth="1.2" />
          <path d="M27 129 L32 138 L37 129 Z" fill="#C8A253" />
          <line x1="32" y1="138" x2="32" y2="154" stroke="#C8A253" strokeWidth="1.6" />
          <path d="M28 154 L32 167 L36 154 Z" fill="#5B141D" stroke="#DFBE76" strokeWidth="1" />

          <defs>
            <radialGradient id="kandilGlow" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#FEF9C3" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#F59E0B" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#5B141D" stopOpacity="0.35" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );

  return (
    <>
      {renderLantern('left')}
      {renderLantern('right')}
    </>
  );
}

function RoyalJharokhaArch({ revealed }) {
  return (
    <svg
      viewBox="0 0 680 720"
      preserveAspectRatio="none"
      className="w-full h-full pointer-events-none"
      fill="none"
    >
      {/* Outer Champagne-Gold Scalloped Jharokha Arch */}
      <path
        d="M 48 690 V 265 C 48 195, 92 162, 138 148 C 175 136, 208 112, 240 84 C 276 52, 314 38, 340 20 C 366 38, 404 52, 440 84 C 472 112, 505 136, 542 148 C 588 162, 632 195, 632 265 V 690"
        stroke="#C8A253"
        strokeWidth="2.2"
        strokeOpacity="0.65"
        strokeLinecap="round"
        strokeDasharray="1900"
        strokeDashoffset={revealed ? 0 : 1900}
        className="transition-[stroke-dashoffset] duration-[1700ms] delay-200 ease-out"
      />

      {/* Inner Hairline Filigree Arch */}
      <path
        d="M 64 676 V 270 C 64 208, 104 176, 148 162 C 184 150, 216 126, 248 98 C 282 68, 316 54, 340 38 C 364 54, 398 68, 432 98 C 464 126, 496 150, 532 162 C 576 176, 616 208, 616 270 V 676"
        stroke="#DFBE76"
        strokeWidth="1.1"
        strokeOpacity="0.55"
        strokeDasharray="6 6"
        className={`transition-opacity duration-1000 delay-500 ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Crown Kalash Finial at Arch Apex */}
      <g
        className={`transition-all duration-700 delay-300 ${
          revealed ? 'opacity-90 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transformOrigin: '340px 20px' }}
      >
        <circle cx="340" cy="14" r="4" fill="#C8A253" />
        <path d="M332 24 Q340 16 348 24" stroke="#C8A253" strokeWidth="1.5" />
      </g>

      {/* Bottom Corner Brackets */}
      <path
        d="M 38 690 H 92 M 588 690 H 642"
        stroke="#C8A253"
        strokeWidth="1.6"
        strokeOpacity="0.5"
        strokeLinecap="round"
        className={`transition-opacity duration-1000 delay-700 ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </svg>
  );
}

function GoldenWinterFireflies() {
  const fireflies = [
    { left: '12%', bottom: '8%', size: 4, delay: '0s', dur: '6.5s' },
    { left: '22%', bottom: '16%', size: 5, delay: '1.2s', dur: '7.8s' },
    { left: '31%', bottom: '6%', size: 3.5, delay: '2.6s', dur: '6.2s' },
    { left: '42%', bottom: '14%', size: 5.5, delay: '0.7s', dur: '8.4s' },
    { left: '53%', bottom: '9%', size: 4, delay: '3.1s', dur: '7.1s' },
    { left: '64%', bottom: '18%', size: 5, delay: '1.8s', dur: '6.8s' },
    { left: '74%', bottom: '7%', size: 3.5, delay: '0.4s', dur: '7.5s' },
    { left: '84%', bottom: '15%', size: 4.5, delay: '2.2s', dur: '8.0s' },
    { left: '28%', bottom: '28%', size: 3, delay: '3.8s', dur: '6.9s' },
    { left: '68%', bottom: '26%', size: 4, delay: '4.1s', dur: '7.4s' },
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 h-[58%] overflow-hidden pointer-events-none z-10">
      {fireflies.map((f, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-firefly-float"
          style={{
            left: f.left,
            bottom: f.bottom,
            width: `${f.size}px`,
            height: `${f.size}px`,
            background: '#FDE68A',
            boxShadow: '0 0 10px 3px rgba(251, 191, 36, 0.7), 0 0 18px 6px rgba(200, 162, 83, 0.35)',
            animationDelay: f.delay,
            animationDuration: f.dur,
          }}
        />
      ))}
    </div>
  );
}

function CenterOutDivider({ inView, className = 'w-44 my-4' }) {
  return (
    <div className={`flex items-center justify-center gap-3 mx-auto ${className}`}>
      <span
        className={`h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C8A253] origin-right transition-transform duration-1000 ease-out ${
          inView ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
      <Sparkles
        size={14}
        className={`text-[#C8A253] transition-all duration-700 ${
          inView ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'
        }`}
      />
      <span
        className={`h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C8A253] origin-left transition-transform duration-1000 ease-out ${
          inView ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </div>
  );
}

function AmbientLayer() {
  const petals = [
    { left: '6%', delay: '0s', duration: '14s', size: 12, color: '#E89B3C' },
    { left: '18%', delay: '3.5s', duration: '17s', size: 10, color: '#DFBE76' },
    { left: '34%', delay: '1.2s', duration: '15s', size: 14, color: '#D97B29' },
    { left: '52%', delay: '5s', duration: '18s', size: 11, color: '#C8A253' },
    { left: '68%', delay: '2.4s', duration: '16s', size: 13, color: '#E89B3C' },
    { left: '84%', delay: '6.2s', duration: '15s', size: 10, color: '#DFBE76' },
    { left: '93%', delay: '4s', duration: '19s', size: 12, color: '#D97B29' },
  ];

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(#5B141D 0.6px, transparent 0.6px), radial-gradient(#C8A253 0.6px, transparent 0.6px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px',
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, transparent 62%, rgba(91, 20, 29, 0.055) 100%)',
        }}
      />

      {petals.map((p, idx) => (
        <span
          key={idx}
          className="absolute -top-8 rounded-full animate-petal-fall opacity-40"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size * 0.65}px`,
            background: `radial-gradient(circle at 30% 30%, #FDE293, ${p.color})`,
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

function MandalaSVG({ className = '', reverse = false }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className} ${reverse ? 'animate-spin-slower-rev' : 'animate-spin-slow'}`}
      fill="none"
    >
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 4" />
      <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="46" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" />
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 100 100)`}>
          <path
            d="M100 26 C110 48, 110 64, 100 78 C90 64, 90 48, 100 26 Z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
          <circle cx="100" cy="16" r="2.2" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

function RoyalCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    spotX: 50,
    spotY: 50,
    hovered: false,
  });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    const rotateY = (x / rect.width - 0.5) * 6;
    const rotateX = (0.5 - y / rect.height) * 6;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`,
      spotX: px,
      spotY: py,
      hovered: true,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      spotX: 50,
      spotY: 50,
      hovered: false,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: style.transform }}
      className={`royal-tilt-card relative rounded-3xl bg-white/85 backdrop-blur-md border border-[#C8A253]/30 shadow-[0_14px_45px_rgba(91,20,29,0.08)] transition-all duration-300 ease-out overflow-hidden ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A253] to-transparent opacity-75" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: style.hovered ? 1 : 0,
          background: `radial-gradient(380px circle at ${style.spotX}% ${style.spotY}%, rgba(200,162,83,0.16), transparent 65%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function MaskedHeading({ eyebrow, title, lang, inView }) {
  return (
    <div className="text-center mb-10 sm:mb-14">
      <div className="overflow-hidden">
        <p
          className={`text-xs sm:text-sm font-semibold text-[#C8A253] transition-transform duration-700 ease-out ${
            lang === 'hi' ? 'font-devanagari tracking-[0.15em]' : 'uppercase tracking-[0.3em]'
          } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          {eyebrow}
        </p>
      </div>
      <div className="overflow-hidden mt-2">
        <h2
          className={`text-3xl sm:text-5xl text-[#5B141D] leading-tight transition-transform duration-700 delay-150 ease-out ${
            lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
          } ${inView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          {title}
        </h2>
      </div>
      <CenterOutDivider inView={inView} className="w-40 mt-4" />
    </div>
  );
}

/* ============================================================================
   SECTION 1: 3-STAGE MONOGRAM PRELOADER WITH AURA SEAL, SHOCKWAVE & BOKEH
   ============================================================================ */
function MonogramPreloader({ lang, guestName, isPlaying, toggleAudio, onUnlock, onCurtainLift }) {
  const [stage, setStage] = useState('idle');
  const t = WEDDING_DATA.translations[lang];

  const handleOpen = () => {
    if (stage !== 'idle') return;
    triggerHaptic([20, 35, 15]);
    setStage('shockwave');
    onUnlock();

    setTimeout(() => {
      setStage('loading');
    }, 520);

    setTimeout(() => {
      setStage('lifting');
      if (onCurtainLift) onCurtainLift();
    }, 2850);

    setTimeout(() => {
      setStage('done');
    }, 3750);
  };

  if (stage === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#5B141D] text-[#FAF7F2] px-6 select-none transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden ${
        stage === 'lifting' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <WarmBokehOrbs tone="gold" count={10} />
      <MandalaSVG className="absolute w-[480px] h-[480px] text-[#C8A253]/10 pointer-events-none" />

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleAudio();
        }}
        aria-label="Toggle Audio"
        className="absolute top-6 right-6 p-3 rounded-full border border-[#C8A253]/40 text-[#DFBE76] hover:bg-[#C8A253]/15 transition cursor-pointer"
      >
        <MusicEqualizer isPlaying={isPlaying} light />
      </button>

      {(stage === 'idle' || stage === 'shockwave') && (
        <div
          className={`relative z-10 flex flex-col items-center gap-6 text-center transition-all duration-500 ${
            stage === 'shockwave' ? 'opacity-0 scale-110' : 'opacity-100 scale-100 animate-lang-fade'
          }`}
        >
          <div className="relative flex items-center justify-center w-20 h-20">
            <AuraSealRing sizeClass="absolute inset-0 w-20 h-20" colorClass="text-[#DFBE76]/60" />
            <svg viewBox="0 0 64 64" className="relative w-12 h-12 text-[#DFBE76]" fill="none">
              <path
                d="M32 10 C38 10, 42 15, 42 21 C42 27, 36 30, 32 33 C28 36, 26 42, 31 46 C35 49, 41 47, 41 43"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M22 22 C16 20, 14 28, 19 32 M42 22 C48 20, 50 28, 45 32"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="32" cy="17" r="2" fill="currentColor" />
              <path d="M24 53 H40" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>

          <p className="font-devanagari text-sm sm:text-base tracking-[0.22em] text-[#DFBE76]">
            {WEDDING_DATA.meta.shloka}
          </p>

          {guestName && (
            <div className="px-5 py-2 rounded-full bg-[#C8A253]/15 border border-[#DFBE76]/45 text-[#F3DB99] text-xs sm:text-sm font-devanagari shadow-sm">
              {t.guestInvitePrefix}{' '}
              <span className="font-bold text-white">{guestName}</span> {t.guestInviteSuffix}
            </div>
          )}

          <div className="relative flex items-center justify-center my-2">
            {stage === 'shockwave' && (
              <>
                <span className="absolute w-40 h-40 rounded-full border-2 border-[#DFBE76] animate-shockwave-1 pointer-events-none" />
                <span className="absolute w-40 h-40 rounded-full border border-[#F3DB99] animate-shockwave-2 pointer-events-none" />
              </>
            )}

            <button
              onClick={handleOpen}
              className="relative group flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#F0D38C] via-[#C8A253] to-[#8C6B23] shadow-[0_0_50px_rgba(200,162,83,0.42)] hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
            >
              <span className="absolute -inset-2 rounded-full border border-[#DFBE76]/60 animate-ping-slow" />
              <span className="absolute inset-0 rounded-full border-2 border-[#FAF7F2]/25" />

              <div className="relative overflow-hidden flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[#5B141D]/35 bg-gradient-to-tl from-[#B8903D] via-[#DFBE76] to-[#F3DB99] shadow-inner">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-full animate-sheen-sweep" />
                <span className="relative font-editorial text-3xl sm:text-4xl font-bold tracking-widest text-[#5B141D]">
                  P <span className="text-2xl">♥</span> S
                </span>
              </div>
            </button>
          </div>

          <button
            onClick={handleOpen}
            className={`text-xs sm:text-sm text-[#FAF7F2]/85 hover:text-[#DFBE76] transition cursor-pointer ${
              lang === 'hi' ? 'font-devanagari tracking-[0.12em]' : 'uppercase tracking-[0.26em]'
            }`}
          >
            {t.tapSeal}
          </button>
        </div>
      )}

      {(stage === 'loading' || stage === 'lifting') && (
        <div className="relative z-10 flex flex-col items-center text-center animate-lang-fade">
          <div
            className={`relative text-4xl sm:text-6xl md:text-7xl tracking-wide ${
              lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
            }`}
          >
            <span className="text-[#C8A253]/25">{t.fullCoupleName}</span>
            <span className="absolute inset-0 text-[#DFBE76] animate-name-fill whitespace-nowrap">
              {t.fullCoupleName}
            </span>
          </div>

          <div className="w-52 sm:w-64 h-[2px] bg-[#C8A253]/25 mt-6 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#8C6B23] via-[#F3DB99] to-[#C8A253] animate-loader-bar" />
          </div>

          <p className="mt-4 text-xs sm:text-sm tracking-[0.35em] text-[#FAF7F2]/80 uppercase">
            {WEDDING_DATA.meta.dateDisplay}
          </p>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
   SECTION 2: CINEMATIC HERO WITH TORAN, KANDILS, JHAROKHA ARCH & 3D PARALLAX
   ============================================================================ */
function HeroSection({ lang, guestName, scrollY, revealed }) {
  const t = WEDDING_DATA.translations[lang];
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [heroState, setHeroState] = useState({
    phase: 'countdown',
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(WEDDING_DATA.meta.weddingISO).getTime();
    const update = () => {
      const now = Date.now();
      const todayIst = getIstDateKey(now);

      if (todayIst === WEDDING_DATA.meta.weddingDateKey) {
        setHeroState({ phase: 'wedding_day', days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      if (todayIst === WEDDING_DATA.meta.receptionDateKey) {
        setHeroState({ phase: 'reception_day', days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      if (todayIst > WEDDING_DATA.meta.receptionDateKey) {
        setHeroState({ phase: 'post_wedding', days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const diff = Math.max(0, target - now);
      setHeroState({
        phase: 'countdown',
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: nx * 2, y: ny * 2 });
  };

  const handleHeroMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const parallaxSlow = Math.min(scrollY * 0.16, 120);
  const parallaxFast = Math.min(scrollY * 0.08, 70);

  return (
    <section
      id="home"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      <MarigoldToran />
      <HangingKandils />
      <GoldenWinterFireflies />

      {/* Depth Layer 1: Background Mandala + Winter Starlight */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${(mouseOffset.x * -14).toFixed(1)}px, ${(
            mouseOffset.y * -10 +
            parallaxSlow
          ).toFixed(1)}px, 0)`,
        }}
      >
        <MandalaSVG className="w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] text-[#C8A253]/15" />
      </div>

      {/* Depth Layer 2: Royal Jharokha Archway Draw-In */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none px-3 sm:px-6 pt-20 pb-8 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${(mouseOffset.x * 7).toFixed(1)}px, ${(
            mouseOffset.y * 5 -
            parallaxFast * 0.15
          ).toFixed(1)}px, 0)`,
        }}
      >
        <div className="w-full max-w-[740px] h-[560px] sm:h-[640px]">
          <RoyalJharokhaArch revealed={revealed} />
        </div>
      </div>

      {/* Depth Layer 3: Choreographed Couple Names & Countdown */}
      <div
        key={`hero-${lang}`}
        style={{
          transform: `translate3d(${(mouseOffset.x * 12).toFixed(1)}px, ${(
            mouseOffset.y * 8 -
            parallaxFast * 0.3
          ).toFixed(1)}px, 0)`,
        }}
        className="relative z-20 max-w-3xl w-full text-center flex flex-col items-center transition-transform duration-300 ease-out"
      >
        {/* Step 1 (0.1s): Shloka & Personalized Guest Banner */}
        <div
          className={`flex flex-col items-center transition-all duration-700 delay-100 ease-out ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="font-devanagari text-sm sm:text-base tracking-[0.2em] text-[#5B141D] font-semibold mb-3">
            {WEDDING_DATA.meta.shloka}
          </p>

          {guestName && (
            <div className="mb-4 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#5B141D] via-[#721A26] to-[#5B141D] text-[#F3DB99] border border-[#C8A253]/60 shadow-md text-xs sm:text-sm font-devanagari">
              {t.guestInvitePrefix}{' '}
              <span className="font-bold text-white">{guestName}</span> {t.guestInviteSuffix}
            </div>
          )}
        </div>

        {/* Step 2 (0.35s): Subtitle & Blur-to-Sharp Couple Name Rise */}
        <div
          className={`flex flex-col items-center transition-all duration-1000 delay-[350ms] ease-out ${
            revealed
              ? 'opacity-100 translate-y-0 blur-0 scale-100'
              : 'opacity-0 translate-y-6 blur-[6px] scale-95'
          }`}
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B141D]/8 border border-[#C8A253]/40 text-[#5B141D] text-xs sm:text-sm font-medium mb-6 ${
              lang === 'hi' ? 'font-devanagari tracking-[0.12em]' : 'uppercase tracking-[0.26em]'
            }`}
          >
            <Sparkles size={13} className="text-[#C8A253]" />
            {t.heroSubtitle}
            <Sparkles size={13} className="text-[#C8A253]" />
          </span>

          <h1
            className={`text-5xl sm:text-7xl md:text-8xl leading-[1.15] gold-shimmer-text drop-shadow-sm px-2 ${
              lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
            }`}
          >
            {t.fullCoupleName}
          </h1>
        </div>

        {/* Step 3 (0.55s): Divider, Date & Countdown Cascade */}
        <div
          className={`w-full flex flex-col items-center transition-all duration-1000 delay-[550ms] ease-out ${
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 my-6 w-64">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C8A253]" />
            <Heart size={16} className="text-[#5B141D] fill-[#C8A253]" />
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C8A253]" />
          </div>

          <p
            className={`text-sm sm:text-lg text-[#22201E]/85 font-medium mb-10 ${
              lang === 'hi' ? 'font-devanagari' : 'tracking-[0.18em] uppercase text-xs sm:text-sm'
            }`}
          >
            {t.heroDateText}
          </p>

          {heroState.phase === 'countdown' && (
            <div className="grid grid-cols-4 gap-2.5 sm:gap-5 w-full max-w-lg">
              <SplitFlapTile value={heroState.days} label={t.countdown.days} lang={lang} />
              <SplitFlapTile value={heroState.hours} label={t.countdown.hours} lang={lang} />
              <SplitFlapTile value={heroState.minutes} label={t.countdown.minutes} lang={lang} />
              <SplitFlapTile value={heroState.seconds} label={t.countdown.seconds} lang={lang} />
            </div>
          )}

          {(heroState.phase === 'wedding_day' || heroState.phase === 'reception_day') && (
            <div className="w-full max-w-lg rounded-3xl bg-[#5B141D] text-[#FAF7F2] border border-[#DFBE76]/60 p-6 shadow-xl">
              <p
                className={`text-lg sm:text-2xl text-[#F3DB99] font-bold ${
                  lang === 'hi' ? 'font-hindi-display' : 'font-editorial'
                }`}
              >
                {heroState.phase === 'wedding_day'
                  ? t.countdown.weddingDayTitle
                  : t.countdown.receptionDayTitle}
              </p>
              <p className={`mt-2 text-xs sm:text-sm text-[#FAF7F2]/90 ${lang === 'hi' ? 'font-devanagari' : ''}`}>
                {heroState.phase === 'wedding_day'
                  ? t.countdown.weddingDayDesc
                  : t.countdown.receptionDayDesc}
              </p>
              <a
                href={
                  heroState.phase === 'wedding_day'
                    ? WEDDING_DATA.events[0].mapsUrl
                    : WEDDING_DATA.events[1].mapsUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DFBE76] text-[#5B141D] text-xs sm:text-sm font-bold hover:bg-[#F3DB99] transition ${
                  lang === 'hi' ? 'font-devanagari' : ''
                }`}
              >
                <MapPin size={15} />
                {t.countdown.liveMapBtn}
              </a>
            </div>
          )}

          {heroState.phase === 'post_wedding' && (
            <div className="w-full max-w-lg rounded-3xl bg-white/85 border border-[#C8A253]/50 p-6 shadow-lg">
              <p
                className={`text-xl sm:text-3xl text-[#5B141D] font-bold ${
                  lang === 'hi' ? 'font-hindi-display' : 'font-editorial'
                }`}
              >
                {t.countdown.postWeddingTitle}
              </p>
              <p className={`mt-2 text-sm text-[#22201E]/85 ${lang === 'hi' ? 'font-devanagari' : ''}`}>
                {t.countdown.postWeddingDesc}
              </p>
            </div>
          )}

          <a
            href="#message"
            className="mt-12 inline-flex flex-col items-center gap-1.5 text-[#5B141D]/65 hover:text-[#5B141D] transition"
          >
            <span
              className={`text-[11px] ${
                lang === 'hi' ? 'font-devanagari tracking-[0.12em]' : 'uppercase tracking-[0.26em]'
              }`}
            >
              {t.scrollHint}
            </span>
            <ChevronDown size={18} className="animate-bounce text-[#C8A253]" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   SECTION 3: DIVINE BLESSING CARD WITH FLICKERING SACRED DIYA LAMPS
   ============================================================================ */
function CornerFiligree({ className = '', inView }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`w-12 h-12 sm:w-16 sm:h-16 text-[#C8A253] pointer-events-none ${className}`}
      fill="none"
    >
      <path
        d="M6 58 V16 C6 10, 10 6, 16 6 H58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="120"
        strokeDashoffset={inView ? 0 : 120}
        className="transition-all duration-1000 ease-out"
      />
      <path
        d="M14 48 V20 C14 16, 16 14, 20 14 H48"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeOpacity="0.65"
        strokeDasharray="90"
        strokeDashoffset={inView ? 0 : 90}
        className="transition-all duration-1000 delay-200 ease-out"
      />
      <circle cx="14" cy="14" r="2.5" fill="currentColor" />
    </svg>
  );
}

function BlessingMessageSection({ lang }) {
  const [ref, inView] = useInView(0.18);
  const t = WEDDING_DATA.translations[lang];
  const paragraphs = WEDDING_DATA.blessingMessage[lang];

  return (
    <section id="message" ref={ref} className="relative z-20 py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <RoyalCard className="p-7 sm:p-14 md:p-16">
          <MandalaSVG className="absolute -top-24 -left-24 w-64 h-64 text-[#C8A253]/10 pointer-events-none" />
          <MandalaSVG
            reverse
            className="absolute -bottom-24 -right-24 w-72 h-72 text-[#5B141D]/[0.05] pointer-events-none"
          />

          <div className="pointer-events-none absolute inset-3 sm:inset-5 rounded-2xl border border-[#C8A253]/25" />

          <CornerFiligree inView={inView} className="absolute top-3 left-3 sm:top-5 sm:left-5" />
          <CornerFiligree
            inView={inView}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 rotate-90"
          />
          <CornerFiligree
            inView={inView}
            className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 -rotate-90"
          />
          <CornerFiligree
            inView={inView}
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 rotate-180"
          />

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="flex items-center justify-center gap-4 sm:gap-7 mb-5">
              <SacredDiyaLamp />

              <div className="relative flex items-center justify-center w-16 h-16">
                <span className="absolute inset-0 rounded-full bg-[#C8A253]/20 blur-md animate-pulse" />
                <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#C8A253]/50 shadow-sm">
                  <svg viewBox="0 0 48 48" className="w-8 h-8 text-[#5B141D]" fill="none">
                    <path
                      d="M17 18 C13 13, 16 10, 21 15 M31 18 C35 13, 32 10, 27 15"
                      stroke="#C8A253"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="24" cy="14" r="4.5" fill="#C8A253" />
                    <path
                      d="M18 19 H30 L28 23 C33 26, 34 34, 29 38 H19 C14 34, 15 26, 20 23 L18 19 Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="#FAF7F2"
                    />
                    <circle cx="24" cy="30" r="2" fill="#C8A253" />
                  </svg>
                </div>
              </div>

              <SacredDiyaLamp />
            </div>

            <div key={`blessing-header-${lang}`} className="animate-lang-fade">
              <p
                className={`text-xs sm:text-sm font-semibold text-[#C8A253] ${
                  lang === 'hi' ? 'font-devanagari tracking-[0.18em]' : 'uppercase tracking-[0.3em]'
                }`}
              >
                {t.blessingEyebrow}
              </p>
              <h2
                className={`mt-2 text-3xl sm:text-5xl text-[#5B141D] ${
                  lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
                }`}
              >
                {t.blessingHeading}
              </h2>
            </div>

            <CenterOutDivider inView={inView} className="w-40 my-6" />

            <div
              key={`blessing-body-${lang}`}
              className="space-y-5 max-w-2xl mx-auto animate-lang-fade"
            >
              {paragraphs.map((text, idx) => (
                <p
                  key={idx}
                  style={{ transitionDelay: `${idx * 140}ms` }}
                  className={`leading-relaxed transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-[3px]'
                  } ${
                    lang === 'hi'
                      ? 'font-devanagari text-base sm:text-xl text-[#22201E]/90'
                      : 'font-editorial italic text-xl sm:text-2xl text-[#5B141D]/90'
                  }`}
                >
                  {lang === 'en' ? `“${text}”` : text}
                </p>
              ))}
            </div>
          </div>
        </RoyalCard>
      </div>
    </section>
  );
}

/* ============================================================================
   SECTION 4: COUPLE & FAMILY BLESSINGS + FULLSCREEN GALLERY LIGHTBOX
   ============================================================================ */
function GalleryLightbox({ index, onClose, onPrev, onNext, lang }) {
  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;
  const photo = WEDDING_DATA.gallery[index];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B090E]/92 backdrop-blur-md p-4 sm:p-8 animate-lang-fade"
    >
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 border border-[#C8A253]/40 text-[#FAF7F2] hover:bg-[#C8A253] hover:text-[#5B141D] transition cursor-pointer"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous Photo"
        className="absolute left-3 sm:left-6 p-3 rounded-full bg-white/10 border border-[#C8A253]/40 text-[#FAF7F2] hover:bg-[#C8A253] hover:text-[#5B141D] transition cursor-pointer"
      >
        <ChevronLeft size={22} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full flex flex-col items-center"
      >
        <img
          src={photo.url}
          alt={lang === 'hi' ? photo.captionHi : photo.captionEn}
          className="max-h-[75vh] w-auto rounded-2xl border-2 border-[#C8A253]/50 shadow-2xl object-contain"
        />
        <p
          className={`mt-4 text-base sm:text-xl text-[#F3DB99] ${
            lang === 'hi' ? 'font-devanagari' : 'font-editorial italic text-2xl'
          }`}
        >
          {lang === 'hi' ? photo.captionHi : photo.captionEn}
        </p>
        <span className="mt-1 text-xs text-[#FAF7F2]/60 tracking-widest">
          {index + 1} / {WEDDING_DATA.gallery.length}
        </span>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next Photo"
        className="absolute right-3 sm:right-6 p-3 rounded-full bg-white/10 border border-[#C8A253]/40 text-[#FAF7F2] hover:bg-[#C8A253] hover:text-[#5B141D] transition cursor-pointer"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

function CoupleSection({ lang }) {
  const [ref, inView] = useInView(0.12);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const t = WEDDING_DATA.translations[lang];
  const groom = WEDDING_DATA.couple.groom[lang];
  const bride = WEDDING_DATA.couple.bride[lang];

  const groomPhoto = WEDDING_DATA.couple.groom.portrait;
  const bridePhoto = WEDDING_DATA.couple.bride.portrait;

  const totalPhotos = WEDDING_DATA.gallery.length;
  const handlePrev = useCallback(
    () => setLightboxIdx((prev) => (prev === null ? null : (prev - 1 + totalPhotos) % totalPhotos)),
    [totalPhotos]
  );
  const handleNext = useCallback(
    () => setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % totalPhotos)),
    [totalPhotos]
  );

  return (
    <section id="couple" ref={ref} className="relative z-20 py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <MaskedHeading
          eyebrow={t.coupleEyebrow}
          title={t.coupleHeading}
          lang={lang}
          inView={inView}
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <RoyalCard className="h-full p-7 sm:p-9 text-center flex flex-col items-center">
              <div className="relative group w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-br from-[#DFBE76] via-[#C8A253] to-[#5B141D] mb-5 shadow-md">
                <img
                  src={groomPhoto}
                  alt={groom.name}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              <span
                className={`text-xs font-semibold text-[#C8A253] ${
                  lang === 'hi' ? 'font-devanagari tracking-[0.14em]' : 'uppercase tracking-[0.25em]'
                }`}
              >
                {groom.role}
              </span>
              <h3
                className={`mt-1.5 text-3xl sm:text-4xl text-[#5B141D] ${
                  lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
                }`}
              >
                {groom.name}
              </h3>

              <CenterOutDivider inView={inView} className="w-24 my-4" />

              <div
                className={`space-y-2 text-sm sm:text-base text-[#22201E]/85 ${
                  lang === 'hi' ? 'font-devanagari' : ''
                }`}
              >
                <p className="font-medium text-[#5B141D]/90">{groom.parents}</p>
                <p className="text-xs sm:text-sm text-[#22201E]/70">{groom.grandparents}</p>
                <p className="text-xs sm:text-sm text-[#22201E]/75 pt-2 inline-flex items-start justify-center gap-1.5">
                  <MapPin size={14} className="text-[#C8A253] shrink-0 mt-0.5" />
                  <span>{groom.address}</span>
                </p>
              </div>
            </RoyalCard>
          </div>

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center">
            <div className="relative flex items-center justify-center w-24 h-24">
              <AuraSealRing sizeClass="absolute inset-0 w-24 h-24" colorClass="text-[#C8A253]/75" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#5B141D] border-2 border-[#DFBE76] shadow-[0_0_25px_rgba(200,162,83,0.45)]">
                <span
                  className={`text-[#DFBE76] font-bold ${
                    lang === 'hi' ? 'font-hindi-display text-lg' : 'text-xl'
                  }`}
                >
                  {t.sangBadge}
                </span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-150 ease-out ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <RoyalCard className="h-full p-7 sm:p-9 text-center flex flex-col items-center">
              <div className="relative group w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-br from-[#DFBE76] via-[#C8A253] to-[#5B141D] mb-5 shadow-md">
                <img
                  src={bridePhoto}
                  alt={bride.name}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              <span
                className={`text-xs font-semibold text-[#C8A253] ${
                  lang === 'hi' ? 'font-devanagari tracking-[0.14em]' : 'uppercase tracking-[0.25em]'
                }`}
              >
                {bride.role}
              </span>
              <h3
                className={`mt-1.5 text-3xl sm:text-4xl text-[#5B141D] ${
                  lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
                }`}
              >
                {bride.name}
              </h3>

              <CenterOutDivider inView={inView} className="w-24 my-4" />

              <div
                className={`space-y-2 text-sm sm:text-base text-[#22201E]/85 ${
                  lang === 'hi' ? 'font-devanagari' : ''
                }`}
              >
                <p className="font-medium text-[#5B141D]/90">{bride.parents}</p>
                <p className="text-xs sm:text-sm text-[#22201E]/70">{bride.grandparents}</p>
                <p className="text-xs sm:text-sm text-[#22201E]/75 pt-2 inline-flex items-start justify-center gap-1.5">
                  <MapPin size={14} className="text-[#C8A253] shrink-0 mt-0.5" />
                  <span>{bride.address}</span>
                </p>
              </div>
            </RoyalCard>
          </div>
        </div>

        <div className="mt-14">
          <p
            className={`text-center text-xs sm:text-sm font-semibold text-[#C8A253] ${
              lang === 'hi' ? 'font-devanagari tracking-[0.16em]' : 'uppercase tracking-[0.28em]'
            }`}
          >
            {t.galleryTitle}
          </p>
          <p
            className={`text-center text-[11px] sm:text-xs text-[#22201E]/55 mt-1 mb-5 ${
              lang === 'hi' ? 'font-devanagari' : ''
            }`}
          >
            {t.galleryHint}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
            {WEDDING_DATA.gallery.map((photo, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  triggerHaptic(10);
                  setLightboxIdx(idx);
                }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#C8A253]/30 shadow-md bg-[#5B141D]/10 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#C8A253]"
              >
                <img
                  src={photo.url}
                  alt={lang === 'hi' ? photo.captionHi : photo.captionEn}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B141D]/75 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <span
                  className={`absolute bottom-3 left-3 right-3 text-center text-xs sm:text-sm text-[#FAF7F2] font-medium ${
                    lang === 'hi' ? 'font-devanagari' : 'font-editorial italic text-base'
                  }`}
                >
                  {lang === 'hi' ? photo.captionHi : photo.captionEn}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <GalleryLightbox
        index={lightboxIdx}
        onClose={() => setLightboxIdx(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        lang={lang}
      />
    </section>
  );
}

/* ============================================================================
   SECTION 5: EVENTS, BARAT ROUTE, INLINE MAP PREVIEW & WINTER CARE CARD
   ============================================================================ */
function BaratRouteVisual({ routeFrom, routeTo, lang, t }) {
  return (
    <div className="mt-6 pt-5 border-t border-[#C8A253]/25">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Navigation size={14} className="text-[#C8A253]" />
        <span
          className={`text-xs font-semibold text-[#5B141D] ${
            lang === 'hi' ? 'font-devanagari tracking-[0.12em]' : 'uppercase tracking-[0.22em]'
          }`}
        >
          {t.baratRouteTitle}
        </span>
      </div>

      <div className="relative w-full rounded-2xl bg-[#FAF7F2]/90 border border-[#C8A253]/25 px-3 py-4 sm:px-6 sm:py-5 overflow-hidden">
        <svg viewBox="0 0 600 130" className="w-full h-24 sm:h-32 overflow-visible" fill="none">
          <defs>
            <path id="baratScenicPath" d="M 55 88 Q 300 22 545 88" />
            <linearGradient id="roadRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5B141D" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#C8A253" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#5B141D" stopOpacity="0.14" />
            </linearGradient>
            <linearGradient id="headlightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE89E" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FFE89E" stopOpacity="0" />
            </linearGradient>
          </defs>

          <use
            href="#baratScenicPath"
            stroke="url(#roadRibbon)"
            strokeWidth="16"
            strokeLinecap="round"
          />

          <use
            href="#baratScenicPath"
            stroke="#C8A253"
            strokeWidth="3"
            strokeDasharray="10 8"
            strokeLinecap="round"
            className="animate-dash-flow"
          />

          <g transform="translate(55, 88)">
            <circle r="13" fill="#5B141D" fillOpacity="0.14" />
            <circle r="7.5" fill="#5B141D" stroke="#DFBE76" strokeWidth="2.2" />
            <circle r="2.5" fill="#FAF7F2" />
          </g>

          <g transform="translate(545, 88)">
            <circle r="15" fill="#C8A253" fillOpacity="0.2" className="animate-pulse" />
            <circle r="8" fill="#C8A253" stroke="#5B141D" strokeWidth="2" />
            <path d="M 0 -24 L 8 -10 H -8 Z" fill="#5B141D" />
            <path d="M 0 -29 V -23" stroke="#C8A253" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 -29 L 6 -26 L 0 -24 Z" fill="#C8A253" />
          </g>

          <g>
            <animateMotion dur="5.8s" repeatCount="indefinite" rotate="auto">
              <mpath href="#baratScenicPath" />
            </animateMotion>

            <g transform="translate(-26, -26)">
              <polygon points="48,18 76,10 76,26" fill="url(#headlightGrad)" />

              <g className="animate-car-bounce">
                <path
                  d="M 11 14 L 18 4 H 35 L 42 14 Z"
                  fill="#5B141D"
                  stroke="#DFBE76"
                  strokeWidth="1.5"
                />
                <path d="M 14.5 13 L 19.5 6.5 H 25.5 V 13 Z" fill="#FAF7F2" fillOpacity="0.85" />
                <path d="M 27.5 6.5 H 33.5 L 38.5 13 H 27.5 Z" fill="#FAF7F2" fillOpacity="0.85" />

                <rect
                  x="4"
                  y="13"
                  width="46"
                  height="11"
                  rx="4"
                  fill="#7A1C28"
                  stroke="#DFBE76"
                  strokeWidth="1.6"
                />

                <circle cx="9" cy="14" r="2.2" fill="#F59E0B" />
                <circle cx="14" cy="15.5" r="2.2" fill="#FBBF24" />
                <circle cx="19" cy="14" r="2.2" fill="#F59E0B" />
                <circle cx="38" cy="14" r="2.2" fill="#F59E0B" />
                <circle cx="43" cy="15.5" r="2.2" fill="#FBBF24" />
                <circle cx="47" cy="14" r="2.2" fill="#F59E0B" />

                <circle cx="26.5" cy="2" r="3" fill="#DFBE76" />
                <circle cx="26.5" cy="2" r="1.4" fill="#5B141D" />

                <circle cx="49" cy="17.5" r="2" fill="#FEF08A" />
                <circle cx="5.5" cy="17.5" r="1.7" fill="#FCA5A5" />

                <circle cx="-4" cy="19" r="1.6" fill="#DFBE76" opacity="0.8" />
                <circle cx="-10" cy="16" r="1.2" fill="#C8A253" opacity="0.55" />
              </g>

              <circle cx="14" cy="24" r="5" fill="#22201E" stroke="#DFBE76" strokeWidth="1.8" />
              <circle cx="14" cy="24" r="1.8" fill="#DFBE76" />
              <circle cx="39" cy="24" r="5" fill="#22201E" stroke="#DFBE76" strokeWidth="1.8" />
              <circle cx="39" cy="24" r="1.8" fill="#DFBE76" />
            </g>
          </g>
        </svg>

        <div className="grid grid-cols-2 gap-4 mt-2 pt-2 border-t border-[#C8A253]/20 text-xs sm:text-sm">
          <div className="text-left">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#C8A253] ${
                lang === 'hi' ? 'font-devanagari' : 'uppercase tracking-[0.14em]'
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#5B141D]" />
              {t.departureLabel}
            </span>
            <p
              className={`mt-0.5 font-semibold text-[#5B141D] ${
                lang === 'hi' ? 'font-devanagari text-sm sm:text-base' : ''
              }`}
            >
              {routeFrom}
            </p>
          </div>

          <div className="text-right">
            <span
              className={`inline-flex items-center justify-end gap-1.5 text-[11px] sm:text-xs font-semibold text-[#C8A253] ${
                lang === 'hi' ? 'font-devanagari' : 'uppercase tracking-[0.14em]'
              }`}
            >
              {t.destinationLabel}
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8A253]" />
            </span>
            <p
              className={`mt-0.5 font-semibold text-[#5B141D] ${
                lang === 'hi' ? 'font-devanagari text-sm sm:text-base' : ''
              }`}
            >
              {routeTo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsSection({ lang }) {
  const [ref, inView] = useInView(0.1);
  const [expandedMaps, setExpandedMaps] = useState({});

  const t = WEDDING_DATA.translations[lang];
  const winter = t.winterCard;
  const whatsappHref = `https://wa.me/${WEDDING_DATA.meta.whatsappNumber}?text=${encodeURIComponent(
    lang === 'hi'
      ? 'नमस्ते, प्रवीण और सुषमा के विवाह स्थल के मार्ग की जानकारी चाहिए।'
      : 'Hello, I need directions for Praveen & Sushma wedding venue.'
  )}`;

  const toggleMapPreview = (id) => {
    triggerHaptic(10);
    setExpandedMaps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="events" ref={ref} className="relative z-20 py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <MaskedHeading
          eyebrow={t.eventsEyebrow}
          title={t.eventsHeading}
          lang={lang}
          inView={inView}
        />

        <div className="relative">
          <div
            className={`hidden sm:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#C8A253]/20 via-[#C8A253] to-[#C8A253]/20 origin-top transition-transform duration-1000 ${
              inView ? 'scale-y-100' : 'scale-y-0'
            }`}
          />

          <div className="space-y-8 sm:space-y-10">
            {WEDDING_DATA.events.map((ev, idx) => {
              const data = ev[lang];
              const isMapOpen = Boolean(expandedMaps[ev.id]);

              return (
                <div
                  key={ev.id}
                  style={{ transitionDelay: `${idx * 180}ms` }}
                  className={`transition-all duration-700 ease-out ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <RoyalCard className="p-6 sm:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5B141D]/8 text-[#5B141D] text-xs font-semibold ${
                            lang === 'hi' ? 'font-devanagari' : 'uppercase tracking-[0.16em]'
                          }`}
                        >
                          <Calendar size={13} className="text-[#C8A253]" />
                          {data.banglaDate}
                        </span>
                        <h3
                          className={`mt-3 text-3xl sm:text-4xl text-[#5B141D] ${
                            lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
                          }`}
                        >
                          {data.title}
                        </h3>
                      </div>

                      <div className="sm:text-right space-y-1">
                        <p
                          className={`text-base sm:text-lg font-semibold text-[#5B141D] ${
                            lang === 'hi' ? 'font-devanagari' : ''
                          }`}
                        >
                          {data.date}
                        </p>
                        <p
                          className={`inline-flex items-center gap-1.5 text-sm text-[#C8A253] font-semibold ${
                            lang === 'hi' ? 'font-devanagari' : ''
                          }`}
                        >
                          <Clock size={14} />
                          {data.time}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 p-4 rounded-2xl bg-[#FAF7F2]/80 border border-[#C8A253]/25 flex items-start gap-3">
                      <MapPin size={18} className="text-[#5B141D] shrink-0 mt-0.5" />
                      <div className={lang === 'hi' ? 'font-devanagari' : ''}>
                        <p className="font-semibold text-[#5B141D] text-sm sm:text-base">
                          {data.venueName}
                        </p>
                        <p className="text-xs sm:text-sm text-[#22201E]/75 mt-0.5">
                          {data.venueAddress}
                        </p>
                      </div>
                    </div>

                    {ev.hasBaratRoute && (
                      <BaratRouteVisual
                        routeFrom={data.routeFrom}
                        routeTo={data.routeTo}
                        lang={lang}
                        t={t}
                      />
                    )}

                    <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <a
                        href={ev.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#5B141D] text-[#FAF7F2] hover:bg-[#721A26] active:scale-95 transition text-xs sm:text-sm font-medium shadow-md ${
                          lang === 'hi' ? 'font-devanagari' : ''
                        }`}
                      >
                        <MapPin size={15} className="text-[#DFBE76]" />
                        {t.getDirections}
                      </a>

                      <button
                        type="button"
                        onClick={() => toggleMapPreview(ev.id)}
                        className={`inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border transition active:scale-95 text-xs sm:text-sm font-medium cursor-pointer ${
                          isMapOpen
                            ? 'bg-[#C8A253]/20 text-[#5B141D] border-[#C8A253]'
                            : 'bg-[#FAF7F2] text-[#5B141D] border-[#C8A253]/55 hover:bg-[#C8A253]/15'
                        } ${lang === 'hi' ? 'font-devanagari' : ''}`}
                      >
                        <Map size={14} className="text-[#C8A253]" />
                        {isMapOpen ? t.hideMap : t.previewMap}
                      </button>

                      <a
                        href={ev.calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#FAF7F2] text-[#5B141D] border border-[#C8A253]/55 hover:bg-[#C8A253]/15 active:scale-95 transition text-xs sm:text-sm font-medium ${
                          lang === 'hi' ? 'font-devanagari' : ''
                        }`}
                      >
                        <Calendar size={14} className="text-[#C8A253]" />
                        {t.addToCalendar}
                      </a>

                      <a
                        href={`tel:${WEDDING_DATA.meta.contactPhone}`}
                        className={`inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-white text-[#5B141D] border border-[#5B141D]/20 hover:border-[#C8A253] hover:bg-[#FAF7F2] active:scale-95 transition text-xs sm:text-sm font-medium ${
                          lang === 'hi' ? 'font-devanagari' : ''
                        }`}
                      >
                        <Phone size={14} className="text-[#C8A253]" />
                        {t.callForDirections}
                      </a>

                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#25D366]/10 text-[#128C7E] border border-[#25D366]/35 hover:bg-[#25D366]/20 active:scale-95 transition text-xs sm:text-sm font-medium ${
                          lang === 'hi' ? 'font-devanagari' : ''
                        }`}
                      >
                        <MessageCircle size={14} />
                        {t.whatsappDirections}
                      </a>
                    </div>

                    {isMapOpen && (
                      <div className="mt-5 rounded-2xl overflow-hidden border border-[#C8A253]/40 shadow-inner animate-lang-fade">
                        <iframe
                          title={data.venueName}
                          src={ev.embedMapUrl}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="w-full h-56 sm:h-64 border-0"
                        />
                      </div>
                    )}
                  </RoyalCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Royal December Winter Weather & Care Message Card */}
        <div
          className={`mt-10 transition-all duration-700 delay-300 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <RoyalCard className="p-6 sm:p-8 bg-gradient-to-br from-[#5B141D] via-[#6B1925] to-[#4A1018] text-[#FAF7F2] border-[#DFBE76]/50">
            <WarmBokehOrbs tone="gold" count={5} />

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 text-center sm:text-left">
              <WinterMoonCrest />

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#DFBE76] ${
                      lang === 'hi'
                        ? 'font-devanagari tracking-[0.12em]'
                        : 'uppercase tracking-[0.2em]'
                    }`}
                  >
                    <Sparkles size={13} />
                    {winter.badge}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/12 border border-[#DFBE76]/45 text-[#F3DB99] text-xs font-semibold">
                    <Thermometer size={13} className="text-[#FDE68A]" />
                    <span>{winter.temp}</span>
                    <span className="opacity-70">•</span>
                    <span className={lang === 'hi' ? 'font-devanagari' : ''}>
                      {winter.location}
                    </span>
                  </span>
                </div>

                <h4
                  className={`mt-2.5 text-xl sm:text-2xl text-[#F3DB99] leading-snug ${
                    lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
                  }`}
                >
                  {winter.title}
                </h4>

                <p
                  className={`mt-2 text-xs sm:text-sm text-[#FAF7F2]/90 leading-relaxed ${
                    lang === 'hi' ? 'font-devanagari text-sm sm:text-base' : ''
                  }`}
                >
                  {winter.message}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFBE76]/15 border border-[#DFBE76]/40 text-[#FDE68A] text-xs font-medium">
                  <Heart size={12} className="fill-[#DFBE76] text-[#DFBE76]" />
                  <span className={lang === 'hi' ? 'font-devanagari' : ''}>{winter.tipTag}</span>
                </div>
              </div>
            </div>
          </RoyalCard>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   ROYAL CLOSING FOOTER WITH WARM WINTER BOKEH & MAHTO FAMILY WELCOME
   ============================================================================ */
function FooterSection({ lang }) {
  const [ref, inView] = useInView(0.15);
  const t = WEDDING_DATA.translations[lang];

  return (
    <footer
      ref={ref}
      className="relative z-20 pt-12 pb-28 sm:pb-32 text-center px-4 overflow-hidden"
    >
      <WarmBokehOrbs tone="light" count={7} />

      <div
        key={`footer-${lang}`}
        className={`relative z-10 max-w-xl mx-auto flex flex-col items-center gap-3 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p
          className={`text-xs sm:text-sm font-semibold text-[#C8A253] ${
            lang === 'hi' ? 'font-devanagari tracking-[0.16em]' : 'uppercase tracking-[0.26em]'
          }`}
        >
          {t.footerInviteBadge}
        </p>

        <h3
          className={`text-2xl sm:text-4xl text-[#5B141D] leading-snug ${
            lang === 'hi' ? 'font-hindi-display' : 'font-editorial font-bold'
          }`}
        >
          {t.footerFamilyTitle}
        </h3>

        <p
          className={`text-sm sm:text-lg text-[#22201E]/85 font-medium ${
            lang === 'hi' ? 'font-devanagari' : 'font-editorial italic text-xl'
          }`}
        >
          {t.footerWelcomeText}
        </p>

        <CenterOutDivider inView={inView} className="w-44 my-2" />

        <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.2em] uppercase text-[#5B141D]/80 font-medium">
          <Heart size={13} className="fill-[#C8A253] text-[#C8A253] shrink-0" />
          <span className={lang === 'hi' ? 'font-devanagari tracking-[0.08em]' : ''}>
            {t.footerText}
          </span>
          <Heart size={13} className="fill-[#C8A253] text-[#C8A253] shrink-0" />
        </div>
      </div>
    </footer>
  );
}

/* ============================================================================
   FLOATING GLASSMORPHIC BOTTOM NAVIGATION DOCK
   ============================================================================ */
function FloatingDock({ lang, activeSection }) {
  const t = WEDDING_DATA.translations[lang].nav;
  const items = [
    { id: 'home', label: t.home, icon: Home },
    { id: 'message', label: t.message, icon: ScrollText },
    { id: 'couple', label: t.couple, icon: Users },
    { id: 'events', label: t.events, icon: Calendar },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-2rem)] max-w-md">
      <div className="flex items-center justify-between p-1.5 rounded-full bg-[#5B141D]/92 backdrop-blur-md border border-[#C8A253]/40 shadow-[0_12px_35px_rgba(91,20,29,0.35)]">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => triggerHaptic(10)}
              className={`flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                active
                  ? 'bg-[#C8A253] text-[#5B141D] font-semibold shadow-sm'
                  : 'text-[#FAF7F2]/80 hover:text-[#DFBE76]'
              } ${lang === 'hi' ? 'font-devanagari' : ''}`}
            >
              <Icon size={15} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/* ============================================================================
   MAIN APP COMPONENT
   ============================================================================ */
export default function App() {
  const [lang, setLang] = useState('hi');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [confettiCount, setConfettiCount] = useState(0);
  const [showerCount, setShowerCount] = useState(0);
  const [heroRevealed, setHeroRevealed] = useState(false);

  const { guestName, isHostMode } = useUrlParams();
  const { isPlaying, startAudio, toggleAudio, externalAudioRef } = useWeddingAudio();

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(top);
      setScrollProgress(height > 0 ? Math.min(100, (top / height) * 100) : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['home', 'message', 'couple', 'events'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -45% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleUnlock = () => {
    startAudio();
    setTimeout(() => {
      setConfettiCount((c) => c + 1);
    }, 2600);
  };

  const t = WEDDING_DATA.translations[lang];

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#22201E] selection:bg-[#C8A253]/30 selection:text-[#5B141D] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Noto+Serif+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Rozha+One&display=swap');

        html { scroll-behavior: smooth; font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-editorial { font-family: 'Cormorant Garamond', serif; }
        .font-hindi-display { font-family: 'Rozha One', serif; }
        .font-devanagari { font-family: 'Noto Serif Devanagari', serif; }

        .gold-shimmer-text {
          background: linear-gradient(110deg, #5B141D 18%, #C8A253 45%, #8F6B24 55%, #5B141D 82%);
          background-size: 240% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmerGold 6s linear infinite;
        }

        @keyframes shimmerGold {
          0% { background-position: 120% 0; }
          100% { background-position: -120% 0; }
        }

        @keyframes nameFill {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
        }
        .animate-name-fill {
          animation: nameFill 1.95s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes loaderBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loader-bar {
          animation: loaderBar 2.05s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes sheenSweep {
          0% { transform: translateX(-140%) skewX(-20deg); }
          45%, 100% { transform: translateX(220%) skewX(-20deg); }
        }
        .animate-sheen-sweep {
          animation: sheenSweep 3.4s ease-in-out infinite;
        }

        @keyframes pingSlow {
          0% { transform: scale(0.95); opacity: 0.7; }
          70%, 100% { transform: scale(1.22); opacity: 0; }
        }
        .animate-ping-slow {
          animation: pingSlow 2.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes shockwave {
          0% { transform: scale(0.9); opacity: 0.9; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        .animate-shockwave-1 {
          animation: shockwave 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-shockwave-2 {
          animation: shockwave 0.75s 0.12s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes petalFall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.45; }
          85% { opacity: 0.35; }
          100% { transform: translateY(110vh) translateX(40px) rotate(320deg); opacity: 0; }
        }
        .animate-petal-fall {
          animation: petalFall linear infinite;
        }

        @keyframes bokehRise {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          25% { opacity: 0.85; }
          80% { opacity: 0.45; }
          100% { transform: translateY(-85vh) scale(1.25); opacity: 0; }
        }
        .animate-bokeh-rise {
          animation: bokehRise linear infinite;
        }

        @keyframes toranSway {
          0%, 100% { transform: rotate(-1.4deg); }
          50% { transform: rotate(1.4deg); }
        }
        .animate-toran-sway {
          animation: toranSway 4.2s ease-in-out infinite;
        }

        @keyframes diyaFlicker {
          0%, 100% { transform: scaleY(1) scaleX(1) rotate(-1.5deg); opacity: 0.95; }
          35% { transform: scaleY(1.08) scaleX(0.95) rotate(2deg); opacity: 1; }
          70% { transform: scaleY(0.94) scaleX(1.04) rotate(-1deg); opacity: 0.9; }
        }
        .animate-diya-flicker {
          animation: diyaFlicker 1.9s ease-in-out infinite;
        }

        @keyframes diyaGlow {
          0%, 100% { opacity: 0.55; transform: scale(0.92); }
          50% { opacity: 0.95; transform: scale(1.12); }
        }
        .animate-diya-glow {
          animation: diyaGlow 2.2s ease-in-out infinite;
        }

        @keyframes tapSparkle {
          0% { transform: translate(-50%, -50%) scale(0.2) rotate(0deg); opacity: 1; }
          100% { transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1.1) rotate(90deg); opacity: 0; }
        }
        .animate-tap-sparkle {
          animation: tapSparkle 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes splitFlap {
          0% { transform: rotateX(-72deg); opacity: 0.35; }
          65% { transform: rotateX(10deg); opacity: 1; }
          100% { transform: rotateX(0deg); opacity: 1; }
        }
        .animate-split-flap {
          transform-origin: center;
          animation: splitFlap 0.42s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes eqBar {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
        .animate-eq-1 { animation: eqBar 0.65s ease-in-out infinite; }
        .animate-eq-2 { animation: eqBar 0.55s 0.2s ease-in-out infinite; }
        .animate-eq-3 { animation: eqBar 0.7s 0.35s ease-in-out infinite; }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 60s linear infinite;
        }
        .animate-spin-slower-rev {
          animation: spinSlow 75s linear infinite reverse;
        }

        @keyframes langFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-lang-fade {
          animation: langFade 0.45s ease-out;
        }

        @keyframes dashFlow {
          to { stroke-dashoffset: -36; }
        }
        .animate-dash-flow {
          animation: dashFlow 1.6s linear infinite;
        }

        @keyframes carBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-1.8px); }
        }
        .animate-car-bounce {
          animation: carBounce 0.42s ease-in-out infinite;
        }

        @keyframes kandilSwayLeft {
          0%, 100% { transform: rotate(-3.2deg); }
          50% { transform: rotate(3.2deg); }
        }
        .animate-kandil-left {
          animation: kandilSwayLeft 5.2s ease-in-out infinite;
        }

        @keyframes kandilSwayRight {
          0%, 100% { transform: rotate(3.5deg); }
          50% { transform: rotate(-3.5deg); }
        }
        .animate-kandil-right {
          animation: kandilSwayRight 6.4s ease-in-out infinite;
        }

        @keyframes bellRing {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(24deg); }
          35% { transform: rotate(-20deg); }
          55% { transform: rotate(14deg); }
          75% { transform: rotate(-8deg); }
          90% { transform: rotate(4deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-bell-ring {
          animation: bellRing 1.3s ease-out;
        }

        @keyframes bellWave {
          0% { transform: scale(0.5); opacity: 0.9; }
          100% { transform: scale(2.1); opacity: 0; }
        }
        .animate-bell-wave {
          animation: bellWave 0.75s ease-out forwards;
        }

        @keyframes fireflyFloat {
          0% { transform: translate(0px, 0px) scale(0.7); opacity: 0; }
          20% { opacity: 0.95; }
          50% { transform: translate(16px, -75px) scale(1.15); opacity: 0.65; }
          80% { opacity: 0.9; }
          100% { transform: translate(-12px, -165px) scale(0.6); opacity: 0; }
        }
        .animate-firefly-float {
          animation: fireflyFloat ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-petal-fall,
          .animate-bokeh-rise,
          .animate-toran-sway,
          .animate-kandil-left,
          .animate-kandil-right,
          .animate-firefly-float,
          .animate-spin-slow,
          .animate-spin-slower-rev,
          .animate-sheen-sweep,
          .animate-car-bounce,
          .animate-diya-flicker {
            animation: none !important;
          }
          .royal-tilt-card {
            transform: none !important;
          }
        }
      `}</style>

      <audio ref={externalAudioRef} src={WEDDING_DATA.meta.audioUrl} loop />

      <div className="hidden md:block fixed inset-3 z-30 pointer-events-none rounded-2xl border border-[#C8A253]/25" />

      <ScrollGoldenThread activeSection={activeSection} scrollProgress={scrollProgress} />

      <div className="fixed top-0 left-0 right-0 z-40 h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#8C6B23] via-[#DFBE76] to-[#5B141D] transition-[width] duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="fixed top-4 right-4 z-30 flex items-center gap-2">
        <div className="flex items-center p-1 rounded-full bg-white/85 backdrop-blur-md border border-[#C8A253]/40 shadow-md">
          <button
            onClick={() => {
              triggerHaptic(10);
              setLang('hi');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer font-devanagari ${
              lang === 'hi' ? 'bg-[#5B141D] text-[#DFBE76]' : 'text-[#5B141D]/75 hover:text-[#5B141D]'
            }`}
          >
            हिंदी
          </button>
          <button
            onClick={() => {
              triggerHaptic(10);
              setLang('en');
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
              lang === 'en' ? 'bg-[#5B141D] text-[#DFBE76]' : 'text-[#5B141D]/75 hover:text-[#5B141D]'
            }`}
          >
            EN
          </button>
        </div>

        <button
          onClick={() => {
            triggerHaptic([12, 20, 12]);
            setShowerCount((c) => c + 1);
          }}
          title={t.flowerShowerLabel}
          aria-label={t.flowerShowerLabel}
          className="p-2.5 rounded-full bg-white/85 backdrop-blur-md border border-[#C8A253]/40 text-[#D97706] shadow-md hover:bg-[#5B141D] hover:text-[#FBBF24] active:scale-90 transition cursor-pointer"
        >
          <Flower2 size={16} />
        </button>

        <button
          onClick={toggleAudio}
          aria-label="Toggle Background Music"
          className="p-2.5 rounded-full bg-white/85 backdrop-blur-md border border-[#C8A253]/40 text-[#5B141D] shadow-md hover:bg-[#5B141D] hover:text-[#DFBE76] transition cursor-pointer"
        >
          <MusicEqualizer isPlaying={isPlaying} />
        </button>
      </div>

      <CelebrationCanvas confettiTrigger={confettiCount} showerTrigger={showerCount} />
      <TapSparkleLayer />
      <AmbientLayer />

      <MonogramPreloader
        lang={lang}
        guestName={guestName}
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
        onUnlock={handleUnlock}
        onCurtainLift={() => setHeroRevealed(true)}
      />

      <main>
        <HeroSection
          lang={lang}
          guestName={guestName}
          scrollY={scrollY}
          revealed={heroRevealed}
        />
        <BlessingMessageSection lang={lang} />
        <CoupleSection lang={lang} />
        <EventsSection lang={lang} />
      </main>

      <FooterSection lang={lang} />

      <HostLinkGenerator isHostMode={isHostMode} lang={lang} />

      <FloatingDock lang={lang} activeSection={activeSection} />
    </div>
  );
}
