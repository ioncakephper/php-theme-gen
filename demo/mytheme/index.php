<?php
/**
 * The main template file for the MyTheme theme.
 * @package MyTheme
 */
?>
<?php get_header(); ?>

    <main class="container mx-auto px-6 py-12">
        <!-- Hero Section -->
        <section class="text-center mb-16">
            <h1 class="text-5xl font-extrabold text-gray-900 mb-4">Build Your Elegant Website</h1>
            <p class="text-lg text-gray-600 mb-8">A beautiful and responsive starting point for your next project.</p>
            <a href="#" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">Get Started</a>
        </section>

        <!-- Features Section -->
        <section class="mb-16">
            <div class="grid md:grid-cols-3 gap-8 text-center">
                <div class="bg-white p-8 rounded-lg shadow">
                    <div class="text-blue-600 mb-4">
                        <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Modern Design</h3>
                    <p class="text-gray-600">Clean and elegant design built with the latest technologies.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow">
                    <div class="text-blue-600 mb-4">
                        <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Fully Responsive</h3>
                    <p class="text-gray-600">Looks great on any device, from mobile to desktop.</p>
                </div>
                <div class="bg-white p-8 rounded-lg shadow">
                    <div class="text-blue-600 mb-4">
                        <svg class="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Easy to Customize</h3>
                    <p class="text-gray-600">Simple to modify and extend for your own needs.</p>
                </div>
            </div>
        </section>

        <!-- Rich Content Section -->
        <section class="bg-white rounded-lg shadow p-8 md:p-12 mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Discover Our Story</h2>
            <div class="prose max-w-none text-gray-600">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <blockquote class="border-l-4 border-blue-500 pl-4 italic">
                    <p>"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."</p>
                    <cite class="font-bold not-italic">- Steve Jobs</cite>
                </blockquote>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.</p>
                <h3>A Gallery of Moments</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <img src="https://via.placeholder.com/400x300.png/007bff/ffffff?text=Nature" alt="Placeholder Image" class="rounded-lg shadow-sm">
                    <img src="https://via.placeholder.com/400x300.png/28a745/ffffff?text=City" alt="Placeholder Image" class="rounded-lg shadow-sm">
                    <img src="https://via.placeholder.com/400x300.png/ffc107/ffffff?text=People" alt="Placeholder Image" class="rounded-lg shadow-sm">
                    <img src="https://via.placeholder.com/400x300.png/dc3545/ffffff?text=Work" alt="Placeholder Image" class="rounded-lg shadow-sm">
                </div>
            </div>
        </section>
    </main>

    <?php get_footer(); ?>

</body>
</html>
