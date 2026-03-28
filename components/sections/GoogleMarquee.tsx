"use client";

import { siteConfig } from "@/config/site";

// ── Types ─────────────────────────────────────────────────────────────────────

interface GoogleReview {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
}

// ── Review data ───────────────────────────────────────────────────────────────

const reviewsRow1: GoogleReview[] = [
  {
    id: "1",
    name: "Estrella Pereira",
    initials: "EP",
    rating: 5,
    text: "Love this gym! The people, tha ambiance, the machines and the music 💪🏼",
  },
  {
    id: "2",
    name: "Andrea Ab",
    initials: "YM",
    rating: 5,
    text: "Excelente gimnasio en North Bay Village con una vista espectacular que realmente motiva a entrenar. " +
    "Lo mejor, sin dudas, es la comunidad: gente respetuosa, buen clima y un ambiente que te hace sentir cómodo desde el primer día. " +
    "Está abierto 24/7, ideal para quienes entrenamos fuera de horarios tradicionales, y además cuenta con parking gratuito, algo clave en Miami. " +
    "Equipamiento completo, buena energía y una ubicación privilegiada. " +
    "Totalmente recomendado si buscás constancia, comodidad y un entorno inspirador para entrenar.",
  },
  {
    id: "3",
    name: "James Lindsey",
    initials: "JL",
    rating: 5,
    text: "Literally my favorite gym. Thank you for being 24hours when practically no other gym is around here. It’s so important.",
  },
  {
    id: "4",
    name: "Azucena Flores",
    initials: "AF",
    rating: 5,
    text: "Excelente ubicación " +
    "Excelentes máquinas! " +
    "Muy buena atención ",
  },
  {
    id: "9",
    name: "Yrina Albarracin",
    initials: "YA",
    rating: 5,
    text: "Muy buen ambiente, con todas las máquinas que necesitas para meterle power a tu emtrenaniento. Su dueña es muy agradable, y los encargados también. Definitivamente 5⭐",
  },
  {
    id: "10",
    name: "Dagoberto González",
    initials: "DG",
    rating: 5,
    text: "Excelente atención, buenas condiciones, la vista al océano mientras ejercitas…no tiene comparación! Excelente gym!",
  },
  {
    id: "11",
    name: "Miguel Martinez",
    initials: "MM",
    rating: 5,
    text: "Leaving YOUFIT to come here was the best thing I did.Good energy,literally feels like family here.",
  },
];

const reviewsRow2: GoogleReview[] = [
  {
    id: "5",
    name: "Francesca Sanna",
    initials: "FS",
    rating: 5,
    text: "I really love the vibe and the energy everyone give to the place! The view is something amazing! Nico and Jack are really professional and helpful!!!",
  },
  {
    id: "6",
    name: "Juan Jose Beltrán Perez",
    initials: "JP",
    rating: 5,
    text: "Excelente lugar mi casa de entrenamiento, los muchachos encargados amables y atentos!",
  },
  {
    id: "7",
    name: "Christian Alvarez",
    initials: "CA",
    rating: 5,
    text: "Muy increíble super me da gusto estoy contento",
  },
  {
    id: "8",
    name: "Katy Savany",
    initials: "KS",
    rating: 5,
    text: "I love this little gym, it’s close to my house so no excuses anymore. Even tho it’s quite small, it has everything you need and more. Come and get your abs on😄",
  },
  {
    id: "12",
    name: "Tony Hai",
    initials: "TH",
    rating: 5,
    text: "Great cozy club with a fantastic view.   Great personal trainers.   Owners are very nice and hospitable.  Not too busy.  And all the cardio & weight training equipment that you need.",
  },
  {
    id: "13",
    name: "Magali Robotti",
    initials: "MR",
    rating: 5,
    text: "Excelente gimnasio! Los aparatos, su ubicación y la calidez de Pablo su dueño. Lo recomiendo sin dudas!!",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function GoogleLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
      role="img"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill={i < rating ? "#FBBC04" : "#E5E7EB"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold bg-accent/15 text-accent"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article
      className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-border bg-surface p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_14px_rgba(0,0,0,0.04)] sm:w-[320px]"
      aria-label={`Review by ${review.name}`}
    >
      <div className="mb-3 flex items-center justify-between gap-4">
        <StarRating rating={review.rating} />
        <GoogleLogo />
      </div>

      <p className="mb-4 line-clamp-4 flex-1 text-sm leading-relaxed text-text-secondary">
        &ldquo;{review.text}&rdquo;
      </p>

      <div className="mb-3 h-px bg-border" aria-hidden="true" />

      <div className="flex items-center gap-3">
        <Avatar initials={review.initials} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-text-primary">{review.name}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeTrack({
  reviews,
  direction,
}: {
  reviews: GoogleReview[];
  direction: "rtl" | "ltr";
}) {
  return (
    <div className="relative w-full overflow-hidden py-3">
      <div
        className={`flex w-max min-w-max gap-5 pr-5 will-change-transform ${
          direction === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr"
        }`}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <ReviewCard key={`${review.id}-${index}`} review={review} />
        ))}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function GoogleMarquee() {
  const { name, location, rating, reviewCount } = siteConfig;

  return (
    <section
      id="google-reviews"
      className="relative w-full overflow-hidden bg-background py-16 md:py-20 border-y border-border"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <span className="font-display text-accent text-lg tracking-[0.3em] uppercase mb-2">
          Member Reviews
        </span>
        <h2 className="font-display mt-4 text-3xl uppercase tracking-wide text-text-primary sm:text-4xl md:text-5xl">
          Trusted by Members in {location}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          See why members choose {name} to crush their fitness goals — straight from Google Reviews.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-2.5 shadow-sm">
          <GoogleLogo />
          <div className="flex items-center gap-1.5">
            <StarRating rating={Math.round(rating)} />
            <span className="text-sm font-bold text-text-primary">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-text-muted">{reviewCount}+ reviews</span>
        </div>
      </div>

      <div className="mt-10 w-full">
        <MarqueeTrack reviews={reviewsRow1} direction="rtl" />
      </div>

      <div className="w-full">
        <MarqueeTrack reviews={reviewsRow2} direction="ltr" />
      </div>
    </section>
  );
}
