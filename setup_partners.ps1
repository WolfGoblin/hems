
$sourcePath = "C:/Users/Dizzo/.gemini/antigravity/brain/fe87bc82-5887-4d88-b2d3-570593c3bf76"
$destPath = "C:/Users/Dizzo/Documents/hems/public/assets"

# Move and rename ICZ logo
Copy-Item "$sourcePath/uploaded_image_0_1769122395236.png" -Destination "$destPath/partner-icz.png" -Force

# Move and rename TSCZ logo
Copy-Item "$sourcePath/uploaded_image_1_1769122395236.jpg" -Destination "$destPath/partner-tscz.jpg" -Force
