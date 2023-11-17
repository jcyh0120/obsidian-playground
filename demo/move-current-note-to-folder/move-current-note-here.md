# QuickAdd:  Move current note to target folder

## Try:

1. Open command palette
2. Run `QuickAdd: Demo Move note to Target Folder`
3. Check if [[move-current-note-here]] is in `demo/move-current-note-to-folder/target

## Reset:
- Move the [[move-current-note-here]] back to `demo/move-current-note-to-folder/target` folder.


## Add Your Own Command

![[demo-move-current-note-to-folder.gif]]

1. COPY `script/move-current-note-to-folder` to `user-script/your-command-name`
2. OPEN QuickAdd setting
	1. ADD macro with YOUR_MACRO_NAME
	2. CLICK thunder icon
	3. GOTO macro setting
		1. CLICK add icon
			1. SELECT your custom user script `user-script/your-command-name`
			2. ADD script to macro
			3. CLICK script setting
				1. SET your folder path
3. RELOAD Obsidian

Finally, OPEN command palette and run your custom command

NOTE:
> You can bind this command with hotkey you like.