// 支持的文件类型白名单
const ALLOWED_TYPES = {
    '.litematic': 'application/octet-stream',
    '.schematic': 'application/octet-stream',
    '.nbt': 'application/octet-stream',
    '.png': 'image/png',
    '.jpg': 'image/jpeg'
};

// 自动分类存储
function getTargetPath(filename) {
    const ext = path.extname(filename).toLowerCase();
    switch(ext) {
        case '.litematic': return 'litematics/';
        case '.schematic': return 'schematics/';
        case '.nbt': return 'nbt-files/';
        default: return 'others/';
    }
}