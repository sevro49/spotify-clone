export const handleScroll = (direction, elementId) => {
    let scrollAmount = 1090;
    const playlists = document.getElementById(elementId);
    const playlistsSectionWidth = playlists.offsetWidth;

    if (playlistsSectionWidth <= 1060) {
        scrollAmount = 880;
    } if (playlistsSectionWidth <= 855) {
        scrollAmount = 660;
    } if (playlistsSectionWidth <= 620) {
        scrollAmount = 440;
    } if (playlistsSectionWidth <= 410) {
        scrollAmount = 220;
    }

    if (direction === "left") {
        playlists.scrollLeft -= scrollAmount;
    } else if (direction === "right") {
        playlists.scrollLeft += scrollAmount;
    }
};

export const handleScrollChange = (elementId, setScrollLeftDisabled, setScrollRightDisabled) => {
    const playlists = document.getElementById(elementId);
    const scrollLeftButton = document.getElementById(`${elementId}-scrollLeft`);
    const scrollRightButton = document.getElementById(`${elementId}-scrollRight`);

    if (playlists.scrollLeft === 0) {
        // Reached the beginning
        setScrollLeftDisabled(true);
        scrollLeftButton.classList.add("opacity-20")
        scrollLeftButton.classList.remove("hover:bg-[#404040]")
    } else if (playlists.scrollLeft >= playlists.scrollWidth - playlists.clientWidth) {
        // Reached the end
        setScrollRightDisabled(true);
        scrollLeftButton.classList.add("hover:bg-[#404040]")
        scrollLeftButton.classList.remove("opacity-20")
        scrollRightButton.classList.add("opacity-20")
        scrollRightButton.classList.remove("hover:bg-[#404040]")
    } else {
        // Enable both buttons
        setScrollLeftDisabled(false);
        setScrollRightDisabled(false);
        scrollLeftButton.classList.remove("opacity-20")
        scrollRightButton.classList.remove("opacity-20")
        scrollLeftButton.classList.add("hover:bg-[#404040]")
        scrollRightButton.classList.add("hover:bg-[#404040]")
    }
};
