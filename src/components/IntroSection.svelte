<script lang="ts">
  interface Props {
    subtitle?: string;
    title?: string;
    content?: string;
  }

  let {
    subtitle = "Welcome to Oceanico",
    title = "A Legacy of Excellence",
    content = "Set against the stunning backdrop of the Algarve, Oceanico Golf offers an unparalleled golfing experience. From the legendary Old Course to the challenging Victoria, our portfolio of championship courses caters to players of all levels. Immerse yourself in the tradition, beauty, and challenge of the game.",
  }: Props = $props();
</script>

<section class="py-20 bg-white text-center">
  <div class="container mx-auto px-4 max-w-3xl">
    <h3
      class="text-oceanico-gold uppercase tracking-widest text-sm font-bold mb-3"
    >
      {subtitle}
    </h3>
    <h2 class="font-serif text-4xl text-oceanico-green font-bold mb-6">
      {title}
    </h2>
    <div class="w-20 h-1 bg-oceanico-gold mx-auto mb-8"></div>
    <p class="text-gray-600 leading-relaxed text-lg">
      {content}
    </p>
  </div>
</section>
