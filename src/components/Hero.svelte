<script lang="ts">
  interface Props {
    tagline?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    primaryCta?: { text: string; href: string };
    secondaryCta?: { text: string; href: string };
  }

  let {
    tagline = "Premier Golfing Experience",
    title = "The Art of",
    subtitle = "The Swing",
    description = "Discover Europe's finest golf courses. Five championship courses, one unforgettable destination.",
    primaryCta = { text: "Explore Courses", href: "#courses" },
    secondaryCta = { text: "Book Tee Time", href: "/book/" },
  }: Props = $props();
</script>

<header
  class="hero-bg h-[85vh] flex items-center justify-center text-center text-white px-4 relative"
>
  <div class="absolute inset-0 bg-black/20"></div>
  <div class="relative z-10 max-w-4xl mx-auto">
    <p
      class="text-oceanico-gold tracking-[0.3em] font-semibold mb-4 text-sm md:text-base animate-fade-in uppercase"
    >
      {tagline}
    </p>
    <h2
      class="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-lg"
    >
      {title} <br /><span class="text-oceanico-gold italic">{subtitle}</span>
    </h2>
    <p
      class="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-gray-100"
    >
      {description}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={primaryCta.href}
        class="border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-oceanico-green transition duration-300 uppercase tracking-widest text-sm font-semibold"
      >
        {primaryCta.text}
      </a>
      <a
        href={secondaryCta.href}
        class="bg-oceanico-gold border-2 border-oceanico-gold text-white px-8 py-3 hover:bg-yellow-600 hover:border-yellow-600 transition duration-300 uppercase tracking-widest text-sm font-semibold"
      >
        {secondaryCta.text}
      </a>
    </div>
  </div>
</header>
