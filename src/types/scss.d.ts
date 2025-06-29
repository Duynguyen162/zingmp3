// SCSS module
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

// CSS module
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

// SVG files
declare module '*.svg' {
    const content: string;
    export default content;
}

// PNG, JPG, ... (nếu dùng ảnh)
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// Audio, video (nếu cần)
declare module '*.mp3';
declare module '*.mp4';

// JSON files
declare module '*.json' {
    const value: any;
    export default value;
}
