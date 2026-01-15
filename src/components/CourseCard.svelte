<script lang="ts">
  import { ArrowRight } from "lucide-svelte";

  interface Props {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    href?: string;
  }

  let { image, title, subtitle, description, href = "#" }: Props = $props();
</script>

<div
  class="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition duration-500 flex flex-col h-full"
>
  <div class="h-64 overflow-hidden relative">
    <img
      src={image}
      alt={title}
      class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
    />
    <div
      class="absolute inset-0 bg-oceanico-green/0 group-hover:bg-oceanico-green/20 transition duration-500"
    ></div>
  </div>
  <div
    class="p-8 flex-grow flex flex-col justify-between border-b-4 border-transparent group-hover:border-oceanico-gold transition duration-300"
  >
    <div>
      <h3 class="font-serif text-2xl text-oceanico-green font-bold mb-2">
        {title}
      </h3>
      <p class="text-gray-500 text-sm mb-4 italic">{subtitle}</p>
      <p class="text-gray-600 mb-6 line-clamp-3">{description}</p>
    </div>
    <a
      {href}
      class="text-oceanico-gold uppercase text-xs font-bold tracking-widest hover:text-oceanico-green transition flex items-center"
    >
      View Details <ArrowRight class="ml-2 h-4 w-4" />
    </a>
  </div>
</div>
