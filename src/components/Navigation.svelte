<script>
  import { FlagTriangleRight, ChevronDown, Menu, X } from "lucide-svelte";

  let mobileMenuOpen = $state(false);

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  const courses = [
    { name: "Victoria Clube de Golfe", href: "/courses/victoria/" },
    { name: "The Old Course", href: "/courses/old-course/" },
    { name: "Pinhal Clube de Golfe", href: "/courses/pinhal/" },
    { name: "Millennium Clube de Golfe", href: "/courses/millennium/" },
    { name: "Laguna Clube de Golfe", href: "/courses/laguna/" },
  ];
</script>

<nav class="bg-white sticky top-0 z-50 shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-24">
      <!-- Logo Area -->
      <a href="/" class="flex flex-col items-center md:items-start group">
        <div class="flex items-center">
          <div class="text-oceanico-green mr-2">
            <FlagTriangleRight class="h-8 w-8 fill-current" />
          </div>
          <div>
            <h1
              class="font-serif text-2xl md:text-3xl font-bold text-oceanico-green tracking-wide group-hover:text-oceanico-gold transition duration-300"
            >
              OCEANICO
            </h1>
            <p
              class="text-xs tracking-[0.3em] text-oceanico-gold uppercase font-semibold"
            >
              Golf
            </p>
          </div>
        </div>
      </a>

      <!-- Desktop Menu -->
      <div
        class="hidden lg:flex items-center space-x-6 text-sm font-semibold tracking-wide text-oceanico-green"
      >
        <div class="relative group">
          <button class="hover:text-oceanico-gold py-8 flex items-center">
            OUR COURSES <ChevronDown class="h-4 w-4 ml-1" />
          </button>
          <!-- Dropdown -->
          <div
            class="absolute left-0 mt-0 w-64 bg-oceanico-green text-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            {#each courses as course}
              <a
                href={course.href}
                class="block px-6 py-3 hover:bg-oceanico-gold hover:text-white border-b border-white/10"
              >
                {course.name}
              </a>
            {/each}
          </div>
        </div>

        <a
          href="/our-accommodation/"
          class="hover:text-oceanico-gold transition">OUR ACCOMMODATION</a
        >
        <a
          href="/private-parties-and-events-in-the-algarve/"
          class="hover:text-oceanico-gold transition">EVENTS</a
        >
        <a href="/tournaments/" class="hover:text-oceanico-gold transition"
          >TOURNAMENTS</a
        >
        <a href="/contact-us/" class="hover:text-oceanico-gold transition"
          >CONTACT US</a
        >

        <a
          href="/book/"
          class="bg-oceanico-gold text-white px-6 py-3 rounded-sm hover:bg-yellow-600 transition shadow-lg transform hover:-translate-y-0.5"
        >
          BOOK NOW
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        onclick={toggleMobileMenu}
        class="lg:hidden text-oceanico-green focus:outline-none"
      >
        {#if mobileMenuOpen}
          <X class="h-8 w-8" />
        {:else}
          <Menu class="h-8 w-8" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div
      class="lg:hidden bg-oceanico-green text-white border-t border-oceanico-gold"
    >
      <div class="flex flex-col p-6 space-y-4 font-semibold">
        <div class="border-l-4 border-oceanico-gold pl-4">
          <span class="block text-oceanico-gold text-xs mb-2">OUR COURSES</span>
          {#each courses as course}
            <a href={course.href} class="block py-1 hover:text-oceanico-gold"
              >{course.name.split(" ")[0]}</a
            >
          {/each}
        </div>
        <a
          href="/our-accommodation/"
          class="block border-b border-white/10 pb-2 hover:text-oceanico-gold"
          >OUR ACCOMMODATION</a
        >
        <a
          href="/private-parties-and-events-in-the-algarve/"
          class="block border-b border-white/10 pb-2 hover:text-oceanico-gold"
          >EVENTS</a
        >
        <a
          href="/tournaments/"
          class="block border-b border-white/10 pb-2 hover:text-oceanico-gold"
          >TOURNAMENTS</a
        >
        <a
          href="/gift-vouchers/"
          class="block border-b border-white/10 pb-2 hover:text-oceanico-gold"
          >GIFT VOUCHERS</a
        >
        <a
          href="/subscribers/"
          class="block border-b border-white/10 pb-2 hover:text-oceanico-gold"
          >SUBSCRIBERS</a
        >
        <a
          href="/agents/"
          class="block border-b border-white/10 pb-2 hover:text-oceanico-gold"
          >AGENTS</a
        >
        <a
          href="/contact-us/"
          class="block border-b border-white/10 pb-2 hover:text-oceanico-gold"
          >CONTACT US</a
        >
        <a
          href="/book/"
          class="block bg-oceanico-gold text-center py-3 mt-4 text-white uppercase tracking-wider"
          >Book Now</a
        >
      </div>
    </div>
  {/if}
</nav>
