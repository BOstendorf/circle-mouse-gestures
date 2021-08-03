function init() {
    loadUserConfigs(function () {
        if (configs.cmgEnabled) {
            setPageListeners();
        }
    })
}

let anyButtonIsSelected = false;
var timerForLongLeftClick;

function setPageListeners() {
    /// Page listeners

    document.addEventListener("contextmenu", function (e) {
        if (e.ctrlKey || leftClickIsHolded) return;
        if (typeOfMenu == '') return;
        if (configs.showRegularMenuIfNoAction && configs.hideCircleIfNoActionSelected == true
            && anyButtonIsSelected == false && circleIsShown == false && fullscreenImageIsOpen == false) {
            return;
        }

        e.preventDefault();
    });

    document.addEventListener("mousedown", function (e) {

        evt = e || window.event;

        if (e.ctrlKey) return;
        if (fullscreenImageIsOpen == true) return;

        if (configs.debugMode)
            console.log('Pushed button ' + evt.button.toString());

        if (configs.openCircleOn == 'longLeftClick') {
            if (evt.button == 0) {
                timerForLongLeftClick = setTimeout(function () { processAndShowCircle(e); }, configs.delayForLongLeftClick);
            } else return;
        } else
            if ("buttons" in evt) {

                /// Right click
                // if (evt.button == 2) {
                if (evt.buttons == 2) {
                    if (leftClickIsHolded) return;

                    processAndShowCircle(e);
                } else if (evt.buttons == 3) {
                    rocketButtonPressed = 0;

                    /// Left click
                    if (circleIsShown) {
                        e.preventDefault();
                        hideCircle();

                        if (configs.debugMode) console.log('Rocker gesture recognized!');
                        let actionToPerform = configs[typeOfMenu]['rockerLeftClick'];
                        triggerButtonAction(actionToPerform);
                    } else {
                        leftClickIsHolded = true;
                    }
                } else if (evt.buttons == 6) {
                    rocketButtonPressed = 6;

                    /// Middle click
                    if (circleIsShown) {
                        e.preventDefault();
                        hideCircle();

                        if (configs.debugMode) console.log('Rocker gesture recognized!');
                        let actionToPerform = configs[typeOfMenu]['rockerMiddleClick'];
                        triggerButtonAction(actionToPerform);
                    } else {
                        leftClickIsHolded = true;
                    }
                } else {
                    // if (configs.debugMode) console.log('CMG recognized button action ' + evt.buttons.toString());
                }
            }
    });


    document.addEventListener("mouseup", function (e) {

        evt = e || window.event;

        if (configs.openCircleOn == 'longLeftClick') {
            if (evt.button == 0) {
                if (circleIsShown == true)
                    hideCircle();
                else
                    try {
                        clearTimeout(timerForLongLeftClick);
                    } catch (err) {
                        if (configs.debugMode) console.log(err);
                    }
            } else return;
        } else if ("buttons" in evt) {
            // if (configs.debugMode)
            //     console.log('Released button ' + evt.button.toString());
            /// Left click
            if (evt.button == 0) {
                leftClickIsHolded = false;
                if (circleIsShown == false) return;
                hideCircle();
            } else if (evt.button == 2) {
                /// Right click

                if (circleIsShown == false) return;
                let keys = Object.keys(selectedButtons);
                for (var i = 0; i < keys.length; i++) {
                    let key = keys[i];
                    if (selectedButtons[key] !== null && selectedButtons[key] !== undefined) {
                        anyButtonIsSelected = true;
                        break;
                    }
                }

                if (anyButtonIsSelected == false) {
                    /// Leave circle open (like a context menu) - or hide it
                    if (configs.hideCircleIfNoActionSelected) {
                        hideCircle();
                    }

                } else hideCircle();
            }
        }
    });


    if (configs.openCircleOn == 'longLeftClick')
        document.addEventListener('mousemove', function (e) {
            if (e.button == 0) {

                if (circleIsShown) {
                    e.preventDefault();
                }
                else
                    clearTimeout(timerForLongLeftClick);
            }
        });

    document.addEventListener('wheel', checkScrollDirection);

    /// Listener to highlight hovered elements
    var prevHoveredDomElement = null;   // previous dom that we want to track, so we can remove the previous styling

    if (configs.highlightElementOnHover)
        document.addEventListener('DOMContentLoaded', function () {

            // Mouse listener for any move event on the current document.

            // Unique ID for the classNames
            var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';
            var MOUSE_VISITED_CLASSNAME_IMAGE = 'crx_mouse_visited_img';
            var MOUSE_VISITED_CLASSNAME_INPUT = 'crx_mouse_visited_input';
            var MOUSE_VISITED_CLASSNAME_PLAYER = 'crx_mouse_visited_player';

            document.body.style.setProperty('--cmg-link-color', configs['linkMenu'].color);
            document.body.style.setProperty('--cmg-img-color', configs['imageMenu'].color);
            document.body.style.setProperty('--cmg-input-color', configs['textFieldMenu'].color);
            document.body.style.setProperty('--cmg-player-color', configs['playerMenu'].color);

            document.addEventListener('mousemove', function (e) {

                if (fullscreenImageIsOpen && prevHoveredDomElement !== null) {
                    prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME_IMAGE);
                    return;
                }

                var el = document.elementFromPoint(e.clientX, e.clientY);

                if (el == null || el == undefined || el.tagName == 'CANVAS' || circleIsShown == true) return;

                // if (srcElement.nodeName == 'IMG') {
                if (el.tagName == 'IMG') {

                    if (prevHoveredDomElement != null) {
                        prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME_IMAGE);
                    }

                    // Add a visited class name to the element. So we can style it.
                    // srcElement.classList.add(MOUSE_VISITED_CLASSNAME_IMAGE);
                    el.classList.add(MOUSE_VISITED_CLASSNAME_IMAGE);
                    // prevDOM = srcElement;

                    prevHoveredDomElement = el;


                } else
                    if (el.tagName == 'A' || el.parentNode.tagName == 'A') {
                        if (prevHoveredDomElement != null) {
                            prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME);
                        }

                        // srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
                        if (!el.classList.contains(MOUSE_VISITED_CLASSNAME_IMAGE))
                            el.classList.add(MOUSE_VISITED_CLASSNAME);

                        // prevDOM = srcElement;
                        prevHoveredDomElement = el;
                    } else if (
                        (el.tagName === "INPUT" ||
                            el.tagName === "TEXTAREA" ||
                            el.getAttribute('contenteditable') !== null)
                        && el.getAttribute('type') !== 'checkbox'
                        && el.getAttribute('type') !== 'range'
                        && el.getAttribute('type') !== 'color'
                    ) {
                        if (prevHoveredDomElement != null) {
                            prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME_INPUT);
                        }

                        // srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
                        el.classList.add(MOUSE_VISITED_CLASSNAME_INPUT);

                        // prevDOM = srcElement;
                        prevHoveredDomElement = el;
                    } else if (
                        el.tagName === "AUDIO" ||
                        el.tagName === "VIDEO") {
                        if (prevHoveredDomElement != null) {
                            prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME_PLAYER);
                        }

                        // srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
                        el.classList.add(MOUSE_VISITED_CLASSNAME_PLAYER);

                        // prevDOM = srcElement;
                        prevHoveredDomElement = el;
                    }
                    else {
                        if (prevHoveredDomElement != null) {
                            prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME);
                            prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME_IMAGE);
                            prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME_INPUT);
                            prevHoveredDomElement.classList.remove(MOUSE_VISITED_CLASSNAME_PLAYER);
                        }
                    }
            }, false);

        })

}


