const FOLDER_PATH = "Folder Path";

module.exports = {
    entry: async (QuickAdd, settings) => {
        const folderPath = settings[FOLDER_PATH];
        const file = QuickAdd.app.workspace.activeEditor.file
        const filePath = [folderPath, file.name].join("/")
        await QuickAdd.app.fileManager.renameFile(file, filePath)
    },
    settings: {
        name: "Move Current Note to Folder",
        author: "J.C.HengCott",
        options: {
            [FOLDER_PATH]: {
                type: "text",
                defaultValue: "",
                placeholder: "Your/Folder",
                description: "Paste path here.",
            }
        }
    },
};
