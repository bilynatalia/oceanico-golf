<script>
  import { BedDouble, Trophy } from "lucide-svelte";
</script>

<section class="grid md:grid-cols-2">
  <!-- Accommodation -->
  <div class="relative h-96 group overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
      class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
      alt="Accommodation"
    />
    <div
      class="absolute inset-0 bg-oceanico-green/80 flex flex-col items-center justify-center text-center p-8 group-hover:bg-oceanico-green/70 transition duration-500"
    >
      <BedDouble class="text-oceanico-gold w-12 h-12 mb-4" />
      <h3 class="font-serif text-3xl text-white font-bold mb-2">
        Our Accommodation
      </h3>
      <p class="text-white/80 max-w-sm mb-6">
        Stay in luxury. From private villas to five-star hotels located directly
        on the course.
      </p>
      <a
        href="/our-accommodation/"
        class="text-oceanico-gold uppercase font-bold tracking-widest border-b border-oceanico-gold pb-1 hover:text-white hover:border-white transition"
        >Discover More</a
      >
    </div>
  </div>

  <!-- Tournaments -->
  <div class="relative h-96 group overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1605142859666-40742d5f8188?q=80&w=1200&auto=format&fit=crop"
      class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
      alt="Tournaments"
    />
    <div
      class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-8 group-hover:bg-black/50 transition duration-500"
    >
      <Trophy class="text-oceanico-gold w-12 h-12 mb-4" />
      <h3 class="font-serif text-3xl text-white font-bold mb-2">
        Events & Tournaments
      </h3>
      <p class="text-white/80 max-w-sm mb-6">
        Compete or host. We organize world-class tournaments and corporate
        events.
      </p>
      <a
        href="/tournaments/"
        class="text-oceanico-gold uppercase font-bold tracking-widest border-b border-oceanico-gold pb-1 hover:text-white hover:border-white transition"
        >View Calendar</a
      >
    </div>
  </div>
</section>
