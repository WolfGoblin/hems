
$sourcePath = "C:/Users/Dizzo/.gemini/antigravity/brain/fe87bc82-5887-4d88-b2d3-570593c3bf76"
$destPath = "C:/Users/Dizzo/Documents/hems/public/assets"

$uploadedFiles = @(
    "uploaded_image_0_1769123037579.jpg",
    "uploaded_image_1_1769123037579.jpg",
    "uploaded_image_2_1769123037579.jpg",
    "uploaded_image_3_1769123037579.jpg",
    "uploaded_image_4_1769123037579.jpg"
)

$i = 1
foreach ($file in $uploadedFiles) {
    Copy-Item "$sourcePath/$file" -Destination "$destPath/gallery-new-$i.jpg" -Force
    $i++
}
