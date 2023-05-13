function onClickAccordion(id) {
    const article = document.getElementById(id);
    if (article.dataset.expanded === "+") {
        article.dataset.expanded = "-";
    } else {
        article.dataset.expanded = "+";
    }
    //article.dataset.expanded = article.dataset.expanded === "+" ? "-" : "+";
}