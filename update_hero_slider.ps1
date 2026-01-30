
$sourcePath = "C:/Users/Dizzo/.gemini/antigravity/brain/fe87bc82-5887-4d88-b2d3-570593c3bf76"
$destPath = "C:/Users/Dizzo/Documents/hems/public/assets"

Copy-Item "$sourcePath/uploaded_media_0_1769780464027.jpg" -Destination "$destPath/hero-slider-1.jpg" -Force
Copy-Item "$sourcePath/uploaded_media_2_1769780464027.jpg" -Destination "$destPath/hero-slider-2.jpg" -Force
Copy-Item "$sourcePath/uploaded_media_1_1769780464027.jpg" -Destination "$destPath/hero-slider-3.jpg" -Force
