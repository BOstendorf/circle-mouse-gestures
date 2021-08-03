#1.2.0
- Added option to open circle on long left click instead of right click (esp. useful on macbooks)
- Added "Link preview" feature, somewhat like in Safari on Mac
- Fixed zoom not working for fullscreen image view
- Fixed bugs in options page + improved labels

#1.1.4
- Small layout fixes and improvements

#1.1.3
- Fixed player fullscreen action

#1.1.2
- Fixed options layout for new Firefox update
- Added 'Print' action
- Background dimmer is now enabled by default
- Small layout fixes and improvements

#1.1.1
- Fixed issues with disabled levels
- Options layout fixes

#1.1.0
- Added new actions:
  * New private window
  * Open in private window
- Scroll actions can now work with embedded scrolling elements on page
- Previosly stored scrolled position is not cleared on wheel scroll
- "Open in new window" and "Open new window" actions now work for links
- Performance and animations improvements

#1.0.9
- Various improvements to pinned tabs functionality
- Changed icon for 'duplicate tab' action
- Fixed layout issues on some websites
- Added new actions:
  * New window
  * Close window
  * Open in new window
  * Move tab right
  * Move tab left

#1.0.8
- Added new actions:
  * Shrink page 
  * View image
  * Pin tab
  * Duplicate tab
  * Close other tabs
  * Playback speed actions (slower, faster etc)

- Implemented ability to change color for each action/segment
- Added ability to configure animation duration
- Redesigned settings page for better consistency
- Changed icons for 'go back' and 'go forward' actions
- Great performance optimizations

#1.0.7
- Improved 'scroll to bottom' action, so that it works on more websites
- Implemented 'scroll back' feature
- Better compatibility with contenteditable input fields
- Improved 'Call regular menu if no action selected' feature
- Improved overall smoothness of extension
- Implemented 'Select all' and 'Select more' actions
- Added support for middle button rocker gesture
- 'Copy image' action improved (still works bad on Firefox)
- Code refactored + small bug fixes and improvements

#1.0.6
- Improved link display in helper tooltip
- Improved 'copy image' functionality
- "Undo" and "Redo" actions are back (on Firefox will work only with 'contenteditable' fields)
- Added options 'Add shadow' and 'Highlight element on hover'
- Added ability to set different opacity for levels
- Added ability to configure page dimmer opacity

#1.0.5
- Added special menu for HTML5 players (video/audio)
- Implemented ability to configure behavior when element menu is not active (show regular menu/do nothing)
- Added 'Copy all text' action for input fields
- Added 'Copy image' action for image menu (for now works only if image is placed on domain which allows CORS)
- Removed 'Undo' and 'Redo' actions for now, as they work unreliably
- Various small fixes and improvements

#1.0.4
- Added circle opacity config
- Added 'Clear' action for input field menu
- Added 'Move caret to start' and 'Move caret to end' actions for input fields
- Added 'Undo' and 'Redo' actions for regular menu (doesn't work quite well yet)
- Fix for input field buttons being false-inactive on Firefox 
- Changed default buttons order and colors
- Fixed bug with screen shifting on focusing input

#1.0.3
- Added separate menu for input fields
- Added option in settings to disable helper tooltip
- Fix for link/image/text selection menus not showing up

#1.0.2
- Added option to show regular context menu if no action was selected
- Now link/image/text selection menus can be populated with regular menu actions
- It is now possible to deactive link/image/text selection menu by removing all of it's levels
- Improved options layout when window is not maximized
- Added few tooltips in options

#1.0.1
- Added switch for debug mode in settings
- Updated description
- Bug fixes

#1.0
- Initial release