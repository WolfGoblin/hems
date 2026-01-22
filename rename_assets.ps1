
$path = "C:\Users\Dizzo\Documents\hems\public\assets"

# Rename files if they exist
if (Test-Path "$path\image-0.jpg") { Rename-Item "$path\image-0.jpg" "hems-logo.jpg" }
if (Test-Path "$path\image-1.jpg") { Rename-Item "$path\image-1.jpg" "slide-1.jpg" }
if (Test-Path "$path\image-2.jpg") { Rename-Item "$path\image-2.jpg" "slide-2.jpg" }
if (Test-Path "$path\image-3.jpg") { Rename-Item "$path\image-3.jpg" "slide-3.jpg" }
if (Test-Path "$path\image-4.jpg") { Rename-Item "$path\image-4.jpg" "partner-1.jpg" }
