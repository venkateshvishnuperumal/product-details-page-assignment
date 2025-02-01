<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Product Details Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background: #eaeaea;
            padding: 4px;
            border-radius: 4px;
            font-family: "Courier New", monospace;
        }
        pre {
            background: #eaeaea;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        .container {
            max-width: 800px;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Product Details Page with Carousel, Thumbnails, and API Integration</h1>

    <h2>Project Overview</h2>
    <p>This project is a <strong>product details page</strong> for an e-commerce website. It features:</p>
    <ul>
        <li>A <strong>carousel with thumbnails</strong> to view product images.</li>
        <li><strong>API integration</strong> to fetch product images dynamically.</li>
        <li>A <strong>product information section</strong> with details, a quantity selector, and an "Add to Cart" button.</li>
        <li>A <strong>fully responsive design</strong> optimized for mobile and desktop views.</li>
    </ul>

    <h2>Tech Stack</h2>
    <ul>
        <li><strong>HTML</strong> – Structure of the page</li>
        <li><strong>CSS</strong> – Styling and layout</li>
        <li><strong>JavaScript (Vanilla JS)</strong> – Functionality and API integration</li>
    </ul>

    <h2>Features</h2>
    <ul>
        <li>✅ <strong>Image Carousel:</strong> Fetches images from an API and allows users to navigate through thumbnails.</li>
        <li>✅ <strong>API Integration:</strong> Uses <strong>Unsplash API</strong> or <strong>Lorem Picsum API</strong> to dynamically load images.</li>
        <li>✅ <strong>Product Details Section:</strong> Displays product name, price, description, and variant selector.</li>
        <li>✅ <strong>Add to Cart:</strong> Includes a button that confirms the product is added to the cart.</li>
        <li>✅ <strong>Mobile Responsive:</strong> Adapts for smaller screens with touch/swipe functionality.</li>
    </ul>

    <h2>Installation & Setup</h2>
    <p><strong>1. Clone the Repository:</strong></p>
    <pre><code>git clone https://github.com/venkateshvishnuperumal/product-details-page-assignment.git</code></pre>

    <p><strong>2. Navigate to the Project Directory:</strong></p>
    <pre><code>cd product-details-page-assignment</code></pre>

    <p><strong>3. Open <code>index.html</code> in a Browser:</strong></p>
    <p>Simply open the file in your preferred browser—no server required.</p>

    <h2>API Integration</h2>
    <p>The project fetches images using the Unsplash or Lorem Picsum API.</p>
    <p><strong>Example API call:</strong></p>
    <pre><code>fetch('https://api.unsplash.com/photos/random?count=5&query=products&client_id=YOUR_ACCESS_KEY')</code></pre>
    <p>Update the API key if using <strong>Unsplash</strong>.</p>

</div>

</body>
</html>
