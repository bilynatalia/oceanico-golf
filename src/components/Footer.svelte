<script>
  import {
    FlagTriangleRight,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    MapPin,
    Phone,
    Mail,
  } from "lucide-svelte";

  const quickLinks = [
    { name: "Our Accommodation", href: "/our-accommodation/" },
    { name: "Events", href: "/private-parties-and-events-in-the-algarve/" },
    { name: "Tournaments", href: "/tournaments/" },
    { name: "Gift Vouchers", href: "/gift-vouchers/" },
    { name: "Subscribers Area", href: "/subscribers/" },
    { name: "Agents Portal", href: "/agents/" },
  ];

  const courses = [
    { name: "Victoria", href: "/courses/victoria/" },
    { name: "The Old Course", href: "/courses/old-course/" },
    { name: "Pinhal", href: "/courses/pinhal/" },
    { name: "Millennium", href: "/courses/millennium/" },
    { name: "Laguna", href: "/courses/laguna/" },
  ];
</script>

<footer
  id="contact"
  class="bg-oceanico-green text-white pt-20 pb-10 border-t-8 border-oceanico-gold"
>
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <!-- Brand -->
      <div>
        <div class="flex items-center mb-6">
          <FlagTriangleRight
            class="h-8 w-8 text-oceanico-gold mr-2 fill-current"
          />
          <div>
            <h2 class="font-serif text-2xl font-bold tracking-wide">
              OCEANICO
            </h2>
            <p class="text-xs tracking-[0.3em] text-oceanico-gold uppercase">
              Golf
            </p>
          </div>
        </div>
        <p class="text-gray-300 text-sm leading-relaxed mb-6">
          The ultimate golfing destination in Europe, offering five championship
          courses in Vilamoura. Experience the tradition.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-oceanico-gold"
            ><Facebook class="h-5 w-5" /></a
          >
          <a href="#" class="text-white hover:text-oceanico-gold"
            ><Twitter class="h-5 w-5" /></a
          >
          <a href="#" class="text-white hover:text-oceanico-gold"
            ><Instagram class="h-5 w-5" /></a
          >
          <a href="#" class="text-white hover:text-oceanico-gold"
            ><Youtube class="h-5 w-5" /></a
          >
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-oceanico-gold font-serif text-lg font-bold mb-6">
          Quick Links
        </h3>
        <ul class="space-y-3 text-sm text-gray-300">
          {#each quickLinks as link}
            <li>
              <a href={link.href} class="hover:text-white transition"
                >{link.name}</a
              >
            </li>
          {/each}
        </ul>
      </div>

      <!-- Courses -->
      <div>
        <h3 class="text-oceanico-gold font-serif text-lg font-bold mb-6">
          Our Courses
        </h3>
        <ul class="space-y-3 text-sm text-gray-300">
          {#each courses as course}
            <li>
              <a href={course.href} class="hover:text-white transition"
                >{course.name}</a
              >
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-oceanico-gold font-serif text-lg font-bold mb-6">
          Contact Us
        </h3>
        <ul class="space-y-4 text-sm text-gray-300">
          <li class="flex items-start">
            <MapPin class="h-5 w-5 mr-3 text-oceanico-gold flex-shrink-0" />
            <span>Oceanico Golf, Vilamoura<br />Algarve, Portugal</span>
          </li>
          <li class="flex items-center">
            <Phone class="h-5 w-5 mr-3 text-oceanico-gold flex-shrink-0" />
            <span>+351 289 123 456</span>
          </li>
          <li class="flex items-center">
            <Mail class="h-5 w-5 mr-3 text-oceanico-gold flex-shrink-0" />
            <span>info@oceanicogolf.com</span>
          </li>
        </ul>
        <a
          href="/book/"
          class="mt-6 inline-block bg-white text-oceanico-green px-6 py-2 font-bold text-xs uppercase tracking-widest hover:bg-oceanico-gold hover:text-white transition"
        >
          Book Online
        </a>
      </div>
    </div>

    <div
      class="border-t border-white/10 pt-8 text-center text-xs text-gray-400"
    >
      <p>
        &copy; 2026 Oceanico Golf. All Rights Reserved. <a
          href="/privacy/"
          class="hover:text-white">Privacy Policy</a
        >
        | <a href="/terms/" class="hover:text-white">Terms & Conditions</a>
      </p>
    </div>
  </div>
</footer>
