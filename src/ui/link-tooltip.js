function showLinkTooltip() {
    console.log('showing link tooltip...');

    linkTooltip = document.createElement('div');
    linkTooltip.setAttribute('class', 'cmg-link-tooltip');
    linkTooltip.setAttribute('style', `left: 0px; top: 0px;max-width: ${configs.circleRadius * 2}px;z-index: 99999; font-size: 13.5px;opacity: 0.0; align-items: center;display:inline-block !important; position: absolute !important;background: ${typeOfMenu == 'link-menu' ? linkSegmentColor : typeOfMenu == 'image-menu' ? imageSegmentColor : regularSegmentColor}; border-radius: 9px;color: white; text-align: center; padding: 6px; pointer-events: none;`);

    let label = document.createElement('span');
    // label.innerHTML = typeOfMenu == 'link-menu' ? chrome.i18n.getMessage('Link') : chrome.i18n.getMessage('Image');
    label.innerHTML = typeOfMenu == 'link-menu' ?
        configs.showLinkTextInTooltip && hoveredLinkTitle !== null && hoveredLinkTitle !== hoveredLink && hoveredLinkTitle !== hoveredLink.replaceAll('http://', '') ? (hoveredLinkTitle.length > 24 ? hoveredLinkTitle.substring(0, 24) + '...' : hoveredLinkTitle)
            :
            chrome.i18n.getMessage('link')
        : typeOfMenu == 'image-menu' ? chrome.i18n.getMessage('image')
            : chrome.i18n.getMessage('page');

    label.innerHTML += '<br />';
    label.setAttribute('style', 'color: rgba(256,256,256,0.7); vertical-align: middle;');
    linkTooltip.appendChild(label);


    let text = document.createElement('span');

    if (typeOfMenu == 'image-menu') {
        let fileName;
        try {
            fileName = hoveredLink.split('#').shift().split('?').shift().split('/').pop();
        } catch (e) { console.log(e); }
        text.innerHTML = fileName !== null && fileName !== undefined ? fileName : configs.showFullLinkInTooltip ? hoveredLink : hoveredLink.substring(0, 26);
    } else {
        text.innerHTML = configs.showFullLinkInTooltip ? hoveredLink : hoveredLink.substring(0, 26)
    }

    text.setAttribute('style', `word-break:break-all;text-decoration: underline;`);
    linkTooltip.appendChild(text);

    if (configs.showFullLinkInTooltip == false) {
        let threeDots = document.createElement('span');
        threeDots.innerHTML = '...';
        linkTooltip.appendChild(threeDots);
    }

    document.body.appendChild(linkTooltip);

    // let dxToShow = leftCoord + configs.circleRadius - (linkTooltip.clientWidth / 2);
    let dxToShow = leftCoord + (canvasRadius / 2) - (linkTooltip.clientWidth / 2);
    let dyToShow = topCoord - (linkTooltip.clientHeight) - 15;

    linkTooltip.style.transform = `translate(${dxToShow}px, ${topCoord + configs.circleRadius - (linkTooltip.clientHeight / 2)}px)`;

    setTimeout(function () {
        linkTooltip.style.transition = `transform ${configs.animationDuration}ms ease-in-out, opacity ${configs.animationDuration}ms ease-in-out`;
        linkTooltip.style.transform = `translate(${dxToShow}px, ${dyToShow}px)`;
        linkTooltip.style.opacity = configs.linkTooltipOpacity;
    }, 1);
}

function hideLinkTooltip() {
    if (linkTooltip == null) return;

    // let dxShown = leftCoord + configs.circleRadius - (linkTooltip.clientWidth / 2);
    let dxShown = leftCoord + (canvasRadius / 2) - (linkTooltip.clientWidth / 2);
    linkTooltip.style.transform = `translate(${dxShown}px, ${topCoord + configs.circleRadius - (linkTooltip.clientHeight / 2)}px)`;
    linkTooltip.style.opacity = `0.0`;
    setTimeout(function () {
        linkTooltip.parentNode.removeChild(linkTooltip);
        linkTooltip = null;
    }, 200);
}