/// Supports Unicode symbols or SVG path values
const actionIcons = {
    'goBack': 'M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z',
    'goForward': 'M 6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12 Z',
    'newTab': 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
    'newWindow': 'M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zM21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z',
    'closeCurrentTab': 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
    'reloadTab': 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
    'copyUrl': 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    'copyLinkText': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    'copyText': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
    'openInFgTab': 'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
    'openInBgTab': 'M 5,19 V 5 l 14,0 v 7 h 2 V 5 C 21,3.89 20.1,3 19,3 L 5,3 C 3.9,3 3,3.89 3,5 v 14 c 0,1.1 0.9,2 2,2 h 7 v -2 z m 16,-5 h -2 v 3.59 L 9.17,7.76 7.76,9.17 17.59,19 H 14 v 2 h 7 z',
    'downloadUrlAs': 'M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z',
    'downloadVideo': 'M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z',
    'downloadVideoSavefromNet': 'M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z',
    'searchImageOnGoogle': `M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`,
    'searchText': `M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`,
    'translate': `M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z`,
    'scrollToTop': 'M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z',
    'scrollToBottom': 'M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z',
    'restoreClosedTab': 'M13 3c-4.97 0-9 4.03-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8z',
    'switchToPreviousTab': 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z',
    'switchToNextTab': 'M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z',
    'scrollPageUp': 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z',
    'scrollPageDown': 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    'pageZoomIn': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm.5-7H9v2H7v1h2v2h1v-2h2V9h-2z',
    'pageZoomOut': 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z',
    'toggleFullscreen': 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z',
    'untoggleFullscreen': 'M 20.41,9.59 18.11,7.29 21,4.42 19.58,3 16.71,5.89 14.41,3.59 v 6 z M 9.59,3.59 7.29,5.89 4.42,3 3,4.42 5.89,7.29 3.59,9.59 h 6 z m -6,10.82 2.3,2.3 L 3,19.58 4.42,21 l 2.87,-2.89 2.3,2.3 v -6 z m 10.82,6 2.3,-2.3 2.87,2.89 1.42,-1.42 -2.89,-2.87 2.3,-2.3 h -6 z',
    'playerFullScreen': 'M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z',
    'addToBookmarks': 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
    'noAction': ' ',
    'findOnPage': `M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`,
    'pasteText': `M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z`,
    'cutText': `M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3h-3z`,
    'selectAllText': `M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z`,
    'selectAll': `M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z`,
    'selectMore': `M 17,5 H 15 V 3 h 2 z m 4,16 V 15 L 18.71,17.29 16.41,15 15,16.41 17.29,18.7 15,21 Z M 19,9 h 2 V 7 h -2 z m 0,4 h 2 v -2 h -2 z m -8,8 h 2 V 19 H 11 Z M 7,5 H 9 V 3 H 7 Z M 3,17 H 5 V 15 H 3 Z m 2,4 V 19 H 3 c 0,1.1 0.9,2 2,2 z M 19,3 v 2 h 2 C 21,3.9 20.1,3 19,3 Z m -8,2 h 2 V 3 H 11 Z M 3,9 H 5 V 7 H 3 Z M 7,21 H 9 V 19 H 7 Z M 3,13 H 5 V 11 H 3 Z M 3,5 H 5 V 3 C 3.9,3 3,3.9 3,5 Z`,
    'clearInputField': 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z',
    'undoAction': 'M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z',
    'redoAction': 'M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z',
    'moveCaretToStart': 'M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z',
    'moveCaretToEnd': 'M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z',
    'copyAllText': 'M18,2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,16H9V4h9V16z M3,15v-2h2v2H3z M3,9.5h2v2H3V9.5z M10,20h2v2h-2V20z M3,18.5v-2h2v2H3z M5,22c-1.1,0-2-0.9-2-2h2V22z M8.5,22h-2v-2h2V22z M13.5,22L13.5,22l0-2h2 v0C15.5,21.1,14.6,22,13.5,22z M5,6L5,6l0,2H3v0C3,6.9,3.9,6,5,6z',
    'copyImage': 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zM8 21V7h6v5h5v9H8z',
    'playPauseVideo': 'M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M9.5,16.5l7-4.5l-7-4.5V16.5z',
    'playVideo': 'M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M9.5,16.5l7-4.5l-7-4.5V16.5z',
    'pauseVideo': 'M6 19h4V5H6v14zm8-14v14h4V5h-4z',
    'replayVideo': 'M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z',
    'rewindVideo': 'M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.1 11h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.76c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z',
    'fastForwardVideo': ' M18,13c0,3.31-2.69,6-6,6s-6-2.69-6-6s2.69-6,6-6v4l5-5l-5-5v4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8H18z M11.5 15.5h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.76c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z',
    'openImageFullscreen': 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z',
    'textTooLong': 'm 5,8 v 3 H 1 v 2 h 4 v 3 l 4,-4 z m 14,8 v -3 h 4 V 11 H 19 V 8 l -4,4 z M 13,4 h -2 v 16 h 2 z',
    'textTooLongReverse': 'm 4.4777483,7.9760093 v 2.9999997 h 4 v 2 h -4 v 3 l -3.99999993,-4 z M 19.512296,16.000299 v -3 h -4 v -2 h 4 V 8.0002994 l 4,3.9999996 z M 13,4 h -2 v 16 h 2 z',
    'scrollBackBottom': 'm 19.950202,0.06234586 c -2.217693,0 -4.015942,1.79824954 -4.015942,4.01594114 h -1.338647 l 1.735778,1.7357801 0.03123,0.062476 1.802712,-1.7982488 h -1.338646 c 0,-1.7268567 1.396654,-3.12351074 3.12351,-3.12351074 1.726855,0 3.123509,1.39665404 3.123509,3.12351074 0,1.7268544 -1.396654,3.1235088 -3.123509,3.1235088 -0.861197,0 -1.642074,-0.3525099 -2.204307,-0.9192044 l -0.633621,0.6336267 c 0.727332,0.7273323 1.726855,1.17801 2.837934,1.17801 2.217692,0 4.015941,-1.7982488 4.015941,-4.0159411 0,-2.2176927 -1.798249,-4.01594203 -4.015941,-4.01594203 z M 19.503986,2.2934238 V 4.5245037 L 21.400403,5.648967 21.743989,5.0778115 20.17331,4.1452204 V 2.2934238 Z M 8,13 h 3 V 3 h 2 v 10 h 3 l -4,4 z m -4,6 v 2 h 16 v -2 z',
    'scrollBackTop': 'm 19.950202,0.06234586 c -2.217693,0 -4.015942,1.79824954 -4.015942,4.01594114 h -1.338647 l 1.735778,1.7357801 0.03123,0.062476 1.802712,-1.7982488 h -1.338646 c 0,-1.7268567 1.396654,-3.12351074 3.12351,-3.12351074 1.726855,0 3.123509,1.39665404 3.123509,3.12351074 0,1.7268544 -1.396654,3.1235088 -3.123509,3.1235088 -0.861197,0 -1.642074,-0.3525099 -2.204307,-0.9192044 l -0.633621,0.6336267 c 0.727332,0.7273323 1.726855,1.17801 2.837934,1.17801 2.217692,0 4.015941,-1.7982488 4.015941,-4.0159411 0,-2.2176927 -1.798249,-4.01594203 -4.015941,-4.01594203 z M 19.503986,2.2934238 V 4.5245037 L 21.400403,5.648967 21.743989,5.0778115 20.17331,4.1452204 V 2.2934238 Z M 16,7 H 13 V 17 H 11 V 7 H 8 L 12,3 Z M 4,19 v 2 h 16 v -2 z',
    'normalPlaybackSpeed': 'm 10.59,15.41 a 2,2 0 0 0 2.83,0 l 5.66,-8.49 -8.49,5.66 a 2,2 0 0 0 0,2.83 z m 9.79,-6.84 -1.23,1.85 A 8,8 0 0 1 18.93,18 H 5.07 A 8,8 0 0 1 15.58,6.85 L 17.43,5.62 A 10,10 0 0 0 3.35,19 2,2 0 0 0 5.07,20 H 18.92 A 2,2 0 0 0 20.66,19 10,10 0 0 0 20.39,8.56 Z',
    'slowerPlaybackSpeed': 'M18 9.86v4.28L14.97 12 18 9.86m-9 0v4.28L5.97 12 9 9.86M20 6l-8.5 6 8.5 6V6zm-9 0l-8.5 6 8.5 6V6z',
    'fasterPlaybackSpeed': 'M15,9.86L18.03,12L15,14.14V9.86 M6,9.86L9.03,12L6,14.14V9.86 M13,6v12l8.5-6L13,6L13,6z M4,6v12l8.5-6L4,6L4,6z',
    'closeAllTabsExceptCurrent': 'M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z',
    'boldText': 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z',
    'italicText': 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z',
    'underlineText': 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z',
    'strikeText': 'M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z',
    'duplicateTab': 'M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z',
    'pinTab': 'M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z',
    'unpinTab': 'm 23.047496,16.785213 -0.711249,-0.711249 -2.819776,2.819775 -2.819776,-2.819775 -0.71125,0.711249 2.819777,2.819775 -2.819777,2.819777 0.71125,0.711249 2.819776,-2.819777 2.819776,2.819777 0.711249,-0.711249 -2.819776,-2.819777 z M 14,4 v 5 c 0,1.12 0.37,2.16 1,3 H 9 c 0.65,-0.86 1,-1.9 1,-3 V 4 h 4 M 17,2 H 7 C 6.45,2 6,2.45 6,3 6,3.55 6.45,4 7,4 7,4 7,4 7,4 h 1 v 5 c 0,1.66 -1.34,3 -3,3 v 2 h 5.97 v 7 l 1,1 1,-1 V 14 H 19 v -2 c 0,0 0,0 0,0 -1.66,0 -3,-1.34 -3,-3 V 4 h 1 c 0,0 0,0 0,0 0.55,0 1,-0.45 1,-1 0,-0.55 -0.45,-1 -1,-1 z',
    'moveToNewWindow': 'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2zm-8 7V7h-2v3H8v2h3v3h2v-3h3v-2h-3zm11 8l-4.5 4.5L18 21l3-3-3-3 1.5-1.5L24 18z',
    'moveTabRight': 'M 6,16 H 4 V 8 H 6 Z M 16.01,11 H 8 v 2 h 8.01 v 3 L 20,12 16.01,8 Z',
    'moveTabLeft': 'm 18,8 h 2 v 8 H 18 Z M 7.99,13 H 16 V 11 H 7.99 V 8 L 4,12 7.99,16 Z',
    'closeWindow': 'M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-7v2H8v-2h8z',
    'print': 'M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z',
    'newPrivateWindow': 'm 20.137067,14.378581 v 2.310659 h -2.283071 v 1.888104 h 2.283071 v 2.31066 h 1.865561 v -2.31066 h 2.28307 V 16.68924 h -2.28307 V 14.378581 Z M 12.22338,10.011129 c -1.803649,0 -3.5622075,0.405821 -5.1854922,1.262554 H 17.363781 C 15.740497,10.41695 14.02703,10.011129 12.22338,10.011129 Z m 2.344745,1.758558 c -0.766551,0 -1.397828,0.496004 -1.623285,1.172372 -0.450912,-0.135274 -0.856733,-0.135274 -1.262554,-0.04509 -0.270548,-0.631276 -0.856733,-1.082188 -1.623285,-1.082188 -0.9469161,0 -1.7134671,0.766551 -1.7134671,1.713466 0,0.946917 0.766551,1.713467 1.7134671,1.713467 0.946916,0 1.713467,-0.76655 1.713467,-1.713467 v -0.180365 c 0.36073,-0.09018 0.72146,-0.04509 1.08219,0.09018 v 0.135275 c 0,0.946915 0.766551,1.713466 1.713467,1.713466 0.946916,0 1.713467,-0.766551 1.713467,-1.713466 0,-0.992008 -0.766551,-1.803651 -1.713467,-1.80365 z m -3.24657,1.758558 c 0,0.721461 -0.586185,1.262555 -1.262554,1.262555 -0.7214599,0 -1.2625548,-0.586186 -1.2625548,-1.262555 0,-0.676368 0.5861862,-1.262554 1.2625548,-1.262554 0.541095,0 0.992008,0.315639 1.172372,0.76655 0.04509,0.135275 0.09018,0.270547 0.09018,0.496004 0,-0.04509 0,-0.04509 0,0 z m 3.24657,1.262555 c -0.72146,0 -1.262555,-0.586186 -1.262555,-1.262555 0,-0.676368 0.586186,-1.262554 1.262555,-1.262554 0.676369,0 1.262555,0.586186 1.262555,1.262554 0,0.676369 -0.586186,1.262555 -1.262555,1.262555 z m 0,-8.792792 L 11.501921,6.4940123 10.01391,5.998008 9.0219024,9.0191218 H 15.560131 Z M 21,3 H 3 C 1.89,3 1,3.89 1,5 v 12 c 0,1.1 0.89,2 2,2 h 5 v 2 h 8 V 19 L 16.711702,18.9777 16.693732,17.033846 3,17 V 5 H 21 L 20.9953,13.09789 22.948319,13.07541 23,5 C 23.0071,3.8900227 22.1,3 21,3 Z',
    'openInPrivateWindow': 'm 12.184992,10.05316 c -1.796686,0 -3.5484526,0.404254 -5.1654674,1.257677 H 17.305539 C 15.688524,10.457414 13.981676,10.05316 12.184992,10.05316 Z m 2.335689,1.751765 c -0.763593,0 -1.392432,0.494089 -1.617017,1.167844 -0.449171,-0.134751 -0.853425,-0.134751 -1.257679,-0.04492 -0.269503,-0.628838 -0.853424,-1.07801 -1.617015,-1.07801 -0.9432602,0 -1.7068501,0.763592 -1.7068501,1.70685 0,0.943259 0.7635899,1.706849 1.7068501,1.706849 0.94326,0 1.70685,-0.76359 1.70685,-1.706849 v -0.179667 c 0.359337,-0.08983 0.718673,-0.04491 1.078009,0.08983 v 0.134749 c 0,0.943259 0.763591,1.706849 1.706852,1.706849 0.943257,0 1.706849,-0.76359 1.706849,-1.706849 0,-0.988176 -0.763592,-1.796684 -1.706849,-1.796684 z m -3.234032,1.751767 c 0,0.718674 -0.583921,1.257679 -1.257679,1.257679 -0.7186742,0 -1.2576796,-0.583923 -1.2576796,-1.257679 0,-0.673754 0.5839227,-1.257678 1.2576796,-1.257678 0.539005,0 0.988176,0.314419 1.167845,0.76359 0.04492,0.134752 0.08983,0.269503 0.08983,0.494088 0,-0.04491 0,-0.04491 0,0 z m 3.234032,1.257679 c -0.718675,0 -1.25768,-0.583923 -1.25768,-1.257679 0,-0.673754 0.583922,-1.257678 1.25768,-1.257678 0.673755,0 1.257678,0.583924 1.257678,1.257678 0,0.673756 -0.583923,1.257679 -1.257678,1.257679 z m 0,-8.7588317 -3.054364,0.494088 L 9.9840531,6.0555393 8.9958763,9.0649837 H 15.508855 Z M 21,3 H 3 C 1.89,3 1,3.89 1,5 v 12 c 0,1.1 0.89,2 2,2 h 5 v 2 h 8 v -2 h 2 V 17 H 3 V 5 h 18 v 8 h 2 V 5 C 23,3.89 22.1,3 21,3 Z m 3,15 -4.5,4.5 -1.5,-1.5 3,-3 -3,-3 1.5,-1.5 z',
    'inspectPage': 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    'mutePlayer': 'M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z',
    'increasePlayerVolume': 'M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z',
    'decreasePlayerVolume': 'M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02 0-1.77-1.02-3.29-2.5-4.03zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z',
    'openLinkPreview': 'M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M12,10.5 c1.84,0,3.48,0.96,4.34,2.5c-0.86,1.54-2.5,2.5-4.34,2.5S8.52,14.54,7.66,13C8.52,11.46,10.16,10.5,12,10.5 M12,9 c-2.73,0-5.06,1.66-6,4c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9L12,9z M12,14.5c-0.83,0-1.5-0.67-1.5-1.5 s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S12.83,14.5,12,14.5z',
    'openUrl': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z',
    'showTabSwitcherVertical': 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z',
    'showTabSwitcherHorizontal': 'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z',
};



const helperTooltipIcons = {
    'linkMenu': 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    'imageMenu': 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z',
    'playerMenu': 'M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M9.5,16.5l7-4.5l-7-4.5V16.5z',
    'selectionMenu': 'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z',
    'textFieldMenu': 'M19 2h-4.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z'
};