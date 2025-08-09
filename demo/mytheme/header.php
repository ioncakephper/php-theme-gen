<?php
/**
 * The template for displaying the header.
 * @package MyTheme
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elegant Page with Tailwind CSS</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 text-gray-800 font-sans">

    <header class="bg-white shadow-md">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-gray-900">MyLogo</div>
            <div class="hidden md:flex space-x-6">
                <a href="#" class="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#" class="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
            <div class="md:hidden">
                <button class="text-gray-600 hover:text-gray-900 focus:outline-none">
                    <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    </header>