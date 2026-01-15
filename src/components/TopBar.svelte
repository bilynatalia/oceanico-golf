<script>
  import { Gift } from 'lucide-svelte';
</script>

<div class="bg-oceanico-green text-white text-xs py-2 border-b border-oceanico-gold/30">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <div class="hidden md:flex space-x-4">
      <a href="/subscribers/" class="hover:text-oceanico-gold transition">SUBSCRIBERS</a>
      <span class="text-oceanico-gold">|</span>
      <a href="/agents/" class="hover:text-oceanico-gold transition">AGENTS</a>
    </div>
    <div class="flex items-center space-x-4 ml-auto">
      <a href="/gift-vouchers/" class="flex items-center hover:text-oceanico-gold transition">
        <Gift class="h-3 w-3 mr-1" />
        GIFT VOUCHERS
      </a>
      <div class="flex items-center space-x-2">
        <span class="text-oceanico-gold font-bold">PT</span>
        <span>EN</span>
      </div>
    </div>
  </div>
</div>