function checkScrollDirection(event) {

    /// Reset stored previous scroll position
    if (configs.storeCurrentScrollPosition && Object.keys(previousScrollPosition).length > 0)
        previousScrollPosition = {};

    if (circleIsShown == false) return;

    if (checkScrollDirectionIsUp(event)) {
        triggerButtonAction(configs[typeOfMenu].mouseWheelUpAction);
    } else {
        triggerButtonAction(configs[typeOfMenu].mouseWheelDownAction);
    }
    hideCircle();
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

function processAndShowCircle(e) {
    anyButtonIsSelected = false;

    if (circle !== null && circle !== undefined) {
        hideCircle();
        return;
    }

    e.preventDefault();

    selectedButtons = {};
    rocketButtonPressed = null;

    if (configs.debugMode)
        if (configs.debugMode) console.log('Showing mouse gestures circle...');
    var el = document.elementFromPoint(e.clientX, e.clientY);
    elementUnderCursor = el;

    if (el.tagName == 'IMG') {
        /// Image is hovered
        typeOfMenu = 'imageMenu';
        hoveredLink = el.getAttribute('src');
    } else if (el.tagName == 'VIDEO' || el.tagName == 'AUDIO') {
        /// html-5 videoplayer is hovered
        typeOfMenu = 'playerMenu';
        let fileLink = el.getAttribute('src');
        if (fileLink == null) {
            try {
                fileLink = el.querySelector('source').getAttribute('src');
            } catch (e) { if (configs.debugMode) console.log(e); }
        }
        hoveredLink = fileLink.replaceAll('blob:', '');

        // hoveredLink = window.location.href;
    }
    else if (el.tagName == 'A' || el.parentNode.tagName == 'A'
        // || el.firstChild.tagName == 'A'
    ) {
        /// Link is hovered
        typeOfMenu = 'linkMenu';
        hoveredLink = el.getAttribute('href') || el.getAttribute('data-url') || el.parentNode.getAttribute('href') || el.parentNode.getAttribute('data-url');
        hoveredLinkTitle = el.textContent.trim();
    } else if (
        (el.tagName === "INPUT" ||
            el.tagName === "TEXTAREA" ||
            el.getAttribute('contenteditable') !== null)
        && el.getAttribute('type') !== 'checkbox'
        && el.getAttribute('type') !== 'range'
        && el.getAttribute('type') !== 'color'
    ) {
        /// Text field is hovered

        if (window.getSelection) {
            textSelection = window.getSelection();
        } else if (document.selection) {
            textSelection = document.selection.createRange();
        } else {
            textSelection = null;
        }

        /// Special handling for Firefox (https://stackoverflow.com/questions/20419515/window-getselection-of-textarea-not-working-in-firefox)
        try {
            if (textSelection.toString() == '') {
                var ta = document.querySelector(':focus');
                if (ta !== null && ta.value !== undefined)
                    textSelection = ta.value.substring(ta.selectionStart, ta.selectionEnd);
            }
        } catch (e) { if (configs.debugMode) console.log(e) }

        typeOfMenu = 'textFieldMenu';
        hoveredLink = window.location.href;
        hoveredLinkTitle = null;

        el.focus({ preventScroll: false });
    }
    else {
        /// Text selection is hovered
        if (window.getSelection) {
            textSelection = window.getSelection();
        } else if (document.selection) {
            textSelection = document.selection.createRange();
        } else {
            textSelection = null;
        }

        if (configs.debugMode) console.log('text selection:');
        if (configs.debugMode) console.log(textSelection.toString());

        if (textSelection.toString() !== '' && isCoordinateWithinTextSelection(e.clientX, e.clientY)) {
            typeOfMenu = 'selectionMenu';
            hoveredLink = window.location.href;
            hoveredLinkTitle = null;
        } else {
            typeOfMenu = 'regularMenu';
            hoveredLink = configs.showLinkTooltipForPageItself ? window.location.href : null;
            hoveredLinkTitle = null;
        }
    }

    /// Behavior when no levels added or available
    let enabledLevelsCount = 0;
    for (var i = 0; i < configs[typeOfMenu].levels.length; i++) {
        if (configs[typeOfMenu].levels[i].enabled !== false) enabledLevelsCount += 1;
    }

    if (configs[typeOfMenu].levels == null || configs[typeOfMenu].levels.undefined || configs[typeOfMenu].levels.length == 0 || enabledLevelsCount == 0) {
        /// Fallback to regular menu

        if (configs.inactiveMenuBehavior == 'regularMenuFallback') {
            typeOfMenu = 'regularMenu';
            enabledLevelsCount = 0;
            for (var i = 0; i < configs[typeOfMenu].levels.length; i++) {
                if (configs[typeOfMenu].levels[i].enabled !== false) enabledLevelsCount += 1;
            }
            if (configs[typeOfMenu].levels == null || configs[typeOfMenu].levels.undefined || configs[typeOfMenu].levels.length == 0 || enabledLevelsCount == 0) {
                typeOfMenu = '';
            }
        } else {
            /// Do nothing
            typeOfMenu = '';
        }
    }

    if (configs.debugMode)
        try {
            if (configs.debugMode) console.log('hovered element:');
            if (configs.debugMode) console.log(el.tagName);
            if (configs.debugMode) console.log('parent element:');
            if (configs.debugMode) console.log(el.parentNode.tagName);
            if (configs.debugMode) console.log('child element:');
            if (configs.debugMode) console.log(el.firstChild);

        } catch (e) { if (configs.debugMode) console.log(e); }


    if (hoveredLink !== null) {
        ///  Attach current domain
        if (!hoveredLink.includes('://') && !hoveredLink.includes('data:image/')) {
            let splittedUrl = window.location.href.split('/');
            hoveredLink = splittedUrl[0] + '/' + splittedUrl[1] + '/' + splittedUrl[2] + '/' + hoveredLink;
        }
    }

    try {
        showCircle(e);
    } catch (err) { if (configs.debugMode) console.log(err); }
}

init();