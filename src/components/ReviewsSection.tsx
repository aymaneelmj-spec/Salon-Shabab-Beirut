import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: "Ahmed Al Dosari",
    text: "Exceptional service from start to finish. The atmosphere is luxurious, the barbers are highly skilled, and the attention to detail is outstanding.",
    time: "2 months ago",
    stars: 5
  },
  {
    name: "Mohammed Al Khalifa",
    text: "One of the cleanest and most professional barber shops in Bahrain. Booking through WhatsApp was very easy and the haircut was perfect.",
    time: "3 weeks ago",
    stars: 5
  },
  {
    name: "Yousef Al Zayani",
    text: "Honestly the best fade I've had in years. The team is respectful, fast, and very professional. Definitely coming back again.",
    time: "a month ago",
    stars: 5
  },
  {
    name: "Khalid Al Mannai",
    text: "Luxury atmosphere and excellent customer service. The barber understood exactly what I wanted and delivered beyond expectations.",
    time: "2 weeks ago",
    stars: 5
  },
  {
    name: "Omar Al Hayki",
    text: "Very classy place with experienced barbers. Clean tools, modern style, and great hospitality. Highly recommended in Bahrain.",
    time: "4 months ago",
    stars: 5
  },
  {
    name: "Abdullah Al Noaimi",
    text: "I tried many barber shops in Bahrain and this one stands out. Professional staff and premium quality service.",
    time: "5 months ago",
    stars: 5
  },
  {
    name: "Faisal Al Rumaihi",
    text: "Amazing beard trim and haircut. The barber was patient and very precise with details. Great experience overall.",
    time: "a month ago",
    stars: 5
  },
  {
    name: "Rakan Al Isa",
    text: "The interior design is beautiful and relaxing. Staff are friendly and the service feels premium from the moment you enter.",
    time: "3 months ago",
    stars: 5
  },
  {
    name: "Majed Al Sayed",
    text: "Professional team and excellent hygiene standards. Easily one of the top barber shops in the country.",
    time: "2 months ago",
    stars: 5
  },
  {
    name: "Saud Al Jassim",
    text: "Perfect haircut exactly how I requested. Fast service, clean environment, and very respectful employees.",
    time: "3 weeks ago",
    stars: 5
  },
  {
    name: "Nawaf Al Buainain",
    text: "The attention to detail here is incredible. Every visit has been consistent and professional.",
    time: "a month ago",
    stars: 5
  },
  {
    name: "Fahad Al Dossari",
    text: "Great experience for both haircut and beard styling. The atmosphere feels modern and upscale.",
    time: "2 months ago",
    stars: 5
  },
  {
    name: "Tariq Al Shaikh",
    text: "Very professional staff and excellent service quality. Booking was smooth and the haircut exceeded expectations.",
    time: "4 weeks ago",
    stars: 5
  },
  {
    name: "Bandar Al Hamdan",
    text: "Excellent customer care and skilled barbers. You can tell they truly care about quality and customer satisfaction.",
    time: "3 months ago",
    stars: 5
  },
  {
    name: "Ziad Al Ansari",
    text: "Top-tier barber shop with clean equipment and talented barbers. Highly recommended for anyone looking for a premium cut.",
    time: "2 weeks ago",
    stars: 5
  },
  {
    name: "Hassan Al Ghanem",
    text: "The service was fast, professional, and very welcoming. Definitely worth visiting again.",
    time: "a month ago",
    stars: 5
  },
  {
    name: "Mansour Al Amer",
    text: "Beautiful atmosphere and very talented barbers. One of the few places that consistently delivers high quality.",
    time: "5 months ago",
    stars: 5
  },
  {
    name: "Salem Al Khater",
    text: "Excellent fade and beard line-up. The barber paid attention to every detail and the result was perfect.",
    time: "2 months ago",
    stars: 5
  }
];

const GOLD = '#c9a84c';
const GOLD_DARK = '#9a7a30';

const COLORS = [
  [GOLD,       '#0a0a0b'],
  ['#2d4a3e',  '#e8c96d'],
  ['#1d2a40',  '#c9a84c'],
  ['#3a2a10',  '#e8c96d'],
  ['#2a1a10',  '#c9a84c'],
  ['#1a2a35',  '#e8c96d'],
  ['#2a2a12',  '#c9a84c'],
  ['#1a1a2a',  '#e8c96d'],
  ['#2a1a2a',  '#c9a84c'],
  ['#1a2a1a',  '#e8c96d'],
];

function initials(name: string) {
  return name.split(' ').slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
}

export default function ReviewsSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d0c0a 0%, #111109 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-widest uppercase">
            {isRTL ? 'تقييمات جوجل' : 'Google Reviews'}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xl tracking-wider" style={{ color: GOLD }}>★★★★★</span>
            <span className="text-zinc-400 text-sm">198 Google reviews</span>
            <span className="font-bold text-2xl" style={{ color: GOLD }}>5.0</span>
            <span className="font-black text-lg" style={{ color: '#4285f4' }}>G</span>
          </div>
          <div className="w-20 h-[2px] mx-auto rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        </motion.div>
      </div>

      <div className="relative" dir="ltr">
        <button
          onClick={() => scroll(-1)}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border transition-colors shadow-lg"
          style={{ background: '#111', borderColor: `rgba(201,168,76,0.3)`, color: GOLD }}
          aria-label="Previous">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border transition-colors shadow-lg"
          style={{ background: '#111', borderColor: `rgba(201,168,76,0.3)`, color: GOLD }}
          aria-label="Next">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 md:px-16 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          {reviews.map((r, i) => {
            const [bg, fg] = COLORS[i % COLORS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
                className="flex-none w-[80vw] sm:w-72 md:w-80 rounded-2xl p-5 flex flex-col gap-3 transition-colors"
                style={{
                  background: 'rgba(18,16,10,0.95)',
                  border: `1px solid rgba(201,168,76,0.15)`,
                  boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
                  scrollSnapAlign: 'start',
                }}>
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0"
                    style={{ background: bg, color: fg, border: `2px solid rgba(201,168,76,0.3)` }}>
                    {initials(r.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{r.name}</p>
                    <p className="text-zinc-500 text-xs">{r.time}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="text-sm tracking-wider" style={{ color: GOLD }}>{'★'.repeat(r.stars)}</div>
                {/* Text */}
                <p className="text-zinc-300 text-sm leading-relaxed flex-1">{r.text}</p>
                {/* Badge */}
                <div className="flex items-center gap-1.5 pt-2"
                  style={{ borderTop: `1px solid rgba(201,168,76,0.08)` }}>
                  <span className="font-black text-xs"
                    style={{ background: 'linear-gradient(135deg,#4285f4,#34a853,#fbbc05,#ea4335)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>G</span>
                  <span className="text-zinc-600 text-xs">Posted on Google Maps</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-zinc-600 text-xs mt-1 md:hidden tracking-widest">
          {isRTL ? '← اسحب للتصفح →' : '← swipe to browse →'}
        </p>
      </div>
    </section>
  );
}