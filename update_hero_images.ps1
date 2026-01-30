
$sourcePath = "C:/Users/Dizzo/.gemini/antigravity/brain/fe87bc82-5887-4d88-b2d3-570593c3bf76"
$destPath = "C:/Users/Dizzo/Documents/hems/public/assets"

$images = @(
    "uploaded_media_0_1769774089949.jpg",
    "uploaded_media_1_1769774089949.jpg",
    "uploaded_media_2_1769774089949.jpg",
    "uploaded_media_3_1769774089949.jpg"
)

$i = 1
foreach ($img in $images) {
    Copy-Item "$sourcePath/$img" -Destination "$destPath/hero-new-$i.jpg" -Force
    $i++
}
