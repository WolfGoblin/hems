
mkdir public\assets -ErrorAction SilentlyContinue

$basePath = "C:/Users/Dizzo/.gemini/antigravity/brain/fe87bc82-5887-4d88-b2d3-570593c3bf76"
$files = @(
    "uploaded_image_0_1769119992317.jpg",
    "uploaded_image_1_1769119992317.jpg",
    "uploaded_image_2_1769119992317.jpg",
    "uploaded_image_3_1769119992317.jpg",
    "uploaded_image_4_1769119992317.jpg"
)

# Copy all files to assets with simple names for now
$i = 0
foreach ($f in $files) {
    Copy-Item "$basePath/$f" -Destination "public/assets/image-$i.jpg"
    $i++
}
