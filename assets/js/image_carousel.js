var currentImage = 0;

function bounds_check(n)
{
	var numImages = document.getElementsByClassName("images").length;
	if (n >= numImages)
	{
		n = 0;
	}
	if (n < 0)
	{
		n = numImages - 1;
	}
	return n;
}

function scroll_to_image(n)
{
	var cluster = document.getElementById("thumb_clicker");
	var thumbs = document.getElementsByClassName("thumbs");

	// Scroll to the correct image
	var imageIndex = bounds_check(n);
	var currentWidth = thumbs[imageIndex].clientWidth;
	var currentOffset = thumbs[imageIndex].offsetLeft;
	var containerOffset = cluster.offsetLeft;
	var containerWidth = cluster.clientWidth;
	cluster.scrollLeft = currentOffset - containerOffset - (containerWidth / 2) + (currentWidth / 2);
}

function change_image(n)
{
	var imageIndex = bounds_check(n);
	var cluster = document.getElementById("thumb_clicker");
	var thumbs = document.getElementsByClassName("thumbs");
	var images = document.getElementsByClassName("images");
	var numImages = images.length;

	// Deactivate images and thumbnails. Highlight correct thumbnail.
	for (var i = 0; i < numImages; i++)
	{
		thumbs[i].className = "thumbs inactive";
		images[i].className = "images hidden";
	}
	thumbs[imageIndex].className = "thumbs active";
	images[imageIndex].className = "images";

	// Set the new current image
	currentImage = imageIndex;
}

function rotate_image(n)
{
	change_image(currentImage + n);
	scroll_to_image(currentImage);
}
