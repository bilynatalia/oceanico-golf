<script>
  import CourseCard from "./CourseCard.svelte";

  const courses = [
    {
      image:
        "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=800&auto=format&fit=crop",
      title: "Victoria Clube de Golfe",
      subtitle: "Championship Course",
      description:
        "Designed by Arnold Palmer, this course stands as one of the best in Europe, hosting the Portugal Masters.",
      href: "/courses/victoria/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=800&auto=format&fit=crop",
      title: "The Old Course",
      subtitle: "The Grande Dame",
      description:
        "Situated in the heart of Vilamoura, the Old Course is comparable to the great heathland courses of the UK.",
      href: "/courses/old-course/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=800&auto=format&fit=crop",
      title: "Pinhal Clube de Golfe",
      subtitle: "Strategy & Precision",
      description:
        "Characterized by rolling parkland terrain covered with umbrella pines, presenting a challenge for all golfers.",
      href: "/courses/pinhal/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=800&auto=format&fit=crop",
      title: "Millennium Clube",
      subtitle: "Open & Inviting",
      description:
        "A more open course than its neighbors, Millennium offers space but requires accuracy to avoid the lakes.",
      href: "/courses/millennium/",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600791447714-04d1c9780adf?q=80&w=800&auto=format&fit=crop",
      title: "Laguna Clube de Golfe",
      subtitle: "Unique Links Style",
      description:
        "Distinctly different, Laguna is located on low-lying coastal terrain, featuring many water hazards.",
      href: "/courses/laguna/",
    },
  ];
</script>

<section id="courses" class="py-20 bg-oceanico-light">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="font-serif text-4xl md:text-5xl text-oceanico-green font-bold">
        Our Courses
      </h2>
      <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
        Experience diversity in design and challenge across our five distinct
        locations.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each courses as course}
        <CourseCard {...course} />
      {/each}
    </div>
  </div>
</section>
