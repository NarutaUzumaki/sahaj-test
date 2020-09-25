function hideSlide(slidesVisibleAmount, commentSlides, commentsNextBtn, commentsPrevBtn) {
    var countNext = slidesVisibleAmount - 1;
    var countPrev = 0;

    commentSlides[countNext].classList.add("comment-opacity");

    commentsNextBtn.addEventListener("click", function () {
        commentSlides[countNext].classList.remove("comment-opacity");
        countNext++;
        if (commentSlides.length - 1 >= 4) {
            if (commentSlides[countPrev - 1]) {
                commentSlides[countPrev - 1].classList.remove("comment-opacity");
            }

            commentSlides[countPrev].classList.add("comment-opacity");
            countPrev++;
        }

        if (commentSlides[countNext]) {
            commentSlides[countNext].classList.add("comment-opacity");
        }
    });

    commentsPrevBtn.addEventListener("click", function () {
        if (commentSlides[countNext]) {
            commentSlides[countNext].classList.remove("comment-opacity");
        }

        if (commentSlides.length - 1 < 4) {
            countNext--;
            commentSlides[countNext].classList.add("comment-opacity");
            return;
        }

        if (commentSlides[countPrev]) {
            countPrev--;
            commentSlides[countPrev].classList.remove("comment-opacity");

            if (commentSlides[countPrev - 1]) {
                commentSlides[countPrev - 1].classList.add("comment-opacity");
            }
        }
        countNext--;
        commentSlides[countNext].classList.add("comment-opacity");
    });
}